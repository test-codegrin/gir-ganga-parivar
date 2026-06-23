import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const key = process.env.EASEBUZZ_KEY;
    const salt = process.env.EASEBUZZ_SALT;
    const env = process.env.EASEBUZZ_ENV;

    if (env !== "production" && env !== "sandbox") {
      console.error("Easebuzz environment is not configured correctly in environment variables.");
      return NextResponse.json(
        { status: 0, error: "Payment gateway environment is not configured correctly." },
        { status: 500 }
      );
    }

    const isProduction = env === "production";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    if (!key || !salt) {
      console.error("Easebuzz configurations are missing in environment variables.");
      return NextResponse.json(
        { status: 0, error: "Payment gateway is not properly configured." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const {
      amount,
      title,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      pinCode,
    } = body;

    // Validate request inputs
    if (!amount || !firstName || !email || !phone) {
      return NextResponse.json(
        { status: 0, error: "Missing required billing details." },
        { status: 400 }
      );
    }

    // Format amount to 2 decimal places as required by Easebuzz
    const formattedAmount = Number(amount).toFixed(2);

    // Sanitize product info (alphanumeric only, max 100 characters)
    const sanitizedTitle = String(title || "Donation")
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .substring(0, 100)
      .trim();

    // Generate a unique transaction ID
    const txnid = `TXN${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;

    // Map address variables to user-defined fields (UDFs) for callback reconciliation
    const udf1 = lastName || "";
    const udf2 = address || "";
    const udf3 = city || "";
    const udf4 = state || "";
    const udf5 = pinCode || "";

    // SURL and FURL endpoints on our server (callbacks handle browser redirect)
    const surl = `${baseUrl}/api/payment/callback`;
    const furl = `${baseUrl}/api/payment/callback`;

    // Construct the Hash String using the standard Easebuzz sequence:
    // sha512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt)
    const hashSequence = [
      key,
      txnid,
      formattedAmount,
      sanitizedTitle,
      firstName,
      email,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
      "", // udf6
      "", // udf7
      "", // udf8
      "", // udf9
      "", // udf10
      salt,
    ];

    const hashString = hashSequence.join("|");
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // Select the correct endpoint based on environment
    const endpoint = isProduction
      ? "https://pay.easebuzz.in/payment/initiateLink"
      : "https://testpay.easebuzz.in/payment/initiateLink";

    // Format request body as URL-encoded fields
    const formParams = new URLSearchParams({
      key,
      txnid,
      amount: formattedAmount,
      productinfo: sanitizedTitle,
      firstname: firstName,
      email,
      phone,
      surl,
      furl,
      hash,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
      address1: udf2,
      city: udf3,
      state: udf4,
      zipcode: udf5,
      country: "India",
    });

    console.log(`Initiating Easebuzz payment [${txnid}] via ${endpoint}`);

    // Call Easebuzz Server API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    });

    if (!response.ok) {
      console.error(`Easebuzz initiation API responded with HTTP status ${response.status}`);
      return NextResponse.json(
        { status: 0, error: "Failed to communicate with the payment server." },
        { status: 502 }
      );
    }

    const result = await response.json();

    if (result.status === 1) {
      return NextResponse.json({
        status: 1,
        access_key: result.data,
        env: isProduction ? "production" : "sandbox",
      });
    } else {
      console.error("Easebuzz initiation error:", result.data);
      return NextResponse.json(
        { status: 0, error: result.data || "Initiation failed." },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Payment initiation exception:", error);
    return NextResponse.json(
      { status: 0, error: "Internal server error." },
      { status: 500 }
    );
  }
}

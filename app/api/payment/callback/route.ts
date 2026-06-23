import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const salt = process.env.EASEBUZZ_SALT;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    if (!salt) {
      console.error("EASEBUZZ_SALT is not configured.");
      const failUrl = `${baseUrl}/checkout/failure?reason=${encodeURIComponent("Payment gateway salt configuration is missing.")}`;
      return NextResponse.redirect(failUrl, { status: 303 });
    }

    // Parse URL-encoded form data sent by Easebuzz
    const formData = await req.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Easebuzz callback received payload:", {
      txnid: data.txnid,
      status: data.status,
      easepayid: data.easepayid,
      amount: data.amount,
      firstname: data.firstname,
    });

    const receivedHash = data.hash;
    const status = data.status || "";
    const key = data.key || "";
    const txnid = data.txnid || "";
    const amount = data.amount || "";
    const productinfo = data.productinfo || "";
    const firstname = data.firstname || "";
    const email = data.email || "";

    const udf1 = data.udf1 || "";
    const udf2 = data.udf2 || "";
    const udf3 = data.udf3 || "";
    const udf4 = data.udf4 || "";
    const udf5 = data.udf5 || "";
    const udf6 = data.udf6 || "";
    const udf7 = data.udf7 || "";
    const udf8 = data.udf8 || "";
    const udf9 = data.udf9 || "";
    const udf10 = data.udf10 || "";

    // Reverse SHA-512 verification formula:
    // sha512(salt|status|udf10|udf9|udf8|udf7|udf6|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key)
    const hashSequence = [
      salt,
      status,
      udf10,
      udf9,
      udf8,
      udf7,
      udf6,
      udf5,
      udf4,
      udf3,
      udf2,
      udf1,
      email,
      firstname,
      productinfo,
      amount,
      txnid,
      key,
    ];

    const hashString = hashSequence.join("|");
    const calculatedHash = crypto.createHash("sha512").update(hashString).digest("hex");

    if (calculatedHash.toLowerCase() !== receivedHash?.toLowerCase()) {
      console.error("Easebuzz callback signature mismatch! Potential security spoofing.");
      const failUrl = `${baseUrl}/checkout/failure?txnid=${txnid}&reason=Signature verification failed`;
      // Use 303 Redirect to force browser to do a GET request
      return NextResponse.redirect(failUrl, { status: 303 });
    }

    if (status === "success") {
      console.log(`Payment successful for transaction ${txnid}`);
      const successUrl = `${baseUrl}/checkout/success?txnid=${txnid}&amount=${amount}&firstname=${firstname}&email=${encodeURIComponent(data.email || "")}&phone=${encodeURIComponent(data.phone || "")}`;
      return NextResponse.redirect(successUrl, { status: 303 });
    } else {
      console.log(`Payment failed for transaction ${txnid} with status ${status}`);
      const errorMessage = data.error_Message || status || "Payment declined";
      const failUrl = `${baseUrl}/checkout/failure?txnid=${txnid}&reason=${encodeURIComponent(errorMessage)}`;
      return NextResponse.redirect(failUrl, { status: 303 });
    }
  } catch (error) {
    console.error("Error handling Easebuzz payment callback:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/checkout/failure?reason=Callback processing error`, { status: 303 });
  }
}

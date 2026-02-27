"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import type * as LeafletType from "leaflet";
import SmoothScroll from "../../Component/SmothScrolling";

// Dynamic Import (Next.js SSR Fix)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false },
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false },
);

const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});

const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

// DATA

const LAKES = [
  { id: 1, lat: 22.32, lng: 70.68, name: "Aji Dam Lake" },
  { id: 2, lat: 22.48, lng: 70.62, name: "Nyari Lake" },
  { id: 3, lat: 22.55, lng: 70.55, name: "Paddhari Lake" },
  { id: 4, lat: 22.45, lng: 70.42, name: "Jamnagar Road Lake" },
  { id: 5, lat: 22.38, lng: 70.48, name: "Kalavad Lake" },
  { id: 6, lat: 22.28, lng: 70.52, name: "Lodhika Lake" },
  { id: 7, lat: 22.25, lng: 70.45, name: "SH323 Lake 1" },
  { id: 8, lat: 22.24, lng: 70.47, name: "SH323 Lake 2" },
  { id: 9, lat: 22.3, lng: 70.82, name: "East Lake 1" },
  { id: 10, lat: 22.31, lng: 70.8, name: "East Lake 2" },
  { id: 11, lat: 22.33, lng: 70.83, name: "Cholaa Lake" },
];

const CHECK_DAMS = [
  { id: 1, lat: 22.305, lng: 70.78, name: "Check Dam 1" },
  { id: 2, lat: 22.315, lng: 70.79, name: "Check Dam 2" },
  { id: 3, lat: 22.295, lng: 70.785, name: "Check Dam 3" },
  { id: 4, lat: 22.32, lng: 70.77, name: "Check Dam 4" },
];

export default function GirgangaMap() {
  const [L, setL] = useState<typeof LeafletType | null>(null);
  const [showCategories, setShowCategories] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      const leafletLib = leaflet.default;

      // Default Marker Fix

      const DefaultIcon = leafletLib.icon({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      leafletLib.Marker.prototype.options.icon = DefaultIcon;

      setL(leafletLib);
    });
  }, []);

  if (!L) {
    return (
      <div className="h-[560px] flex items-center justify-center">
        Loading Map...
      </div>
    );
  }

  // Custom Flag Icon

  const createFlagIcon = (color = "red") => {
    return L.divIcon({
      html: `

<svg width="24" height="32">

<rect x="2" y="0" width="3" height="32" fill="${color}" />

<polygon points="5,1 20,7 5,13" fill="${color}" />

</svg>

`,

      iconSize: [24, 32],
      iconAnchor: [2, 32],
    });
  };

  const lakeIcon = createFlagIcon("#8B1A1A");
  const damIcon = createFlagIcon("#6B0F0F");

  return (
    <>
      <SmoothScroll>
        <div className="flex flex-col items-center bg-white min-h-screen p-4">
          <h1 className="text-5xl font-bold text-emerald-600 mb-4">
            Structures Created by Girganga Parivar Trust
          </h1>

          <div className="relative w-full max-w-6xl h-[560px] border rounded shadow">
            <MapContainer
              center={[22.35, 70.65]}
              zoom={10}
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {/* Lakes */}

              {LAKES.map((lake) => (
                <Marker
                  key={lake.id}
                  position={[lake.lat, lake.lng]}
                  icon={lakeIcon}
                >
                  <Popup>{lake.name}</Popup>
                </Marker>
              ))}

              {/* Checkdams */}

              {CHECK_DAMS.map((dam) => (
                <Marker
                  key={dam.id}
                  position={[dam.lat, dam.lng]}
                  icon={damIcon}
                >
                  <Popup>{dam.name}</Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* Search */}

            <div className="absolute top-3 left-12 z-[1000]">
              <input
                type="text"
                placeholder="Type here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 border rounded bg-white"
              />
            </div>

            {/* Categories */}

            {showCategories && (
              <div className="absolute top-3 right-3 z-[1000] bg-white shadow rounded w-56">
                <div className="bg-sky-400 text-white text-center py-2">
                  Categories
                </div>

                <div className="flex justify-between px-4 py-3 border-b">
                  Lake (11) 🚩
                </div>

                <div className="flex justify-between px-4 py-3">
                  Check Dam (4) 🚩
                </div>

                <div className="text-center py-2">
                  <button
                    onClick={() => setShowCategories(false)}
                    className="bg-black text-white px-4 py-1 rounded"
                  >
                    Hide
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}

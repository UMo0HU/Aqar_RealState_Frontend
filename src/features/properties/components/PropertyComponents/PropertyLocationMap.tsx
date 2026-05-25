import type { FC } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MAPBOX_ATTRIBUTION, MAPBOX_TILE_URL } from "@/utils/map";

interface Props {
  latitude?:  number;
  longitude?: number;
  location:   string;
}

const PropertyLocationMap: FC<Props> = ({ latitude, longitude, location }) => {
  const hasCoords = latitude != null && longitude != null;

  const googleMapsUrl = hasCoords
    ? `https://www.google.com/maps?q=${latitude},${longitude}`
    : `https://www.google.com/maps/search/${encodeURIComponent(location)}`;

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      {/* Header — stacks vertically on mobile, side-by-side from sm up */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold">Location</h2>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-dark-knight bg-amber-300 hover:bg-amber-400 transition px-3 py-1.5 rounded-lg cursor-pointer w-fit"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Open in Google Maps
        </a>
      </div>

      {/* Address */}
      <p className="px-6 py-2 text-sm text-gray-500">{location}</p>

      {/* Map */}
      {hasCoords ? (
        <div className="h-[280px] border-t border-gray-100">
          <MapContainer
            center={[latitude!, longitude!]}
            zoom={15}
            className="h-full w-full"
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
            keyboard={false}
            zoomControl={false}
          >
            <TileLayer
              url={MAPBOX_TILE_URL}
              attribution={MAPBOX_ATTRIBUTION}
              tileSize={512}
              zoomOffset={-1}
            />
            <Marker position={[latitude!, longitude!]} />
          </MapContainer>
        </div>
      ) : (
        <div
          className="h-[200px] bg-gray-100 flex flex-col items-center justify-center gap-3 cursor-pointer group"
          onClick={() => window.open(googleMapsUrl, "_blank")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-gray-300 group-hover:text-gray-400 transition">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <p className="text-sm text-gray-400 group-hover:text-gray-600 transition font-medium">
            Click to search location on Google Maps
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyLocationMap;

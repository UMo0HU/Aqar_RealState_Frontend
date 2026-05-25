import { useState, useCallback, useEffect, type FC } from "react"
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet"
import { MAPBOX_ATTRIBUTION, MAPBOX_TILE_URL, reverseGeocode } from "@/utils/map"

interface Props {
  initialCenter: [number, number]
  selectedPosition?: [number, number] | null
  onLocationSelect: (lat: number, lng: number, address: string) => void
}

// ─── Moves the map to a new center ───────────────────────────────────────────
const MapFlyTo: FC<{ position: [number, number] | null }> = ({ position }) => {
  const map = useMap()

  useEffect(() => {
    if (position) {
      map.flyTo(position, 15)
    }
  }, [map, position?.[0], position?.[1]])

  return null
}

// ─── Click handler ────────────────────────────────────────────────────────────
const ClickHandler: FC<{ onMapClick: (lat: number, lng: number) => void }> = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

// ─── Main Component ───────────────────────────────────────────────────────────
const MapPicker: FC<Props> = ({ initialCenter, selectedPosition = null, onLocationSelect }) => {
  const [marker, setMarker] = useState<[number, number] | null>(null)
  const [flyTo, setFlyTo] = useState<[number, number] | null>(null)
  const [loading, setLoading] = useState(false)
  const [locating, setLocating] = useState(false)
  const [geoError, setGeoError] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedPosition) return

    setMarker(selectedPosition)
    setFlyTo(selectedPosition)
  }, [selectedPosition?.[0], selectedPosition?.[1]])

  const handleSelect = useCallback(async (lat: number, lng: number) => {
    setMarker([lat, lng])
    setLoading(true)
    const address = await reverseGeocode(lat, lng)
    onLocationSelect(lat, lng, address)
    setLoading(false)
  }, [onLocationSelect])

  const handleMapClick = useCallback((lat: number, lng: number) => {
    setFlyTo(null)
    handleSelect(lat, lng)
  }, [handleSelect])

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.")
      return
    }

    setLocating(true)
    setGeoError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setFlyTo([lat, lng])
        await handleSelect(lat, lng)
        setLocating(false)
      },
      (err) => {
        setLocating(false)
        setGeoError(
          err.code === 1
            ? "Location access denied. Please allow location in your browser."
            : "Unable to retrieve your location."
        )
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <div className="space-y-2">

      {/* Current Location Button */}
      <button
        type="button"
        onClick={handleCurrentLocation}
        disabled={locating || loading}
        className="flex items-center gap-2 text-sm font-medium border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {locating ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Locating...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
            Use Current Location
          </>
        )}
      </button>

      {/* Error Message */}
      {geoError && (
        <p className="text-xs text-red-500">{geoError}</p>
      )}

      {/* Fetching Address Indicator */}
      {loading && !locating && (
        <p className="text-xs text-gray-400 animate-pulse">Fetching address...</p>
      )}

      {/* Map */}
      <div className="rounded-xl overflow-hidden border border-gray-200 h-64 w-full relative z-0">
        <MapContainer
          center={initialCenter}
          zoom={12}
          className="h-full w-full"
          scrollWheelZoom={false}
        >
          <TileLayer
            url={MAPBOX_TILE_URL}
            attribution={MAPBOX_ATTRIBUTION}
            tileSize={512}
            zoomOffset={-1}
          />
          <ClickHandler onMapClick={handleMapClick} />
          <MapFlyTo position={flyTo} />
          {marker && <Marker 
                      position={marker} 
                      draggable={true}
                      eventHandlers={{
                        dragend: (e) => {
                          const marker = e.target
                          const position = marker.getLatLng()
                          handleSelect(position.lat, position.lng)
                        }
                      }}
                    />}
        </MapContainer>
      </div>

    </div>
  )
}

export default MapPicker;

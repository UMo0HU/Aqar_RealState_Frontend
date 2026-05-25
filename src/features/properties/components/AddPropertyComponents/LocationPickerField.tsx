import { useEffect, useState, type FC } from "react"
import MapPicker from "./MapPicker"
import { DEFAULT_MAP_CENTER, forwardGeocode, searchLocations, type MapboxFeature } from "@/utils/map"

interface LocationPatch {
  location: string
  latitude?: number
  longitude?: number
}

interface Props {
  value: string
  latitude?: number
  longitude?: number
  error?: string
  label?: string
  labelClassName?: string
  placeholder?: string
  className?: string
  inputClassName: string
  coordinatesClassName?: string
  onChange: (patch: LocationPatch) => void
}

const LocationPickerField: FC<Props> = ({
  value,
  latitude,
  longitude,
  error,
  label,
  labelClassName,
  placeholder = "Click on the map or type manually",
  className = "space-y-4",
  inputClassName,
  coordinatesClassName = "text-xs text-gray-400",
  onChange,
}) => {
  const [isSearchingAddress, setIsSearchingAddress] = useState(false)
  const [addressError, setAddressError] = useState<string | null>(null)
  const [suggestions, setSuggestions] = useState<MapboxFeature[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const selectedPosition: [number, number] | null =
    latitude != null && longitude != null
      ? [latitude, longitude]
      : null

  const mapCenter: [number, number] = selectedPosition ?? DEFAULT_MAP_CENTER

  useEffect(() => {
    if (!isTyping || !value.trim()) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const timeoutId = setTimeout(async () => {
      const results = await searchLocations(value)
      setSuggestions(results)
      setShowSuggestions(results.length > 0)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [isTyping, value])

  const handleFindAddress = async () => {
    const query = value.trim()

    if (!query) {
      setAddressError("Enter an address first.")
      return
    }

    setIsSearchingAddress(true)
    setAddressError(null)

    const result = await forwardGeocode(query)

    if (!result) {
      setAddressError("We couldn't find that address. Try a more specific location.")
      setIsSearchingAddress(false)
      return
    }

    onChange({
      location: result.address,
      latitude: result.lat,
      longitude: result.lng,
    })
    setSuggestions([])
    setShowSuggestions(false)
    setIsTyping(false)
    setIsSearchingAddress(false)
  }

  const handleSelectSuggestion = (item: MapboxFeature) => {
    if (!item.center) return

    onChange({
      location: item.place_name ?? value,
      latitude: item.center[1],
      longitude: item.center[0],
    })
    setAddressError(null)
    setShowSuggestions(false)
    setIsTyping(false)
  }

  return (
    <div className={className}>
      {label && (
        <label className={labelClassName}>{label}</label>
      )}

      <div className="relative z-50">
        <input
          type="text"
          dir="auto"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setAddressError(null)
            setIsTyping(true)
            onChange({ location: e.target.value })
          }}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true)
            }
            setIsTyping(true)
          }}
          className={inputClassName}
        />
        <button
          type="button"
          onClick={handleFindAddress}
          disabled={isSearchingAddress || !value.trim()}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isSearchingAddress ? "Finding..." : "Show on map"}
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-1000 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
            {suggestions.map((item, index) => (
              <button
                key={`${item.place_name ?? "location"}-${index}`}
                type="button"
                onClick={() => handleSelectSuggestion(item)}
                className="block w-full px-4 py-2 text-left text-sm transition hover:bg-gray-100"
              >
                {item.place_name}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
      {addressError && <p className="text-xs text-red-500">{addressError}</p>}

      <MapPicker
        initialCenter={mapCenter}
        selectedPosition={selectedPosition}
        onLocationSelect={(lat, lng, address) => {
          setSuggestions([])
          setShowSuggestions(false)
          setIsTyping(false)
          onChange({
            location: address,
            latitude: lat,
            longitude: lng,
          })
        }}
      />

      {latitude != null && longitude != null && (
        <p className={coordinatesClassName}>
          📍 {latitude.toFixed(5)}, {longitude.toFixed(5)}
        </p>
      )}
    </div>
  )
}

export default LocationPickerField

export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN?.trim()

export const MAPBOX_STYLE_ID = "mapbox/streets-v12"

export const MAPBOX_TILE_URL =
  `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_ID}/tiles/512/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`

export const MAPBOX_ATTRIBUTION =
  '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

export const DEFAULT_MAP_CENTER: [number, number] = [30.0444, 31.2357]

export interface MapboxFeature {
  center?: [number, number]
  place_name?: string
}

interface MapboxGeocodeResponse {
  features?: MapboxFeature[]
}

export interface GeocodeResult {
  lat: number
  lng: number
  address: string
}

export const searchLocations = async (query: string): Promise<MapboxFeature[]> => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&language=ar,en&country=eg&limit=5&proximity=31.2357,30.0444`
    )

    if (!res.ok) return []

    const data = await res.json() as MapboxGeocodeResponse
    return data.features ?? []
  } catch {
    return []
  }
}

export const forwardGeocode = async (query: string): Promise<GeocodeResult | null> => {
  try {
    const matches = await searchLocations(query)
    const match = matches[0]

    if (!match?.center) return null

    return {
      lat: match.center[1],
      lng: match.center[0],
      address: match.place_name ?? query,
    }
  } catch {
    return null
  }
}

export const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&language=ar,en&limit=1`
    )

    if (!res.ok) return "Unknown location"

    const data = await res.json() as MapboxGeocodeResponse
    return data.features?.[0]?.place_name ?? "Unknown location"
  } catch {
    return "Unknown location"
  }
}

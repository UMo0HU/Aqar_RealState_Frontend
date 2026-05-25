import { useEffect, useState } from "react";
import { Link }                from "react-router-dom";

import NavBar       from "@/features/properties/components/NavBar";
import PropertyCard from "@/features/properties/components/PropertyCard";
import { getFavorites } from "@/services/favoriteService";
import { mapProperty }  from "@/utils/mapProperty";
import { useToast }     from "@/context/ToastContext";
import type { Property } from "@/types";

export default function FavoritesPage() {
  const toast = useToast();
  const [favorites, setFavorites] = useState<Property[]>([]);
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    getFavorites()
      .then((res) => {
        const list: any[] = res.data.favorites ?? [];
        setFavorites(list.map(mapProperty));
      })
      .catch(() => toast.error("Failed to load saved properties."))
      .finally(() => setLoading(false));
  }, []);

  // On this page isFav is always true for every card.
  // When the user un-hearts a card, remove it from the list immediately.
  const handleFavChange = (propertyId: number, next: boolean) => {
    if (!next) setFavorites((prev) => prev.filter((p) => p.propertyId !== propertyId));
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Saved Properties</h1>
            <p className="text-gray-500 mt-1 text-sm">Properties you've hearted for later.</p>
          </div>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && favorites.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="text-6xl">❤️</p>
              <p className="text-xl font-bold text-gray-700">Nothing saved yet.</p>
              <p className="text-gray-400 text-sm">Tap the heart on any property to save it here.</p>
              <Link to="/" className="inline-block mt-2 bg-dark-knight text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
                Browse Properties
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {favorites.map((p) => (
              <PropertyCard
                key={p.propertyId}
                property={p}
                isFav={true}
                onFavChange={handleFavChange}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
import { useEffect, useState } from "react";
import { getFavorites } from "@/services/favoriteService";
import { useAuth }      from "@/context/AuthContext";

/**
 * Fetches the user's saved property IDs once and exposes them as a
 * mutable Set so pages can update the set on every heart toggle —
 * keeping all cards for the same property in sync without a re-fetch.
 */
export function useFavIds(): [Set<number>, React.Dispatch<React.SetStateAction<Set<number>>>] {
  const { isAuthenticated } = useAuth();
  const [favIds, setFavIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isAuthenticated) { setFavIds(new Set()); return; }

    getFavorites()
      .then((res) => {
        const list: any[] = res.data.favorites ?? [];
        setFavIds(new Set(list.map((p) => Number(p.property_id))));
      })
      .catch(() => setFavIds(new Set()));
  }, [isAuthenticated]);

  return [favIds, setFavIds];
}
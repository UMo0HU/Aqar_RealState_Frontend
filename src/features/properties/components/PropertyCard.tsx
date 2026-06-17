import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  WhiteHeartIcon, RedHeartIcon,
  MapPinIcon, BedIcon, BathIcon, RulerIcon,
} from "@/utils/Icons";
import { useAuth }  from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { addToFavorites, removeFromFavorites } from "@/services/favoriteService";

import type { Property } from "@/types";

interface Props {
  property:      Property;
  isFav?:        boolean;
  onFavChange?:  (propertyId: number, next: boolean) => void;
}

const PropertyCard: FC<Props> = ({ property, isFav = false, onFavChange }) => {
  const { isAuthenticated, userInfo } = useAuth();
  const navigate = useNavigate();
  const toast    = useToast();

  const [toggling, setToggling] = useState(false);

  const isSale  = property.property_type === "for_sale";
  const locallyPromoted = property.isSponsored === true;
  // Owner should not see the fav heart on their own property
  const isOwner = !!userInfo && userInfo.id === property.ownerId;

  const priceLabel = isSale
    ? `EGP ${property.priceValue.toLocaleString()}`
    : property.pricingUnit === "MONTH"
      ? `EGP ${property.priceValue.toLocaleString()}`
      : `EGP ${property.pricePerDay.toLocaleString()}`;

  const priceSuffix = isSale
    ? ""
    : property.pricingUnit === "MONTH" ? "/ mo" : "/ day";

  const handleFavToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) { navigate("/auth/login"); return; }
    if (toggling) return;

    setToggling(true);
    const next = !isFav;
    onFavChange?.(property.propertyId, next);

    try {
      if (next) await addToFavorites(property.propertyId);
      else      await removeFromFavorites(property.propertyId);
    } catch (err) {
      onFavChange?.(property.propertyId, !next); // rollback
      const msg = axios.isAxiosError(err)
        ? (err.response?.data?.message ?? err.response?.data?.msg ?? "Request failed.")
        : "Something went wrong.";
      toast.error(`Could not update saved. ${msg}`);
    } finally {
      setToggling(false);
    }
  };

  return (
    <Link
      to={isSale
        ? `/buy/property/${property.propertyId}`
        : `/rent/property/${property.propertyId}`
      }
      className="flex flex-col h-full bg-white shadow-xl rounded-xl hover:shadow-2xl transition-shadow"
    >
      {/* ── Image ──────────────────────────────────────────────────────── */}
      <div className="relative shrink-0">
        <img
          src={property.images[0] ?? "https://placehold.co/400x210?text=No+Image"}
          alt={property.propertyName}
          className="w-full h-52 object-cover rounded-t-xl"
        />

        <span className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full
          ${isSale ? "bg-amber-300 text-black" : "bg-dark-knight text-white"}`}>
          {isSale ? "For Sale" : "For Rent"}
        </span>

        {locallyPromoted && (
          <span className="absolute left-2.5 top-9 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-amber-700 shadow-sm">
            Promoted
          </span>
        )}

        {/* Heart — hidden for the owner of this property */}
        {isAuthenticated && !isOwner && onFavChange && (
          <button
            type="button"
            onClick={handleFavToggle}
            disabled={toggling}
            className="absolute top-2 right-2 transition-transform hover:scale-110 active:scale-95 disabled:opacity-50 cursor-pointer"
            title={isFav ? "Remove from saved" : "Save property"}
          >
            {isFav ? <RedHeartIcon /> : <WhiteHeartIcon />}
          </button>
        )}

        {!property.isAvailable && (
          <div className="absolute inset-0 bg-black/45 rounded-t-xl flex items-center justify-center">
            <span className="text-white text-sm font-bold bg-black/60 px-3 py-1 rounded-full">
              Unavailable
            </span>
          </div>
        )}
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 gap-1.5 p-3">

        <h3 className="text-[17px] font-semibold leading-snug line-clamp-2 min-h-[2.6rem]">
          {property.propertyName}
        </h3>

        <p className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          <MapPinIcon />
          <span className="truncate">{property.location}</span>
        </p>

        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm font-semibold text-gray-700 mt-1">
          <p className="flex items-center gap-1">
            <BedIcon />
            {property.bedroomsNumber} Bedroom{property.bedroomsNumber !== 1 ? "s" : ""}
          </p>
          <p className="flex items-center gap-1">
            <BathIcon />
            {property.bathroomsNumber} Bath{property.bathroomsNumber !== 1 ? "s" : ""}
          </p>
          <p className="flex items-center gap-1 col-span-2">
            <RulerIcon />
            {property.size} m²
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium mb-0.5">Price</p>
          <p className="flex flex-wrap items-baseline gap-x-1">
            <span className="text-xl font-bold text-gray-900">{priceLabel}</span>
            {priceSuffix && (
              <span className="text-sm font-medium text-gray-500">{priceSuffix}</span>
            )}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default PropertyCard;

import bedroomIcon    from "@/assets/bedroom.png";
import bathIcon       from "@/assets/bathroom.svg";
import rulerIcon      from "@/assets/ruler.svg";
import mapPointerIcon from "@/assets/mapPointer.svg";

import { BedIcon }           from "@/utils/Icons";
import { WhiteHeartIcon, RedHeartIcon } from "@/utils/Icons";
import type { Property }     from "@/types/index";
import { hasExpiredSaleListing } from "@/utils/saleSubscriptionState";

interface Props {
  property:     Property;
  isFav?:       boolean;
  onFavChange?: (propertyId: number, next: boolean) => void;
}

const formatSize = (raw: string | number): string => {
  const n = parseFloat(String(raw));
  return isNaN(n) ? String(raw) : `${n} m²`;
};

export default function PropertyFeatures({ property, isFav = false, onFavChange }: Props) {
  const isSale = property.property_type === "for_sale";

  // Image-based features (bedroom, bath, size)
  const imgFeatures = [
    { icon: bedroomIcon, label: `${property.bedroomsNumber} Bedroom${property.bedroomsNumber !== 1 ? "s" : ""}` },
    { icon: bathIcon,    label: `${property.bathroomsNumber} Bathroom${property.bathroomsNumber !== 1 ? "s" : ""}` },
    { icon: rulerIcon,   label: formatSize(property.size) },
  ];

  return (
    <>
      <div className="flex flex-col gap-3">

        {/* Title row — name on left, heart on right */}
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-semibold">{property.propertyName}</h1>

          {onFavChange && (
            <button
              type="button"
              onClick={() => onFavChange(property.propertyId, !isFav)}
              className="shrink-0 mt-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              title={isFav ? "Remove from saved" : "Save property"}
            >
              {isFav ? <RedHeartIcon /> : <WhiteHeartIcon />}
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full
            ${isSale ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
            {isSale ? "For Sale" : "For Rent"}
          </span>
          {isSale && property.isVerified && property.listingStatus === "inactive" && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
              Subscription Pending
            </span>
          )}
          {isSale && hasExpiredSaleListing(property) && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-600">
              Subscription Expired
            </span>
          )}
          {isSale && property.listingStatus === "under_negotiation" && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700">
              Under Negotiation
            </span>
          )}
          {isSale && property.listingStatus === "sold" && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-700">
              Sold
            </span>
          )}
          {!property.isAvailable && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-600">
              Not Available
            </span>
          )}
          {!property.isVerified && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
              Pending Verification
            </span>
          )}
        </div>

        <p className="flex items-start gap-1 text-xl font-semibold text-gray-700">
          <img src={mapPointerIcon} alt="location" className="w-6 h-6 shrink-0 mt-0.5" />
          {property.location}
        </p>
      </div>

      <hr className="border-gray-200" />

      <div className="grid lg:w-full sm:w-5/6 my-8 sm:mx-auto lg:text-lg sm:text-base lg:grid-cols-4 grid-cols-2 gap-y-4 ms-5 lg:justify-items-center">

        {/* Image-based features */}
        {imgFeatures.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <img src={f.icon} alt={f.label} className="w-5 h-5 opacity-70" />
            <span className="font-semibold text-gray-800">{f.label}</span>
          </div>
        ))}

        {/* Beds — only when furnished, uses BedIcon SVG from Icons.tsx */}
        {property.is_furnished && property.bedsNumber > 0 && (
          <div className="flex items-center gap-2.5">
            <BedIcon />
            <span className="font-semibold text-gray-800">
              {property.bedsNumber} Bed{property.bedsNumber !== 1 ? "s" : ""}
            </span>
          </div>
        )}

      </div>

      <hr className="border-gray-200" />
    </>
  );
}

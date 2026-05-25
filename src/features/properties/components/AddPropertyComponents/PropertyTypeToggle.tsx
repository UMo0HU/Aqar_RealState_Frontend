import type { FC } from "react";

import sellingIcon from "@/assets/sellingIcon.svg";
import rentingIcon from "@/assets/rentingIcon.svg";

import sellingIconActive from "@/assets/sellingIconActive.svg";
import rentingIconActive from "@/assets/rentingIconActive.svg";

interface Props {
  value: "for_sale" | "for_rent";
  onChange: (value: "for_sale" | "for_rent") => void;
}

const PropertyTypeToggle: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 mb-4">I want to...</p>

      <div className="grid min-[405px]:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onChange("for_sale")}
          className={`rounded-xl border p-6 transition-all duration-200 text-center cursor-pointer
            ${
              value === "for_sale"
                ? "border-black bg-gray-100 shadow-sm"
                : "border-gray-200 hover:border-gray-400"
            }
          `}
        >
          <div className="flex flex-col items-center">
            <div className={`rounded-full ${value === "for_sale" ? "bg-gray-700" : "bg-gray-100"}`}>
              <img src={value === "for_sale" ? sellingIconActive : sellingIcon} alt="Selling Icon" className="p-4"/>
            </div>
            <p className="text-base font-medium">Sell Property</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onChange("for_rent")}
          className={`rounded-xl border p-6 transition-all duration-200 text-center cursor-pointer
            ${
              value === "for_rent"
                ? "border-black bg-gray-100 shadow-sm"
                : "border-gray-200 hover:border-gray-400"
            }
          `}
        >
          <div className="flex flex-col items-center">
            <div className={`rounded-full ${value === "for_rent" ? "bg-gray-700" : "bg-gray-100"}`}>
              <img src={value === "for_rent" ?  rentingIconActive : rentingIcon} alt="Renting Icon" className="p-4"/>
            </div>
            <p className="text-base font-medium">Rent Property</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PropertyTypeToggle;
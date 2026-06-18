import type { FC } from "react";
import { Link } from "react-router-dom";

import rightArrowIcon from "@/assets/RightArrow.svg"

const PropertiesSection : FC<{sectionTitle: string, sectionDescription: string, navigateTo: string, hideViewAll?: boolean}> = ({ sectionTitle, sectionDescription, navigateTo, hideViewAll }) => {
    return(
        <div className="flex justify-evenly mt-5">
            <div className="w-2/3">
                <h1 className="text-2xl font-medium">{sectionTitle}</h1>
                <p className="text-xl">{sectionDescription}</p>
            </div>
            <Link className={`text-xl flex items-center ${hideViewAll ? "invisible" : ""}`} to={navigateTo}>View all <img src={rightArrowIcon} alt={rightArrowIcon} className="w-4 h-4 mt-1"/></Link>
        </div>
    )
}

export default PropertiesSection;
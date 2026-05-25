import type { FC } from "react";

const HomeCard : FC<{imgUrl: string, title: string; description: string}> = ({ imgUrl, title, description }) => {
    return (
        <li key={title} className="bg-white w-full px-4 py-6 rounded-2xl shadow-2xl">
            <img src={imgUrl} alt={imgUrl} className="w-10" />
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="sm:text-xl text-[18px]">{description}</p>
        </li>
    );
}

export default HomeCard;
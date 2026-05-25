import ProtectionIcon from "@/assets/Protection.png";
import FulltimeIcon   from "@/assets/Fulltime.png";
import MoneyIcon      from "@/assets/Money.png";
import RobotIcon      from "@/assets/Robot.png";

type HomeCardType = {
  imgUrl:      string;
  title:       string;
  description: string;
}

type PropertiesSectionType = {
  sectionTitle:       string;
  sectionDescription: string;
  navigateTo:         string;
}

export const HOME_CARDS: HomeCardType[] = [
  {
    imgUrl:      ProtectionIcon,
    title:       "Verified Listings",
    description: "Every property is hand-checked by our local experts.",
  },
  {
    imgUrl:      FulltimeIcon,
    title:       "AI-Powered Search",
    description: "Find exactly what you want using natural language.",
  },
  {
    imgUrl:      MoneyIcon,
    title:       "Secure Payments",
    description: "Integrated escrow and rent payment systems.",
  },
  {
    imgUrl:      RobotIcon,
    title:       "24/7 Concierge",
    description: "Our agents are always online to help your move.",
  },
];

export const PROPERTIES_SECTIONS: PropertiesSectionType[] = [
  {
    sectionTitle:       "Featured Properties",
    sectionDescription: "Sponsored listings promoted by owners to boost visibility",
    navigateTo:         "/properties?type=for_rent",   // shows all as a fallback
  },
  {
    sectionTitle:       "Properties for Sale",
    sectionDescription: "Discover homes and investments ready for ownership",
    navigateTo:         "/properties?type=for_sale",
  },
  {
    sectionTitle:       "Rental Properties",
    sectionDescription: "Flexible stays for daily, monthly, and long-term rentals",
    navigateTo:         "/properties?type=for_rent",
  },
];
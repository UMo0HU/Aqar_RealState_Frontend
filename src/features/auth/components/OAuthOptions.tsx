import OAuthOption from "./OAuthOption";

import googleIcon from "@/assets/google_icon.webp";
import facebookIcon from '@/assets/Facebook_icon.svg';

const OAuthOptions = () => {
    return (
        <section className="flex justify-around w-full">
            <OAuthOption src={googleIcon} alt="google oauth" />
            <OAuthOption src={facebookIcon} alt="facebook oauth" />
            
        </section>
    );
}

export default OAuthOptions;
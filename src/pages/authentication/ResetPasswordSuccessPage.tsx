import Card from "../../components/authentication/Card";;
import SubmitButton from "../../components/authentication/SubmitButton";

import checkMark from "../../assets/verify.png";

export default function ResetPasswordSuccessPage() {
    return (
        <Card>
            <div className="flex flex-col items-center gap-10 p-0 sm:px-10">
                <img src={checkMark} alt="check mark" className="w-32"/>
                <h1 className="text-3xl sm:text-5xl font-semibold text-center">Password reset<br/> Successfully</h1>
                <SubmitButton size="full">Return to Login Page</SubmitButton>
            </div>
        </Card>
    )
}
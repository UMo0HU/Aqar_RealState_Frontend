import Card from "../../components/authentication/Card";import Form from "../../components/authentication/Form";
;
import Header from "../../components/authentication/Header";
import OTPInput from "../../components/authentication/OtpInput";
import SubmitButton from "../../components/authentication/SubmitButton";


export default function EmailVerificationPage() {
    return (
        <Card>
            <div className="flex flex-col items-center gap-8 p-0 sm:px-10">
                <Header title="An Email sent" content="Check if an email has been sent"/>
                <Form>
                    <OTPInput />
                    <SubmitButton>Confirm</SubmitButton>
                    <a href="#" className="text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Send another email</a>
                </Form>
            </div>
        </Card>
    )
}
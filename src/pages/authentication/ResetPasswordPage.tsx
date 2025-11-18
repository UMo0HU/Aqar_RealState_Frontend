import Card from "../../components/authentication/Card";
import Form from "../../components/authentication/Form";
import Header from "../../components/authentication/Header";
import Input from "../../components/authentication/Input";
import SubmitButton from "../../components/authentication/SubmitButton";

export default function ResetPasswordPage() {
    return (
        <Card>
            <Header title="Reset Password" content="Enter your new password"/>
            <Form>
                <div className="flex flex-col gap-5 my-5">
                    <Input type="password" id="password">New Password</Input>
                    <Input type="password" id="confirm_password">Confirm Password</Input>
                </div>
                <SubmitButton size="full">Reset Password</SubmitButton>
            </Form>
        </Card>
    )
}
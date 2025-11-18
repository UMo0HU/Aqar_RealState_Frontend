import Card from "../../components/authentication/Card";
import CreateAccount from "../../components/authentication/CreateAccount";
import Form from "../../components/authentication/Form";
import Header from "../../components/authentication/Header";
import Input from "../../components/authentication/Input";
import SubmitButton from "../../components/authentication/SubmitButton";

export default function ForgetPasswordPage() {
    return (
        <Card>
            <Header 
                title="Oh, no ! I Forgot" 
                content="Enter your email and we'll send you a link to change your password"/>
            <Form>
                <div className="my-5">
                    <Input type="email" id="email">Email</Input>
                </div>
                <SubmitButton>Send Email</SubmitButton>
                <CreateAccount />
            </Form>
        </Card>
    )
}
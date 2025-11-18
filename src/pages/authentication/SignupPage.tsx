import Form from "../../components/authentication/Form";
import FormContainer from "../../components/authentication/FormContainer";
import FormDivider from "../../components/authentication/FormDivider";
import Header from "../../components/authentication/Header";
import Input from "../../components/authentication/Input";
import OAuthOptions from "../../components/authentication/OAuthOptions";
import SubmitButton from "../../components/authentication/SubmitButton";

export default function SignupPage () {
    return (
        <FormContainer>
            <Header title="Create an Account" content="Enter your details to sign up"/>
            <Form>
                <Input type="email" id="email">Email</Input>
                <Input type="text" id="fullname">Full Name</Input>
                <Input type="password" id="password">Password</Input>
                <Input type="password" id="confirm_password">Confirm Password</Input>
                <FormDivider>Or sign up with</FormDivider>
                <OAuthOptions />
                <SubmitButton>Sign Up</SubmitButton>
            </Form>
        </FormContainer>
    )
}
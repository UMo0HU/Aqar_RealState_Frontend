import CreateAccount from "../../components/authentication/CreateAccount";
import Form from "../../components/authentication/Form";
import FormContainer from "../../components/authentication/FormContainer";
import FormDivider from "../../components/authentication/FormDivider";
import Header from "../../components/authentication/Header";
import Input from "../../components/authentication/Input";
import OAuthOptions from "../../components/authentication/OAuthOptions";
import SubmitButton from "../../components/authentication/SubmitButton";

export default function LoginPage() {
  return (
    <FormContainer>
      <Header
        title="Welcome Back!"
        content="Im waiting for you, please enter your detail"
      />
      <Form>
        <Input type="email" id="email">
          Email
        </Input>
        <Input type="password" id="password">
          Password
        </Input>
        <section className="flex justify-between items-center w-full gap-3 sm:gap-5 px-3 sm:px-5">
          <p className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              name="remember_me"
              id="remember_me"
              className="mt-0.5 w-4 h-4"
            />
            <label htmlFor="remember_me">Remember Me</label>
          </p>
          <a
            href="#"
            className="text-gray-600 text-sm hover:text-gray-400 transition-colors delay-100"
          >
            Forget Password ?
          </a>
        </section>
        <SubmitButton>Login</SubmitButton>
        <FormDivider>Or Login with</FormDivider>
        <OAuthOptions />
        <CreateAccount />
      </Form>
    </FormContainer>
  );
}

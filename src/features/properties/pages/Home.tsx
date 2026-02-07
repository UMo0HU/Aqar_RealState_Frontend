import { useAuth } from "@/context/AuthContext";

const Home = () => {
    const { userInfo, token } = useAuth();

    return (
        <>
            <h1>Hello {userInfo?.firstName + " " + userInfo?.secondName}</h1>
            <h2>Your Email {userInfo?.email}, and id {userInfo?.id}</h2>
            <h3>Your Token {token}</h3>
        </>
    );
}

export default Home;
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../context/AuthContext";

import Container from "../components/layout/Container/Container";
import LoginForm from "../components/forms/LoginForm/LoginForm";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Main from "../components/layout/Main/Main";

const Login = () => {
  let navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (auth) {
      navigate("/admin");
    }
  }, [auth, navigate]);

  return (
    <>
      <Helmet>
        <title>Admin login | Holidaze</title>
        <meta
          name="description"
          content="Login here to manage your enquiries and establishments."
        />
      </Helmet>
      <Main>
        <Container>
          <Spacer mt="1.5" />

          <LoginForm />
        </Container>
      </Main>
    </>
  );
};

export default Login;

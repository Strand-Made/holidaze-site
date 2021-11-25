import Container from "../components/layout/Container/Container";
import LoginForm from "../components/forms/LoginForm/LoginForm";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Main from "../components/layout/Main/Main";

const Login = () => {
  useEffect(() => {
    document.title = "Holidaze | Login";
  });
  let navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (auth) {
      navigate("/admin");
    }
  }, [auth, navigate]);

  return (
    <Main>
      <Container>
        <Spacer mt="1.5" />

        <LoginForm />
      </Container>
    </Main>
  );
};

export default Login;

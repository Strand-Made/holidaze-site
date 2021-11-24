import Container from "../components/layout/Container/Container";
import LoginForm from "../components/forms/LoginForm/LoginForm";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

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
  }, [auth]);

  return (
    <Container>
      <Spacer mt="1.5" />
      <main>
        <LoginForm />
      </main>
    </Container>
  );
};

export default Login;

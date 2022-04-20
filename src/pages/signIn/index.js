import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import HorizontalDivider from "../../components/horizontalDivider";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { Container, Form, Title, Buttons, InputContainer, IconInput } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import handleChange from "../../utils/handleChangeInput.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import * as api from "../../services/api";

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();

    api.login(signInData);
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={login}>
        <Title>Login</Title>
        <Button
          color="#FFFFFF"
          background="#000000"
          disabled={isLoading}
          width="100%"
          type="button"
        >
          Sign-in with GITHUB
        </Button>
        <HorizontalDivider text={"ou"} color={"#000000"} background={"#000000"} />
        <Input
          type="e-mail"
          placeholder="e-mail"
          name="email"
          onChange={(e) => handleChange(e, signInData, setSignInData)}
          value={signInData.email}
          required
        />
        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e, signInData, setSignInData)}
            value={signInData.password}
            required
          />
          <IconInput>
            {showPassword ? (
              <BsEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <BsEye onClick={() => setShowPassword(true)} />
            )}
          </IconInput>
        </InputContainer>
        <Buttons>
          <Button
            color={"#3f61d7"}
            background={"#363636"}
            type={"button"}
            action={() => navigate("/sign-up")}
            disabled={isLoading}
          >
            I don't have a register
          </Button>

          <Button
            color={"#000000"}
            background={"#3f61d7"}
            width={"118px"}
            type={"submit"}
            disabled={isLoading}
          >
            {isLoading ? <ThreeDots color="#FFFFFF" height={15} width={40} /> : "Login"}
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
}

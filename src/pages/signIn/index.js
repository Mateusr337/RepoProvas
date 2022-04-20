import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import HorizontalDivider from "../../components/horizontalDivider";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { Container, Form, Title, Buttons, InputContainer, IconInput } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Logo />
      <Form>
        <Title>Login</Title>
        <Button
          color="#FFFFFF"
          background="#000000"
          text="Sign-in with GITHUB"
          width="100%"
          type="button"
        />
        <HorizontalDivider text={"ou"} color={"#000000"} background={"#000000"} />
        <Input
          type="e-mail"
          placeholder="e-mail"
          name="email"
          onChange={handleChange}
          value={signInData.email}
          required
        />
        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={handleChange}
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
            text="I don't have a register"
            type={"button"}
            action={() => navigate("/sign-up")}
          />

          <Button
            color={"#000000"}
            background={"#3f61d7"}
            width={"118px"}
            text="Login"
            type={"submit"}
          />
        </Buttons>
      </Form>
    </Container>
  );
}

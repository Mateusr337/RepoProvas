import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { Buttons } from "../../components/logo/style";
import { Container, Form, Title } from "./style";

export default function SignInPage() {
  const navigate = useNavigate();
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
        <br />
        <Button
          color="#FFFFFF"
          background="#000000"
          text="SIGN-IN WITH GITHUB"
          width="100%"
          type="button"
        />
        <Input
          type="e-mail"
          placeholder="e-mail"
          name="email"
          onChange={handleChange}
          value={signInData.email}
          required
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={signInData.password}
          required
        />
        <Buttons>
          <Button
            color={"#4673CA"}
            background={"#363636"}
            text="I don't have a register"
            type={"button"}
            action={() => navigate("/sign-up")}
          />

          <Button
            color={"#363636"}
            background={"#4673CA"}
            width={"118px"}
            text="Login"
            type={"submit"}
          />
        </Buttons>
      </Form>
    </Container>
  );
}

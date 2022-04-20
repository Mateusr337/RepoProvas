import Button from "../../components/button";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { Container, Form, Title, Buttons } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Logo />

      <Form>
        <Title>Register</Title>
        <br />
        <Button
          color="#FFFFFF"
          background="#000000"
          text="Sign-in with GITHUB"
          width="100%"
          type="button"
        />
        <Input
          type="e-mail"
          placeholder="e-mail"
          name="email"
          onChange={handleChange}
          value={signUpData.email}
          required
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={signUpData.password}
          required
        />
        <Input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          onChange={handleChange}
          value={signUpData.confirmPassword}
          required
        />
        <Buttons>
          <Button
            color={"#3f61d7"}
            background={"#363636"}
            text="I already have registration"
            type={"button"}
            action={() => navigate("/")}
          />

          <Button
            color={"#000000"}
            background={"#3f61d7"}
            width={"118px"}
            text="Register"
            type={"submit"}
          />
        </Buttons>
      </Form>
    </Container>
  );
}

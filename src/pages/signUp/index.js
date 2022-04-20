import Button from "../../components/button";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { Container, Form, Title, Buttons, IconInput, InputContainer } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={signUpData.password}
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
        <InputContainer>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleChange}
            value={signUpData.confirmPassword}
            required
          />
          <IconInput>
            {showConfirmPassword ? (
              <BsEyeSlash onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <BsEye onClick={() => setShowConfirmPassword(true)} />
            )}
          </IconInput>
        </InputContainer>
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

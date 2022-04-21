import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../button";
import Input from "../Input";
import Logo from "../logo";
import { Container, Top } from "./style";

export default function Header() {
  const navigate = useNavigate();
  const auth = useAuth();

  function logout() {
    auth.logoff();
    navigate("/");
  }

  return (
    <Container>
      <Logo />

      <Input placeholder="Search by discipline" width={"400px"} />

      <Button
        height={"30px"}
        color={"#3f61d7"}
        background={"#252526"}
        action={logout}
      >
        Logoff
      </Button>
    </Container>
  );
}

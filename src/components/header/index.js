import Logo from "../logo";
import { Container, Input } from "./style";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Input placeholder="Serch" />
    </Container>
  );
}

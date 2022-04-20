import { Container } from "./style";

export default function Button({ width, height, color, background, text, type, action }) {
  return (
    <Container
      onClick={action}
      type={type}
      color={color}
      width={width}
      height={height}
      background={background}
    >
      {text}
    </Container>
  );
}

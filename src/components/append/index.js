import { useState } from "react";
import Topics from "../topicsAppend";
import { Container } from "./style";

export default function Append() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputsData, setInputsData] = useState({
    term: "",
  });

  return (
    <Container>
      <Topics
        name={"term"}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        inputsData={inputsData}
        setInputsData={setInputsData}
      />
    </Container>
  );
}

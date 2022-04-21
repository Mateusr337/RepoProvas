import { useState } from "react";
import Button from "../../components/button";
import { Buttons, Container, Main } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import Append from "../../components/append";
import Tests from "../../components/tests";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState("disciplines");

  return (
    <Container>
      <Header />

      <Buttons>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
          action={() => setScreen("disciplines")}
        >
          Disciplines
        </Button>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
          action={() => setScreen("teachers")}
        >
          Teacher
        </Button>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
          action={() => setScreen("append")}
        >
          Append
        </Button>
      </Buttons>

      <Main>
        {screen === "disciplines" && <Tests typeFilter={"disciplines"} />}
        {screen === "append" && <Append />}
        {screen === "teachers" && <Tests typeFilter={"teachers"} />}
      </Main>
    </Container>
  );
}

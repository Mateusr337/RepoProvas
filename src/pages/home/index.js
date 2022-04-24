import { useState } from "react";
import Button from "../../components/button";
import { Buttons, Container, Main } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import Append from "../../components/append";
import Tests from "../../components/tests";
import Disciplines from "../../components/disciplines";
import Teachers from "../../components/teachers";

export default function HomePage() {
  const [screen, setScreen] = useState("disciplines");

  return (
    <Container>
      <Header />

      <Buttons>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          action={() => setScreen("disciplines")}
        >
          Disciplines
        </Button>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          action={() => setScreen("teachers")}
        >
          Teacher
        </Button>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          action={() => setScreen("append")}
        >
          Append
        </Button>
      </Buttons>

      <Main>
        {screen === "disciplines" && <Tests typeFilter={<Disciplines />} />}
        {screen === "append" && <Append />}
        {screen === "teachers" && <Tests typeFilter={<Teachers />} />}
      </Main>
    </Container>
  );
}

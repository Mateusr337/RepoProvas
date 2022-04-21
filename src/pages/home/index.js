import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import HorizontalDivider from "../../components/horizontalDivider";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { Buttons, Container } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import handleChange from "../../utils/handleChangeInput.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/header";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Header />

      <Buttons>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
        >
          Disciplines
        </Button>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
        >
          Teacher
        </Button>
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
        >
          Append
        </Button>
      </Buttons>

      <ToastContainer
        toastStyle={{ backgroundColor: "#252526", top: "100px" }}
        limit={1}
        dark={true}
        position={"top-center"}
      />
    </Container>
  );
}

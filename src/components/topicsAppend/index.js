import { useEffect, useState } from "react";
import Button from "../button";
import { Add, Container, Input, Title, Box, Options } from "./style";
import * as api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import handleChange from "../../utils/handleChangeInput";

export default function Topics({
  name,
  isLoading,
  setIsLoading,
  inputsData,
  setInputsData,
}) {
  const auth = useAuth();
  const [list, setList] = useState([]);

  let property;
  if (name === "term") property = "number";

  const nameUpperPlural = name[0].toUpperCase() + name.substr(1) + "s";

  useEffect(() => {
    const promise = api[`get${nameUpperPlural}`](auth.auth);
    promise.then((response) => {
      setList(response.data);
    });
  }, []);

  function insertNewTopic() {
    setIsLoading(true);
    const promise = api[`insert${nameUpperPlural}`](
      inputsData[name],
      auth.auth
    );

    toast.promise(promise, {
      pending: "Loading ...",
      success: `Create ${name}!`,
      error: "Create failed!",
    });

    promise
      .then((response) => {
        setList([...list, response.data]);
        setInputsData[name]("");
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }

  return (
    <Container>
      <Title>{nameUpperPlural}</Title>

      <Add>
        <Input
          type={"text"}
          placeholder={`Insert ${name}`}
          name={name}
          onChange={(e) => handleChange(e, inputsData, setInputsData)}
          value={inputsData[name]}
          required
          disabled={isLoading}
        />
        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          height={"30px"}
          disabled={isLoading}
          type={"submit"}
          action={insertNewTopic}
        >
          Add
        </Button>
      </Add>

      <Box>
        {list.length === 0
          ? "There are no options yet, cry one!"
          : list.map((item) => <Options>{item[property]}</Options>)}
      </Box>

      <ToastContainer
        toastStyle={{ backgroundColor: "#252526", top: "100px" }}
        limit={1}
        dark={true}
        position={"top-center"}
      />
    </Container>
  );
}

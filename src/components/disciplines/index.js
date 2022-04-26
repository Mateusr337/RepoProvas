import { useEffect, useState } from "react";
import { Container, InputContainer } from "./style";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Topic from "../topic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import Input from "../Input";

export default function Disciplines() {
  const { auth } = useAuth();

  const [terms, setTerms] = useState([]);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const promiseTerms = api.getTerms(auth);
    promiseTerms.then((response) => setTerms(response.data));

    const promiseTests = api.getTests(auth);
    promiseTests.then((response) => setTests(response.data));
  }, [auth]);

  function searchDiscipline(e) {
    api
      .searchDisciplines(e.target.value, auth)
      .then((response) => console.log(response.data));
  }

  return (
    <>
      <InputContainer>
        <Input
          placeholder="Search by discipline"
          width={"400px"}
          onChange={(e) => searchDiscipline(e)}
        />
      </InputContainer>

      <Container>
        {terms.map((term, i) => {
          const filterTests = tests.filter(
            (test) => test.teacherDiscipline.discipline.termId === term.id
          );
          return (
            <Topic
              filterElement={"discipline"}
              subFilterElement={"teacher"}
              key={i}
              tests={filterTests}
            >{`${term.number}° Term`}</Topic>
          );
        })}

        <ToastContainer
          toastStyle={{ backgroundColor: "#252526", top: "100px" }}
          limit={1}
          dark={true}
          position={"top-center"}
        />
      </Container>
    </>
  );
}

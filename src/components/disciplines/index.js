import { useEffect, useState } from "react";
import { Container } from "./style";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Topic from "../topic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import InputSuggests from "../inputSuggests";

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

  return (
    <>
      <InputSuggests
        inputText={"disciplines"}
        typeSearch={"searchDisciplines"}
      />

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

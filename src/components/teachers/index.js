import { useEffect, useState } from "react";
import { Container } from "./style";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Topic from "../topic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

export default function Teachers() {
  const { auth } = useAuth();

  const [teachers, setTeachers] = useState([]);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const promiseTerms = api.getTeachers(auth);
    promiseTerms.then((response) => setTeachers(response.data));

    const promiseTests = api.getTests(auth);
    promiseTests.then((response) => setTests(response.data));
  }, []);

  return (
    <Container>
      {teachers.map((teacher, i) => {
        const filterTests = tests.filter(
          (test) => test.teacherDiscipline.teacher.id === teacher.id
        );

        return (
          <Topic
            filterElement={"category"}
            subFilterElement={"discipline"}
            key={i}
            tests={filterTests}
          >{`${teacher.name}`}</Topic>
        );
      })}

      <ToastContainer
        toastStyle={{ backgroundColor: "#252526", top: "100px" }}
        limit={1}
        dark={true}
        position={"top-center"}
      />
    </Container>
  );
}

import { useState } from "react";
import handleChange from "../../utils/handleChangeInput";
import Button from "../button";
import { Container, Form, Title } from "./style";
import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import Input from "../Input";

export default function AppendDiscipline() {
  const auth = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [testData, setTestData] = useState({
    name: "",
    pdfUrl: "",
    category: "",
    rec: "",
    term: "",
    teacher: "",
    discipline: "",
  });

  function send(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = api.insertTest(testData, auth.auth);
    toast.promise(promise, {
      promise: "Loading",
      success: "Success!",
      error: "Failed! try again!",
    });
    promise
      .then((response) => {
        setTestData({
          name: "",
          pdfUrl: "",
          category: "",
          rec: "",
          term: "",
          teacher: "",
          discipline: "",
        });
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }

  return (
    <Container>
      <Form onSubmit={(e) => send(e)}>
        <Input
          name="name"
          placeholder="Name of test"
          value={testData.name}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Input
          name="pdfUrl"
          placeholder="PDF URL (ex: https:// ...)"
          value={testData.pdfUrl}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Input
          name="category"
          placeholder="Category (ex: P1, P2 ...)"
          value={testData.category}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Input
          name="rec"
          placeholder="Is recuperation? ('yes' or 'no')"
          value={testData.rec}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Input
          name="term"
          placeholder="Term (0-12)"
          value={testData.term}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Input
          name="teacher"
          placeholder="Teacher name"
          value={testData.teacher}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Input
          name="discipline"
          placeholder="Discipline name"
          value={testData.discipline}
          onChange={(e) => handleChange(e, testData, setTestData)}
          disabled={isLoading}
          required
        />

        <Button
          background={"#252526"}
          color={"#3f61d7"}
          width={"150px"}
          disabled={isLoading}
          type={"submit"}
          required
        >
          {isLoading ? (
            <ThreeDots color="#FFFFFF" height={15} width={40} />
          ) : (
            "Add"
          )}
        </Button>

        <ToastContainer
          toastStyle={{ backgroundColor: "#252526", top: "100px" }}
          limit={1}
          dark={true}
          position={"top-center"}
        />
      </Form>
    </Container>
  );
}

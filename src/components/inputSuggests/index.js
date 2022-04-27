import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import Input from "../Input";
import { InputContainer, Suggests } from "./style";

export default function InputSuggests({ typeSearch, inputText }) {
  const [suggests, setSuggests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = useAuth();

  function search(e) {
    if (e.target.value === "") return setSuggests([]);

    api[typeSearch](e.target.value, auth).then((response) => {
      setSuggests(response.data);
    });
  }

  return (
    <InputContainer>
      <Input
        placeholder={`Search by ${inputText}`}
        width={"400px"}
        onChange={(e) => search(e)}
        disabled={isLoading}
      />

      {suggests.length !== 0 && (
        <Suggests>
          {suggests.map((suggest, i) => {
            if (inputText === "disciplines")
              return (
                <div key={i}>
                  {suggest.name} - {suggest.term.number}° term
                </div>
              );

            if (inputText === "teachers")
              return <div key={i}>{suggest.name}</div>;
          })}
        </Suggests>
      )}
    </InputContainer>
  );
}

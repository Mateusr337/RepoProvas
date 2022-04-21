import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  gap: 10px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;

  font-family: "Poppins";
  font-weight: 700;
  font-size: 20px;
`;

export const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: 30px;

  background: #ffffff;
  color: #111;
  border-radius: 6px;
  padding-left: 12px;
  border: none;
  align-self: ${(props) => props.align};

  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins";

  &::placeholder {
    color: #9f9f9f;
    font-family: "Poppins";
  }

  &:disabled {
    background: #f2f2f2;
  }
`;

export const Add = styled.form`
  gap: 20px;
  display: flex;
`;

export const Box = styled.div`
  width: 100%;
  min-height: 40px;

  padding: 20px;
  border: 1px solid #000000;
  border-radius: 5px;
  gap: 10px;

  font-family: "Poppins";

  display: flex;
`;

export const Options = styled.div`
  height: 30px;

  padding: 10px;

  background: #252526;
  color: #3f61d7;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

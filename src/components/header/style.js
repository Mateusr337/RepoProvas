import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 25px 15px;
  gap: 20px;
  background: #363636;

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Input = styled.input`
  width: 300px;
  height: 22px;

  background: #ffffff;
  color: #111;
  border-radius: 6px;
  padding-left: 8px;
  border: none;
  align-self: center;

  font-size: 12px;
  font-family: "Poppins";

  &::placeholder {
    color: #9f9f9f;
    font-family: "Poppins";
  }

  &:disabled {
    background: #f2f2f2;
  }
`;

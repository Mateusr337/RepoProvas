import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-bottom: 100px;
`;

export const Title = styled.div`
  padding: 5px 20px;
  color: #3f61d7;

  font-family: "Poppins";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const Form = styled.form`
  width: 100%;

  gap: 15px;

  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
  }
`;

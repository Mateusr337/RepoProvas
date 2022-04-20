import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #363636;
  padding-top: 65px;
  gap: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #ffffff;
  align-self: center;
`;

export const Form = styled.form`
  width: 464px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

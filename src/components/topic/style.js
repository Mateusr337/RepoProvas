import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;

  padding: 15px 25px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #3f61d7;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const Main = styled.div`
  width: 100%;

  gap: 10px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;

  padding: 8px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const SubTitle = styled.a`
  padding: 0px 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #3f61d7;
  }
`;

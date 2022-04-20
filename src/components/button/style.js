import styled from "styled-components";

export const Container = styled.button`
  justify-content: center;
  align-items: center;
  padding: 6px 16px;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 4px;

  cursor: pointer;
`;

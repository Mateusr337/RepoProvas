import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: ${(props) => props.background};
  ${(props) => props.disabled && "opacity: 0.5;"}
  color: ${(props) => props.color};
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  cursor: pointer;
`;

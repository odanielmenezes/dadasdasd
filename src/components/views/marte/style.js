import styled from "styled-components";
import("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

const colors = {
  background: "#202124",
  font: "#DEDEDE",
};

const main_style = styled.div`
  .marte {
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 100%;
    background-color: ${colors.background};
    color: ${colors.font};
  }
`;
export default main_style;

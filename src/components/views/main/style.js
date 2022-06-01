import styled from "styled-components";
import("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");


const colors = {
  background: "#202124",
  font: "#DEDEDE",
};

const main_page = styled.div`
  .main {
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 100vh;
    background-color: ${colors.background};
    display: flex;

    .lootie {
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      svg {
        filter: drop-shadow(5px 5px 8px #000);
      }
      p {
        color: ${colors.font};
      }
      b {
        color: #23A8F2;
      }
    }

    h1 {
      margin: 0;
    }
  }
`;
export default main_page;

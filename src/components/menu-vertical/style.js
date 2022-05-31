import styled from "styled-components";
import("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

const component_menu = styled.div`
  .component {
    font-family: "Roboto", sans-serif;
    width: 300px;
    height: 100vh;
    background-color: #000;
    top: 0;
    animation: slide1 0.4s ease-in-out;
    display: flex;
    align-items: end;
    flex-direction: column;
    box-shadow: 4px 4px 8px #000;

    .button-collapse {
      margin-left: 200px;
    }

    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .item {
        width: 300px;
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 20px 10px;
        margin: 0 20px;

        cursor: pointer;

        p {
          color: #ccc;
          margin: 0 10px 0 0;
          animation: contentView1 0.5s;
        }
        svg {
          color: #ccc;
        }
        :hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
      a {
        text-decoration: none;
      }
      @keyframes contentView1 {
        0% {
          transform: scale(0, 0);
        }
        100% {
          transform: scale(1, 1);
        }
      }
    }

    button.ant-btn.ant-btn-primary {
      margin: 20px 20px;
      background: transparent;
      font-size: 22px;
      z-index: 10;
      color: #cecece;
      cursor: pointer;
    }

    @keyframes slide1 {
      from {
        width: 80px;
      }
      to {
        width: 300px;
      }
    }
  }

  .none {
    width: 80px;
    height: 100vh;
    background-color: #000;
    animation: slide2 0.4s ease-in-out;
    display: flex;
    align-items: end;
    flex-direction: column;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);

    .items {
      display: flex;
      justify-content: center;
      align-items: end;
      flex-direction: column;
      width: 300px;

      .item {
        padding: 20px 10px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          animation: contentView 0.4s ease-in;
          font-size: 0;
        }
        a {
          text-decoration: none;
        }
        svg {
          color: #ccc;
        }
        :hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
      a {
        text-decoration: none;
      }
      @keyframes contentView {
        0% {
          transform: scale(1, 1);
        }
        100% {
          transform: scale(0, 0);
        }
      }
    }

    button.ant-btn.ant-btn-primary {
      margin: 20px;
      background: transparent;
      font-size: 22px;
      z-index: 10;
      color: #cecece;
      cursor: pointer;
    }

    @keyframes slide2 {
      from {
        width: 300px;
      }
      to {
        width: 80px;
      }
    }
  }
`;
export default component_menu;

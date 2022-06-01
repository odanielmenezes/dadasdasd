import React from "react";
import Styled from "./style";
import { Player } from "@lottiefiles/react-lottie-player";
import { MenuVertical } from "../../menu-vertical";
import LottieAnima from "../../../looties/nasa.json";

export function Main() {
  document.title = `NASA at images`;

  return (
    <Styled>
      <div className="main">
        <MenuVertical />
        <div className="lootie">
          <Player
            autoplay
            speed={1.5}
            loop
            src={LottieAnima}
            style={{ height: "600px", width: "600px" }}
          ></Player>
          <p>fonte oficial: <b>NASA</b></p>
        </div>
      </div>
    </Styled>
  );
}

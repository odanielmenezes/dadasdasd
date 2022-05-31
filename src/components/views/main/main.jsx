import React from "react";
import Styled from "./style";
import { MenuVertical } from "../../menu-vertical";

export function Main() {

  document.title = `NASA at images`;


  return (
    <Styled>
      <div className="main">
        <MenuVertical />
      </div>
    </Styled>
  );
}

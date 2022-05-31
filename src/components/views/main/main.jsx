import React from "react";
import Styled from "./style";
import { MenuVertical } from "../../menu-vertical";

export function Main() {
  return (
    <Styled>
      <div className="main">
        <MenuVertical />
      </div>
    </Styled>
  );
}

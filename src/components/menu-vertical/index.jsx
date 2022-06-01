import React, { useState } from "react";
import { Component } from "./component";

export function MenuVertical() {
  const [collapsed, setCollapsed] = useState(false);
  const [nameClass, setNameClass] = useState("none");
  const data = require("../../data/menu-data.json");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setNameClass(nameClass === "none" ? "component-menu" : "none");
  };

  return (
    <Component
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      nameClass={nameClass}
      setNameClass={setNameClass}
      data={data}
      toggleCollapsed={toggleCollapsed}
    />
  );
}

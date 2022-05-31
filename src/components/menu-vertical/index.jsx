import React from "react";
import { Component } from "./component";

export function MenuVertical(props) {
  const { 
      collapsed, 
      setCollapsed, 
      nameClass, 
      setNameClass 
    } = props;

  return (
    <Component
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      nameClass={nameClass}
      setNameClass={setNameClass}
    />
  );
}

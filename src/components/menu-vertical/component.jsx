import React, { useState } from "react";
import Styled from "./style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

export function Component() {
  const [collapsed, setCollapsed] = useState(false);
  const [nameClass, setNameClass] = useState("component");
  const data = require("../../data/menu-data.json");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setNameClass(nameClass === "component" ? "none" : "component");
  };

  return (
    <Styled>
      <div className={nameClass}>
        <div className="button-collapse">
          <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div className="items">
          {data["menu-items"].map((items) => {
            return (
              <Link to={items.to} key={items.key}>
                <div className="item">
                  <p>{items.nome}</p>
                  <FontAwesomeIcon icon={faGlobeEurope} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Styled>
  );
}

import React, { useCallback, useEffect, useState } from "react";
import Component from "./component";

const PhotoViwer = () => {
  const BASE_URL = "https://api.nasa.gov";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sun, setSun] = useState(1000);
  const [cam, setCam] = useState("todas");
  const [hover, setHover] = useState("curiosity");
  const cams = require("../../data/menu-data.json");

  const getData = useCallback(async (url, nomeHover, pagina, sol, camera) => {
    const response = await fetch(
      `${url}/mars-photos/api/v1/rovers/${nomeHover}/photos?sol=${sol}${
        camera === "todas" ? "" : `&camera=${camera}`
      }&page=${pagina}&api_key=R8U8ohxv45wym3DvNxTFrASF1jyH6deia6heghSc`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
    setData(response);
  }, []);

  useEffect(() => {
    getData(BASE_URL, hover, page, sun, cam);
  }, [page, hover, getData, sun, cam]);

  return (
    <Component
      data={data}
      click={() => getData()}
      setPage={setPage}
      cams={cams["options-marte"]}
      setCam={setCam}
      setSun={setSun}
      page={page}
      hover={setHover}
      hoverName={hover}
    />
  );
};

export default PhotoViwer;

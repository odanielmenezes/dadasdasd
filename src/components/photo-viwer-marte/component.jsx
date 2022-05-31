import React, { useState } from "react";
import Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faImage,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { MenuVertical } from "../menu-vertical";

const Component = (props) => {
  const [picture, setPicture] = useState();
  const [screen, setScreen] = useState("none-item");

  const { setSun, hover, setPage, data, setCam, page, cams } = props;

  const selectHover = () => {
    hover(document.getElementById("hovers").value);
    setSun(document.getElementById("sun").value);
    setCam(document.getElementById("cam").value.toLowerCase());
    setPage(1);
  };

  const expandPhoto = (idPhoto) => {
    const photoSelected = data.photos.find((e) => e.id === idPhoto);
    setPicture(photoSelected.img_src);
    setScreen("photo-zoom");
    console.log(photoSelected);
  };

  const onClose = () => {
    setScreen("none-item");
  };

  return (
    <Styled>
      <div className="component-marte">
        <div className={screen}>
          <div className="content">
            <FontAwesomeIcon onClick={() => onClose()} icon={faClose} />
            <img src={picture} alt="Marte" />
          </div>
        </div>
        <div className="content_inrow">
          <MenuVertical />
          <div className="content">
            {data.photos && (
              <>
                <div className="button_previous">
                  <div
                    className="previous"
                    onClick={() => setPage(page === 1 ? 1 : page - 1)}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <span>Página anterior</span>
                </div>
                <div className="content_incolumn">
                  {data.photos.length > 0 ? (
                    data.photos.map((item) => (
                      <div className="photos_expositor" key={item.id}>
                        <img
                          onClick={() => expandPhoto(item.id)}
                          src={item.img_src}
                          alt="Marte"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="no-data">
                      <h1>
                        SEM FOTO NA PÁGINA {page}!
                        <FontAwesomeIcon icon={faImage} />
                      </h1>
                    </div>
                  )}
                </div>
                <div className="button_next">
                  <div className="next" onClick={() => setPage(page + 1)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <span>Próxima página</span>
                </div>
              </>
            )}
            <div className="cont">
              <div className="select_hover">
                <div>
                  <small>Hover: </small>
                  <select name="hovers" id="hovers">
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                  </select>
                </div>
                <div>
                  <small>Sol: </small>
                  <input
                    max={1000}
                    type="number"
                    id="sun"
                    placeholder="min: 1 max: 1000"
                  />
                </div>
                <div>
                  <small>Câmera: </small>
                  <select name="cams" id="cam">
                    {cams.map((item) => {
                      return <option value={item.opt}>{item.opt}</option>;
                    })}
                  </select>
                </div>
              </div>
              <button onClick={() => selectHover()}>BUSCAR</button>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Component;

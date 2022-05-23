import React from "react";
import PhotoViwerMarte from "../../photo-viwer-marte/index"
import Styled from "./style"
import "./global.css"

export function Marte() {

    return (
        <Styled>
            <div className="marte">
                <PhotoViwerMarte />
            </div>
        </Styled>
    )
}
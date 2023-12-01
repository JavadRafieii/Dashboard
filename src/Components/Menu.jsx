import React from "react";
import Lists from "./Links";
import Buttons from "./Buttons";

export default function Menu(prop) {
    return (
        <div className="col-span-2 h-[86vh] rounded-xl bg-gray shadow-all p-5 flex flex-col justify-between">
            <Lists menu={prop.menu} />
            <Buttons />
        </div>
    );
};
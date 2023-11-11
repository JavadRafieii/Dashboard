import React from "react";
import { AiFillAppstore } from "react-icons/ai";


export default function Lists(props) {

    const items = props.menu.map(item => {
        return (
            <li key={item.id} className={`text-white font-Yekan-Light text-base py-3 duration-[.5s] hover:bg-pale-gray rounded-lg px-3 cursor-pointer flex items-center gap-2 mt-2 ${(item.id==1) ? "bg-primary" : null}`}>
                {item.icon}
                {item.title}
            </li>
        );
    });

    return (
        <ul className="w-full">
            {items}
        </ul>
    );
};
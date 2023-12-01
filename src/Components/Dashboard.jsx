import React from "react";
import Menu from "./Menu";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillLayout } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import FirstSection from "./First-section";
import Login from "./login";
import { useGlobalState } from "./context";
import Account from "./account";

export default function Dashboard() {

    const { login } = useGlobalState();

    const state = {
        menu: [
            { id: 1, title: "داشبورد", icon: <AiFillAppstore />, },
            { id: 2, title: "جداول", icon: <AiFillLayout />, },
            { id: 3, title: "صورتحساب", icon: <AiTwotoneEdit /> },
            { id: 4, title: "واقعیت مجازی", icon: <AiOutlineGlobal /> },
            { id: 5, title: "RTL", icon: <AiOutlineAlignRight />, },
            { id: 6, title: "اطلاعیه", icon: <AiOutlineBell />, },
            { id: 7, title: "مشخصات", icon: <AiOutlineUser />, },
            { id: 8, title: "ورود", icon: <AiOutlineLogin />, },
            { id: 9, title: "ثبت نام", icon: <AiOutlineForm />, },
        ],
    };

    return (
        <React.Fragment>
            {login
                ?
                <React.Fragment>
                    <Account />
                    <section className="p-4 w-full">
                        <div className="grid grid-cols-12 gap-5">
                            <Menu menu={state.menu} />
                            <FirstSection />
                        </div>
                    </section>
                </React.Fragment>
                : <Login />
            }
        </React.Fragment>
    );
};
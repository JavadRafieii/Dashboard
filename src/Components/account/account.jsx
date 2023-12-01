import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useGlobalDispatch } from "../context";
import { actionType } from "../context";
import { useGlobalState } from "../context";

export function Account() {

    const dispatch = useGlobalDispatch();
    const { account, image } = useGlobalState()

    function logout() {
        localStorage.clear();
        dispatch({ type: actionType.LOGOUT_USER_FROM_DASHBOARD });
    };

    return (
        <section className="w-full px-4 py-2 pb-0">
            <div className="bg-white shadow-all rounded-xl px-4 py-1 flex justify-end relative">
                <div className="account flex items-center gap-2 bg-light-gray w-fit p-2 rounded-full cursor-pointer duration-[.5s] hover:text-white hover:bg-blue">
                    <figure className="w-10 h-10 rounded-full border">
                        <img src={`./image/${image}`} alt="" className="w-full h-full rounded-full object-cover" />
                    </figure>
                    <span className="font-Yekan-Bold">{account}</span>
                    <IoIosArrowDown />
                </div>
                <ul className="dropdown absolute top-16 w-40 bg-light-gray rounded-xl shadow-all invisible opacity-0 z-10">
                    <li onClick={logout} className="font-Yekan-Regular text-base text-gray-900 cursor-pointer flex items-center gap-2 p-2 rounded-xl duration-[.5s] hover:text-white hover:bg-primary-color">
                        <IoLogOutOutline />
                        خروج از حساب
                    </li>
                </ul>
            </div>
        </section>
    )
};
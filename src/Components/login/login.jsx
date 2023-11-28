import React, { useState } from "react";
import { useGlobalDispatch, actionType } from "../context";
import Swal from 'sweetalert2';

export function Login() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const dispatch = useGlobalDispatch();

    function submit(event) {
        event.preventDefault();
        if (user === "" || pass === "") {
            Swal.fire({
                title: "لطفا نام کاربری و رمز عبور خود را وارد کنید.",
                icon: "error"
            });
        } else {
            fetch("http://localhost:3030/login")
                .then(response => response.json())
                .then(response => {
                    const { username, password } = response[0];
                    if (user === username && pass === password) {
                        dispatch({
                            type: actionType.SET_USER_INFORMATION,
                            payload: {
                                username: username,
                                password: password
                            }
                        });
                    } else {
                        Swal.fire({
                            title: "نام کاربری و یا رمز عبور شما اشتباه است، مجدد تلاش کنید!",
                            icon: "error"
                        });
                    }
                });
        };
    };

    return (
        <section className="h-[100vh] w-full flex items-center justify-center">
            <div className=" w-[400px] bg-white p-5 rounded-xl shadow-all">
                <h3 className="text-gray-900 font-Yekan-Bold text-xl text-center">ورود به داشبورد</h3>
                <form>
                    <label htmlFor="" className="font-Yekan-Bold text-gray-900 text-lg block my-2">نام کاربری:</label>
                    <input onChange={(event) => setUser(event.target.value)} value={user} type="text" className="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regula" />
                    <label htmlFor="" className="font-Yekan-Bold text-gray-900 text-lg block my-2">رمز عبور:</label>
                    <input onChange={(event) => setPass(event.target.value)} value={pass} type="password" className="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regula" />
                    <button onClick={submit} className="w-full bg-green py-2 px-2 font-Yekan-Bold text-white text-base rounded-md shadow-all mt-5">ورود</button>
                </form>
            </div>
        </section>
    );
};
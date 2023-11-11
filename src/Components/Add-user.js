"use strict";
import Swal from 'sweetalert2';

let information = [];
let adminImage;
let status;

export function addUser() {
    Swal.fire({
        html: `<form id="register" class="text-right">

                <figure class="s w-24 h-24 rounded-xl m-auto overflow-hidden shadow-all">
                    <img id="profile" class="w-full h-full object-cover" src="./image/profile.webp" alt="پروفایل">
                </figure>

                <label for="image" class="font-Yekan-Bold text-white text-sm block w-fit p-2 rounded-xl m-auto mt-2 bg-blue cursor-pointer">آپلود تصویر</label>
                <input id="image" type="file" class="hidden"/>

                <label for="fullName" class="font-Yekan-Bold text-gray-900 text-lg block mt-4">نام و نام خانوادگی کاربر:</label>
                <input id="fullName" type="text" placeholder="جواد رفیعی" class="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regular"/>

                <label for="email" class="font-Yekan-Bold text-gray-900 text-lg block mt-4">آدرس ایمیل:</label>
                <input id="email" type="email" placeholder="test@gmail.com" class="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regular"/>

                <label for="part" class="font-Yekan-Bold text-gray-900 text-lg block mt-4">واحد:</label>
                <input id="part" type="text" placeholder="طراحی" class="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regular"/>

                <label for="job" class="font-Yekan-Bold text-gray-900 text-lg block mt-4">سمت شغلی:</label>
                <input id="job" type="text" placeholder="UI-UX" class="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regular"/>

                <label for="job" class="font-Yekan-Bold text-gray-900 text-lg block mt-4">تاریخ ایجاد:</label>
                <input id="job" type="text" placeholder="۱۴۰۲/۰۱/۰۱" class="border-[2px] w-full h-10 rounded-md p-2 text-gray-500 font-Yekan-Regular"/>
        
               </form>`,
        customClass: 'swal-custom',
        confirmButtonText: 'ثبت',
        showCancelButton: true,
        cancelButtonText: 'لغو',
        didOpen: () => {
            const profile = document.getElementById("profile");
            const inputs = document.querySelectorAll("#register>input");

            inputs.forEach(input => {
                input.addEventListener("change", (e) => {
                    if (input.type == "file") {
                        const render = new FileReader();
                        render.addEventListener("load", () => {
                            profile.src = render.result;
                            adminImage = e.target.files[0].name;
                        });
                        render.readAsDataURL(e.target.files[0]);
                    } else {
                        if (!input.value || input.value == null) {
                            input.style.border = "2px solid #d91e61";
                        } else {
                            input.style.border = "2px solid #43a047";
                        };
                    };
                });
            });
        },
        preConfirm: () => {
            const inputs = document.querySelectorAll("#register>input");
            for (let index = 0; index < inputs.length; index++) {
                if (inputs[index].value === "" || inputs[index].value === null) {
                    Swal.showValidationMessage("احتمالا فیلدی پرنشده یا فرمت آن اشتباه است.");
                    inputs.forEach(input => {
                        if (input.value === "" || input.value === null) {
                            input.style.border = "2px solid #d91e61";
                        } else {
                            input.style.border = "2px solid #43a047";
                        };
                    });
                    break;
                } else {
                    inputs[index].style.border = "2px solid #43a047";
                    information.push(inputs[index].value);
                    information[0] = adminImage;
                    status = parseInt(Math.random() * 2);
                };
            };
        }
    }).then(response => {
        if (response.isConfirmed) {
            fetch("http://localhost:3030/users", {
                method: "POST",
                body: JSON.stringify({
                    image: information[0],
                    fullName: information[1],
                    email: information[2],
                    titleOne: information[3],
                    titleTwo: information[4],
                    date: information[5],
                    status: (status == 1) ? "آنلاین" : "آفلاین",
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                information = [];
                adminImage = null;
                if (response.ok) {
                    this.getUsersFromDataBase();
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                    });
                    Toast.fire({
                        icon: 'success',
                        title: 'ادمین با موفقیت ثبت شد'
                    });
                } else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                    });
                    Toast.fire({
                        icon: 'error',
                        title: 'خطا! مجدد تلاش کنید.'
                    });
                };
            });
        };
    });
};
import React from "react";

export default function (props) {

    let users;
    let background;
    if (props.successful) {
        users = props.users.map(user => {
            switch (user.status) {
                case "آنلاین":
                    background = "bg-green";
                    break;

                default: background = "bg-gray";
                    break;
            };

            return (
                <tr id={user.id} key={user.id} className="grid grid-cols-12 mt-3 pt-3 border-t">
                    <th className="col-span-4 flex items-center gap-5">
                        <figure className="w-12 h-12 rounded-md overflow-hidden">
                            <img src={`./image/${user.image}`} alt={user.fullName} className="w-full h-full object-cover" />
                        </figure>
                        <div>
                            <p className="font-Yekan-Bold text-gray-900 text-base">{user.fullName}</p>
                            <p className="font-Yekan-Light text-gray-500">{user.email}</p>
                        </div>
                    </th>
                    <th className="col-span-2">
                        <p className="font-Yekan-Bold text-gray-900 text-base">{user.titleOne}</p>
                        <p className="font-Yekan-Light text-gray-500">{user.titleTwo}</p>
                    </th>
                    <th className="col-span-2 flex items-center">
                        <span className={`font-Yekan-Bold text-white text-sm ${background} py-1 px-5 rounded-xl`}>{user.status}</span>
                    </th>
                    <th className="col-span-2 flex items-center">
                        <p className="font-Yekan-Bold text-gray-900 text-base">{user.date}</p>
                    </th>
                    <th className="col-span-2 flex items-center gap-2">
                        <span onClick={() => props.editUser(user.id)} className="font-Yekan-Bold text-white text-sm bg-blue py-1 px-4 cursor-pointer rounded-md">ویرایش</span>
                        <span onClick={() => props.removeUser(user.id)} className="font-Yekan-Bold text-white text-sm bg-primary py-1 px-4 cursor-pointer rounded-md">حذف</span>
                    </th>
                </tr>
            );
        });
    };

    return (
        <div className="bg-white w-full p-5 mt-12 rounded-xl shadow-all">
            <div className="bg-primary w-full rounded-xl p-5 font-Yekan-Bold text-white text-xl -translate-y-12">وضعیت ادمین‌های وبسایت</div>
            <span onClick={props.addUser} className="block w-fit bg-green py-4 px-2 font-Yekan-Bold text-white -translate-y-5 text-base rounded-xl shadow-all cursor-pointer">اضافه کردن ادمین جدید</span>
            <ul className="grid grid-cols-12">
                <li className="col-span-4 font-Yekan-Light text-base text-gray-500">ادمین</li>
                <li className="col-span-2 font-Yekan-Light text-base text-gray-500">سمت شغلی</li>
                <li className="col-span-2 font-Yekan-Light text-base text-gray-500">وضعیت</li>
                <li className="col-span-2 font-Yekan-Light text-base text-gray-500">تاریخ ایجاد</li>
                <li className="col-span-2 font-Yekan-Light text-base text-gray-500">ویرایش / حذف</li>
            </ul>
            <table className="w-full">
                <thead></thead>
                <tbody className="text-right">
                    {users}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
};
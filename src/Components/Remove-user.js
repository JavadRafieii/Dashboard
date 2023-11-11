"use strict";
import Swal from 'sweetalert2';

export function removeUser(id) {
    Swal.fire({
        title: 'آیا از حذف کاربر اطمینان دارید؟',
        showCancelButton: true,
        cancelButtonText: 'خیر',
        confirmButtonText: 'بله'

    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:3030/users/${id}`, { method: "DELETE" })
                .then(response => {
                    if (response.ok) {
                        this.getUsersFromDataBase();
                        Swal.fire({
                            title: 'کاربر با موفقیت حذف شد.',
                            confirmButtonText: 'ممنون',
                            icon: 'success',
                        });
                    } else {
                        Swal.fire({
                            title: 'مجدد امتحان کنید.',
                            confirmButtonText: 'باشه',
                            icon: 'error',
                        });
                    };
                });
        };
    });
};
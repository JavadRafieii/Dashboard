
export const actionType = {
    SET_USER_INFORMATION: "SET_USER_INFORMATION",
    LOGIN_USER_TO_DASHBOARD: "LOGIN_USER_TO_DASHBOARD",
    LOGOUT_USER_FROM_DASHBOARD: "LOGOUT_USER_FROM_DASHBOARD"
};

export const initState = {
    username: null,
    password: null,
    login: false
};

export function reducer(state, action) {

    switch (action.type) {
        case actionType.SET_USER_INFORMATION:
            const { username, password } = action.payload;
            return {
                ...state,
                account: "جواد رفیعی",
                image: "javad.jpg",
                username: username,
                password: password,
                login: true
            }

        case actionType.LOGIN_USER_TO_DASHBOARD:
            return {
                ...state,
                login: true
            }

        case actionType.LOGOUT_USER_FROM_DASHBOARD:
            return {
                account: null,
                image: null,
                username: null,
                password: null,
                login: false
            }

        default:
            return {
                account: null,
                username: null,
                password: null,
                login: false
            }
    }
};

export const actionType = {
    SET_USER_INFORMATION: "SET_USER_INFORMATION",
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
                username: username,
                password: password,
                login: true
            }

        default:
            return {
                username: null,
                password: null,
                login: false
            }
    }
};
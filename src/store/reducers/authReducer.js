const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                // Spread operator
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state

        default:
            return state
    }
};

export default authReducer;
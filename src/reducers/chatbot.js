const OTPReducer = (state= { response:null}, action) => {
    switch (action.type) {
        case 'GENERATE_OTP':
            localStorage.setItem('userdbtoken', JSON.stringify({ ...action?.response}))
            return { ...state, code: action?.code }
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null };
        default:
            return state;
    }
}

export default OTPReducer
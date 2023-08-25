import { AUTH_CONTEXT } from "../constants";

export const initialState = {
    me: null,
    accessToken: null,
    refreshToken: null,
    sessionScope: null,
    remember: {
        username: undefined,
    },
}

const AuthReduces = (state = initialState, action) => {
    switch(action.type){
        case AUTH_CONTEXT.ME.code : {
            return {
                ...state,
                me: action.payload
            };
        }
        case AUTH_CONTEXT.LOGIN.code : {
            const {
                accessToken
            } =  action.payload;

            return {
                ...state,
                accessToken:accessToken,
                refreshToken: null,
                sessionScope: null
            };
        }
        case AUTH_CONTEXT.LOGOUT.code : {
            
            return {
                ...state,
                user: {},
                accessToken: null,
                refreshToken: null,
                sessionScope: null
            };
        }
        default: {
            return state;
        }
    }
}

export default AuthReduces;
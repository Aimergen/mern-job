/* eslint-disable react-hooks/rules-of-hooks */

import React, { useContext, createContext, useReducer } from "react";
import authReducer, { initialState } from "../reducers/AuthReduce";
import { AUTH_CONTEXT } from "../constants";
import { auth as authService } from "../apis";

const AuthContext = createContext(initialState);

const context =  () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
      throw new Error("undefined auth context");
    }
    
    return context;
}

export default context;

export const AuthProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const setLogin = (payload) => {
        dispatch({
            type: AUTH_CONTEXT.LOGIN.code,
            payload: payload
        });
    }

    const setLogout = (payload) => {
        dispatch({
            type: AUTH_CONTEXT.LOGOUT.code,
            payload: {}
        });
    }

    const setMe = (payload) => {
        dispatch({
            type: AUTH_CONTEXT.ME.code,
            payload: payload
        });
    }

    const getMe = async () => {
        if(state.me === null) {
            let user = await authService.me({});

            setMe(user);
            return user;
        } else {
            return state.me;
        }
    }


    const values = {
        ...state,
        setLogout,
        setMe,
        setLogin,
        getMe,
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}



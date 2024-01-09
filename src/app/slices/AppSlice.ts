import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constants";

const initialState:AppTypeInitialState={
    isLoading:true,
    toasts:[],
    userInfo:undefined,
    currentPokemonTab:pokemonTabs.description,
    
};
export const AppSlice=createSlice({
    name:"app",
    initialState,
    reducers:{
        setToast:(state,action)=>{
const toasts=[...state.toasts];
toasts.push(action.payload);
state.toasts=toasts;
    },
    clearToasts: (state) => {
        state.toasts = [];
        } ,
    setUserstatus:(state,action)=>{
        state.userInfo=action.payload;
    },
    setPokemonTab:(state,action)=>{
        state.currentPokemonTab=action.payload
    }
    },
});

export const {setToast,clearToasts,setUserstatus,setPokemonTab}=AppSlice.actions;
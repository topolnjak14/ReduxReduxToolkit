"use client"
import { createSlice } from "@reduxjs/toolkit";

/* El reducer comprar debe recibir el objeto que se creó
en la funcion adquirir del componente FichaIndividual.jsx */

/*  action.payload es el objeto que se envia desde la funcion adquirir */


export const origenSlice = createSlice({
    name: "misValores", //Cuando hagamos referencia a miSlice lo haremos por este valor
    initialState: {
        categoria: "",
        miCarrito:[] //Será un array de objetos
    },
    reducers: {
       guardarCategoria:(state, action) =>{
        //Accion 1: Recibimos un estado y aqui agregamos la accion a ejecutar
       },
       comprar:(state, action) =>{
        state.miCarrito=[...state.miCarrito, action.payload];
       },
       devolver:(state, action) =>{
        //Accion 3: Recibimos un estado y aqui agregamos la accion a ejecutar
       }
 }
})

export const {guardarCategoria,comprar,devolver} = origenSlice.actions

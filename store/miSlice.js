"use client"
import { createSlice } from "@reduxjs/toolkit";

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
        //Accion 2: Recibimos un estado y aqui agregamos la accion a ejecutar
       },
       devolver:(state, action) =>{
        //Accion 3: Recibimos un estado y aqui agregamos la accion a ejecutar
       }
 }
})

export const {guardarCategoria,comprar,devolver} = origenSlice.actions

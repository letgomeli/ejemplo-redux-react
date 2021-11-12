import { createSlice } from '@reduxjs/toolkit';

export const contadorSlice = createSlice({
	name: "Contador",
	initialState: {
		valor: 0,
	},
	reducers: {
			incrementar: (state, action) => {
					state.valor += 5;
					console.log("Se ejecutó la acción de Incrementar");
			},
			decrementar: (state,action) => {
					state.valor += 5;
					console.log("Se ejecutó la acción de Decrementar");
			},
			incrementarEn: (state,action) => {
					state.valor += parseInt(action.payload);
					console.log("Se ejecutó la acción de IcrementarEn" + action.payload);
			},
	},
});

export const { incrementar, decrementar, incrementarEn } = contadorSlice.actions;


export default contadorSlice.reducer;



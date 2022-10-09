import { createSlice } from "@reduxjs/toolkit";



export const globalReducer = createSlice({
    name: 'global',
    initialState: {
        // Объект с основной информацией
        mainInfo: {
            phone: '+46-766-92-00-94',
            email: 'eaf.fond@help.com',
            address: 'London, 45 Maydwell House',
        },

    },
    reducers: {
        
    }
})


export const {
    
} = globalReducer.actions

export default globalReducer.reducer
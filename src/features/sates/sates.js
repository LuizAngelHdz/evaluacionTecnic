import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  idState: '',
}

export const detailSate = createSlice({
  name: 'stateDetail',
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.idState = action.payload
    },
  },
})

export const {updateId} = detailSate.actions

export default detailSate.reducer
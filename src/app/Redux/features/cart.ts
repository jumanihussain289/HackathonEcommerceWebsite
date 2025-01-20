import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type

export const cartSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:[],
  reducers: {
    // add to cart functionalty
    add(state:any,action){
      let uuid = Math.floor(1000+Math.random()*9000)
      let newobj = {...action.payload,uuid}
      state.push(newobj)
     },
     // delete from cart
     remove(state:any,{payload}){
       return  state.filter((val:any)=> val.uuid !== payload)
     },
     //  addition of item
    addition(state:any,action){
      let obj = state.find(
        (val:any)=>
          val.id == action.payload.id && 
          val.color == action.payload.color && 
          val.size == action.payload.size 
      );
      if(obj){
        ++obj.qty;
        let newState = state.filter((val:any)=> val.id !== obj.id);
        state = [...newState,obj];
        return
      }
    },
     //   subraction of item
     subraction(state:any,action){
      let obj = state.find(
        (val:any)=>
          val.id == action.payload.id && 
          val.color == action.payload.color && 
          val.size == action.payload.size 
      );
      if(obj !== undefined){
        --obj.qty;
        let newState = state.filter((val:any)=> val.uuid !== obj.uuid);
        state = [...newState,obj];
        return;
      }
      // end
  }}
})

export const {add, remove,subraction,addition} = cartSlice.actions

export default cartSlice.reducer
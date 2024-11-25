// ----------- ACCIONES ----------

import { MenuItems, OrderItem } from "../types"

export type OrderActions = 
    {type: 'add-item', payload:{item: MenuItems}} |
    {type: 'remove-item', payload: {id: MenuItems['id']}} |
    {type: 'order-placed'} |
    {type: 'add-tip', payload: {value : number}}
// ---------- STATE -------------


export type OrderSate = {
    order: OrderItem[]
    tip: 0
}
export const initialState : OrderSate = {
    order: [],
    tip: 0
}

// -------------------------------


export const orderReducer = (
    state: OrderSate = initialState,
    action: OrderActions
) => {

    if (action.type === "add-item") {
        // console.log("llrgo");        
        const itemExist = state.order.find( orderItem => orderItem.id === action.payload.item.id)
        let updateOrder
        if (itemExist) {
          updateOrder = state.order.map( orderItem => orderItem.id === action.payload.item.id ?
              {...orderItem, quantity: orderItem.quantity + 1}
              : 
              orderItem
          )
        //   setOrder(updateOrder)
        } else {
          const newItem : OrderItem = {...action.payload.item, quantity: 1}
          updateOrder = [...state.order, newItem]
          //   setOrder([...order, newItem])        
        }
        
        return {
            ...state,
            order: updateOrder
        }
    }

    if (action.type === "remove-item") {
       const order = state.order.filter(orderItem => orderItem.id !== action.payload.id)        
        return {
            ...state,
            order
        }
    }

    if (action.type === "order-placed") {     
         return {
             ...state,
             order: [],
             tip: 0

         }
    }

    if (action.type === "add-tip") {     
        // console.log("llrgo tip", action.payload.value);        
        return {
            ...state,
            tip: action.payload.value

        }
   }
    

    return state
}



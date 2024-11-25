import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { MenuItems } from "../types"


type menuItemsProps = {
    item : MenuItems
    // addItem : (item : MenuItems) => void
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({
  item, 
  // addItem
  dispatch
} : menuItemsProps) {
  
  return (
    <button onClick={() => 
    // addItem(item)
    dispatch({type: "add-item", payload:{item: item}})
    } className="border-2 border-indigo-500 hover:bg-indigo-200 p-3 w-full flex justify-between">
      <p>{item.name}</p>
      <p className="font-black"> {formatCurrency(item.price)}</p>
    </button>
  )
}

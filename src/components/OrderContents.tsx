import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import caneca from '../icons/caneca.svg'
import { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch : React.Dispatch<OrderActions>
    // removeItem: (id: MenuItems['id']) => void
}
const OrderContents = ({order, dispatch} : OrderContentsProps) => {
    // console.log('order', order)
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <div className="space-y-3 mt-10">
            {
                order.map(item => (
                    <div key={item.id} className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - { formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button
                            className="h-8 w-8 rounded-full text-white font-black"
                            onClick={() => 
                                // removeItem(item.id)
                                dispatch({type: "remove-item", payload:{id: item.id}})
                            }
                        >
                            <img src={caneca} alt="icon-close" />
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OrderContents

import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
// import UseOrder from "./hooks/UseOrder";
import { orderReducer, initialState } from "./reducers/order-reducer";


function App() {

  // const {tip  } = UseOrder()

  const [state, dispatch] = useReducer(orderReducer, initialState)
  
  // console.log(state);
  // const { order, tip, setTip, addItem, removeItem, orderPlaced  } = UseOrder()
  return (
    <>
      <header className="bg-blue-900 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map( item => 
              <MenuItem 
                key={item.id}
                item={item}
                // addItem={addItem}
                dispatch={dispatch}
              />
              )}
          </div>
        </div>
        <div>
              <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 h-full">
                {
                  state.order.length ?
                  <>
                    <OrderContents 
                      order={state.order}
                      // removeItem={removeItem}
                      dispatch={dispatch}
                    />
                    
                    <TipPercentageForm
                      // setTip={setTip}
                      dispatch={dispatch}
                      tip={state.tip}
                    />
    
                    <OrderTotals 
                      order={state.order}
                      tip={state.tip}
                      // orderPlaced={orderPlaced}
                      dispatch={dispatch}
                    />

                  </>
                  :
                  <p className="text-center text-2xl font-semibold">La orden esta vacia</p> 
                }
              </div>
        </div>
      </main>
    </>
  )
}

export default App

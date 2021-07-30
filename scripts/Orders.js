import { getOrders, getMetals} from "./database.js"

const buildOrderListItem = (orderObject) => {
    
    const metals = getMetals()
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === orderObject.metalId
        }
    )
    const totalCost = foundMetal.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${orderObject.id} was placed on ${orderObject.timestamp} and costs ${costString}
    </li>`
}

export const Orders = () => {
    
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   const orders = getOrders()
    
    

  

    let html = "<ul>"

    const listItems = orders.map(orderObj => buildOrderListItem(orderObj))

    html += listItems.join("")
    
    html += "</ul>"

    return html
}


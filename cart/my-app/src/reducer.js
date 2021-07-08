import CartItem from "./CarTItem";


const reducer=(state,action)=>{
    switch(action.type){
      case 'CLEAR_CART':
          return {
              ...state,
              cart:[]
          }  
      case 'INCREASE':
          let tempCart=state.cart.map((item)=>{
            if(item.id === action.payload){
                  return {
                      ...item,
                      amount:item.amount +1
                  }
            }
            return item
          });
          return{
              ...state,
              cart:tempCart
          }

          case 'DECREASE':
            let SempCart=state.cart.map((item)=>{
              if(item.id === action.payload){
                    return {
                        ...item,
                        amount:item.amount - 1
                    }
              }
              return item
            }).filter((cartItem)=>cartItem.amount !== 0)
            return{
                ...state,
                cart:SempCart
            }
            case 'GET_TOTALS':
             const {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
                const {price,amount}=cartItem;
                const itemTotal = price*amount ;  
                cartTotal.amount += amount
                cartTotal.total += parseFloat(itemTotal.toFixed(2))
                return cartTotal;
             },{
                     total:0,
                     amount:0
             })
         
            return {...state,total,amount}
                
    
          }    
          if(action.type === 'REMOVE'){
            console.log(action.type)
            return{
                ...state,
                cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload),
          }
    }  
    if(action.type === "LOADING"){
      return {...state,loading:true}
    }
    if(action.type === 'DISPLAY_ITEMS'){
      return{...state,cart:action.payload,loading:false}
    }
    return state
}

export default reducer
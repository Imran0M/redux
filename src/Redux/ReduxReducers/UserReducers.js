const UserReducers=(state, action)=>{
    switch(action.type){
        case"restore-Inventory":
        return state + action.payload
        case"Purchase-order":
        return state - action.payload
        default:
        return state
    }
    }
    
    export default UserReducers;
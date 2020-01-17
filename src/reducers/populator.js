const populatorReducer = (state = null, actions) => {
    switch(actions.type){
        case "CALLALLDATA": 
            return {
                ...state,
                data: {callData: 'all'}
            }
        case "CALLFILTEREDDATA":
            return{
                ...state,
                data: {callData: 'filtered'}
            }
        default:
            return state;
    }
}

export default populatorReducer;
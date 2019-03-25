const initialState = {
    addName: '',
    result: ['你好', 'good','国家','加油'],
    indexs: -1
}

const another = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            // addName=action.name;
            console.log(action.name);
            //alert(action.name);
            return Object.assign({}, state, {
                result: state.result,
                addName: action.name,
                indexs: -1
            });
        //return { result: state.result };
        case 'SHOW_ALL':
            // alert(state.addName);
            // alert(state.result);
            // alert(state.index);
            // console.log(state.result);
            state.result.splice(state.result.length, 0, state.addName);
            console.log(state.result);
            //state.addName="";
            return Object.assign({}, state, {
                result: state.result,
                addName: '',
                indexs: -1
            });
        case 'DELETE_THIS':
            alert(action.theIndex);
            
            //var lastResult = state.result;
            // lastResult.splice(action.theIndex, 1);
            
            alert(state.result);
            return Object.assign({},  {
                result: state.result.slice(0,action.theIndex).concat(state.result.slice(action.theIndex+1)),
                addName: '',
                indexs: action.theIndex
            });
            //return {...state, result: lastResult}
            //return [...state]
        
        default:
            return {
                result: state.result,
                indexs: state.indexs,
                addName: state.addName
            };
    }
}

export default another;
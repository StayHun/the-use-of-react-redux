const initialStates = {
    number: 0,
    increase: 0,
    declare: 0
}

const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case 'INCREASE_NUMBER':
            // alert(state.first);
            // alert(state.increase);
            // alert(state.number);
            if (state.number >= 0)
                return {
                    number: state.number + 1,
                    increase: state.increase + 1,
                    declare: 0
                }
            else return { number: state.number };
        case 'DECLARE_NUMBER':
            return {
                number: state.number - 1,
                increase: 0,
                declare: state.declare + 1
            }
        case 'ODD_NUMBER':
            if (state.increase % 2 || state.declare % 2)
                return {
                    number: state.number + 1,
                    increase: 0,
                    declare: 0
                }
            else return {
                number: state.number, increase: 0,
                declare: 0
            };

        default:
            return { number: state.number, increase: state.increase };
    }
}

export default reducer;
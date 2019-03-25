export const increaseNumber={
    type: 'INCREASE_NUMBER'
}
export const declareNumber={
    type: 'DECLARE_NUMBER'
}
export const oddNunber={
    type: 'ODD_NUMBER'
}
export const add=(name)=>({
    type: 'ADD',
    name
})
export const showAll={
    type: 'SHOW_ALL'
}

export const deleteThisOne=(theIndex)=>({
    type: 'DELETE_THIS',
    theIndex
})
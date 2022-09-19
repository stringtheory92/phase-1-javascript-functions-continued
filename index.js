// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol) {
    
    return symbol;
}

function result(adjective) {
    let result = wrapAdjective()
    return `You are ${result}${adjective}${result}!`
}
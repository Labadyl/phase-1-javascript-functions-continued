function saturdayFun(activities = 'roller-skate'){
    return `This Saturday, I want to ${activities}!` 
}

function mondayWork(activities = 'go to the office'){
    return `This Monday, I will ${activities}.`
}
function wrapAdjective(ice = '*'){
    return function (baby = "a hard worker"){
        return `You are ${ice}${baby}${ice}!`
    }
}

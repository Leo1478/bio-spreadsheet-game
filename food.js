function farm(team) {
    var teamNumber = (team + 1).toString()

    //-10 energy
    cell = ENERGY + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    //-5 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 5)

    //+30 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 30)
}

function fish(team) {
    var teamNumber = (team + 1).toString()

    //+20 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 20)

    //+5 waste
    cell = WASTE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 5)
}

function hunt(team) {
    var teamNumber = (team + 1).toString()

    //-5 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 5)

    //+20 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 20)
}

function exFood(team) {
    var teamNumber = (team + 1).toString()

    //-10 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    //+15 resources
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 15)
}

function imFood(team) {
    var teamNumber = (team + 1).toString()

    //-10 resources
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    //+15 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 15)
}


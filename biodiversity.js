function flower(team) {
    var teamNumber = (team + 1).toString()

    //-2 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 2)

    //+3 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 3)
}

function preventBuild(team) {
    var teamNumber = (team + 1).toString()

    //-5 energy
    cell = ENERGY + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 5)

    //+10 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 10)
}

function protect(team) {
    var teamNumber = (team + 1).toString()

    //-5 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 5)

    //+10 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 10)
}
// one time thing
function coal(team) {
    var teamNumber = (team + 1).toString()

    // -20 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    // -20 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    // - 10 bio
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    // add 1 to teams count
    cell = COAL + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 1)
}

function coalProduction(team){
    var teamNumber = (team + 1).toString()

    cell1 = COAL + teamNumber
    numBilding = sheet.getRange(cell1).getValue()

    // +45 energy
    cell2 = ENERGY + teamNumber
    value2 = sheet.getRange(cell2).getValue()
    sheet.getRange(cell2).setValue(value2 + 45 * numBilding)

    // +20 waste
    cell3 = WASTE + teamNumber
    value3 = sheet.getRange(cell3).getValue()
    sheet.getRange(cell3).setValue(value3 + 20 * numBilding)

    //Logger.log("Finished")
}

function fossilPlant(team) {
    var teamNumber = (team + 1).toString()

    // -10 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    // -20 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    // - 10 bio
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    // add 1 to teams count
    cell = FOSSIL + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 1)
}

function fossilProduction(team) {
    var teamNumber = (team + 1).toString()

    cell1 = FOSSIL + teamNumber
    numBilding = sheet.getRange(cell1).getValue()

    // +30 energy
    cell2 = ENERGY + teamNumber
    value2 = sheet.getRange(cell2).getValue()
    sheet.getRange(cell2).setValue(value2 + 30 * numBilding)

    // +10 waste
    cell3 = WASTE + teamNumber
    value3 = sheet.getRange(cell3).getValue()
    sheet.getRange(cell3).setValue(value3 + 10 * numBilding)

    //Logger.log("Finished")
}

function solarPanel(team) {
    var teamNumber = (team + 1).toString()

    // -15 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 15)

    // - 15 bio
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 15)

    // add 1 to teams count
    cell = SOLAR + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 1)
}

function solarProduction(team) {
    var teamNumber = (team + 1).toString()

    cell1 = SOLAR + teamNumber
    numBilding = sheet.getRange(cell1).getValue()

    // +15 energy
    cell2 = ENERGY + teamNumber
    value2 = sheet.getRange(cell2).getValue()
    sheet.getRange(cell2).setValue(value2 + 15 * numBilding)
}

function turbine(team) {
    var teamNumber = (team + 1).toString()

    // -15 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 15)

    // - 20 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    // add 1 to teams count
    cell = WIND + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 1)
}

function turbineProduction(team) {
    var teamNumber = (team + 1).toString()

    cell1 = WIND + teamNumber
    numBilding = sheet.getRange(cell1).getValue()

    // +15 energy
    cell2 = ENERGY + teamNumber
    value2 = sheet.getRange(cell2).getValue()
    sheet.getRange(cell2).setValue(value2 + 15 * numBilding)
}

function hydro(team) {
    var teamNumber = (team + 1).toString()

    // -20 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    // - 5 food
    cell = FOOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 5)

    // add 1 to teams count
    cell = HYDRO + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 1)
}

function hydroProduction(team) {
    var teamNumber = (team + 1).toString()

    cell1 = HYDRO + teamNumber
    numBilding = sheet.getRange(cell1).getValue()

    // +30 energy
    cell2 = ENERGY + teamNumber
    value2 = sheet.getRange(cell2).getValue()
    sheet.getRange(cell2).setValue(value2 + 30 * numBilding)
}

function burn(team) {
    var teamNumber = (team + 1).toString()

    //-20 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    //-20 waste
    cell = WASTE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)
}

function recycle(team) {
    var teamNumber = (team + 1).toString()

    //-40 energy
    cell = ENERGY + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 40)

    //-20 waste
    cell = WASTE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)
}
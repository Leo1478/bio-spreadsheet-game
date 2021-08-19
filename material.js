function chop(team) {
    var teamNumber = (team + 1).toString()

    //-5 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 5)

    //+10 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 10)
}

function metal(team) {
    var teamNumber = (team + 1).toString()

    //-10 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 10)

    //+30 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 30)

    //+5 waste
    cell = WASTE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 5)
}

function fossil(team) {
    var teamNumber = (team + 1).toString()

    //-20 bioD
    cell = BIOD + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value - 20)

    //+40 resource
    cell = RESOURCE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 40)

    //+10 waste
    cell = WASTE + teamNumber
    value = sheet.getRange(cell).getValue()
    sheet.getRange(cell).setValue(value + 10)
}
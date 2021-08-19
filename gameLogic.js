var startTime = new Date().getTime()
var currentTime
var elapsedTime


function mainLoop() {
    while(true){

        // update time
        currentTime = new Date().getTime()
        elapsedTime = currentTime - startTime

        // update timer on spreadsheet
        if(elapsedTime % 1000 == 0) {
            sheet.getRange("A13").setValue(20 - (elapsedTime / 1000) % 20)
            sheet.getRange("A13").getValue()//spreadsheet won't work without having this getValue() so don't ask why it's here // ok miao

            checkAction(1)
            checkAction(2)
            checkAction(3)
        }
        // check buildings
        // check number of buildings each team has and calls the building methods in energy
        if((elapsedTime / 1000) % 20 == 0){
            //Logger.log(elapsedTime)
            checkBuilding(1)
            checkBuilding(2)
            checkBuilding(3)
        }
    }
}

function checkBuilding(team) {
    coalProduction(team)
    fossilProduction(team)
    solarProduction(team)
    turbineProduction(team)
    hydroProduction(team)
}

function checkAction(team){
    var teamNumber = (team + 8).toString()

    // farm
    cell = "B" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("adding a farm")
        farm(team)
        return
    }

    cell = "C" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("fishing")
        fish(team)
        return
    }

    cell = "D" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("hunting")
        hunt(team)
        return
    }

    cell = "E" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("import food")
        imFood(team)
        return
    }

    cell = "F" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("export food")
        exFood(team)
        return
    }

    cell = "G" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("chop trees")
        chop(team)
        return
    }

    cell = "H" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("mine metal")
        metal(team)
        return
    }

    cell = "I" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("mine fossil")
        fossil(team)
        return
    }

    cell = "J" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("Coal Factory")
        coal(team)
        return
    }

    cell = "K" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("Fossil Powerplant")
        fossilPlant(team)
        return
    }

    cell = "L" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("Solar Panels")
        solarPanel(team)
        return
    }

    cell = "M" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("Wind Turbine")
        turbine(team)
        return
    }

    cell = "N" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("Hydro Power")
        hydro(team)
        return
    }

    cell = "O" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("protect endangered species")
        protect(team)
        return
    }

    cell = "P" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("prevent buildings")
        preventBuild(team)
        return
    }

    cell = "Q" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("pick flowers")
        flower(team)
        return
    }

    cell = "R" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("burn waste")
        burn(team)
        return
    }

    cell = "S" + teamNumber
    //Logger.log(cell)
    value = sheet.getRange(cell).isChecked()
    if(value){
        sheet.getRange(cell).uncheck()
        Logger.log("recycle waste")
        recycle(team)
        return
    }
}

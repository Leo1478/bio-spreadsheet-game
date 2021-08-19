//Commands
//Food: farm; fish; hunt; exFood; imFood
//Material: chop; metal; fossil
//BioDiversity: flower; preventBuild; protect
//Waste: burn; recycle
//Energy: n/a

function main() {
    mainLoop()
}

function reset() {


    //team 1
    sheet.getRange("B2").setValue(50)
    sheet.getRange("C2").setValue(20)
    sheet.getRange("D2").setValue(20)

    //team 2
    sheet.getRange("B3").setValue(20)
    sheet.getRange("C3").setValue(50)
    sheet.getRange("D3").setValue(20)

    //team 3
    sheet.getRange("B4").setValue(20)
    sheet.getRange("C4").setValue(20)
    sheet.getRange("D4").setValue(50)


    /*
    sheet.getRange("C2:E4").setValue(20)
    sheet.getRange("D2").setValue(50)
    sheet.getRange("E3").setValue(50)
    sheet.getRange("C4").setValue(50)
    range = BIOD + "2:" + BIOD + "4"
    sheet.getRange("F2:F4").setValue(30)
    range = WASTE + "2:" + WASTE + "4"
    sheet.getRange("G2:G4").setValue(10)
    sheet.getRange("J2:N4").setValue(0)
    */

}
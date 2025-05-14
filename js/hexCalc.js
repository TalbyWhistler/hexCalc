
// change this based on the name of the output area 
let NAME_OF_OUTPUT_ZONE = "outputArea";

//      BUTTON HANDLERS     //
/**
 * Function to handle the pressing of the hex calculator keypad
 * @param {integer function code that tells which button was pressed} button 
 * @returns void
 */
function handle_hexCalcButton(button)
{
    valueString='0123456789abcdef'   
    existingContent=document.getElementById("displayBandHex").innerText;
    console.log("Existing content is " + existingContent);
    console.log("The hex calculatorbutton hasbeen pressed, the value is " + button);
    if ( button === -3 )
    {
        clearHexBandDisplay();
        return;
    }
    if (existingContent==='$0')
    {
        displayHexCalculator('$' + valueString.substring(button,button+1));
    }
    else 
    {
        if (existingContent.length<5)
        {
            displayHexCalculator(existingContent+valueString.substring(button,button+1));
        }
    }
}

/**
 * Handles the pressing of the decimal keypad buttons
 * @param {button code} button 
 * @returns 
 */

function handle_decCalcButton(button)
{
    existingContent=document.getElementById("displayBandDecimal").innerText;
    console.log("Existing content is " + existingContent);
    console.log("The decimal calculator button has been pressed, the value is " + button);
    if ( button === -3 )
        {
            clearDecBandDisplay();
            return;
        }
    else if ( button === -4 )
    {
        clearDecBandDisplay();
        clearHexBandDisplay();
        return;
    }

    if (existingContent==='0')
    {
        displayDecCalculator(button);
    }
    else 
    {
        displayDecCalculator(existingContent+button);
    }
    
}

/**
 * Handles the operator buttons on thebottom
 * @param {button code} button 
 */
function handle_operationsButton(button)
{
    console.log("An operations button has been pressed the function code was " + button);
    if (button === 0)
    {
        console.log("Add button has been pressed")
        addFunction();
    }
    else if (button===1)
    {
        console.log("Hex minus decimal");
        hSubDFunction();
    }
    else if (button===2)
    {
        console.log("Dec minus hex");
        dSubHFunction();
    }
    else if (button===3)
    {
        console.log("Multiply");
        multFunction();
    }
}


//  OPERATOR BUTTON FUNCTIONS // 
/**
 * The add operator function
 */
function addFunction()
{
    hexContent = document.getElementById("displayBandHex").innerText;
    console.log("Add function, hex content is " + hexContent);
    decContent = document.getElementById("displayBandDecimal").innerText;
    console.log("Add function, dec content is" + decContent);
    convertedHexIn = convertHexToDecimal(hexContent);
    console.log("Converted hex in is " + convertedHexIn);
    sumDec = parseInt(convertedHexIn) + parseInt(decContent);
    sumHex = convertDecimalToHex(sumDec);
   // displayDecCalculator(sumDec);
   // displayHexCalculator(sumHex);
   displayResultCalculator('H:' + sumHex + '   D:' + sumDec);
}

/**
 * Hex subtract decimal operator function
 */
function hSubDFunction()
{
    hexContent = document.getElementById("displayBandHex").innerText;
    console.log("hSubDFunction, hex content is " + hexContent);
    decContent = document.getElementById("displayBandDecimal").innerText;
    console.log("hSubDFunction, dec content is" + decContent);
    convertedHexIn = convertHexToDecimal(hexContent);
    console.log("convertedHexIn is " + convertedHexIn);
    resultDec = parseInt(convertedHexIn) - parseInt(decContent);
    resultHex = convertDecimalToHex(resultDec);
   // displayDecCalculator(resultDec);
   // displayHexCalculator(resultHex);
   displayResultCalculator('H:' + resultHex + '   D:' + resultDec);
}

/**
 * Dec subtract hex operator function
 */
function dSubHFunction()
{
    hexContent = document.getElementById("displayBandHex").innerText;
    console.log("hSubDFunction, hex content is " + hexContent);
    decContent = document.getElementById("displayBandDecimal").innerText;
    console.log("hSubDFunction, dec content is" + decContent);
    convertedHexIn = convertHexToDecimal(hexContent);
    console.log("convertedHexIn is " + convertedHexIn);
    resultDec =  parseInt(decContent) - parseInt(convertedHexIn);
    resultHex = convertDecimalToHex(resultDec);
   // displayDecCalculator(resultDec);
   // displayHexCalculator(resultHex);
   displayResultCalculator('H:' + resultHex + '   D:' + resultDec);
}

/**
 * Multiplication operator function
 */
function multFunction()
{
    hexContent = document.getElementById("displayBandHex").innerText;
    console.log("hSubDFunction, hex content is " + hexContent);
    decContent = document.getElementById("displayBandDecimal").innerText;
    console.log("hSubDFunction, dec content is" + decContent);
    convertedHexIn = convertHexToDecimal(hexContent);
    console.log("convertedHexIn is " + convertedHexIn);
    resultDec =  parseInt(decContent) * parseInt(convertedHexIn);
    resultHex = convertDecimalToHex(resultDec);
   // displayDecCalculator(resultDec);
   // displayHexCalculator(resultHex);
   displayResultCalculator('H:' + resultHex + '   D:' + resultDec);
}



// DISPLAY AND CLEAR FUNCTIONS  //
function displayDecCalculator(newValue)
{
    document.getElementById("displayBandDecimal").innerHTML='<p>' + newValue + '</p>';
}

function displayHexCalculator(newValue)
{
    document.getElementById("displayBandHex").innerHTML='<p>' + newValue + '</p>';
}

function displayResultCalculator(newValue)
{
    document.getElementById("displayBandResult").innerHTML='<p>' + newValue + '</p>';
}

function clearDisplayValues()
{
    document.getElementById("displayBandHex").innerHTML="<p>$0</p>";
    document.getElementById("displayBandDecimal").innerHTML="<p>0</p>";
    console.log(convertDecimalToHex(512));
}

function clearHexBandDisplay()
{
    addFlag = false;
    addTerm = 0;
    document.getElementById("displayBandHex").innerHTML="<p>$0</p>";
    displayResultCalculator("H:$0    D:0");;
}

function clearDecBandDisplay()
{
    addFlag = false;
    addTerm = 0;
    document.getElementById("displayBandDecimal").innerHTML="<p>0</p>";
    displayResultCalculator("H:$0    D:0");;
}

//      HEX DEX CONVERTERS    // 
function convertDecimalToHex(inputDecimal)
{
    if (inputDecimal < 0 || inputDecimal > 65536 )
    {
        return -1
    }
    valueString='0123456789ABCDEF';
    valueArray=[4096,256,16,1];
    hexTotalTally = 0;
    hexOutput = '$';
    console.log("inputDecimal is " + inputDecimal);
    cycleCounter=String(inputDecimal).length;
    console.log("cycleCounter is " + cycleCounter);
    valueCursor=4-String(inputDecimal).length;
    if ( valueCursor < 0 )
    {
        valueCursor = 0;
    }
    console.log("Value cursor is " + valueCursor);

    while (cycleCounter >0 )
    {
        
        hexDigit=0;
        value=valueArray[valueCursor];
        console.log("Value is " + value);
        hexCharCounter=0;

        while (inputDecimal>=value)
        {
            inputDecimal-=value;
            hexDigit+=value;
            hexCharCounter++;
        }
        hexChar = valueString.substring(hexCharCounter,hexCharCounter+1);
        console.log("hexChar is " + hexChar);
        if (hexOutput.length < 5 )
        {
            hexOutput+=hexChar;
        }
        console.log("Value cursor is " + valueCursor);
        valueCursor++;
        console.log("Cyclecounter is " + cycleCounter);
        cycleCounter--;
    }
    
    return hexOutput;
}


function convertHexToDecimal(inputHex)
    {
    
        valueString = '0123456789abcdef';
        valueStringCapital = '0123456789ABCDEF';
        multiplierArray = [1,16,256,4096]
        // deal with $ 
        console.log("Input Hex is " + inputHex);
        if (inputHex.substring(0,1) !=='$')
        {
            return -1;
        }
        else 
        {
            inputHex=inputHex.substring(1,inputHex.length);
        }
        console.log("Input Hex is now " + inputHex)
        // deal with size 
        if (inputHex.length>4)
        {
            return -1;
        }

        if (inputHex.length===0)
        {
            return -1;
        }
        cycleCounter=inputHex.length;
        console.log("Cycle counter is " + cycleCounter);
        totalTally = 0;

        while (cycleCounter>0)
        {
            char = inputHex.substring(cycleCounter-1,cycleCounter);
            console.log("Char is " + char);
            charValue = valueString.indexOf(char);
            if (charValue === -1)
            {
                charValue = valueStringCapital.indexOf(char);
            }
            if (charValue === -1)
            {
                return -1;
            }
            console.log("Char value is " + charValue);
            multiplier = multiplierArray[inputHex.length-cycleCounter];
            console.log("Multiplier is " + multiplier);
            totalTally+=charValue*multiplier;
            console.log("Total tally is now " + totalTally);
            cycleCounter--;
            console.log("Cycle counter is now " + cycleCounter);
        }
        return totalTally;
    }

//      INTEGRATED CALULATOR OBJECT             //
function integratedCalculator()
{
     function outputToPage(content)
    {
        document.getElementById(NAME_OF_OUTPUT_ZONE).innerHTML=content;
    }
    
    // components 

    function displayBandDecimal()
    {
        functionContent="<div class=\"container\ bg-black text-white\ fs-3 text-end\" id='displayBandDecimal'>";
        functionContent+="0";
        functionContent+="</div>";
        return functionContent;
    }


    function displayBandHex()
    {
        functionContent="<div class=\"container\ bg-warning text-black\ fs-3 text-end\" id='displayBandHex'>";    
        functionContent+="0";
        functionContent+="</div>";
        return functionContent;
    }   

    function displayBandResult()
    {
        functionContent="<div class=\"container\ bg-success text-warning\ fs-3 text-end my-1 py-0\" id='displayBandResult'>";    
        functionContent+="0";
        functionContent+="</div>";
        return functionContent;
    }

    function hexButton(buttonText,functionInteger)
    {
        functionContent="<div class='col-3 mx-0 px-0'>";
        functionContent+="<div class='button border border-black text-center bg-warning text-black mx-0 px-0 w-100 fs-3' id='hexButton' onclick='handle_hexCalcButton(" + functionInteger + ")'>" + buttonText + "</div>";
        functionContent+="</div>";
        return functionContent;
    }

    function decimalButton(buttonText,functionInteger)
    {
        functionContent="<div class='col-4 mx-0 px-0'>";
        functionContent+="<div class='button text-center bg-dark text-white border border-white fs-3' id='decButton' onclick='handle_decCalcButton(" + functionInteger + ")'>" + buttonText + "</div>";
        functionContent+="</div>";
        return functionContent;
    }

    function hexKeyPad()
    {
        // keypad countainer
        functionContent="<div class='container border border-black my-2'>";
        functionContent+="<p>Hex Keypad</p>";

        // row 0
        functionContent+="<div class='row'>";
        functionContent+=hexButton('c',12)
        functionContent+=hexButton('d',13);
        functionContent+=hexButton('e',14);
        functionContent+=hexButton('f',15);
        functionContent+="</div>"; // end of row

        // row 1
        functionContent+="<div class='row'>";
        functionContent+=hexButton('8',8);
        functionContent+=hexButton('9',9);
        functionContent+=hexButton('a',10);
        functionContent+=hexButton('b',11);
        functionContent+="</div>"; // end of row

        // row 2
        functionContent+="<div class='row'>";
        functionContent+=hexButton('4',4);
        functionContent+=hexButton('5',5);
        functionContent+=hexButton('6',6);
        functionContent+=hexButton('7',7);

        functionContent+="</div>"; // end of row

        // row 3
        functionContent+="<div class='row'>";
        functionContent+=hexButton('0',0);
        functionContent+=hexButton('1',1);
        functionContent+=hexButton('2',2);
        functionContent+=hexButton('3',3);
        functionContent+="</div>"; // end of row
        functionContent+="<div class='row'>";
        functionContent+=hexButton('CLEAR',-3);
        functionContent+="</div>"; // end of row
        functionContent+="</div>"; // end of container
        return functionContent;
    }

    function decimalKeyPad()
    {
        functionContent="<div class='container border border-black'>"
        functionContent+="<p>Decimal Keypad</p>";
        functionContent+="<div class='row'>";
        // row#0
    
        functionContent+=decimalButton('7',7);
        functionContent+=decimalButton('8',8);
        functionContent+=decimalButton('9',9);
        functionContent+="</div>";
        functionContent+="<div class='row'>";
        // row#1
        functionContent+=decimalButton('4',4);
        functionContent+=decimalButton('5',5);
        functionContent+=decimalButton('6',6);
        functionContent+="</div>";
        functionContent+="<div class='row'>";
        // row#2
        functionContent+=decimalButton('1',1);
        functionContent+=decimalButton('2',2);
        functionContent+=decimalButton('3',3);     
        functionContent+="</div>";
        functionContent+="<div class='row'>";
        // row#3
        
        functionContent+=decimalButton('0',0);
        functionContent+=decimalButton('CLEAR',-3);
        functionContent+=decimalButton('AC',-4);
        functionContent+="</div>";
        functionContent+="<div class='row'>";
        // row #4
        
        functionContent+="</div>"
        functionContent+="</div>";
        return functionContent;
    }

    function operationsButton(text,value)
    {
        fc = "<div class='col-3 border border-black bg-primary text-white fs-5'><div class='button' onclick='handle_operationsButton(" + value + ")'>" + text + "</div></div>";      
        return fc;
    }
    function operationsKeypad()
    {   
        // fc=functionContent
        fc = "<div class='container border border-primary my-2'>";
            fc +="<div class='row'>";
            fc += operationsButton("add",0);
            fc += operationsButton("H - D",1);
            fc += operationsButton("D - H",2);
            fc += operationsButton("mult",3);
            fc += "</div";
        fc += "</div>";
        return fc;
    }


    // final assembly and output (may need a container)
  //  functionContent="<p>Hex output</p>";
    functionContent=displayBandHex();
  //  functionContent+="<p>Decimal Output</p>";
    functionContent+=displayBandDecimal();
    functionContent+=displayBandResult();
    functionContent+=hexKeyPad();
    functionContent+=decimalKeyPad(); 
    functionContent+=operationsKeypad();
    calculatorHeading = "<h5>HexDecimal Calculator</h5>"
    outputToPage("<div class='container my-3 py-2 border border-black'>"+calculatorHeading + functionContent + "<div>");
    displayDecCalculator(0); 
    displayHexCalculator('$0')
    displayResultCalculator("H:$0    D:0");
}


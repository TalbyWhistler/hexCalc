function handle_hexCalcButton(button)
{
    console.log("The hex calculatorbutton hasbeen pressed, the value is " + button);
    if ( button === -3 )
    {
        clearDisplayValues();
        return;
    }
    displayHexCalculator(button);
}

function handle_decCalcButton(button)
{
    console.log("The decimal calculator button has been pressed, the value is " + button);
    if ( button === -3 )
        {
            clearDisplayValues();
            return;
        }
    displayDecCalculator(button);
}

function displayDecCalculator(newValue)
{
    document.getElementById("displayBandDecimal").innerHTML='<p>' + newValue + '</p>';
}

function displayHexCalculator(newValue)
{
    document.getElementById("displayBandHex").innerHTML='<p>' + newValue + '</p>';
}

function clearDisplayValues()
{
    document.getElementById("displayBandHex").innerHTML="<p>0</p>";
    document.getElementById("displayBandDecimal").innerHTML="<p>0</p>";
    console.log(convertDecimalToHex(512));
}

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


export function integratedCalculator()
{
    //  internal calculator functions
    
    


    
// sets both calculator display values to 0


     function outputToPage(content)
    {
        document.getElementById("contentArea").innerHTML=content;
    }

    // button handlers 
    

    // components 

    function displayBandDecimal()
    {
        functionContent="<div class=\"container\ bg-black text-white\ text-end\" id='displayBandDecimal'>";
        functionContent+="0";
        functionContent+="</div>";
        return functionContent;
    }


    function displayBandHex()
    {
        functionContent="<div class=\"container\ bg-success text-warning\ text-end\" id='displayBandHex'>";    
        functionContent+="0";
        functionContent+="</div>";
        return functionContent;
    }   

    function hexButton(buttonText,functionInteger)
    {
        functionContent="<div class='col-3'>";
        functionContent+="<div class='button text-center bg-warning text-black mx-0 px-0 w-100' id='hexButton' onclick='handle_hexCalcButton(" + functionInteger + ")'>" + buttonText + "</div>";
        functionContent+="</div>";
        return functionContent;

    }

    function decimalButton(buttonText,functionInteger)
    {
        functionContent="<div class='col-4'>";
        functionContent+="<div class='button text-center bg-dark text-white border border-white' id='decButton' onclick='handle_decCalcButton(" + functionInteger + ")'>" + buttonText + "</div>";
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
        functionContent+=hexButton('a',0);
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

        functionContent+="</div>";
        functionContent+="<div class='row'>";
        // row #4
        
    
        functionContent+="</div>"
        functionContent+="</div>";
        return functionContent;
    }


    // final assembly and output (may need a container)
    functionContent+="<p>Hex output</p>";

    functionContent+=displayBandHex();
    functionContent+="<p>Decimal Output</p>";
    functionContent+=displayBandDecimal();
   
    functionContent+=decimalKeyPad();
   
    functionContent+=hexKeyPad();
    //displayDecCalculator(0); 
    //displayHexCalculator('$0')
    return functionContent;
}



function add()
{
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    document.write(num1+num2);
}
function subtract()
{
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    document.write(num1-num2);
}



/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//console.log("1. Add\n"+ "2. Subtract\n");

rl.question("Pick a function: ", function(name) {
    rl.question("Enter num1 ", function(num1) {
        rl.question("Enter num2 ", function(num2){
            if(name==1)
            {
                console.log(add(parseInt(num1),parseInt(num2)));
            }
            if(name==2)
            {
                console.log(subtract(parseInt(num1),parseInt(num2)));
            }
            rl.close();
        })
        //console.log(`${name}, is a citizen of ${country}`);
        
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
*/

function add(num1,num2)
{
    document.write(num1+num2);
    return num1+num2;
}
function subtract(num1,num2)
{
    return num1-num2;
}
function myfunction()
{
    document.write("Welcome to javascript");
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("1. Add\n"+ "2. Subtract\n");

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

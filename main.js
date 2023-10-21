document.write(" print a pattern of start left using do while loop "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));
let i=1;
do{
   
    let j=1;
    do{
        document.write("*");
        j++;
    }
    while(j<=i)
    document.write("<br>");
    i++;    
}
while(i<=n)

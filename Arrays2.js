var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i ++){
    console.log (arr[i]);
}


function encontrarLetraP(string){
    var letra  = string.split ("");
    for (let i1 = 0; i1 < letra.length; i1 ++){
        if (letra[i1] === "p"){
        console.log ("Si contiene la letra P");
        }
    }
}

encontrarLetraP("JavaScript");
encontrarLetraP("Henry");


var arr = [];
while (arr.length < 5){
    arr.push ("BOOM");
}
console.log (arr);



//var arr2 = [];
//var n = 1;
//while (n < 3){
//    arr2.push (Math.random());
//}
// Codigo de fallas.


var numList = new Array();





function addNum(){
    var myNum = document.getElementById("numInp").value;
    if(myNum == "")
    {
        console.log("Számot kell megadni");
    }
    else
    {
        numList.push(parseInt(myNum) )
        console.log(numList)
    }
}






var numList = new Array();





function addNum(){
    var myNum = document.getElementById("numInp").value;
    if(myNum == "")
    {
        console.log("Számot kell megadni");
        alert("Számot kell megadni")
    }
    else
    {
        numList.push(parseInt(myNum) )
        console.log(numList)
        document.getElementById("numsListed").innerHTML += myNum + ","
    }
}


function minSearch(){
    var minNum = numList[0];
    for(var i = 0; i < numList.length; i++)
    {
        if(numList[i] < minNum)
        {
            minNum = numList[i];
        }
    }
    document.getElementById("minimumPar").innerHTML = "Minimum érték:  " + minNum;
}


function maxSearch(){
    var maxNum = numList[0];
    for(var i = 0; i < numList.length; i++)
    {
        if(numList[i] > maxNum)
        {
            maxNum = numList[i];
        }
    }
    document.getElementById("maxPar").innerHTML = "Maximum érték: " +maxNum;
}




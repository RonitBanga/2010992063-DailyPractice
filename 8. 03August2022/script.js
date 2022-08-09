

function Even(){

    var n = document.getElementById("inputa").value;
    console.log(n);
    document.getElementById("box").innerHTML=n;
    for(var i=0;i<=n;i++){
        if(i%2==0){
            console.log(i);
            // document.getElementById("box").innerHTML=i;

        }
    }
}


function Function2(){

    var l = document.getElementById("l").value;
    var r = document.getElementById("r").value;
    var k = document.getElementById("k").value;
    var count=0;
    

    for(let j=l;j<=r;j++){
        if(j%k==0){
            count = count+1;
        }
    }
    

    document.getElementById("box1").innerHTML=count;

}


function Function3(){

    // var dayn = new Date().getDay();

    var day;

    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thrusday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    document.getElementById("box3").innerHTML="Today is " + day;
}



function Function4(){
    document.getElementById("box4").style.cssText += 'border-radius: 50px;transition-duration: 5s;';
}
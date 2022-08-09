
        // var price1 = 6;
        // var price2 = "5";
        // var price3 = 4;
        // var totalprice = price1 + price2 + price3;
        // // console.log(totalprice);
        // document.getElementById("demo").innerHTML = "The total is: " + totalprice; 

        // let person = {         //object 
        //     firstName : "John",
        //     lastName : "Doe",
        //     age : 55,
        //     eyeColor : "Blur",
        // };
        // document.getElementById("demo").innerHTML = person.firstName + ", Ade is " + person.age;

        // var n = Number('123');
        // n = n+2;
        // var s = "2";
        // s = n+s;
        // document.getElementById("demo").innerHTML = "n (123 + 2) " + n + ", s (n + s) " + s;

        function fnClick(){
            // // alert("Hi, How are you?");
            // document.getElementById("demo").innerHTML = "Hi";
            // var n1 = document.getElementById("n1").value;
            // var n2 = document.getElementById("n2").value;
            // if(!isNaN(n1) && !isNaN(n2)){
            //     n1 = Number(n1);
            //     n2 = Number(n2);
            //     document.getElementById("demo").innerHTML = n1+n2;
            // }else{
            //     document.getElementById("demo").innerHTML = "<span style='color:red'>Please enter numeric value.</span>"
            // }


            let n1 = document.getElementById("n1").value;
                if(n1%2 == 0){
                    document.getElementById("demo").innerHTML = "Even Number";
                }else{
                    document.getElementById("demo").innerHTML = "Odd Number";
                }
            
        }

        function fnClick_1(){
            document.getElementById("demo").innerHTML = Boolean(10>9);
        }
        
    
window.onload = function() {
    var button = document.getElementById("lookup");
    var check = document.getElementById("all");
    var country = document.getElementById("country");
    button.addEventListener("click", function(event) {
        
        if (check.checked && country.value!="")
        {
            alert("Please enter a country OR select the checkbox");
            event.preventDefault();      
        }
        else if(check.checked && country.value=="") {
            var url = "world.php?all=true";
        }
        else {
            var url = "world.php?country=" + country.value;
        }

       let xhhtp_request=new XMLHttpRequest();
       xhhtp_request.onreadystatechange=function(){
           if (xhhtp_request.readyState ==4 && xhhtp_request.status ==200)
           {
              document.getElementById("result").innerHTML="<h2>Result</h2>"+xhhtp_request.responseText;
           }
       };

        xhhtp_request.open("GET", url, true);
        xhhtp_request.send();
    });
};

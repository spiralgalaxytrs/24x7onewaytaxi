function testVariable() {

    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
    var rate;
    var Clink = "https://xyz.com";
    var CPh = "900000000";
    var Cname = "24x7";

    console.log("its working ");
    //calcRoute()
    if ((strText7 == "Sedan") && (strText8 == "One-Way")) { rate = sedano; }
    else if ((strText7 == "Sedan") && (strText8 = "Round")) { rate = sedanr; }
    else if ((strText7 == "SUV") && (strText8 == "One-Way")) { rate = suvo; }
    else if ((strText7 == "SUV") && (strText8 == "Round")) { rate = suvr; }
    else if (strText7 == "Traveller") { rate = traveller; }

    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 + '%0APickup Location: ' + strText2 + '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 + '%0AService: ' + strText8 + '%0ACars: ' + strText7 + "%0APrice:" + rate;

    var finalMsg = encodeURI(result);
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if (strText == "" || strText1 == "" || strText2 == "" || strText3 == "" || strText4 == "" || strText6 == "") {
            console.log('error');
        } else {
            const request = new XMLHttpRequest();
            const url = 'https://api.telegram.org/bot1507830231:AAFU0Rh0HBOxc1o09T-h9cyyKV2gDD3QJbQ/sendMessage?chat_id=-1002056974382&text=' + result;
            request.open("post", url);
            request.send();
            fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message=" + Clink + "/%0AContact No: " + CPh + "%0AHello " + strText + ",%0AThank you for Booking with " + Cname + ".Your " + strText2 + " Booking has been Confirmed on " + strText4 + ".&language=english&route=p&numbers=" + strText1)
                .then(response => {
                    if (response.status == 200) {
                        console.log("red");
                        localStorage.setItem("result", rate);
                        localStorage.setItem("result1", strText7);
                        window.location.href = "bookingSuccess.html";
                    }
                })
        }

    });
}


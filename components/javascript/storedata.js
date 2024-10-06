function storeData() {
                
    const userAddress = document.getElementById("address").value.trim();
    const userDate = document.getElementById("date").value.trim();

    let messageAddress = '';
    let messageDate = '';
    let debugUrl = "http://34.66.120.146:5000/get?addr=" + userAddress + "&date=" + userDate;
    let theUrl = "http://34.66.120.146:5000/get?addr=" + userAddress + "&date=" + userDate;

    if (userAddress) {
        messageAddress += "Address stored: " + userAddress;
    } else {
        messageAddress += "Please enter a valid address. ";
    }

    if (isValidDate(userDate)) {
        messageDate += "Date stored: " + userDate;
        
    } else {
        debugUrl = "Not Valid Date"
        messageDate += "Enter a valid date.";
    }
    
    document.getElementById("resultMessageAddress").innerText = messageAddress;
    document.getElementById("resultMessageDate").innerText = messageDate;
    document.getElementById("debugUrl").innerText = debugUrl;   

    if (isValidDate(userDate)) {    
        var flights = JSON.parse(getFlights(theUrl, true));
        console.log(flights);
        console.log("~~~~~~~~~~~~~~~ WEEEEEEEEEEE ~~~~~~~~~~~~~~")
        var flightResult = parseFlights(flights);
        console.log(flightResult);
    }

    document.getElementById("resultFlights").innerText = flightResult;

}
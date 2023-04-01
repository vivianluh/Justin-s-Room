
function showTime(){ //execute the showTime function
    //this function retrieves the current time on your computer and displays it in the browser

    var date = new Date(); //this creates a date object with the current date and time
    var h = date.getHours(); // 0 - 23 //returns the hour according to the local time 
    var m = date.getMinutes(); // 0 - 59 //returns the minutes according to the local time 
    var s = date.getSeconds(); // 0 - 59 //returns the seconds according to the local time 
    var session = "AM"; //create variable of 'am'
    
    //conditional statement if the hour is from 0 to 12 returns true, nothing happens/use AM
    if(h == 0){
        h = 12;
    }
    
    //if the hour is less than 12 where the hour is in the PM essentially (h - 12 in the pm as there are 24 hours, use PM)
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    //created a string
    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
  }
  
  showTime();
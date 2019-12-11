function v(time){
    time = time*60;
    setTimeout(function(){ alert("Finish"); }, (time*1000));
    n();
}

function n() {
    
    var t = document.getElementById("time").innerHTML;
    
    var hour = t.charAt(0) + t.charAt(1);
    var minute = t.charAt(3) + t.charAt(4);
    var second = t.charAt(6) + t.charAt(7);
    
    if(second == 0){
        if(minute > 0){
            minute--;
            second = 59;
        } else{
            hour--;
            minute = 59;
            second = 59;
        }
    }else {
        second--;
    }
    
    hour =  parseInt(hour);
    minute =  parseInt(minute);
    second =  parseInt(second);
    
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
    if(second != 0 || minute != 0 || hour != 0){
        setTimeout(function(){ n() }, 1000);
    }
    
    
//    var time = 120;
//    var minute = parseInt((time / 60), 10);
//    var hour = time % 60;
//    console.log("120 / 60  =  " + minute);
//    console.log("120 % 60  =  " + hour);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
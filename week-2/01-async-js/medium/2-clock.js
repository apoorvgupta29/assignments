// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let hh,mm,ss,val;
const current = new Date();
hh=current.getHours();
mm=current.getMinutes();
ss=current.getSeconds();
val="AM";

    const interval= setInterval(()=>{
        if (ss>=59){
            ss=0;
            mm++;
        }
        
        if (mm>59){
            mm=0;
            hh++;
        }
        if (hh>12){
            hh=1;
        }
        if (hh>11||hh==0){
            hh=12;
            if(val=="PM"){
                val=val.replace("PM","AM");
            }
            else{
                val=val.replace("AM","PM");
            }
        }
        ss++;
        console.log(hh+":"+mm+":"+ss+"  "+val);
       
    }, 1000);


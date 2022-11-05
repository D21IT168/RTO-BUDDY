
function timer(){    
    if(sec!=0&&cnt!=16)
    {
        sec--;
    }
    else if(cnt!=15){
        if(i>=14)
        {
            document.getElementById('next').style.display = 'none';
        }
        else{
            gen();
        }
    }
    document.getElementById('min').innerHTML = sec;	
    if(cnt>=16)
    {
        document.getElementById('submit').style.display = 'none';
        clearInterval(y);
    }
}
var y = setInterval(timer,1000);

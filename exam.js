var q,r;
    var i=-1,k=0,j=0,l=0,m=-1;
    var c=[];
    var img,img2;
    var flag=0,cnt=0,correct=0,wrong=0,nullans=0;
    document.getElementById('result').style.display="none";
    // document.getElementById('main').style.display="none";		
    document.getElementById('resultsec').style.display="none";	
    function result(){
        document.getElementById('resultsec').style.display="block";	
        document.getElementById('main').style.display="none";
        document.getElementById('correctans').innerHTML=correct+"<br>"+"correct";
        document.getElementById('wrongans').innerHTML = 15 - correct+"<br>"+"wrong";
    }
    function uncheck(){
		document.getElementById('op1').checked = false;
		document.getElementById('op2').checked = false;
		document.getElementById('op3').checked = false;
    }
    function findAnswer(){
        if(document.getElementById('op1').checked == true)
        {
            document.getElementById('cor').innerHTML="";
            document.getElementById('cor').style='none';

        }
        else if(document.getElementById('op2').checked == true)
        {
            document.getElementById('cor').innerHTML="";
            document.getElementById('cor').style='none';
        }
        else if(document.getElementById('op3').checked == true)
        {
            document.getElementById('cor').innerHTML="";
            document.getElementById('cor').style='none';
        }
        document.getElementById("label1").style.backgroundColor = "white";
        document.getElementById("label2").style.backgroundColor = "white";
        document.getElementById("label3").style.backgroundColor = "white";
    }
    function checknull(){
        if(i>=15)
        {
            findAnswer();
            document.getElementById('submit').style.display="none";
            
            document.getElementById('next').style.display = 'none';
        }
        else{
            if(document.getElementById('op1').checked == true){
                if(q.ans=='1')
                {
                    document.getElementById('cor').innerHTML="correct";
                    document.getElementById('cor').style.color="rgb(255,60,0)";
                    document.getElementById('cor').style.backgroundColor="greenyellow";
                    correct++;
                }
                else
                {
                    document.getElementById('cor').innerHTML="wrong";
                    document.getElementById('cor').style.color="greenyellow";
                    document.getElementById('cor').style.backgroundColor="rgb(255,60,0)";
                    document.getElementById("label1").style.backgroundColor = "rgb(255,60,0)";
                    document.getElementById(eval(i+1)+'opt1').style.backgroundColor='rgb(255,60,0)';
                }
                document.getElementById('next').style.display = 'block';
                document.getElementById('submit').style.display = 'none';
            }
            else if(document.getElementById('op2').checked == true)
            {
                if(q.ans=='2')
                {
                    document.getElementById('cor').innerHTML="correct";
                    document.getElementById('cor').style.color="rgb(255,60,0)";
                    document.getElementById('cor').style.backgroundColor="greenyellow";
                    correct++;
                }
                else
                {
                    document.getElementById('cor').innerHTML="wrong";
                    document.getElementById('cor').style.color="greenyellow";
                    document.getElementById('cor').style.backgroundColor="rgb(255,60,0)";
                    document.getElementById("label2").style.backgroundColor = "rgb(255,60,0)";
                    document.getElementById(eval(i+1)+'opt2').style.backgroundColor='rgb(255,60,0)';
                }
                document.getElementById('next').style.display = 'block';
                document.getElementById('submit').style.display = 'none';
            }
            else if(document.getElementById('op3').checked == true)
            {
                if(q.ans=='3')
                {
                    document.getElementById('cor').innerHTML="correct";
                    document.getElementById('cor').style.color="rgb(255,60,0)";
                    document.getElementById('cor').style.backgroundColor="greenyellow";
                    correct++;
                }
                else
                {
                    document.getElementById('cor').innerHTML="wrong";
                    document.getElementById('cor').style.color="greenyellow";
                    document.getElementById('cor').style.backgroundColor="rgb(255,60,0)";
                    document.getElementById("label3").style.backgroundColor = "rgb(255,60,0)";
                    document.getElementById(eval(i+1)+'opt3').style.backgroundColor='rgb(255,60,0)';
                }
                document.getElementById('next').style.display = 'block';
                document.getElementById('submit').style.display = 'none';
            }
            else{
                document.getElementById('next').style.display = 'none';
                document.getElementById('submit').style.display = 'block';
            }
            if(document.getElementById('op1').checked == true||document.getElementById('op2').checked == true||document.getElementById('op3').checked == true){
            document.getElementById('label'+q.ans).style.backgroundColor = "greenyellow";
            document.getElementById('result').disabled = false;
            }
        }
        if(i>=14)
        {
            document.getElementById('next').style.display = 'none';
        }

    }
    var mIndex = [];
function gen(){
    document.getElementById('next').style.display = 'none';
    
    if(i!=-1)
    {       
        findAnswer();
    }
    i=i+1;
    m=m+1;
    sec = 48 ;
    document.getElementById('min').innerHTML=48;
    j=Math.floor(Math.random() *(205))+1;
    for(let z=0;z<mIndex.length;z++)
    {
        if(j==mIndex[z])
            j=Math.floor(Math.random() *(205))+1;
    }
    mIndex.push(j);
    l=j;
    q=data[j];	
    n=document.getElementById('no').innerHTML;
    n="Q."+eval(i+1);
    document.getElementById('no').innerHTML=n;
    document.getElementById(eval(i+1)+'no').innerHTML=n;	
    document.getElementById('num').innerHTML=eval(i+1)+"/"+"15";	
    que=document.getElementById('question').innerHTML;
    que=q.question;
    document.getElementById('question').innerHTML=que;
    document.getElementById(eval(i+1)+'que').innerHTML=que;
    if(q.im=="1")
    {
        img = document.getElementById('img');
        img.style.display="block";
        document.getElementById('img').src=q.imsr;
        document.getElementById(eval(i+1)+'img').src=q.imsr;
    }
    else{
        img = document.getElementById('img');
        img.style.display = "none";
        img2 = document.getElementById(eval(i+1)+'img');
        img2.style.display = "none";
    }
    que=document.getElementById('opt1').innerHTML;
    que="A."+" "+q.a;
    document.getElementById('opt1').innerHTML=que;
    document.getElementById(eval(i+1)+'opt1').innerHTML=que;
    que=document.getElementById('opt2').innerHTML;
    que="B."+" "+q.b;
    document.getElementById('opt2').innerHTML=que;
    document.getElementById(eval(i+1)+'opt2').innerHTML=que;
    que=document.getElementById('opt3').innerHTML;
    que="C."+" "+q.c;
    document.getElementById('opt3').innerHTML=que;
    document.getElementById(eval(i+1)+'opt3').innerHTML=que;
    document.getElementById(eval(i+1)+'opt'+q.ans).style.backgroundColor='greenyellow';
    cnt++;
    uncheck();
    document.getElementById('submit').style.display = 'block';	
    if(cnt>=15)
    {
        document.getElementById('next').style.display = 'none';
        document.getElementById('result').style.display="block";
        document.getElementById("result").disabled = true;	
    }
}
var c=document.getElementById('c');
var ctx=c.getContext("2d");

c.width=window.innerWidth;
c.height=window.innerHeight;

var binary="010101100101010100101010100101111010101011000101001010001010100101001010100110001001";
binary=binary.split("");

var font_size=10;
var columns=c.width/font_size;

var drops=[];
for(var x=0;x<columns;x++){
    drops[x]=1;
}
function draw(){
    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,c.width,c.height);

    ctx.fillStyle="#0F0";
    ctx.font=font_size+'px arial';

    for(var i=0;i<drops.length;i++){
        var text=binary[Math.floor(Math.random()*binary.length)];
        ctx.fillText(text,i*font_size,drops[i]*font_size);

        if(drops[i]*font_size>c.height && Math.random()>0.975){
            drops[i]=0;
        }
        drops[i]++;
    }
}
setInterval(draw,33);
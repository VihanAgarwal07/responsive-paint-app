mouse_event="";
touch_event=""
c=document.getElementById("myCanvas");
ctx=c.getContext("2d");
last_y="";
last_x="";
var Last_position_touch_x,Last_position_touch_y;

width_of_line = 2;

c.addEventListener("mousedown",MouseDown);
function MouseDown(e){
    mouse_event="Mousedown";
}
c.addEventListener("mouseup",Mouse_up);
function Mouse_up(e){
    mouse_event="Mouseup";
}
c.addEventListener("mousemove",Mouse_move);
function Mouse_move(e){
    var currentX=e.clientX-c.offsetLeft;
    var currentY=e.clientY-c.offsetTop;
    if(mouse_event=="Mousedown"){
        ctx.beginPath();
        
ctx.strokeStyle="black";
ctx.lineWidth=4;
//ctx.arc(currentX,currentY,40,0,2*Math.PI)//
ctx.moveTo(last_x,last_y);
ctx.lineTo(currentX,currentY);
ctx.stroke();
    }
    last_x=currentX;
    last_y=currentY;

}
//code of touch event 
var width=screen.width;
if(width<992){
    c.width=width-70;
    c.height=screen.height-300;
}
c.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    Last_position_touch_x=e.touch[0].clientX-c.offsetLeft; 
    Last_position_touch_y=e.touch[0].clientY-c.offsetTop; 
}
c.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    var current_position_x = e.touches[0].clientX-c.offsetLeft;
    var current_position_y= e.touches[0].clientY-c.offsetTop;

colour=document.getElementById("myTextInput").value;
width_of_line=document.getElementById("my_width_TextInput").value;
ctx.beginPath();
ctx.color=colour;
ctx.lineWidth=width_of_line;
ctx.moveTo(Last_position_touch_x,Last_position_touch_y);
ctx.lineTo(current_position_x,current_position_y)
ctx.stroke();

Last_position_touch_x=current_position_x;
Last_position_touch_y=current_position_y;
}
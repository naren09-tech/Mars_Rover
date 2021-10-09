canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_image="rover.png";
rover_x=10;
rover_y=10;
mars_images_array=["rover_1.jpg","rover_2.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*3);
background_image=mars_images_array[random_number];
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=upLoadBackground();
    background_imagetag.src=background_image;

    rover_imagetag=new Image();
    rover_imagetag.onload=upLoadRover();
    rover_imagetag.src=rover_image;
}
function upLoadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function upLoadRover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }if(keyPressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y-=10;
        console.log("when up arrow is pressed x="+rover_x+"y="+rover_y); 
        upLoadBackground();
        upLoadRover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y+=10;
        console.log("when down arrow is pressed x="+rover_x+"y="+rover_y); 
        upLoadBackground();
        upLoadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x-=10;
        console.log("when left is pressed x="+rover_x+"y="+rover_y); 
        upLoadBackground();
        upLoadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x+=10;
        console.log("when right arrow is pressed x="+rover_x+"y="+rover_y); 
        upLoadBackground();
        upLoadRover();
    }
}
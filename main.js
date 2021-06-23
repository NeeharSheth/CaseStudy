var images=["pencil.png","knife.png","binder.jpeg","blender.jpeg","penstand.jpg"];
var image_no= 0;

function change_image(){
    image_no +=1;
if(image_no==5){
image_no=0;
document.getElementById("test_image").src= images[image_no];
}
else{
document.getElementById("test_image").src= images[image_no];
}
}
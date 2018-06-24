var draw_type = 0;
var color_ = 0; // 0 = red, 1 = green, 2 = blue
var shd = 0;
var r = 0;
var b = 0;
var dir = 1;
var dg,db = 0;
var dr = 1;
function setup() {
	createCanvas(windowWidth/2, 600);
	background(51);

}

function draw() {
	if(mouseIsPressed){

		var x_ = width - mouseX;
		var y_ = height - mouseY;
		var x_p = width - pmouseX;
		var y_p = height - pmouseY;
		shd+=dir;
		if(shd >= 255 || shd <= 0){
			dir*=-1;
		}
		switch(draw_type){
			case 0:
				strokeWeight(10);
				switch(color_){
					case 0:
						stroke(shd,0,0);
						break;
					case 1:
						stroke(0,shd,0);
						break;
					case 2:
						stroke(0,0,shd);
						break;

				}
				line(mouseX,mouseY,pmouseX,pmouseY);
				line(x_, mouseY, x_p, pmouseY);
				line(x_,y_,x_p,y_p);
				line(mouseX,y_,pmouseX,y_p);
				break;
			case 1:
				strokeWeight(3);
				switch(color_){
					case 0:
						stroke(shd,0,0);
						break;
					case 1:
						stroke(0,shd,0);
						break;
					case 2:
						stroke(0,0,shd);
						break;

				}
				line(mouseX,mouseY,x_,mouseY);
				line(x_,mouseY,x_,y_);
				line(x_,y_,mouseX,y_);
				line(mouseX,y_,mouseX,mouseY);
				break;
			default:
				break;
			}

	}
}
function keyPressed(){
	if(keyCode == 67){
		draw_type = 0;
	}
	if(keyCode == 76){
		draw_type = 1;
	}
}

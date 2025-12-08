function preload(){
	bgColor = loadImage('bgcolor.jpg');
	bgImage = loadImage('bgImage.png');
	person = loadImage('people.png');
	objects = loadImage('object.jpg');
	shapes = loadImage('shapes.jpg');
	boat = loadImage('boat.png');
	climber = loadImage('climber.png');
	garden = loadImage('garden.png');
	gov = loadImage('gov.png');
	pinkheart = loadImage('heart.png');
	horse = loadImage('horse.png');
	king = loadImage('king.png');
	kids = loadImage('kids.png');
	knife = loadImage('knife.png');
	lake = loadImage('lake.png');
	laundry = loadImage('laundry.png');
	lipgloss = loadImage('lipgloss.png');
	mirror = loadImage('mirror.png');
	ocean = loadImage('ocean.png');
	orangefruit = loadImage('orange.png');
	pencil = loadImage('pencil.png');
	redheart = loadImage('redheart.png');
	safari = loadImage('safari.png');
	salt = loadImage('salt.webp');
	sitter = loadImage('sitter.png');
	skiier = loadImage('skiier.png');
	tape = loadImage('tape.png');
	weds = loadImage('weds.png');
	seal = loadImage ('seal.png');
	stand = loadImage ('stand.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	home();
}

function draw() {
}

function home(){
	fill(255);
	noStroke();
	rect(100, 100, 1100, 700);//artboard

	image(bgColor, 1250, 100, 100, 100);//background color
	image(bgImage,1250, 250, 100, 100)//background images
	image(person, 1250, 400, 100, 100);//people
	image(objects, 1250, 550, 100, 100);//objects
	image(shapes, 1250, 700, 100, 100);//shapes

	textFont('Helvetica Neue');//title
	textSize(50);
	textStyle(BOLD);
	text('"TITLE"', 100, 80);

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//background color
	textSize(35);
	textStyle(NORMAL);
	text('BACKGROUND COLOR', 1370, 160);
	
	fill(255);
	noStroke();
	textFont('Helvetica Neue');//background image
	textSize(35);
	textStyle(NORMAL);
	text('BACKGROUND IMAGE', 1370, 310);

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//people
	textSize(35);
	textStyle(NORMAL);
	text('PEOPLE', 1370, 460);
	
	fill(255);
	noStroke();
	textFont('Helvetica Neue');//objects
	textSize(35);
	textStyle(NORMAL);
	text('OBJECTS', 1370, 610);

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//shapes
	textSize(35);
	textStyle(NORMAL);
	text('SHAPES', 1370, 760);
}

function mousePressed(){
	if (mouseX > 1370 && mouseX < 1700 && mouseY > 130 && mouseY < 180){
		background(0);
		backgroundColor();
	}
	if (mouseX > 1370 && mouseX < 1700 && mouseY > 280 && mouseY < 330){
		background(0);
		backgroundImage();
	}
	if (mouseX > 1370 && mouseX < 1700 && mouseY > 430 && mouseY < 480){
		background(0);
		people();
	}
	if (mouseX > 1370 && mouseX < 1700 && mouseY > 580 && mouseY < 630){
		background(0);
		object();
	}
	if (mouseX > 1370 && mouseX < 1700 && mouseY > 730 && mouseY < 780){
		background(0);
		shape();
	}
}

function backgroundColor(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('BACKGROUND COLOR', 100, 80);

	fill(255, 33, 74);//red
	stroke(255);
	rect(100, 150, 250, 250);

	fill(245, 130, 64);//orange
	stroke(255);
	rect(400, 150, 250, 250);	

	fill(255, 230, 102);//yellow
	stroke(255);
	rect(700, 150, 250, 250);	

	fill(190, 237, 114);//green
	stroke(255);
	rect(1000, 150, 250, 250);	

	fill(157, 245, 180);//mint
	stroke(255);
	rect(1300, 150, 250, 250);	

	fill(129, 240, 227);//teal
	stroke(255);
	rect(1600, 150, 250, 250);	

	fill(117, 211, 240);// baby blue
	stroke(255);
	rect(100, 450, 250, 250);

	fill(76, 135, 245);//blue
	stroke(255);
	rect(400, 450, 250, 250);	

	fill(167, 172, 235);//violet
	stroke(255);
	rect(700, 450, 250, 250);	

	fill(141, 91, 189);//purple
	stroke(255);
	rect(1000, 450, 250, 250);	

	fill(239, 127, 245);//fuscia
	stroke(255);
	rect(1300, 450, 250, 250);	

	fill(217, 78, 166);//pink
	stroke(255);
	rect(1600, 450, 250, 250);	
	
}

function backgroundImage(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('BACKGROUND IMAGE', 100, 80);

	image (safari, 100, 150, 409, 306);
	image (lake, 540, 150, 409, 306);
	image (garden, 1000, 150, 409, 306);
	image (gov, 1500, 150, 406, 306);
	image (boat, 100, 550, 406, 188);
	image (ocean, 540, 550, 406, 188);
}

function people(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('PEOPLE', 100, 80);

	image (climber, 100, 150, 204, 366);
	image (laundry, 400, 200, 264, 325);
	image (king, 750, 150, 204, 365);
	image (weds, 1050, 170, 299, 316);
	image (horse, 1450, 150, 289, 350);
	image (seal, 100, 650, 290, 151);
	image (skiier, 400, 600, 337, 222);
	image (sitter, 750, 550, 272, 323);
	image (kids, 1150, 600, 266, 182);
	image (stand, 1500, 500, 278, 390);
}

function object(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('OBJECTS', 100, 80);
	
}

function shape(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('SHAPES', 100, 80);
}

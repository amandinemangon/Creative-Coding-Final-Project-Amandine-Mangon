let red;
let orange;
let yellow;
let green;
let teal;
let mint;
let babyblue;
let blue;
let violet;
let purple;
let fuscia;
let pink;


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
	usb = loadImage ('usb.png');
	tulip = loadImage ('tuplip.png');
	necklace = loadImage ('necklace.png');
	star = loadImage ('star.png');
	field = loadImage ('field.png');
	balcony = loadImage ('balcony.png');
	speech = loadImage('speechbubble.png');
//	thought = loadImage ('thoughtbubble.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	artboardColor = color(255);
	
	home();
	red = color(255, 33, 74);
	orange = color(245, 130, 64);
	yellow = color(255, 230, 102);
	green = color(190, 237, 114);
	mint = color(157, 245, 180);
	teal = color(129, 240, 227);
	babyblue = color(117, 211, 240);
	blue = color(76, 135, 245);
	violet = color(167, 172, 235);
	purple = color(141, 91, 189);
	fuscia = color(239, 127, 245);
	pink = color(217, 78, 166);
	
}

function draw() {
}

function home(){
	background(0);
	fill(artboardColor);
	noStroke();
	rect(100, 100, 1100, 700);//artboard

	image(bgColor, 1250, 100, 100, 100);//background color
	image(bgImage,1250, 250, 100, 100)//background images
	image(person, 1250, 400, 100, 100);//people
	image(objects, 1250, 550, 100, 100);//objects
	image(shapes, 1250, 700, 100, 100);//shapes

	fill(255);
	noStroke();
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

	//colors

	if (mouseX > 100 && mouseX < 350 && mouseY > 150 && mouseY < 400){
		artboardColor = red;
		background(0);
		home();
	}
	if (mouseX > 400 && mouseX < 650 && mouseY > 150 && mouseY < 400){
		artboardColor = orange;
		background(0);
		home();
	}
	if (mouseX > 700 && mouseX < 950 && mouseY > 150 && mouseY < 400){
		artboardColor = yellow;
		background(0);
		home();
	}
	if (mouseX > 1000 && mouseX < 1250 && mouseY > 150 && mouseY < 400){
		artboardColor = green;
		background(0);
		home();
	}
	if (mouseX > 1300 && mouseX < 1550 && mouseY > 150 && mouseY < 400){
		artboardColor = mint;
		background(0);
		home();
	}
	if (mouseX > 1600 && mouseX < 1850 && mouseY > 150 && mouseY < 400){
		artboardColor = teal;
		background(0);
		home();
	}
	if (mouseX > 100 && mouseX < 350 && mouseY > 450 && mouseY < 700){
		artboardColor = babyblue;
		background(0);
		home();
	}
	if (mouseX > 400 && mouseX < 650 && mouseY > 450 && mouseY < 700){
		artboardColor = blue;
		background(0);
		home();
	}
	if (mouseX > 700 && mouseX < 950 && mouseY > 450 && mouseY < 700){
		artboardColor = violet;
		background(0);
		home();
	}
	if (mouseX > 1000 && mouseX < 1250 && mouseY > 450 && mouseY < 700){
		artboardColor = purple;
		background(0);
		home();
	}
	if (mouseX > 1300 && mouseX < 1550 && mouseY > 450 && mouseY < 700){
		artboardColor = fuscia;
		background(0);
		home();
	}
	if (mouseX > 1600 && mouseX < 1850 && mouseY > 450 && mouseY < 700){
		artboardColor = pink;
		background(0);
		home();
	}

	
}

function backgroundColor(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('BACKGROUND COLOR', 100, 80);

	fill(red);
	stroke(255);
	rect(100, 150, 250, 250);

	fill(orange);
	stroke(255);
	rect(400, 150, 250, 250);	

	fill(yellow);
	stroke(255);
	rect(700, 150, 250, 250);	

	fill(green);
	stroke(255);
	rect(1000, 150, 250, 250);	

	fill(mint);
	stroke(255);
	rect(1300, 150, 250, 250);	

	fill(teal);
	stroke(255);
	rect(1600, 150, 250, 250);	

	fill(babyblue);
	stroke(255);
	rect(100, 450, 250, 250);

	fill(blue);
	stroke(255);
	rect(400, 450, 250, 250);	

	fill(violet);
	stroke(255);
	rect(700, 450, 250, 250);	

	fill(purple);
	stroke(255);
	rect(1000, 450, 250, 250);	

	fill(fuscia);
	stroke(255);
	rect(1300, 450, 250, 250);	

	fill(pink);
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
	image (boat, 100, 650, 406, 188);
	image (ocean, 540, 650, 406, 188);
	image (field, 1040, 590, 367, 250);
	image (balcony, 1500, 550, 360, 288);
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

	image (tape, 100, 200, 320, 209);
	image (orangefruit, 500, 150, 300, 300);
	image (salt, 800, 130, 340, 340);
	image (knife, 1150, 160, 250, 250);
	image (necklace, 1500, 160, 320, 276);
	image (tulip, 200, 550, 104, 320);
	image (lipgloss, 500, 550, 310, 310);
	image (pencil, 800, 550, 310, 310);
	image (mirror, 1150, 550, 310, 310);
	image (usb, 1500, 550, 310, 310);
}

function shape(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('SHAPES', 100, 80);

	image(pinkheart, 100, 150, 300, 260);
	image(redheart, 450, 150, 300, 300);
	image(star, 800, 140, 290, 290);
	image (speech, )
}

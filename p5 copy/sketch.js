let screen = "home";
let savedArtboard;
let finalArtboard;
let customWords = "";

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
	bgColor = loadImage('images/bgcolor.jpg');
	bgImage = loadImage('images/bgImage.png');
	person = loadImage('images/people.png');
	objects = loadImage('images/object.jpg');
	boat = loadImage('images/boat.png');
	climber = loadImage('images/climber.png');
	garden = loadImage('images/garden.png');
	gov = loadImage('images/gov.png');
	horse = loadImage('images/horse.png');
	king = loadImage('images/king.png');
	kids = loadImage('images/kids.png');
	knife = loadImage('images/knife.png');
	lake = loadImage('images/lake.png');
	laundry = loadImage('images/laundry.png');
	lipgloss = loadImage('images/lipgloss.png');
	mirror = loadImage('images/mirror.png');
	ocean = loadImage('images/ocean.png');
	orangefruit = loadImage('images/orange.png');
	pencil = loadImage('images/pencil.png');
	safari = loadImage('images/safari.png');
	salt = loadImage('images/salt.webp');
	sitter = loadImage('images/sitter.png');
	skiier = loadImage('images/skiier.png');
	tape = loadImage('images/tape.png');
	weds = loadImage('images/weds.png');
	seal = loadImage ('images/seal.png');
	stand = loadImage ('images/stand.png');
	usb = loadImage ('images/usb.png');
	tulip = loadImage ('images/tuplip.png');
	necklace = loadImage ('images/necklace.png');
	field = loadImage ('images/field.png');
	balcony = loadImage ('images/balcony.png');
	snipSound = loadSound('sound/snip.mp3');
	customText = loadImage('images/abc.png');
}

function setup() {
	createCanvas(1960, 920);
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
	if(screen == "home"){
		home();
	}
}

function home(){
	screen = "home";
	
	background(0);
	fill(artboardColor);
	noStroke();
	rect(100, 100, 1100, 700);//artboard
	
	if (savedArtboard){
		image(savedArtboard, 100, 100, 1100, 700);
	}

	image(bgColor, 1250, 100, 100, 100);//background color
	
	if (mouseX > 1250 && mouseX < 1350 && mouseY > 100 && mouseY < 200){
		fill(255);
		noStroke();
		textFont('Helvetica Neue');//background color
		textSize(35);
		textStyle(NORMAL);
		text('BACKGROUND COLOR', 1370, 160);
	}
	
	image(bgImage,1250, 250, 100, 100)//background images
	
	if (mouseX > 1250 && mouseX < 1350 && mouseY > 250 && mouseY < 350){
		fill(255);
		noStroke();
		textFont('Helvetica Neue');//background image
		textSize(35);
		textStyle(NORMAL);
		text('BACKGROUND IMAGE', 1370, 310);
	}
	
	image(person, 1250, 400, 100, 100);//people
	if (mouseX > 1250 && mouseX < 1350 && mouseY > 400 && mouseY < 500){
		fill(255);
		noStroke();
		textFont('Helvetica Neue');//people
		textSize(35);
		textStyle(NORMAL);
		text('PEOPLE', 1370, 460);
	}
	
	image(objects, 1250, 550, 100, 100);//objects
	if (mouseX > 1250 && mouseX < 1350 && mouseY > 550 && mouseY < 650){
		fill(255);
		noStroke();
		textFont('Helvetica Neue');//objects
		textSize(35);
		textStyle(NORMAL);
		text('OBJECTS', 1370, 610);
	}
	
	image(customText, 1250, 700, 100, 100);//text
	if (mouseX > 1250 && mouseX < 1350 && mouseY > 700 && mouseY < 800){
		fill(255);
		noStroke();
		textFont('Helvetica Neue');//text
		textSize(35);
		textStyle(NORMAL);
		text('CUSTOM TEXT', 1370, 760);
	}

	

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//title
	textSize(50);
	textStyle(BOLD);
	text('"TITLE"', 100, 80);

	fill(255);//reset rect
	noStroke();
	rect(100, 825, 90, 30);
	
	fill(0);
	noStroke();
	textFont('Helvetica Neue');//reset
	textSize(25);
	textStyle(BOLD);
	text('RESET', 103, 850);

	fill(255);//done button
	noStroke();
	rect(1120, 825, 80, 30);

	fill(0);//done text
	noStroke();
	textFont('Helvetica Neue');//done
	textSize(25);
	textStyle(BOLD);
	text('DONE', 1123, 850);
}

function mousePressed(){
	userStartAudio();
	snipSound.play();

	
	if(screen == "home"){

		if (mouseX > 1250 && mouseX < 1350 && mouseY > 100 && mouseY < 200){
			background(0);
			backgroundColor();
		}
		if (mouseX > 1250 && mouseX < 1350 && mouseY > 250 && mouseY < 350){
			background(0);
			backgroundImage();
		}
		if (mouseX > 1250 && mouseX < 1350 && mouseY > 400 && mouseY < 500){
			background(0);
			people();
		}
		if (mouseX > 1250 && mouseX < 1350 && mouseY > 550 && mouseY < 650){
			background(0);
			object();
		}
		if (mouseX > 1250 && mouseX < 1350 && mouseY > 700 && mouseY < 800){
			background(0);
			fill(artboardColor);
			noStroke();
			rect(100, 100, 1100, 700);

			if(savedArtboard){
				image(savedArtboard, 100, 100, 1100, 700);
			}
			
			fill(255);
			textFont("helvetica Neue");
			textSize(48);
			textStyle(BOLD);
			
			let t = prompt("TYPE YOUR TEXT:");
			if (t === null) return;
			
			text(t, random(200, 900), random(200, 500));
			
			savedArtboard = get(100, 100, 1100, 700);
			home();
		}
		if (mouseX > 100 && mouseX < 210 && mouseY >825 && mouseY < 855){//reset page --> turns white\
			savedArtboard = undefined;
			artboardColor = color(255);
			background(0);
			home();
		}
		if (mouseX > 1125 && mouseX < 1200 && mouseY > 825 && mouseY < 855){
			finalArtboard = get(100, 100, 1100, 700);
			finalCollage();
		}
	}

	else if(screen == "bgColor"){
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

	else if(screen == "bgImage"){
		if (mouseX > 100 && mouseX < 509 && mouseY > 150 && mouseY < 456){
			background(0);
			home();
			image(safari, 100, 100, 1100, 700);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 540 && mouseX < 949 && mouseY > 150 && mouseY < 456){
			background(0);
			home();
			image(lake, 100, 100, 1100, 700);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1000 && mouseX < 1409 && mouseY > 150 && mouseY < 456){
			background(0);
			home();
			image(garden, 100, 100, 1100, 700);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1500 && mouseX < 1906 && mouseY > 150 && mouseY < 456){
			background(0);
			home();
			image(gov, 100, 100, 1100, 700);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 100 && mouseX < 506 && mouseY > 650 && mouseY < 838){
			background(0);
			home();
			image(boat, 100, 300, 1100, 509);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 540 && mouseX < 946 && mouseY > 650 && mouseY < 838){
			background(0);
			home();
			image(ocean, 100, 300, 1100, 509);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1040 && mouseX < 1407 && mouseY > 590 && mouseY < 840){
			background(0);
			home();
			image(field, 100, 100, 1100, 700);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1500 && mouseX < 1860 && mouseY > 550 && mouseY < 838){
			background(0);
			home();
			image(balcony, 100, 100, 1100, 700);
			savedArtboard = get(100, 100, 1100, 700);
		}
	}
	else if (screen == "people"){
		if (mouseX > 100 && mouseX < 304 && mouseY> 150 && mouseY < 516){
			background(0);
			home();
			image(climber, random(100, 900), random(100, 500), 204, 366);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 400 && mouseX < 664 && mouseY> 200 && mouseY < 525){
			background(0);
			home();
			image(laundry, random(100,900), random(100, 500), 264, 325);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 750 && mouseX < 954 && mouseY> 150 && mouseY < 515){
			background(0);
			home();
			image(king, random(100,900), random(100, 500), 204, 365);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1050 && mouseX < 1349 && mouseY> 170 && mouseY < 486){
			background(0);
			home();
			image(weds, random(100,900), random(100, 500), 299, 316);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1450 && mouseX < 1739 && mouseY> 150 && mouseY < 500){
			background(0);
			home();
			image(horse, random(100,900), random(100, 500), 289, 350);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 100 && mouseX < 390 && mouseY> 650 && mouseY < 801){
			background(0);
			home();
			image(seal, random(100,900), random(100, 500), 290, 151);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 400 && mouseX < 737 && mouseY> 600 && mouseY < 822){
			background(0);
			home();
			image(skiier, random(100,900), random(100, 500), 337, 222);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 750 && mouseX < 1022 && mouseY> 550 && mouseY < 873){
			background(0);
			home();
			image(sitter, random(100, 900), random(100, 500), 272, 323);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1150 && mouseX < 1416 && mouseY> 500 && mouseY < 782){
			background(0);
			home();
			image(kids, random(100, 900), random(100, 500), 266, 182);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1500 && mouseX < 1778 && mouseY> 500 && mouseY < 890){
			background(0);
			home();
			image(stand, random(100, 900), random(100, 500), 278, 390);
			savedArtboard = get(100, 100, 1100, 700);
		}
	}
	else if(screen == "object"){
		if (mouseX > 100 && mouseX <420 && mouseY > 200 && mouseY < 409){
			background(0);
			home();
			image(tape, random(100, 900), random(100, 500), 160, 104);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 500 && mouseX < 800 && mouseY > 150 && mouseY < 450){
			background(0);
			home();
			image(orangefruit, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 800 && mouseX < 1140 && mouseY > 130 && mouseY < 470){
			background(0);
			home();
			image(salt, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1150 && mouseX < 1400 && mouseY > 160 && mouseY < 410){
			background(0);
			home();
			image(knife, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1500 && mouseX < 1820 && mouseY > 160 && mouseY < 436){
			background(0);
			home();
			image(necklace, random(100, 900), random(100, 500), 160, 138);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 200 && mouseX < 304 && mouseY > 550 && mouseY < 870){
			background(0);
			home();
			image(tulip, random(100, 900), random(100, 500), 52, 160);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 500 && mouseX < 810 && mouseY > 550 && mouseY < 860){
			background(0);
			home();
			image(lipgloss, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 800 && mouseX < 1110 && mouseY > 550 && mouseY < 860){
			background(0);
			home();
			image(pencil, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1150 && mouseX < 1460 && mouseY > 550 && mouseY < 860){
			background(0);
			home();
			image(mirror, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
		if (mouseX > 1500 && mouseX < 1810 && mouseY > 550 && mouseY < 860){
			background(0);
			home();
			image(usb, random(100, 900), random(100, 500), 150, 150);
			savedArtboard = get(100, 100, 1100, 700);
		}
	}
	else if (screen == "finalCollage"){
		if (mouseX > 1145 && mouseX < 1530 && mouseY > 825 && mouseY < 855){
			background(0);
			screen = "home";
			home();
		}
		if (mouseX > 430 && mouseX < 650 && mouseY > 825 && mouseY < 855){
			image (finalArtboard, 430, 110, 1100, 700);

			fill(0);
			textFont("Helvetica Neue");
			textSize(48);
			textStyle(BOLD);

		text('"' + generateTitle() + '"', 430, 20);

		finalArtboard = get(430, 110, 1100, 700);
		}
	}
}
	

function backgroundColor(){
	screen = "bgColor";
	
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
	screen = "bgImage";
	
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
	screen = "people";
	
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
	screen = "object";
	
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

function finalCollage(){
	screen = "finalCollage";
	
	background(0);
	fill(255);
	rect(430, 110, 1100, 700);

	if (finalArtboard){
		image(finalArtboard, 430, 110, 1100, 700);
	}

	fill(255);
	noStroke();
	rect(430, 825, 220, 30);
	
	fill(0);//generate title
	noStroke();
	textFont('Helvetica Neue');
	textSize(25);
	textStyle(BOLD);
	text('GENERATE TITLE', 434, 850);

	fill(255);//home button
	noStroke();
	rect(1445, 825, 85, 30);

	fill(0);//home text
	noStroke();
	textFont('Helvetica Neue');//home
	textSize(25);
	textStyle(BOLD);
	text('HOME', 1448, 850);
}

function typeText(){
	
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('', 100, 80);
}

function generateTitle(){
	return random([RiTa.randomWord({ pos: "nn"}) + " THAT " + RiTa.randomWord({ pos: "vb"}), Rita.randomWord({ pos: "nn"}) + " IS " + RiTa.randomWord({pos: "jj"}), "IT IS " + RiTa.randomWord({ pos: "jj"})]);
}
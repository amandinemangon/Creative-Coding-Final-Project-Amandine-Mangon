//let titleImput;
//let typedTitle = "";

function preload(){
	bgColor = loadImage('bgcolor.jpg');
	bgImage = loadImage('bgImage.png');
	person = loadImage('people.png');
	objects = loadImage('object.png');
	shapes = loadImage('shapes.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	/*titleInput = createInput('"Title"'); 
	titleInput.position(100, 80);
	titleInput.style("opacity", "0");
	titleInput.style("border", "none");
	titleInput.style("background", "transparent");
	
	titleInput.input(updateTitle);
 */
}

function draw() {
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

	fill(0);//outline
	stroke(255);
	rect(1365, 130, 390, 35)

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//background color
	textSize(35);
	textStyle(NORMAL);
	text('BACKGROUND COLOR', 1370, 160);
	
	fill(0);// bg image outline
	stroke(255);
	rect(1365, 280, 380, 35)

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//background image
	textSize(35);
	textStyle(NORMAL);
	text('BACKGROUND IMAGE', 1370, 310);

	fill(0);// people outline
	stroke(255);
	rect(1365, 430, 146, 35)

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//people
	textSize(35);
	textStyle(NORMAL);
	text('PEOPLE', 1370, 460);

	noFill();// object outline
	stroke(255);
	rect(1365, 580, 168, 35)
	
	fill(255);
	noStroke();
	textFont('Helvetica Neue');//objects
	textSize(35);
	textStyle(NORMAL);
	text('OBJECTS', 1370, 610);

	fill(0);// shapes outline
	stroke(255);
	rect(1365, 730, 148, 35)

	fill(255);
	noStroke();
	textFont('Helvetica Neue');//shapes
	textSize(35);
	textStyle(NORMAL);
	text('SHAPES', 1370, 760);

	//if (mouseIsPressed && mouseX > txtX && mouseX < txtX + textWidth(myText) && mouseY > txtY - textAscent() && mouseY < txtY + textDescent()) {

}

/*function updateTitle() {
  typedTitle = this.value();
}
*/
function backgroundColor(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('BACKGROUND COLOR', 100, 80);
}

function backgroundImage(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('BACKGROUND IMAGE', 100, 80);
}

function people(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('PEOPLE', 100, 80);
}

function object(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('OBJECT', 100, 80);
	
}

function shape(){
	fill(255);
	textFont('Helvetica Neue');
	textSize(50);
	textStyle(BOLD);
	text('SHAPE', 100, 80);
}

//Create variables here
var dog, happydog, database, foodS, foodStock

function preload()
{
	//load images here 
  dogImg = loadImage('images/dogImg.png')
  dogImg1 = loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale = 0.25
  foodStock = database.ref('Food')
  foodStock.on('value',readstock)
}


function draw() {  
  background(46,139,87);
  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254)
  stroke('black')
  text('foodreaming'+foodS,170,200)
  textSize(13)
  text('UP_ARROW to feed the dog',130,10,300,20)
  //add styles here

}

function readstock(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}





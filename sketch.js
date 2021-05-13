var ansel,ansel_img,ansel_shoot,ansel_jump,ansel_die,virus1,virus1_img,virus2,virus2_img,virus3_img,virus3;
var mask,weapon,mask_img,weapon_img,vaccine,vaccine_img,box,box_img;
var bg_img,bg_img2,bg_img3,end_img,log_img,log,symbol_img,symbol,ground,ground_img,invisibleground;
var score=0;
var live=3;
var vaccines=0;
var gameState=0;
var virusGroup;
var obstacle,obstacle_img,obstacle2,obstacle2_img,obstacle3,obstacle3_img;
var obstacleGroup;
var immunity=100;
var infection=0;

function preload(){
  ansel_img=loadImage("ansel2.png");
  ansel_shoot=loadImage("ansel3.png");
  ansel_jump=loadImage("ansel2.png");
  ansel_die=loadImage("1.png");
  mask_img=loadImage("4.png");
  weapon_img=loadImage("2.png");
  vaccine_img=loadImage("3.png");
  bg_img=loadImage("bg5.png");
  bg_img2=loadImage("bg1.png");
  bg_img3=loadImage("bg3.png");
  end_img=loadImage("end.png");
  virus1_img=loadImage("virus1.png");
  virus2_img=loadImage("virus3.png");
  virus3_img=loadImage("virus2.png");
  symbol_img=loadImage("symbol.png");
  box_img=loadImage("box.png");
  ground_img=loadImage("ground1.png");
  obstacle_img=loadImage("obstacle.png");
  obstacle2_img=loadImage("obstacle2.png");
  obstacle3_img=loadImage("obstacle3.png");

}

function setup() {
  createCanvas(displayWidth-2,displayHeight-145);
  
}
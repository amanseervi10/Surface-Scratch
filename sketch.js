let scl=20;
let rows,cols;
var arr;
let flying=0;
let colors=['#FFFF00','#FF00FF','#00FF00','#1F51FF',' #FF3131','#A020F0','#FFFFFF'];
let selection=0;
// let song;

function setup() {
  // song =loadSound('Believer.mp3')
  createCanvas(windowWidth, windowHeight,WEBGL);
  cols=1.2*width/scl;
  rows=1.4*height/scl;
  arr = new Array(Math.floor(rows)); 
  for (i = 0; i < rows; i++) {
    arr[i] = new Array(Math.floor(cols));
  }
  button = createButton('Change Color');
  button.position(width-140,10);
  button.mousePressed(changecolor);
  // song.play();
}

function draw() {

  flying-=0.1;

  let ioff=flying;
  for(i=0; i<rows; i++){
    let joff=0;
    for(j=0; j<cols; j++){
      arr[i][j]=map(noise(ioff,joff),0,1,-100,100);
      joff+=0.15;
      // arr[i][j]=random(-50,50);
    }
    ioff+=0.15;
  }
  background(0);
  stroke(colors[selection]);
  noFill();
  rotateX(PI/3);
  translate(-width/1.8,-height/1.8);
  for(i=0; i<rows-1; i++){
    beginShape(TRIANGLE_STRIP);
    for(j=0; j<cols; j++){
      // fill(random(255),random(255),random(255));
      vertex(j*scl,i*scl,arr[i][j]);
      vertex(j*scl,(i+1)*scl,arr[i][j+1]);
    }
    endShape();
  }
}

function changecolor(){
  selection=(selection+1)%7;
  // if(!song.isPlaying()){
  //   song.play();  
  // }
} 

let mobilenet;
let vedio;

function modelReady() {
  console.log('Model is ready!!!');
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    
  }
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  //Vedio.hide();
  background(0);
 // mobilenet = ml5.imageClsssifier('mobileNet', modelReady);
}
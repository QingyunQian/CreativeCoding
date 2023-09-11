let angle;
let angleSpeed;
let lineLength;
let c;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(0);
  c = color(255, 255, 255, 100); 
  lineLength = 100; // 初始化线条长度
  angle = 0;
  angleSpeed = 2;
}

function draw() {
  if (mouseIsPressed == true) {
    translate(mouseX, mouseY);
    rotate(angle);
    stroke(c); 
    line(0, 0, 0, -lineLength); // 使用 lineLength 作为线条长度
    angle = angle + angleSpeed;
  }
}

function keyPressed() {
  angleSpeed = random(1, 4); // 设置 angleSpeed 为随机值（1到4之间）
  
  // 为颜色 c 的 r、g、b 分量赋予随机值（0到255之间）
  c = color(random(256), random(256), random(256), 100);
  
  if (key == 'r') {
    background(0); // 重置画布为黑色
  }
  
  // 设置 lineLength 为随机值（20到140之间）
  lineLength = random(20, 140);
}


let wins = [];

function setup() {
  createCanvas (window.innerWidth, window.innerHeight);
  let w = new DraggableWindow(100, 100, 300, 200, "YOU DID IT! (I need to finish this)");
  wins.push(w);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // background(random(360), 20, 95);
  // win.display();
  background (100, 150, 230);
  // fill('brown');
  // rect(30, 10, 150, 200);
  fill(255, 255, 255);
  text("I intend on have the user navigate a file directory here and add their number to a system text file for completion.", 30, 10, 150, 200);


  noStroke();
  fill(0);
  text ("make a new window", 10, 270);
  fill(color('tan'));
  rect (20, 200, 50, 50);
  for (let win of wins) {
    win.display();
    win.update();
  }

  
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    redraw();
  }
}


function mousePressed() {
  for (let win of wins) {
    win.mousePressed();
  }

  if (
    mouseX >= 20 &&
    mouseX <= 20 + 50 &&
    mouseY >= 200 &&
    mouseY <= 200 + 50
  ) {
    newWindow();
  }
}

function mouseReleased() {
  for (let win of wins) {
    win.mouseReleased();
  }
}


function newWindow() {
  console.log("new window");
  let newWin = new DraggableWindow(
    random(20, 400),
    random(20, 400),
    300,
    200,
    "This is a new window"
  );
  wins.push(newWin);
}
// class window {
//   constructor(x, y, w, h, title) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.title = title;

//     this.dragging = false;
//     this.offsetX = 0;
//     this.offsetY = 0;
//     this.titleBarHeight = 30;
//   }
// }

class DraggableWindow {
  constructor(x, y, w, h, title) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.title = title;

    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.titleBarHeight = 30;
  }

  display() {
    // Body
    fill(144, 207, 248);
    stroke(0);
    rect(this.x, this.y, this.w, this.h);

    // Title bar
    fill(0, 0, 128);
    stroke(0);
    rect(this.x, this.y, this.w, this.titleBarHeight);

    // Title text
    fill(255);
    noStroke();
    textSize(14);
    textAlign(LEFT, CENTER);
    text(this.title, this.x + 10, this.y + this.titleBarHeight / 2);

    // Close Window
    fill(255, 0, 0);
    noStroke();
    rect(this.x + this.w - this.titleBarHeight, this.y, this.titleBarHeight, this.titleBarHeight);
  }

  mousePressed() {
    console.log("HEY: " + mouseX + "thisx " + this.x + " Y : " + mouseY + " thisy " +this.y);
    if (mouseX > this.x + this.w - this.titleBarHeight && mouseX < this.x + this.w &&
      mouseY > this.y && mouseY < this.y + this.titleBarHeight) {
        this.close();
    } else if (mouseX > this.x && mouseX < this.x + this.w &&
        mouseY > this.y && mouseY < this.y + this.titleBarHeight) {
        console.log("inside");
      this.dragging = true;
      this.offsetX = mouseX - this.x;
      this.offsetY = mouseY - this.y;
    }
  }

  mouseReleased() {
    this.dragging = false;
  }

  update() {
    if (this.dragging) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
    }
  }

  close() {
    const idx = wins.indexOf(this);
    if (idx !== -1) wins.splice(idx, 1);
  }
}
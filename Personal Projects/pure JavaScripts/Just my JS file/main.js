this.mobs = this.add.group({
  key: "enemy",
  repeat: 5,
  setXY: {
    x: 110,
    y: 200,
    stepX: 80,
    stepY: 20,
  },
});
Phaser.Actions.ScaleXY(this.mobs.getChildren(), -0.4, -0.4);
phaser.Actions.Call(this.mobs.getChildren(), function (es) {
  es.flipX = true;
  let dir = Math.random() < 0.5 ? 1 : -1;
  let speed =
    this.esMinSpeed + Math.random() * (this.esMaxSpeed - this.esMinSpeed);
  es.speed = dir * speed;
}),
  this;

let mobs = this.mobs.getChildren();
let numMobs = mobs.length;

for (let i = 0; i < numMobs; i++) {
  mobs[i].y += enemies[i].speed;
  let conditionUp = enemies[i].speed < 0 && mobs[i].y <= this.esMinY;
  let conditionDown = enemies[i].speed > 0 && mobs[i].y >= this.esMaxY;

  if (conditionUp || conditionDown) {
    mobs[i].speed *= -1;
  }
  let esRect = mobs[i].getBounds();
  if (Phaser.Geom.Intersects.RectangleToRectangle(psRect, esRect)) {
    console("Congrats you died");
    this.screen.restart();
    return;
  }
}

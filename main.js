window.onload = function () {
  let count = 0;
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var x = 300;
  var y = 350;
  var t = Date.now();
  var speed = 25;

  document.onmousedown = function () {
    count += 1;
    y = 25;
  };
  document.ontouchstart = function () {
    count += 1;
    y = 25;
  };
  function draw() {
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();

    if (y <= 350) {
      speed += 50 * timePassed;
      y += speed * timePassed;
    }
    if (y > 350) {
      count = 0;
      speed = 25;
    }

    context.clearRect(0, 0, 600, 400);

    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    context.font = "25px Arial";
    context.fillStyle = "white";
    context.fillText("count: " + count, 20, 30);

    window.requestAnimationFrame(draw);
  }

  draw();
};

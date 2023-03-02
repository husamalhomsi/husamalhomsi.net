"use strict";

let painterElement, qElement, canvas, context, imageData;

window.onload = function() {
  painterElement = document.getElementById("painter");
  qElement = document.getElementById("q");
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  imageData = context.createImageData(canvas.width, canvas.height);

  paint();

  painterElement.addEventListener("change", paint);
  qElement.addEventListener("change", paint);
}

function paint() {
  let painter = painterElement.value;
  let q = qElement.value;

  for (let y = 0; y < canvas.height; ++y)
    for (let x = 0; x < canvas.width; ++x) {
      let i = (y * canvas.width + x) * 4, s;

      if (painter == 8)
        s = (x + y) % q;
      else if (painter == 22)
        s = (q ^ x) * x & (q ^ y) * y & q;

      s = s ? 0 : 255;

      imageData.data[i    ] = s;
      imageData.data[i + 1] = s;
      imageData.data[i + 2] = s;
      imageData.data[i + 3] = 255;
    }

  context.putImageData(imageData, 0, 0);
}

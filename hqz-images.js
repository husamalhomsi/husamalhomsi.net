"using strict";

let painterElement, qElement, canvas, width, height, context, idat;

window.onload = function() {
  painterElement = document.getElementById("painter");
  qElement = document.getElementById("q");
  canvas = document.getElementById("canvas");
  width = canvas.width;
  height = canvas.height;
  context = canvas.getContext("2d");
  idat = context.createImageData(width, height);

  paint();

  painterElement.addEventListener("change", paint);
  qElement.addEventListener("change", paint);
}

function paint() {
  let painter = painterElement.value;
  let q = qElement.value;

  for (let y = 0; y < height; ++y)
    for (let x = 0; x < width; ++x) {
      let i = (y * width + x) * 4, s;

      if (painter == 8)
        s = (x + y) % q;
      else if (painter == 22)
        s = (q ^ x) * x & (q ^ y) * y & q;

      s = s ? 0 : 255;

      idat.data[i    ] = s;
      idat.data[i + 1] = s;
      idat.data[i + 2] = s;
      idat.data[i + 3] = 255;
    }

  context.putImageData(idat, 0, 0);
}

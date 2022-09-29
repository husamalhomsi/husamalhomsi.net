var canvasElement, painterElement, qElement, painter, q, context, idat;

window.onload = function() {
  canvasElement = document.getElementById("canvas");
  painterElement = document.getElementById("painter");
  qElement = document.getElementById("q");

  painter = painterElement.value;
  q = qElement.value;

  context = canvasElement.getContext("2d");
  idat = context.createImageData(512, 512);

  paint();

  painterElement.addEventListener("change", updatePainter);
  qElement.addEventListener("change", updateQ);
}

function updatePainter() {
  painter = painterElement.value;
  paint();
}

function updateQ() {
  q = qElement.value;
  paint();
}

function paint() {
  for (let y = 0; y < 512; ++y)
    for (let x = 0; x < 512; ++x) {
      let i = (y * 512 + x) * 4, s;

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

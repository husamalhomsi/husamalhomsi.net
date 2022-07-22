var canvasElement, painterElement, qValueElement, widthElement, heightElement, painter, q, width, height, context, idat;

window.onload = function() {
  canvasElement  = document.getElementById("canvas");
  painterElement = document.getElementById("painter");
  qValueElement  = document.getElementById("q-value");
  widthElement   = document.getElementById("width");
  heightElement  = document.getElementById("height");

  painter = painterElement.value;
  q = qValueElement.value;
  width = canvasElement.width = widthElement.value;
  height = canvasElement.height = heightElement.value;

  context = canvasElement.getContext("2d");
  idat = context.createImageData(width, height);

  paint();

  painterElement.addEventListener("change", updatePainter);
  qValueElement.addEventListener("change", updateQ);
  widthElement.addEventListener("change", updateWidth);
  heightElement.addEventListener("change", updateHeight);
}

function updatePainter() {
  painter = painterElement.value;
  paint();
}

function updateQ() {
  q = qValueElement.value;
  paint();
}

function updateWidth() {
  width = canvasElement.width = widthElement.value;
  idat = context.createImageData(width, height);
  paint();
}

function updateHeight() {
  height = canvasElement.height = heightElement.value;
  idat = context.createImageData(width, height);
  paint();
}

function paint() {
  for (let y = 0; y < height; ++y)
    for (let x = 0; x < width; ++x) {
      let i = (y * width + x) * 4, s;

      if (painter == 0)
        s = x & y & q;
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

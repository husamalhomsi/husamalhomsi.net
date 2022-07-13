var canvasElement, idElement, qValueElement, widthElement, heightElement, id, q, width, height, context, idat;

window.onload = function() {
  canvasElement = document.getElementById("canvas");
  idElement     = document.getElementById("id");
  qValueElement = document.getElementById("q-value");
  widthElement  = document.getElementById("width");
  heightElement = document.getElementById("height");

  id = idElement.value;
  q = qValueElement.value;
  width = canvasElement.width = widthElement.value;
  height = canvasElement.height = heightElement.value;

  context = canvasElement.getContext("2d");
  idat = context.createImageData(width, height);

  paint();

  idElement.addEventListener("change", updateId);
  qValueElement.addEventListener("change", updateQ);
  widthElement.addEventListener("change", updateWidth);
  heightElement.addEventListener("change", updateHeight);
}

function updateId() {
  id = idElement.value;
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

      if (id == 0)
        s = x & y & q;
      else if (id == 22)
        s = (q ^ x) * x & (q ^ y) * y & q;

      s = s ? 0 : 255;

      idat.data[i    ] = s;
      idat.data[i + 1] = s;
      idat.data[i + 2] = s;
      idat.data[i + 3] = 255;
    }

  context.putImageData(idat, 0, 0);
}

import * as gm from 'gammacv';
import { Pixelization } from '../../lib';
import imgURL from '../../lib/assets/test_img.jpg';

function drawImage() {
  const canvas = document.getElementById('plot');
  const context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);

  gm.imageTensorFromURL(imgURL, 'uint8', [500, 500, 4], true)
    .then((input) => {
      const operationDown = Pixelization(input, 100);
      const output = gm.tensorFrom(operationDown);
      const sess = new gm.Session();

      sess.init(operationDown);
      sess.runOp(operationDown, 0, output);

      gm.canvasFromTensor(canvas, output);
    });
}

drawImage();

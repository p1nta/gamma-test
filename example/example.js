import * as gm from 'gammacv';
import { Pixelization } from '../lib';

function drawImage() {
  const canvas = document.getElementById('plot');
  const context = canvas.getContext('2d');
  const imgURL = 'https://c2.staticflickr.com/4/3137/2698866948_f273755a09_z.jpg?zz=1';

  context.clearRect(0, 0, canvas.width, canvas.height);

  gm.imageTensorFromURL(imgURL, 'uint8', [500, 500, 4], true)
    .then((input) => {
      
      const operationDown = Pixelization(input, 50);
      const output = gm.tensorFrom(operationDown);
      const sess = new gm.Session();
      sess.init(operationDown);
      sess.runOp(operationDown, 0, output);

      gm.canvasFromTensor(canvas, output);
    });
}

drawImage()


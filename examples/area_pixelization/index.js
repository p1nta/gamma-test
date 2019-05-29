import * as gm from 'gammacv';
import { AreaPixelization } from '../../lib';

class VideoPixelization {
  constructor(props) {
    this.step = props.step;
    this.canvas = document.getElementById('plot');
    this.init = this.init.bind(this);
    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    
    document.getElementById('run_btn').addEventListener('click', this.handleRun.bind(this));

    this.init();
  }

  handleRun() {
    if (this.timeout) {
      this.stop()
    } else {
      this.start();
    }
  }

  start() {
    this.stream.start()
      .catch((err) => {
        this.stop(true);
        console.log(err)
      });

    this.timeout = window.requestAnimationFrame(this.tick);
  }

  stop(destroy = true) {
    this.stream.stop();
    if (destroy) {
      this.sess.destroy();
    }
    window.cancelAnimationFrame(this.timeout);
    this.timeout = null;
  }

  init() {
    this.sess = new gm.Session();
    this.stream = new gm.CaptureVideo(this.canvas.width, this.canvas.height);
    this.imgInput = new gm.Tensor('uint8', [this.canvas.width, this.canvas.height, 4])
    this.op = AreaPixelization(this.imgInput, this.step, 250.0, 250.0, 125.0);
    this.imgOutput = gm.tensorFrom(this.op);
    this.sess.init(this.op);
  }

  tick(frame) {
    this.timeout = window.requestAnimationFrame(this.tick);
    this.stream.getImageBuffer(this.imgInput);
    this.sess.runOp(this.op, frame, this.imgOutput);

    gm.canvasFromTensor(this.canvas, this.imgOutput);
  }
}

new VideoPixelization({ step: 13 });

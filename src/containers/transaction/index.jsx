import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as gm from 'gammacv';
import ExampleShader from '../../shader';

class ShaderContainer extends Component {
  constructor() {
    super();

    this.state = {
      step: 2.0,
    };

    this.imgURL = 'https://c2.staticflickr.com/4/3137/2698866948_f273755a09_z.jpg?zz=1';
  }

  componentDidMount() {
    this.drawImage();
  }

  componentDidUpdate() {
    this.drawImage();
  }

  drawImage() {
    const { step } = this.state;

    gm.imageTensorFromURL(this.imgURL, 'uint8', [500, 500, 4], true)
      .then((input) => {
        const operationDown = ExampleShader(input, step);
        const output = gm.tensorFrom(operationDown);
        const sess = new gm.Session();
        sess.init(operationDown);
        sess.runOp(operationDown, 0, output);

        gm.canvasFromTensor(this.refCanvas, output);
      });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <canvas
          width={500}
          height={500}
          ref={(node) => { this.refCanvas = node; }}
        />
      </div>
    );
  }
}

export default connect(() => ({}), null, null, { pure: false })(ShaderContainer);

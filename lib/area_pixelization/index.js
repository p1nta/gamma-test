import * as gm from 'gammacv';
import kernel from './kernel.glsl';

export default (tSrc, step, centerX, centerY, radius) => new gm.RegisterOperation('ExampleShader')
  .Input('tSrc', 'uint8')
  .Output('uint8')
  .Constant('step', step)
  .Constant('centerX', centerX)
  .Constant('centerY', centerY)
  .Constant('radius', radius)
  .LoadChunk('pickValue')
  .GLSLKernel(kernel)
  .Compile({ tSrc });

import * as gm from 'gammacv';
import kernel from './kernel.glsl';

export default (tSrc, step) => new gm.RegisterOperation('ExampleShader')
  .Input('tSrc', 'uint8')
  .Output('uint8')
  .Constant('step', step)
  .LoadChunk('pickValue')
  .GLSLKernel(kernel)
  .Compile({ tSrc });

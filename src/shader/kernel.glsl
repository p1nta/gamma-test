vec4 operation(float x, float y) {
  float dx = 0.0;
  float dy = 0.0;

  if (x > step) {
    float hx = mod(x, step);
    dx = x - hx;
  }

  if (y > step) {
    float hy = mod(y, step);
    dy = y - hy;
  }

  vec4 res = vec4(0, 0, 0, 0);

  for (float i = 0.0; i < step; i += 1.0) {
    for (float j = 0.0; j < step; j += 1.0) {
      res = res + pickValue_tSrc(i + dx, j + dy);
    }
  }

  float s = step * step;

  return res / s;
}

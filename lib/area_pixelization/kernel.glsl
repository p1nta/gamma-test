vec4 operation(float x, float y) {
  if (x > centerX - radius && x < centerX + radius && y > centerY - radius && y < centerY + radius) {
    float dx = 0.0;
    float dy = 0.0;
    float distanceToLeft = 500.0 - centerX - radius;
    float distanceToTop = 500.0 - centerY - radius;

    if (x - distanceToLeft >= step) {
      float hx = mod(x - distanceToLeft, step);
      dx = x - distanceToLeft - hx;
    }

    if (y - distanceToTop >= step) {
      float hy = mod(y - distanceToTop, step);
      dy = y - distanceToTop - hy;
    }

    vec4 res = vec4(0, 0, 0, 0);

    for (float i = 0.0; i < step; i += 1.0) {
      for (float j = 0.0; j < step; j += 1.0) {
        res = res + pickValue_tSrc(distanceToLeft + i + dx, distanceToTop + j + dy);
      }
    }

    float s = step * step;

    return vec4(res.r / s, res.g / s, res.b / s, res.a / s);
  }

  return pickValue_tSrc(x, y);
}

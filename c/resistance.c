// resistance.c - write Resistance to an SVG file

#include <math.h>
#include <stdio.h>

// Full angle in radians
#define TAU 6.28318530717958647692

struct turtle {
  double x, y, direction;
};

static struct turtle turtle;
static FILE *file;

static void move(double distance, double direction) {
  turtle.direction += direction;

  turtle.x += cos(turtle.direction) * distance;
  turtle.y += sin(turtle.direction) * distance;

  fprintf(file, " %+f,%+f", turtle.x, -turtle.y);
}

int main(void) {
  double l = 32; // Side length of the logo

  file = fopen("resistance.svg", "w");

  if (!file)
    return 1;

  fprintf(file,
    "<?xml version='1.0'?>\n"
    "<svg xmlns='http://www.w3.org/2000/svg' "
    "viewBox='%g %g %g %g' width='256px' height='256px'>\n"
    "  <style>polyline {fill: none; stroke: black; stroke-width: 1;}</style>\n"
    "  <rect x='-50%%' y='-50%%' width='100%%' height='100%%' fill='white'/>\n",
    -l/2, -l/2, l, l);

  // Shortest distance from beginning to end of polyline
  int h = 24;

  for (int i = -1; i <= 1; ++i) {
    turtle.direction = 0;
    turtle.x = i * l / 4;
    turtle.y = -l / 2 + ((l - h) / 2) - 1;

    fprintf(file,
      "  <polyline points='%+f,%+f",
      turtle.x, -turtle.y);

    int bumps = 4;
    double s = h / 4, t = s / bumps;
    double sixth = TAU / 6;

    move(s, TAU / 4);
    move(t, sixth);

    while (--bumps) {
      move(2 * t, -2 * sixth);
      move(2 * t, 2 * sixth);
    }

    move(2 * t, -2 * sixth);
    move(t, 2 * sixth);
    move(s, -sixth);
    move(2 * t, 5 * TAU / 12);

    fputs("'/>\n", file);
  }

  fputs("</svg>\n", file);
  fclose(file);
}

// vortex.c - write Vortex to an SVG file

#include <math.h>
#include <stdio.h>

// Full angle in radians
#define TAU 6.28318530717958647692

static FILE *file;

static double o; // Rhombus opening angle
static double a; // Rhombus acute angle
static double s; // Rhombus side
static double d; // Rhombus diagonal that bisects a

static void rhombus(double x, double y, double direction) {
  double vertex2x = x + cos(direction + o) * s;
  double vertex2y = y + sin(direction + o) * s;

  double vertex4x = x + cos(direction - o) * s;
  double vertex4y = y + sin(direction - o) * s;

  double vertex3x = x + cos(direction) * d;
  double vertex3y = y + sin(direction) * d;

  fprintf(file,
    "  <polygon points='%+f,%+f %+f,%+f %+f,%+f %+f,%+f'/>\n",
    x, -y, vertex2x, -vertex2y, vertex3x, -vertex3y, vertex4x, -vertex4y);
}

int main(void) {
  _Bool desktop = 1;
  int rhombi = 24;
  o = TAU / rhombi;
  a = 2 * o;
  s = desktop ? 1.0 : 2.0 / 3.0;
  d = 2 * cos(o) * s;

  file = fopen("vortex.svg", "w");

  if (!file)
    return 1;

  // Viewport width and height
  double vw = desktop ? 8 : 9;
  double vh = desktop ? 8 : 16;

  // Physical width and height
  double pw = desktop ? 256 : 750;
  double ph = desktop ? 256 : 1334;

  fprintf(file,
    "<?xml version='1.0'?>\n"
    "<svg xmlns='http://www.w3.org/2000/svg' "
    "viewBox='%g %g %g %g' width='%gpx' height='%gpx' fill='black'>\n"
    "  <rect x='%g' y='%g' width='%g' height='%g' fill='white'/>\n",
    -vw / 2, -vh / 2, vw, vh, pw, ph, -vw / 2, -vh / 2, vw, vh);

  double angle = 0;
  double direction = angle + TAU / 8;
  double rotation = TAU / rhombi;

  for (int i = 0; i < rhombi; ++i) {
    rhombus(cos(angle) * d, sin(angle) * d, direction);

    angle += rotation;
    direction += rotation;
  }

  fputs("</svg>\n", file);
  fclose(file);
}

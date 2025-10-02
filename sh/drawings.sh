#! /bin/sh

set -e

cc -o vortex ../c/vortex.c -lm

./vortex

rm vortex
mv *.svg ../img/drawings/

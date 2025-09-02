#! /bin/sh

set -e

cc -o resistance ../c/resistance.c -lm
cc -o vortex ../c/vortex.c -lm

./resistance
./vortex

rm resistance vortex
mv *.svg ../img/drawings/

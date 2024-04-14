#! /bin/sh

set -e

cc ../c/wafer-example.c
./a.out
rm a.out
mv *.wav ../audio/

hpq-png -z -p 22 -q 8160
mv *.png ../img/wafer-example.png

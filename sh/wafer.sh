#! /bin/sh

set -e

cc ../c/wafer-example.c
./a.out
rm a.out
mv *.wav ../audio/

pq-png -z -p 0 -q 240
mv *.png ../img/wafer-example.png

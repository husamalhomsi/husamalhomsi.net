#! /bin/sh

set -e

cc ../c/wafer-example.c
./a.out
rm a.out
mv *.wav ../audio/

pq-png -z -p 32 -q 8160
mv *.png ../img/wafer-example.png

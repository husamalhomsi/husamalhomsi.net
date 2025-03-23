#! /bin/sh

set -e

pq-png  -z -w 1920 -h 1440 -p 14 -q 16777216 -x -480 -y -360
xy-png  -z -w 1920 -h 1440
eca-png -z -c 1920 -g 1440 -r 120 -s 1

mv *.pq.png p14q16777216w1920h1440x-480y-360.pq.png
mv *.png ../img/printing/

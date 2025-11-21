#! /bin/sh

set -e

xy-png  -z -w 2048 -h 1536
pq-png  -z -w 2048 -h 1536 -p 14 -q 33554432 -x -512 -y -384
eca-png -z -c 2048 -g 1536 -r 120 -s 1

mv *.pq.png p14q33554432w2048h1536x-512y-384.pq.png

img2doc *.xy.png  w2048h1536.xy.pdf
img2doc *.pq.png  p14q33554432w2048h1536x-512y-384.pq.pdf
img2doc *.eca.png r120s1c2048g1536.eca.pdf

mv *.png ../img/maolp/
mv *.pdf ../pdf/maolp/

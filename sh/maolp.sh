#! /bin/sh

set -e

H=1024
W=$((H*4/3))
P=14
Q=$((2**24))
X=$((-W/4))
Y=$((-H/4))
R=120
S=1

xy-png  -z -w $W -h $H
pq-png  -z -w $W -h $H -p $P -q $Q -x $X -y $Y
eca-png -z -c $W -g $H -r $R -s $S

mv *.pq.png p${P}q${Q}w${W}h${H}x${X}y${Y}.pq.png

img2doc *.xy.png  w${W}h${H}.xy.pdf
img2doc *.pq.png  p${P}q${Q}w${W}h${H}x${X}y${Y}.pq.pdf
img2doc *.eca.png r${R}s${S}c${W}g${H}.eca.pdf

rm -f ../img/maolp/* ../doc/maolp/*

mv *.png ../img/maolp/
mv *.pdf ../doc/maolp/

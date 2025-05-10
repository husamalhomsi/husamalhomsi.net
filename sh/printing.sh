#! /bin/sh

set -e

W=2048
H=1536
P=14
Q=$((2**26))
X=$((-W/4))
Y=$((-H/4))

xy-png  -z -w $W -h $H
pq-png  -z -w $W -h $H -p $P -q $Q -x $X -y $Y
eca-png -z -c $W -g $H -r 120 -s 1

mv *.pq.png p${P}q${Q}w${W}h${H}x${X}y${Y}.pq.png
mv *.png ../img/printing/

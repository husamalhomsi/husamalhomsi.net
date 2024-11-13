#! /bin/sh

set -e

pq-png -z -p 37 -q 3 -l 16
mv *.png ../img/icon.png

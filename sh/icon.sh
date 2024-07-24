#! /bin/sh

set -e

hpq-png -z -p 27 -q 3 -l 16
mv *.png ../img/icon.png

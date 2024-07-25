#! /bin/sh

set -e

cd ../img/eca/

eca-png -c 512 -g 256 -r 18
eca-png -c 512 -g 256 -r 30

cd ../../audio/eca/

eca-wav -c 512 -g 256 -r 18
eca-wav -c 512 -g 256 -r 30

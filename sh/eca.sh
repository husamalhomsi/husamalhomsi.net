#! /bin/sh

set -e

cd ../img/eca/

eca-png -r 18 -c 512 -g 256
eca-png -r 30 -c 512 -g 256

cd ../../audio/eca/

eca-wav -r 18 -c 512 -g 256
eca-wav -r 30 -c 512 -g 256

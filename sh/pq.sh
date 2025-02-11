#! /bin/sh

set -e

cd ../img/pq/

pq-png -z -p 0 -q 128
pq-png -z -p 1 -q 128
pq-png -z -p 2 -q 128
pq-png -z -p 3 -q 128
pq-png -z -p 4 -q 128

pq-png -z -p 10 -q 256
pq-png -z -p 11 -q 256
pq-png -z -p 12 -q 256
pq-png -z -p 13 -q 256
pq-png -z -p 14 -q 256

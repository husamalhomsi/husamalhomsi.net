#! /bin/sh

set -e

cd ../img/pq/

pq-png -z -p 0 -q 192
pq-png -z -p 1 -q 192
pq-png -z -p 2 -q 192
pq-png -z -p 3 -q 192
pq-png -z -p 4 -q 192

pq-png -z -p 5 -q 19
pq-png -z -p 6 -q 19
pq-png -z -p 7 -q 19
pq-png -z -p 8 -q 19
pq-png -z -p 9 -q 19

pq-png -z -p 10 -q 4096
pq-png -z -p 11 -q 4096
pq-png -z -p 12 -q 4096
pq-png -z -p 13 -q 4096
pq-png -z -p 14 -q 1048576

pq-png -z -p 18 -q 136

pq-png -z -p 20 -q 223

pq-png -z -p 25 -q 224

pq-png -z -p 31 -q 223
pq-png -z -p 32 -q 2040

pq-png -z -p 35 -q 136
pq-png -z -p 36 -q 15
pq-png -z -p 37 -q 15
pq-png -z -p 39 -q 4097

pq-png -z -p 40 -q 2064
pq-png -z -p 42 -q 224

pq-png -z -p 45 -q 20
pq-png -z -p 46 -q 15
pq-png -z -p 47 -q 15
pq-png -z -p 49 -q 1048577

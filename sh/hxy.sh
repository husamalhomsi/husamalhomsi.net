#! /bin/sh

set -e

cd ../img/hxy/

hxy -z -l 256
hxy -z -l 251

hxy -z -l 256 -s
hxy -z -l 251 -s

hxy -z -l 256 -H
hxy -z -l 251 -H

hxy -z -l 256 -V
hxy -z -l 251 -V

#! /bin/sh

set -e

cd ../img/xy/

xy-png -z -l 256
xy-png -z -l 251

xy-png -z -l 256 -s
xy-png -z -l 251 -s

xy-png -z -l 256 -H
xy-png -z -l 251 -H

xy-png -z -l 256 -V
xy-png -z -l 251 -V

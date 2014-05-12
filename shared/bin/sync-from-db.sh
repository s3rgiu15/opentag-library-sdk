#!/bin/bash
echo
echo
echo
current=$(dirname ${0})
echo $current
cd $current/../../
echo "Changing dir to:" $(pwd)

echo CLASSPATH=.

if [ $# -eq 0 ]; then
	echo
	echo "MISSING ARGUMENT !"
	echo "Specify package to build. Example:"
	echo "sync-from-db.sh google"
	echo
	exit
fi

SRC=$1
TAG=$2
TOOLS="shared"
MM="shared/bin/lib/MiniMerge.jar"
HTML="$TOOLS/bin/html"
SRC_BASE="libraries,shared/js"
EXCLUDE=".*/dist.*,.*/build.*"

echo "================================================================================"
echo "Vendor: $SRC"
echo "================================================================================"
echo "Tags: $TAG"


#build output with all dependencies
java -jar shared/bin/lib/LibraryManager.jar \
 --libraries-dir "libraries" \
 --sync-from-database \
 --template "shared/template" \
 --formatted \
 --logo\
 --vendors "$SRC" \
 --tags "$TAG"\
 -v


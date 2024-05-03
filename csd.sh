#!/bin/bash 

if [ ! -d "$1" ]; then
    mkdir "$1"
    echo "Directory '$1' created."
else
    echo "Directory '$1' already exists."
fi

cd "$1" || exit

mkdir -p styles
mkdir -p images
mkdir -p scripts

touch index.html

echo "Structure created in directory '$1'."
code index.html

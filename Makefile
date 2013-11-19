PATH := ./node_modules/.bin:${PATH}

.PHONY : init build dist publish

init:
        npm install

build:
        coffee -o lib/ -c src/

dist: init build

publish: dist
        npm publish
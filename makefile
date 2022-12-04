all:
	echo "Hello World!"
w:
	node_modules/.bin/webpack
p:
	node_modules/.bin/webpack --mode production
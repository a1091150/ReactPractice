all:
	echo "Hello World!"
w:
	node_modules/.bin/webpack
p:
	# node_modules/.bin/webpack --mode production
	node_modules/.bin/webpack --mode development

x:
	open build/index.html

l:
	node_modules/.bin/webpack-dev-server
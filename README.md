# page-analyzer


Bunch of analyses running over current HTML page.
Implemented  as bookmarklet (or favelet if you want).


## Try

Go to [install page](https://gratex.github.io/page-analyzer/favelets/analyzer/install.html)

## Currently supported detectors (mixed)

- Doctype
- Compatibility Mode
- Content-Type
- Content Length
- Script Accessible Cookies
- Sensitive Script Accessible Cookies
- External Scripts
- Sensitive information in links
- Server Banners
- Client Banners
- Tag Statistics
- Nesting Levels
- Comments
- CSS Classes
- IDs
- DIVities
- Inline Styles
- Inline Event Handlers
- Inline Scripts
- Languages
- H37 - Using alt attributes on img elements
- Access-Control-* headers (CORS)

- .... see source code please

## History
Horror code. This is one of my (ainthek) very very old projects. Was supporting also IE 5,6,7 in the dark ages (not all history committed here).

## Future
Rewrite, reuse other algorithms, and add more detections, support node.js server side usage as well.

## Contribute

any contributions are welcomed, including links to similar solutions or other detection algorithms

To contribute:

- bump version to stub.js
- add detector to code2.js
- try to add test data to sample1.html

Run locally (for example):

	http-server -c-1 --cors
	open http://localhost:8080/favelets/analyzer/install.html


*Sorry for the mess, this README document is currently in progress ...*

#columnreader.js

This is JavaScript and simple CSS to display text in multiple columns, with horizonatal scrolling, that responds to the browser window or mobile device by displaying more or fewer columns as they fit.

Column Reader can be placed anywhere on an existing page, or on a page of its own. It is a division made up of three main elements, lined up left to right: the Previous Navigation, the Page Frame, and the Next Navigation. 


To start, link to columnreader.css in the head of your HTML document:

```html
<head>
  <link rel="stylesheet" href="css/columnreader.css" />
</head>
```

```html
<script type="text/javascript">
	//previous document in book, or comment out if none
	var pr = 'ch01.html'; 
	//next document in book, or comment out if none 
	var nx = 'ch03.html'; 
</script>
<script src="js/columnreader.js" type="text/javascript"></script>
```


```html
<div id="columnreader">
	<div id="prev" class="nav">
		<span class="singlearrow" id="scrollprev" title="Previous">&#8249;</span>&#160;<span class="dblarrow" id="scrollbeginning" title="Beginning of Chapter / Previous Chapter">&#171;</span>
	</div>
	<div id="pageframe">
		<div id="text">PUT YOUR TEXT HERE</div>
	</div>
	<div id="next" class="nav">
		<span class="singlearrow" id="scrollnext" title="Next">&#8250;</span>&#160;<span class="dblarrow" id="scrollend" title="End of Chapter / Next Chapter">&#187;</span>
	</div>
</div>
```

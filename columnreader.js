// Change these to adjust your layout

var col = 380;  /* column width */
var ht = 560; /* column height */
var gap = 20;  /* gap between columns */

// Delete numbers to set a maximum number of columns

var cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Sets and checks document layout and scrolling

var cr = document.getElementById('columnreader');	
var p = document.getElementById('prev');
var n = document.getElementById('next');
var f = document.getElementById('pageframe');
var t = document.getElementById('text');
var x = col + gap;		
var controls = p.offsetWidth + n.offsetWidth;
function setLayout() {
	p.style.marginTop = ht * .4  + "px";
	n.style.marginTop = ht * .4  + "px";	
	f.style.height = ht + 40 + "px";
	f.style.width = col + "px";
	t.style.height = ht + "px";
	t.style.columnWidth = col + "px";
	t.style.MozColumnWidth = col + "px";
	t.style.WebkitColumnWidth = col + "px";
	t.style.columnGap = gap + "px";
	t.style.MozColumnGap = gap + "px";
	t.style.WebkitColumnGap = gap + "px";
	checkWidth();		
	};				
function checkWidth() { 	
	var w = window.innerWidth;	
	var avail = w - controls;
	var b = avail / x;
	var colnum = Math.floor(b);
	for ( i = 0; i < cols.length; i++) {		
		if ( cols[i] <= colnum) { 
		f.style.width= (cols[i] * x) - gap + "px"; 
		cr.style.width= (cols[i] * x) - gap + controls + "px"; }
		}
	};	
function scrollNext() {
	var xtr = f.scrollLeft % x;
	for ( i = 0; i < cols.length; i++) {
		if ( f.style.width==((cols[i] * x) - gap) + "px" ) {
		f.scrollLeft = f.scrollLeft + ((cols[i] * x)-xtr);}
		}
	};	
function scrollEnd() {
	for ( i = 0; i < cols.length; i++) {
		if ( f.style.width==((cols[i] * x) - gap) + "px" ) {
		if ( f.scrollLeft >= (f.scrollWidth - ((cols[i] * x) - gap)) ) { window.location.href = nx; }
		else { f.scrollLeft = f.scrollWidth - ((cols[i] * x) - gap); } }
		}
	};				
function scrollPrev() {
	var xtr = f.scrollLeft % x;			
	if ( xtr == 0 ) { var y = 0; }
	else { var y = x - xtr; };
	for ( i = 0; i < cols.length; i++) {
		if ( f.style.width==((cols[i] * x) - gap) + "px" ) {
		f.scrollLeft = f.scrollLeft - ((cols[i] * x)-y);}
		}
	};							
function scrollBeginning() {
	if ( f.scrollLeft == 0 ) { window.location.href = pr; }
	{ f.scrollLeft = 0; }
	};
	

$(window).load(setLayout);
$(document).ready(function() {			
	$(window).resize(checkWidth);			
	$("#scrollprev").click(scrollPrev);
	$("#scrollbeginning").click(scrollBeginning);
	$("#scrollnext").click(scrollNext);
	$("#scrollend").click(scrollEnd);							
});		
	
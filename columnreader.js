// Change these to adjust your layout

var col 	= 380;  	/* column width */
var ht = 560; 		/* column height */
var gap = 20;  		/* gap between columns */

// Delete numbers to set a maximum number of columns

var cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Sets and checks document layout and scrolling

var cr = document.getElementById('columnreader');	
var bck = document.getElementById('back');
var ahd = document.getElementById('ahead');
var frm = document.getElementById('pageframe');
var txt = document.getElementById('text');
var x = col + gap;		
var controls = bck.offsetWidth + ahd.offsetWidth;

function setLayout() {
	bck.style.marginTop = ht * .4  + "px";
	ahd.style.marginTop = ht * .4  + "px";	
	frm.style.height = ht + 40 + "px";
	frm.style.width = col + "px";
	txt.style.height = ht + "px";
	txt.style.columnWidth = col + "px";
	txt.style.MozColumnWidth = col + "px";
	txt.style.WebkitColumnWidth = col + "px";
	txt.style.columnGap = gap + "px";
	txt.style.MozColumnGap = gap + "px";
	txt.style.WebkitColumnGap = gap + "px";
	checkWidth();		
};

function checkWidth() { 	
	var w = window.innerWidth;	
	var avail = w - controls;
	var b = avail / x;
	var colnum = Math.floor(b);
	for ( i = 0; i < cols.length; i++) {		
		if ( cols[i] <= colnum) { 
			frm.style.width= (cols[i] * x) - gap + "px"; 
			cr.style.width= (cols[i] * x) - gap + controls + "px"; 
		}
	}
};	

function stepAhead() {
	var xtr = frm.scrollLeft % x;
	for ( i = 0; i < cols.length; i++) {
		if ( frm.style.width==((cols[i] * x) - gap) + "px" ) {
			newScrollVal = frm.scrollLeft + ((cols[i] * x)-xtr);
			smoothStep(newScrollVal);
		}
	}
};

function stepBack() {
	var xtr = frm.scrollLeft % x;			
	if ( xtr == 0 ) { var y = 0; }
	else { var y = x - xtr; };
	for ( i = 0; i < cols.length; i++) {
		if ( frm.style.width==((cols[i] * x) - gap) + "px" ) {
			newScrollVal = frm.scrollLeft - ((cols[i] * x)-y);
			smoothStep(newScrollVal);
		}
	}
};

function smoothStep(newScrollVal){
	$(frm).animate({ scrollLeft: newScrollVal }, 500);
}	

function scrollToAnchor () {
		var target = $(this.hash);
		var scrollDist = $(target)[0].parentElement.offsetLeft;
		var colDist = Math.ceil(scrollDist/x);
		smoothStep((colDist * x) - x);		// pull back by 1 column so link is visible
		return false;
}

// Select either JUMP OPTION A or B
//
// JUMP OPTION A: 
// Jumps immediately to the start of the next or previous chapter	
// if there is no next or previous chapter defined, jumps to end or beginning of current chapter
//

function jumpAhead() {
	for ( i = 0; i < cols.length; i++) {
		if (typeof nx === 'undefined') { 
			frm.scrollLeft = frm.scrollWidth - ((cols[i] * x) - gap); 
		}
		{window.location.href = nx; }
	}
};

function jumpBack() {
	if (typeof pr === 'undefined') { 
		frm.scrollLeft = 0; 
	}
	{ window.location.href = pr; }
};

//
// JUMP OPTION B: 
// First jumps to end or beginning of current chapter
// and then to the start of the next or previous chapter
//
// function jumpAhead() {
// 	for ( i = 0; i < cols.length; i++) {
// 		if ( frm.style.width==((cols[i] * x) - gap) + "px" ) {
// 		if ( frm.scrollLeft >= (frm.scrollWidth - ((cols[i] * x) - gap)) ) { window.location.href = nx; }
// 		else { frm.scrollLeft = frm.scrollWidth - ((cols[i] * x) - gap); } }
// 		}
// 	};								
// function jumpBack() {
// 	if ( frm.scrollLeft == 0 ) { window.location.href = pr; }
// 	{ frm.scrollLeft = 0; }
// 	};
	

$(window).load(setLayout);
$(document).ready(function() {			
	$(window).resize(checkWidth);			
	$("#stepback").click(stepBack);
	$("#jumpback").click(jumpBack);
	$("#stepahead").click(stepAhead);
	$("#jumpahead").click(jumpAhead);
	$("a[href*=#]").click(scrollToAnchor);

});		
s = Snap('.eye__svg');

s.attr({viewBox:"0 0 30 25"});

var ANIMATION_TIME = 150;
var eyelid, bottomEyelid, mask, pupil, eb1, eb2, eb3, eb4, eb5, g, clicked;

eyelid = s.path("M7.39,9.58s3.1-4.42,7.53-4.42c5.19,0,7.69,4.7,7.69,4.7");
mask = s.path('M31.09,21.28c0.39-.39-5.23-9.6-5.62-10L23.31,9.13a1,1,0,0,0-1.41,0,1,1,0,0,0-.15.22h0l0,0,0,0.06c-0.38.58-2.6-4.28-6.76-4.28-3.83,0-6.67,3.89-6.7,3.85L8.15,9A0.93,0.93,0,0,0,8.1,8.89L8,8.84,7.95,8.77l-0.1,0L7.69,8.65l-0.1,0H7.21l-0.09,0-0.18.07-0.08,0,0,0h0l-0.06.06-0.08.05L4.53,11c-0.39.39-6.76,9.84-6.37,10.23');
bottomEyelid = s.path('M9.91,12.31A10.45,10.45,0,0,1,7.39,9.58');
pupil = s.circle(1, 1, 3);
eb1 = s.line(15, 2, 15, 2);
eb2 = s.line(15, 2, 15, 2);
eb3 = s.line(15, 2, 15, 2);
eb4 = s.line(15, 2, 15, 2);
eb5 = s.line(15, 2, 15, 2);
g = s.g(pupil, eb1, eb2, eb3, eb4, eb5);
clicked = false;

s.click(function() {

	if (!clicked) {
		clicked = true;
		eyelid.animate({ d: "M7.39,9.58s3.1,4.56,7.53,4.56a9.33,9.33,0,0,0,7.69-4.28" }, ANIMATION_TIME, mina.easeIn);
		mask.animate({d: 'M31.09,21.28c0.39-.39-5.23-9.6-5.62-10L23.31,9.13a1,1,0,0,0-1.41,0,1,1,0,0,0-.15.22h0l0,0,0,0.06a8.29,8.29,0,0,1-6.76,3.69c-3.83,0-6.67-4.08-6.7-4.12L8.15,9A0.93,0.93,0,0,0,8.1,8.89L8,8.84,7.95,8.77l-0.1,0L7.69,8.65l-0.1,0H7.21l-0.09,0-0.18.07-0.08,0,0,0h0l-0.06.06-0.08.05L4.53,11c-0.39.39-6.76,9.84-6.37,10.23'}, ANIMATION_TIME, mina.easeIn);

	  eb1.animate({
	    x1: 7,
	    x2: 6,
	    y1: 10.5,
	    y2: 12
	  }, ANIMATION_TIME, mina.easeIn);

	  eb2.animate({
	    x1: 10.5,
	    x2: 9.5,
	    y1: 13,
	    y2: 15
	  }, ANIMATION_TIME, mina.easeIn);

	  eb3.animate({
	    x1: 15,
	    x2: 15,
	    y1: 14,
	    y2: 16.7
	  }, ANIMATION_TIME, mina.easeIn);

	   eb4.animate({
	    x1: 19.5,
	    x2: 20.5,
	    y1: 13,
	    y2: 15
	  }, ANIMATION_TIME, mina.easeIn);

	   eb5.animate({
	    x1: 23,
	    x2: 24,
	    y1: 10.5,
	    y2: 12
	  }, ANIMATION_TIME, mina.easeIn);
  } else {
	  clicked = false;
	  eyelid.animate({ d: "M7.39,9.58s3.1-4.42,7.53-4.42c5.19,0,7.69,4.7,7.69,4.7" }, ANIMATION_TIME, mina.easeIn);
	  mask.animate({d: 'M31.09,21.28c0.39-.39-5.23-9.6-5.62-10L23.31,9.13a1,1,0,0,0-1.41,0,1,1,0,0,0-.15.22h0l0,0,0,0.06c-0.38.58-2.6-4.28-6.76-4.28-3.83,0-6.67,3.89-6.7,3.85L8.15,9A0.93,0.93,0,0,0,8.1,8.89L8,8.84,7.95,8.77l-0.1,0L7.69,8.65l-0.1,0H7.21l-0.09,0-0.18.07-0.08,0,0,0h0l-0.06.06-0.08.05L4.53,11c-0.39.39-6.76,9.84-6.37,10.23'}, ANIMATION_TIME, mina.easeIn);

	eb1.animate({
	  x1: 15,
	  x2: 15,
	  y1: 2,
	  y2: 2
	}, ANIMATION_TIME, mina.easeIn);

	eb2.animate({
		x1: 15,
		x2: 15,
		y1: 2,
		y2: 2
	}, ANIMATION_TIME, mina.easeIn);

	eb3.animate({
		x1: 15,
		x2: 15,
		y1: 2,
		y2: 2
	}, ANIMATION_TIME, mina.easeIn);

	 eb4.animate({
		 x1: 15,
		 x2: 15,
		 y1: 2,
		 y2: 2
	}, ANIMATION_TIME, mina.easeIn);

	 eb5.animate({
		 x1: 15,
		 x2: 15,
		 y1: 2,
		 y2: 2
	}, ANIMATION_TIME, mina.easeIn);
  }


});

g.attr({
	mask: mask
})

mask.attr({
	fill: 'white'
});

bottomEyelid.attr({
	fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
})

eyelid.attr({
    fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
});

eb1.attr({
    fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
});

eb2.attr({
    fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
});

eb3.attr({
    fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
});

eb4.attr({
    fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
});

eb5.attr({
    fill: 0,
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 2,
    "fill-opacity": 0
});

pupil.attr({
	fill: 'white',
	cx: 16,
  cy: 8
})

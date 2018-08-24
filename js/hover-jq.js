$(document).ready(function() {	
	var newElement1 = ".preview-cover-1 img:last-child";
	var newElement2 = ".preview-cover-2 img:last-child";
	var newElement3 = ".preview-cover-3 img:last-child";
	var newElement4 = ".preview-cover-4 img:last-child";

	var mainStyles = {"display": "inherit", "position": "absolute", "top": "0", "opacity": "0", "transition": "0.6s all", "border-radius": "15px"};
    
    // ----------------------FIRST-BLOCK-------------------------
    var section1newElement1 = $(".interier-section-1 .preview-block-1 img");
    var section1newElement2 = $(".interier-section-1 .preview-block-2 img");
    var section1newElement3 = $(".interier-section-1 .preview-block-3 img");
    var section1newElement4 = $(".interier-section-1 .preview-block-4 img");

    section1newElement1.mouseover(function () {
        $(".preview-cover-1").append(section1newElement1.eq(0).clone());
        $(newElement1).css(mainStyles);
        $(newElement1).animate({'opacity': '1'}, 100);
    });
    section1newElement1.mouseout(function () {
    	$(newElement1).animate({'opacity': '0'}, 100);
    });
    section1newElement2.mouseover(function () {
        $(".preview-cover-1").append(section1newElement2.eq(0).clone());
       	$(newElement1).css(mainStyles);
        $(newElement1).animate({'opacity': '1'}, 100);
    });
    section1newElement2.mouseout(function () {
    	$(newElement1).animate({'opacity': '0'}, 100);
    });
    section1newElement3.mouseover(function () {
        $(".preview-cover-1").append(section1newElement3.eq(0).clone());
        $(newElement1).css(mainStyles);
        $(newElement1).animate({'opacity': '1'}, 100);
    });
    section1newElement3.mouseout(function () {
    	$(newElement1).animate({'opacity': '0'}, 100);
    });
   section1newElement4.mouseover(function () {
        $(".preview-cover-1").append(section1newElement4.eq(0).clone());
        $(newElement1).css(mainStyles);
        $(newElement1).animate({'opacity': '1'}, 100);
    });
    section1newElement4.mouseout(function () {
    	$(newElement1).animate({'opacity': '0'}, 100);
    });

	// ------------------------SECOND-BLOCK--------------------------//
    var section2newElement1=$(".interier-section-2 .preview-block-1 img");
    var section2newElement2=$(".interier-section-2 .preview-block-2 img");
    var section2newElement3=$(".interier-section-2 .preview-block-3 img");
    var section2newElement4=$(".interier-section-2 .preview-block-4 img");
 	section2newElement1.mouseover(function () {
        $(".preview-cover-2").append(section2newElement1.eq(0).clone());
        $(newElement2).css(mainStyles);
        $(newElement2).animate({'opacity': '1'}, 100);
    });
    section2newElement1.mouseout(function () {
    	$(newElement2).animate({'opacity': '0'}, 100);
    });
    section2newElement2.mouseover(function () {
        $(".preview-cover-2").append(section2newElement2.eq(0).clone());
        $(newElement2).css(mainStyles);
        $(newElement2).animate({'opacity': '1'}, 100);
    });
    section2newElement2.mouseout(function () {
    	$(newElement2).animate({'opacity': '0'}, 100);
    });
    section2newElement3.mouseover(function () {
        $(".preview-cover-2").append(section2newElement3.eq(0).clone());
        $(newElement2).css(mainStyles);
        $(newElement2).animate({'opacity': '1'}, 100);
    });
    section2newElement3.mouseout(function () {
    	$(newElement2).animate({'opacity': '0'}, 100);
    });
   section2newElement4.mouseover(function () {
        $(".preview-cover-2").append(section2newElement4.eq(0).clone());
        $(newElement2).css(mainStyles);
        $(newElement2).animate({'opacity': '1'}, 100);
    });
    section2newElement4.mouseout(function () {
    	$(newElement2).animate({'opacity': '0'}, 100);
    });

// ----------------------THIRTH-BLOCK-------------------------
	var section3newElement1=$(".interier-section-3 .preview-block-1 img");
    var section3newElement2=$(".interier-section-3 .preview-block-2 img");
    var section3newElement3=$(".interier-section-3 .preview-block-3 img");
    var section3newElement4=$(".interier-section-3 .preview-block-4 img");
 	section3newElement1.mouseover(function () {
        $(".preview-cover-3").append(section3newElement1.eq(0).clone());
        $(newElement3).css(mainStyles);
        $(newElement3).animate({'opacity': '1'}, 100);
    });
    section3newElement1.mouseout(function () {
        $(newElement3).animate({'opacity': '0'}, 100);
    });
    section3newElement2.mouseover(function () {
        $(".preview-cover-3").append(section3newElement2.eq(0).clone());
        $(newElement3).css(mainStyles);
        $(newElement3).animate({'opacity': '1'}, 100);
    });
    section3newElement2.mouseout(function () {
        $(newElement3).animate({'opacity': '0'}, 100);
    });
    section3newElement3.mouseover(function () {
        $(".preview-cover-3").append(section3newElement3.eq(0).clone());
        $(newElement3).css(mainStyles);
        $(newElement3).animate({'opacity': '1'}, 100);
    });
    section3newElement3.mouseout(function () {
        $(newElement3).animate({'opacity': '0'}, 100);
    });
   section3newElement4.mouseover(function () {
        $(".preview-cover-3").append(section3newElement4.eq(0).clone());
        $(newElement3).css(mainStyles);
        $(newElement3).animate({'opacity': '1'}, 100);
    });
    section3newElement4.mouseout(function () {
       	$(newElement3).animate({'opacity': '0'}, 100);
    });

    // ----------------------FOURTH-BLOCK-------------------------
	var section4newElement1=$(".interier-section-4 .preview-block-1 img");
    var section4newElement2=$(".interier-section-4 .preview-block-2 img");
    var section4newElement3=$(".interier-section-4 .preview-block-3 img");
    var section4newElement4=$(".interier-section-4 .preview-block-4 img");
    section4newElement1.mouseover(function () {
        $(".preview-cover-4").append(section4newElement1.eq(0).clone());
        $(newElement4).css(mainStyles);
        $(newElement4).animate({'opacity': '1'}, 100);
    });
    section4newElement1.mouseout(function () {
        $(newElement4).animate({'opacity': '0'}, 100);
    });
    section4newElement2.mouseover(function () {
        $(".preview-cover-4").append(section4newElement2.eq(0).clone());
        $(newElement4).css(mainStyles);
        $(newElement4).animate({'opacity': '1'}, 100);
    });
    section4newElement2.mouseout(function () {
        $(newElement4).animate({'opacity': '0'}, 100);
    });
    section4newElement3.mouseover(function () {
        $(".preview-cover-4").append(section4newElement3.eq(0).clone());
        $(newElement4).css(mainStyles);
        $(newElement4).animate({'opacity': '1'}, 100);
    });
    section4newElement3.mouseout(function () {
        $(newElement4).animate({'opacity': '0'}, 100);
    });
   section4newElement4.mouseover(function () {
        $(".preview-cover-4").append(section4newElement4.eq(0).clone());
        $(newElement4).css(mainStyles);
        $(newElement4).animate({'opacity': '1'}, 100);
    });
    section4newElement4.mouseout(function () {
        $(newElement4).animate({'opacity': '0'}, 100);
    });
});
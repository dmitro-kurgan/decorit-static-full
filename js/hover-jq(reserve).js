
	// ---------------------FIRST-BLOCK------------------------
 //    $(".interier-section-1 .preview-block-1").mouseover(function () {   	
 //        $(".preview-cover-1").append(newElement1);
 //        oldElement1.hide();
 //    });
 //    $(".interier-section-1 .preview-block-1").mouseout(function () {
 //        $(".preview-cover-1 img").eq(1).remove();
 //        oldElement1.show();
 //    });
 //    $(".interier-section-1 .preview-block-2").mouseover(function () {
 //        $(".preview-cover-1").append(newElement2);
 //        oldElement1.hide();
 //    });
 //    $(".interier-section-1 .preview-block-2").mouseout(function () {
 //      	$(".preview-cover-1 img").eq(1).remove();
 //        oldElement1.show();
 //    });
 //     $(".interier-section-1 .preview-block-3").mouseover(function () {   	
 //        $(".preview-cover-1").append(newElement3);
 //        oldElement1.hide();
 //    });
 //    $(".interier-section-1 .preview-block-3").mouseout(function () {
 //        $(".preview-cover-1 img").eq(1).remove();
 //        oldElement1.show();
 //    });
 //    $(".interier-section-1 .preview-block-4").mouseover(function () {
 //        $(".preview-cover-1").append(newElement4);
 //        oldElement1.hide();
 //    });
 //    $(".interier-section-1 .preview-block-4").mouseout(function () {
 //      	$(".preview-cover-1 img").eq(1).remove();
 //        oldElement1.show();
 //    });
 // $(document).ready(function () {
	var oldElement1=$(".preview-cover-1 img:first-child");
	var oldElement2=$(".preview-cover-2 img:first-child");
	var oldElement3=$(".preview-cover-3 img:first-child");
	var oldElement4=$(".preview-cover-4 img:first-child");
	var newElement1=$('.regular__inner__prev img').eq(0).clone();
	var newElement2=$('.regular__inner__prev img').eq(1).clone();
	var newElement3=$('.regular__inner__prev img').eq(2).clone();
	var newElement4=$('.regular__inner__prev img').eq(3).clone();


    var section1newElement1=$(".interier-section-1 .preview-block-1 img");
    var section1newElement2=$(".interier-section-1 .preview-block-2 img");
    var section1newElement3=$(".interier-section-1 .preview-block-3 img");
    var section1newElement4=$(".interier-section-1 .preview-block-4 img");
    section1newElement1.mouseover(function () {   	
        // $(".preview-cover-1").append(section1newElement1.eq(0).clone());
        $(".preview-cover-1").append(newElement1);
        $(".preview-cover-1 img:last-child").css({"display": "inherit", "position": "absolute", "top": "0"});
        // $(".preview-cover-1 img:last-child").css("top", "0");
        // oldElement1.hide();
    });
    section1newElement1.mouseout(function () {
        // $(".preview-cover-1 img").eq(1).remove();
        // oldElement1.show();
        $(".preview-cover-1 img:last-child").css("display", "none");
    });
    section1newElement2.mouseover(function () {   	
        $(".preview-cover-1").append(section1newElement2.eq(0).clone());
        oldElement1.hide();
    });
    section1newElement2.mouseout(function () {
        $(".preview-cover-1 img").eq(1).remove();
        oldElement1.show();
    });
    section1newElement3.mouseover(function () {   	
        $(".preview-cover-1").append(section1newElement3.eq(0).clone());
        oldElement1.hide();
    });
    section1newElement3.mouseout(function () {
        $(".preview-cover-1 img").eq(1).remove();
        oldElement1.show();
    });
    section1newElement4.mouseover(function () {   	
        $(".preview-cover-1").append(section1newElement4.eq(0).clone());
        oldElement1.hide();
    });
    section1newElement4.mouseout(function () {
        $(".preview-cover-1 img").eq(1).remove();
        oldElement1.show();
    });
// });
	// -------------------SECOND-BLOCK-----------------
    var section2newElement1=$(".interier-section-2 .preview-block-1 img");
    var section2newElement2=$(".interier-section-2 .preview-block-2 img");
    var section2newElement3=$(".interier-section-2 .preview-block-3 img");
    var section2newElement4=$(".interier-section-2 .preview-block-4 img");
    section2newElement1.mouseover(function () {   	
        $(".preview-cover-2").append(section2newElement1.eq(0).clone());
        oldElement2.hide();
    });
    section2newElement1.mouseout(function () {
        $(".preview-cover-2 img").eq(1).remove();
        oldElement2.show();
    });
    section2newElement2.mouseover(function () {   	
        $(".preview-cover-2").append(section2newElement2.eq(0).clone());
        oldElement2.hide();
    });
    section2newElement2.mouseout(function () {
        $(".preview-cover-2 img").eq(1).remove();
        oldElement2.show();
    });
    section2newElement3.mouseover(function () {   	
        $(".preview-cover-2").append(section2newElement3.eq(0).clone());
        oldElement2.hide();
    });
    section2newElement3.mouseout(function () {
        $(".preview-cover-2 img").eq(1).remove();
        oldElement2.show();
    });
    section2newElement4.mouseover(function () {   	
        $(".preview-cover-2").append(section2newElement4.eq(0).clone());
        oldElement2.hide();
    });
    section2newElement4.mouseout(function () {
        $(".preview-cover-2 img").eq(1).remove();
        oldElement2.show();
    });

// ----------------------THIRTH-BLOCK-------------------------
	var section3newElement1=$(".interier-section-3 .preview-block-1 img");
    var section3newElement2=$(".interier-section-3 .preview-block-2 img");
    var section3newElement3=$(".interier-section-3 .preview-block-3 img");
    var section3newElement4=$(".interier-section-3 .preview-block-4 img");
    section3newElement1.mouseover(function () {   	
        $(".preview-cover-3").append(section3newElement1.eq(0).clone());
        oldElement3.hide();
    });
    section3newElement1.mouseout(function () {
        $(".preview-cover-3 img").eq(1).remove();
        oldElement3.show();
    });
    section3newElement2.mouseover(function () {   	
        $(".preview-cover-3").append(section3newElement2.eq(0).clone());
        oldElement3.hide();
    });
    section3newElement2.mouseout(function () {
        $(".preview-cover-3 img").eq(1).remove();
        oldElement3.show();
    });
    section3newElement3.mouseover(function () {   	
        $(".preview-cover-3").append(section3newElement3.eq(0).clone());
        oldElement3.hide();
    });
    section3newElement3.mouseout(function () {
        $(".preview-cover-3 img").eq(1).remove();
        oldElement3.show();
    });
    section3newElement4.mouseover(function () {   	
        $(".preview-cover-3").append(section3newElement4.eq(0).clone());
        oldElement3.hide();
    });
    section3newElement4.mouseout(function () {
        $(".preview-cover-3 img").eq(1).remove();
        oldElement3.show();
    });

    // ----------------------FOURTH-BLOCK-------------------------
	var section4newElement1=$(".interier-section-4 .preview-block-1 img");
    var section4newElement2=$(".interier-section-4 .preview-block-2 img");
    var section4newElement3=$(".interier-section-4 .preview-block-3 img");
    var section4newElement4=$(".interier-section-4 .preview-block-4 img");
    section4newElement1.mouseover(function () {   	
        $(".preview-cover-4").append(section4newElement1.eq(0).clone());
        oldElement4.hide();
    });
    section4newElement1.mouseout(function () {
        $(".preview-cover-4 img").eq(1).remove();
        oldElement4.show();
    });
    section4newElement2.mouseover(function () {   	
        $(".preview-cover-4").append(section4newElement2.eq(0).clone());
        oldElement4.hide();
    });
    section4newElement2.mouseout(function () {
        $(".preview-cover-4 img").eq(1).remove();
        oldElement4.show();
    });
    section4newElement3.mouseover(function () {   	
        $(".preview-cover-4").append(section4newElement3.eq(0).clone());
        oldElement4.hide();
    });
    section4newElement3.mouseout(function () {
        $(".preview-cover-4 img").eq(1).remove();
        oldElement4.show();
    });
    section4newElement4.mouseover(function () {   	
        $(".preview-cover-4").append(section4newElement4.eq(0).clone());
        oldElement4.hide();
    });
    section4newElement4.mouseout(function () {
        $(".preview-cover-4 img").eq(1).remove();
        oldElement4.show();
    });

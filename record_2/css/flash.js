var g_jquery_ready = 0;
function pageMain()
{
	if(g_jquery_ready == 1)
	{
		$(".cd").addClass("flash");
	}
	else
	{
		$(document).ready(function(){
			g_jquery_ready = 1;
			$(".cd").addClass("flash");
		});
	}
}
function pageOut()
{
	if(g_jquery_ready == 1)
	{
		$(".cd").removeClass("flash");
	}
}


$(function(){
    $(".index .icon_1").click(function(){

        if ($(".index").hasClass("on")) {
            $(".index").addClass("off").removeClass("on")
        } else {
            $(".index").addClass("on").removeClass("off")
        }
    })
});

$(function(){
    $(".list .icon_1").click(function(){

        if ($(".list").hasClass("off")) {
            $(".list").addClass("on").removeClass("off")
        } else {
            $(".list").addClass("off").removeClass("on")
        }
    })
});
$(function () {
    $(".a1_3").click(function(){

        if ($(".pop_bx").hasClass("offa")) {
            $(".n2").show();
            $(".n1").hide();
            $(".n3").hide();
            $(".pop_bx").addClass("ona").removeClass("offa");
            $(".pop_bx_in").addClass("offb").removeClass("onb");

        } else {
            $(".pop_bx").addClass("offa").removeClass("ona");
            $(".n1").show();
            $(".n2").hide();
            $(".n3").hide();
        }

    });


            $(".a1_4").click(function(){

                if ($(".pop_bx_in").hasClass("offb")) {
                    $(".n3").show();
                    $(".n1").hide();
                    $(".n2").hide();
                    $(".pop_bx_in").addClass("onb").removeClass("offb");
                    $(".pop_bx").addClass("offa").removeClass("ona");


                } else {
                    $(".pop_bx_in").addClass("offb").removeClass("onb");
                    $(".n1").show();
                    $(".n3").hide();
                    $(".n2").hide();
                }

            })




})

pageMain();

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

// 添加删除class
$(function() {
    $(".index .pop_bt").click(function () {
        if ($(".index").hasClass("on")) {
            $(".index").addClass("off").removeClass("on")
        } else {
            $(".index").addClass("on").removeClass("off")
        }
    });
});

$(function() {
    $(".list .pop_bt").click(function () {
        if ($(".list").hasClass("on")) {
            $(".list").addClass("off").removeClass("on")
        } else {
            $(".list").addClass("on").removeClass("off")
        }
    });
});

$(function() {
    $(".info .pop_bt").click(function () {
        if ($(".info").hasClass("on")) {
            $(".info").addClass("off").removeClass("on")
        } else {
            $(".info").addClass("on").removeClass("off")
        }
    });
});

$(function() {
    $(".pg .pop_bt").click(function () {
        if ($(".pg").hasClass("on")) {
            $(".pg").addClass("off").removeClass("on")
        } else {
            $(".pg").addClass("on").removeClass("off")
        }
    });
});

pageMain()
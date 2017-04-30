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
	// has audio
	playAudio();
	// has video
	playVideo();
}
function pageOut()
{
	if(g_jquery_ready == 1)
	{
		$(".cd").removeClass("flash");
	}
}
function playVideo()
{
	var videos = document.getElementById("videoTag");
	//videos.loop = 'loop';//如果需要循环
    try{videos.play();}catch(e){}
}
function playAudio()
{
	var audios = document.getElementById("audioTag");
	//audios.loop = 'loop';//如果需要循环
    try{audios.play();}catch(e){}
}

// 判断浏览器
$(function(){
	var _bow = navigator.userAgent;
	if(_bow.indexOf("iPhone")!==-1){
		$("#iphone").addClass ("iphone");
	}
});
// 添加删除class
$(function() {
    $(".pop_bt").click(function () {
        if ($("#pop_bx").hasClass("on")) {
            $("#pop_bx").addClass("off").removeClass("on")
        } else {
            $("#pop_bx").addClass("on").removeClass("off")
        }
    });
});

pageMain();


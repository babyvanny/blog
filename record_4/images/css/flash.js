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

pageMain()
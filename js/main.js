$(document).ready(function() {
	whenClick()
	addClickEvent();
});

function whenClick() {
	$("button.search a").click(function(event) {
		search();
		event.preventDefault(); 
	})
}

$(document).keydown(function(event) {
	if(event.keyCode === 13  && $("input").is(":focus") ){
		search();
		event.preventDefault();
	}
});

function addClickEvent() {
	var $a = $("ul.nav-tabs li a")
	$a.each(function(i) {
		$a.eq(i).click(function() {
			$a.eq(i).parent().addClass('active').siblings('li').removeClass('active');
			event.preventDefault();
		})
	});
}

function search() {
	setEngine();
	window.open ($("button.search a").attr("href")); 
}

function setEngine() {
	var text         = $("input").val();
	var $search      = $("button.search a");
	var searchEngine = $(".nav-tabs li[class=active]").children('a').attr('data-se');
	switch(searchEngine) {
		case "google": 
			$search.attr("href","https://www.google.com/?gws_rd=ssl#c2coff=1&q="+text)
			break;
		case "baidu": 
			$search.attr("href","http://www.baidu.com/s?wd="+text);
			break;
		case "zhihu": 
			$search.attr("href","http://www.zhihu.com/search?q="+text);
			break;
		case "quora": 
			$search.attr("href","https://www.quora.com/search?q="+text);
			break;
		case "bilibili": 
			$search.attr("href","http://www.bilibili.tv/search?keyword="+text);
			break;
	}
};

//$(document).ready(function() {
//	/*禁用鼠标右键*/
//	document.oncontextmenu=new Function("event.returnValue=false;");
//     document.onselectstart=new Function("event.returnValue=false;");
//});
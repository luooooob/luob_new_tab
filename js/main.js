/* ========================================================================
 * My first extension, a new tab plugin.  
 * ========================================================================
 * Copyright 2016 Cyan Jung
 * ======================================================================== 
 *    
 *          ┌─┐       ┌─┐
 *       ┌──┘ ┴───────┘ ┴──┐
 *       │                 │
 *       │       ───       │
 *       │  ─┬┘       └┬─  │
 *       │                 │
 *       │       ─┴─       │
 *       │                 │
 *       └───┐         ┌───┘
 *           │         │
 *           │         │
 *           │         │
 *           │         └──────────────┐
 *           │                        │
 *           │                        ├─┐
 *           │                        ┌─┘    
 *           │                        │
 *           └─┐  ┐  ┌───────┬──┐  ┌──┘         
 *             │ ─┤ ─┤       │ ─┤ ─┤         
 *             └──┴──┘       └──┴──┘ 
 *
 * ======================================================================== */


 $(document).ready(function() {
 	setEachTd();
 	mouseInTd();
 	searchButtonClicked();
 	enterKeyPressed();
 	clickSearchOption();
 });

function setEachTd() {
	var $div = $("table td div");
	$div.each(function(i) {
		var $a   = $div.eq(i).find('a');
		var src  = $a.attr("data-src");
		$div.eq(i).css('background', 'url('+src+') no-repeat center');
		var name = $a.attr("name");
		var $p   = $("<p>"+name+"</p>");
		$a.append($p);
	});
}

function mouseInTd() {
	$("table.nav-mod td a").hover(function() {
		var $p = $(this).children('p');
		$p.animate({bottom: "0px" }, 120);
	}, function() {
		var $p = $(this).children('p');
		$p.animate({bottom: "-20px" }, 120);
	});
}
/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


function searchButtonClicked() {
	$(".search-button a").click(function(event) {
		search();
		event.preventDefault(); 
	})
}

function enterKeyPressed() {
	$(document).keydown(function(event) {
		if(event.keyCode === 13  && $("input").is(":focus") ){
			search();
			event.preventDefault();
		}
	});
}

function clickSearchOption() {
	var $a = $("ul.search-option li a")
	$a.each(function(i) {
		$a.eq(i).click(function() {
			$a.eq(i).parent().addClass('active').siblings('li').removeClass('active');
			event.preventDefault();
		})
	});
}

function search() {
	setEngine();
	window.open ($(".search-button a").attr("href")); 
}

function setEngine() {
	var text         = $("input").val();
	var $search      = $(".search-button a");
	var searchEngine = $(".search-option li[class=active]").children('a').attr('data-se');
	switch(searchEngine) {
		case "google": 
			$search.attr("href","https://www.google.com/?gws_rd=ssl#c2coff=1&q="+text)
			break;
		case "baidu": 
			$search.attr("href","http://www.baidu.com/s?wd="+text);
			break;
		case "zhihu": 
			if(text === "") {
				$search.attr("href","http://www.zhihu.com");
			}
			else {
				$search.attr("href","http://www.zhihu.com/search?q="+text);
			}
			break;
		case "quora": 
			$search.attr("href","https://www.quora.com/search?q="+text);
			break;
		case "bilibili": 
			$search.attr("href","http://www.bilibili.tv/search?keyword="+text);
			break;
		case "wangpan": 
			$search.attr("href","http://www.quzhuanpan.com/source/search.action?q="+text);
			break;
	}
};
$(document).ready(function() {
	/*禁用鼠标右键*/
	document.oncontextmenu=new Function("event.returnValue=false;");
     document.onselectstart=new Function("event.returnValue=false;");
});
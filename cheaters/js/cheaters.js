
var Cheaters = (function () {
	var pageData,
		publicMenuText,
		publicActiveItem,
		currentHeader = 0;

	function scrollTo(elem) {
		var $container = $('#container');
		if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
			var l = $container.scrollLeft() - $container.offset().left + $(elem).offset().left - 10
			$("#container").animate({ scrollLeft: l }, 200);
		} else {
			$("html,body").animate({ scrollTop: $(elem).offset().top - 30 }, 200);
		}
		$(elem).addClass('active');
	}

	// filtering for toc list
	function filterByText(list, textbox) {
		var select = $(list);
		select.find('li').each(function(i,n) {
			var link = $(n).find('a').first(),
				text = $.trim(link.text().replace(/[^a-z0-9]/gi,'').toLowerCase());
			$(n).data('content',text);
		});

		$(textbox).bind('change keyup', function(e) {
			if (e.keyCode === 27) {
				e.preventDefault();
				$('#toc').remove();
			} else if (e.keyCode === 13) {
				if (select.find('li:visible').length === 1) {
					var target = select.find('li:visible a').first().attr('href');
					$('#toc').remove();
					scrollTo(target);
				} else {
					select.find('li:visible a').first().focus();
				}
			} else {
				var search = $.trim($(this).val().replace(/[^a-z0-9]/gi,'').replace(/(\w)/gi,'.*$1').toLowerCase() + '.*');
				var regex = new RegExp(search, "gi");

				select.find('li').each(function(i,n) {

					if ($(n).data('content').match(regex) !== null) {
						$(n).show();
					} else {
						$(n).hide();
					}
				});
			}

		});
	}


	function switchActive(t,first) {
		pageData = {};
		$('#tmpstyles').remove();
		if (/^\?/.test(t)) {
			return false;
		} else if (/^\s*$/.test(t)) {
			return true;
		}

		var active = null;

		if (t && !/^\d+$/.test(t)) {
			var re = new RegExp(t.split('').join('.*?'), "img"), test = Cheaters.menuText.match(re);

			if ((test && test.length === 1) || first === true) {
				$('#nav a').each(function(i,e) {
					var linktext = $(e).text().replace(/\s+/g,'').toLowerCase();

					if (re.test(linktext)) {
						if (active === null) { active = i; }
					}
				});
			}
		} else {
			active = parseInt(t,10) - 1;
		}


		if (active !== null) {
			$('#nav li').removeClass('active');
			$($('#nav li').get(active)).addClass('active');
			$link = $($('#nav a').get(active));
			var href = $link.attr('href');
			if (/\.(gif|jpg|svg|png)$/.test(href)) {
				$('#container').empty();
				if ($link.attr('title') !== undefined) {
					$('#container').append($('<h3>').text($link.attr('title')));
				}
				$('#container').append($('<img>').attr('src',href));
				$(document).scrollTop(0);
			} else {
				$('#container').load( href, function() {
					if (/\.md$/.test(href)) {
						var mdText = $('#container').text()
							.replace(/xCMD/g,'⌘')
							.replace(/xOPT/g,'⌥')
							.replace(/xSHIFT/g,'⇧')
							.replace(/xCTRL/g,'^');
						mdText = processHeaders(mdText);
						$('#container').html(
							marked(mdText, {
								smartLists: true,
								breaks: true,
								tables: true,
								gfm: true
							})
						);
					} else if (/\.html?$/.test(href)) {
						var headers = $('#container').html().match(/<!--(.*?)%%%END/si);
						if (headers) {
							data = JSON.parse(headers[1]);
							if (data)
								pageData = data;
						}
					}

					for (p in pageData) {
						if (pageData[p] === "default" || pageData[p] === "auto") {
							delete pageData[p];
						}
					}

					if (pageData.hasOwnProperty('id')) {
						$('body').attr('id', pageData.id);
					} else {
						$('body').attr('id', indexToID(active));
					}
					if (pageData.hasOwnProperty('style')) {
						var style = pageData.style;//.replace(/(\.style)?$/,'.style');
						$('<link id="tmpstyles" rel="stylesheet">').attr('href','cheatsheets/' + style + '?' + Math.floor(Math.random(1000)*1000)).appendTo('head');
					} else {
						$('#tmpstyles').remove();
					}
					if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
						$('body').addClass('multicolumn');
						$("#container").scrollLeft(0);
					} else {
						$('body').removeClass('multicolumn');
						$(document).scrollTop(0);
					}
				} );
			}
			// localStorage.setItem('cheatSheet-active',$('#nav li.active').prevAll().length);
			Cheaters.activeItem = active;
			$('#menu select').val(active + 1);
			$.cookie('cheatSheet-active', active, { expires: 365, path: '/' });
			currentHeader = 0;
			return true;
		}

		return false;
	}

	function processHeaders(txt) {
		var json,
			parts = txt.split(/%%%END/);

		pageData = {};
		if (parts.length > 1) {
			content = parts.shift();
			data = JSON.parse(content);
			if (data)
				pageData = data;
			return parts.join('\n');
		} else {
			return txt;
		}
	}

	function indexToID(i) {
		return $($('#nav li').get(i)).find('a').attr('href')
		.replace(/.*?\/(.*?)\.(\w+)$/,"$1_$2")
		.replace(/[^a-z0-9_]/ig,'')
		.toLowerCase();
	}

	function initClickHandlers() {
		$('#nav').on('click', 'a',function(e){
			e.preventDefault();
			pageData = {};
			var active = $(this).closest('li').prevAll().length + 1;
			switchActive(active);
			// document.location.hash = $(this).text().toLowerCase();
			return false;
		});

		$('#contrast').click(function(e){
			e.preventDefault();
			$body = $('body').first();
			if ($body.hasClass('inverted')) {
				$body.removeClass('inverted');
				// localStorage.setItem('cheatSheet-inverted','false');
				$.cookie('cheatSheet-inverted', 0, { expires: 365, path: '/' });
			} else {
				$body.addClass('inverted');
				// localStorage.setItem('cheatSheet-inverted','true');
				$.cookie('cheatSheet-inverted', 1, { expires: 365, path: '/' });
			}
			return false;
		});
		// $('body').on('click', function(ev) {
		// 	$('#goto').remove();
		// });
	}

	function initKeybindings() {
		Mousetrap.bind('f', function(ev) {
			ev.preventDefault();
			$('#goto').remove();
			$('<input id="goto" type="text">').insertAfter('#nav').val('').blur(function(){
				$(this).fadeOut(100, function(){
					$(this).remove();
				});
			});
			$('#goto').unbind('keyup').keyup(function(ev) {
				if (ev.keyCode === 27) {
					ev.preventDefault();
					$('#goto').remove();
					return false;
				} else if (ev.keyCode == 13) {
					if (switchActive($(this).val(),true)) {
						$(this).remove();
					} else if (/^\?/.test($(this).val())) {
						query = $(this).val();
						switch (query.substring(1,3)) {
							case "gh":
							window.location.href = 'https://github.com/search?q=' + encodeURIComponent(query.substring(4));
							break;
							case "so":
							window.location.href = 'http://stackoverflow.com/search?q=' + encodeURIComponent(query.substring(4));
							break;
							case "go":
							window.location.href = 'https://www.google.com/#q=' + encodeURIComponent(query.substring(4));
							break;
							default:
							window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(query.substring(1));
						}
					}
					return false;
				} else {
					if ($(this).val().length > 0) {
						if (switchActive($(this).val())) {
							$(this).remove();
						}
					}
				}
				return true;
			});
			$('#goto').focus().val('');
			return false;
		});

		Mousetrap.bind('esc', function(ev) {
			ev.preventDefault();
			if ($('#goto').length)
				$('#goto').remove();
			else if ($('#toc').length)
				$('#toc').remove();
			return false;
		}, 'keyup');

		Mousetrap.bind('g', function(ev) {
			ev.preventDefault();
			if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
				$("#container").animate({ scrollLeft: 0 }, 200);
			} else {
				$(document).scrollTop(0);
			}
			return false;
		});

		Mousetrap.bind('G', function(ev) {
			ev.preventDefault();
			if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
				$("#container").animate({ scrollLeft: $('#container').get(0).scrollWidth }, 200);
			} else {
				$(document).scrollTop($(document).height());
			}
			return false;
		});

		Mousetrap.bind(['k','shift+k','u','ctrl+u'], function(ev) {
			ev.preventDefault();
			var inc;
			if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
				inc = (ev.shiftKey || ev.ctrlKey) ? $(document).width() : $(document).width() / $('#container').css('columnCount');
				$("#container").stop().animate({ scrollLeft: $('#container').scrollLeft() - inc }, 100);
			} else {
				inc = (ev.shiftKey || ev.ctrlKey) ? 400 : 100;
				$('body,html').stop().animate({
					scrollTop: $(document).scrollTop() - inc
				}, 100);
			}
			return false;
		});

		Mousetrap.bind(['j','shift+j','d','ctrl+d'], function(ev) {
			ev.preventDefault();
			var inc;
			if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
				inc = (ev.shiftKey || ev.ctrlKey) ? $(document).width() : $(document).width() / $('#container').css('columnCount');
				$("#container").stop().animate({ scrollLeft: $('#container').scrollLeft() + inc }, 100);
			} else {
				inc = (ev.shiftKey || ev.ctrlKey) ? 400 : 100;
				$('body,html').stop().animate({
					scrollTop: $(document).scrollTop() + inc
				}, 100);
			}
			return false;
		});

		Mousetrap.bind(['.',','], function(ev) {
			ev.preventDefault();
			var loc = window.pageYOffset,
				headers = $('h1,h2,h3,h4,h5,h6,caption'),
				menuHeight = $('#menu').height(),
				target;

			headers = $.makeArray(headers);

			if (ev.which === 46) {
				target = currentHeader === headers.length - 1 ? headers.length - 1 : currentHeader + 1;
			} else {
				target = currentHeader === 0 ? 0 : currentHeader - 1;
			}
			currentHeader = target;

			$('.active', '#container').removeClass('active');
			if (pageData.hasOwnProperty('layout') && pageData.layout == 'multicolumn') {
				scrollTo(headers[target]);
				$(headers[target]).addClass('active');
			} else {
				$('html,body').stop().animate({
					scrollTop: $(headers[target]).offset().top - menuHeight
				}, 'fast', function() {
					$(headers[target]).addClass('active');
				});
			}

			return false;
			// $.each(headers, function(i, a) {

			// 	if ((ev.which === 46 && $(a).offset().top - menuHeight > loc) ||
			// 		(ev.which === 44 && $(a).offset().top - menuHeight < loc)) {

			// 		$('html,body').animate({
			// 			scrollTop: $(a).offset().top - menuHeight
			// 		}, 'fast');

			// 		currentHeader = i;
			// 		return false;
			// 	}
			// });
		});

		Mousetrap.bind(['command+shift+]','l'], function(ev) {
			ev.preventDefault();
			if (Cheaters.activeItem === $('#nav li').length - 1) {
				Cheaters.activeItem = 1;
			} else {
				Cheaters.activeItem += 2;
			}
			switchActive(Cheaters.activeItem);
			return false;
		});

		Mousetrap.bind(['command+shift+[','h'], function(ev) {
			ev.preventDefault();
			if (Cheaters.activeItem === 0) {
				Cheaters.activeItem = $('#nav li').length;
			}
			switchActive(Cheaters.activeItem);
			return false;
		});

		// Table of Contents
		Mousetrap.bind('t', function(ev) {
			ev.preventDefault();
			if (!$('#toc').length) {
				$('body').on('click', function(ev) {
					$('#toc').remove();
				});
				genTOC();
			} else {
				$('#toc input').select().focus();
			}
			return false;
		});

		Mousetrap.bind('command+i', function(ev) {
			ev.preventDefault();
			$('#contrast').click();
			return false;
		});
	}

	function findStartPage() {
		var active = null,
		hash = document.location.hash;
		if (hash !== "") {
			hash = hash.replace(/^#/,'').replace(/\s+/g,'').toLowerCase();
			if (/^\d+$/.test(hash)) {
				active = hash;
			} else {
				var re = new RegExp("^"+hash.split('').join('.*?'), "i");
				$('#nav a').each(function(i,e) {
					if (re.test($(e).text().replace(/\s+/g,'').toLowerCase())) {
						if (active === null) { active = i; }
					}
				});
			}
		} else {
			// active = localStorage.getItem('cheatSheet-active');
			var lastActive = $.cookie('cheatSheet-active');

			if (lastActive !== undefined) {
				active = parseInt(lastActive,10);
			} else {
				active = 0;
			}
		}

		return active;
	}

	function publicInit() {
		var active = findStartPage() + 1;
		switchActive(active);
		publicActiveItem = active;
		initKeybindings();
		initClickHandlers();
		return this;
	}

	// generate a table of contents for the current cheat sheet
	function genTOC() {
		var options = [];

		$('h1,h2,h3,h4,table').each(function(i,n) {
			var text, id;
			switch (n.tagName.toLowerCase()) {
				case 'table':
					$el = $(n).find('caption,th').first();
					if ($el) {
						text = $el.text().trim();
						if ($el.attr('id')) {
							id = $el.attr('id');
						} else {
							id = text.replace(/[^a-z]/gi,'');
							$el.attr('id',id);
						}
					}
					break;
				default:
					text = $(n).text().trim();
					if ($(n).attr('id')) {
						id = $(n).attr('id');
					} else {
						id = text.replace(/[^a-z]/gi,'');
						$(n).attr('id',id);
					}
					break;
			}
			options.push({
				"title": text,
				"id": id
			});
		});
		var $select = $('<ul>').attr('id','tocfilter');

		options.forEach(function(n) {
			var opt = $('<li><a href="#'+n.id+'">'+n.title+'</a></li>');
			$select.append(opt)
		})
		var $toc = $('<div>').attr('id','toc').append('<input id="tocinput" type="text">');
		$toc.append($select).prependTo('#container');
		filterByText('#tocfilter','#tocinput');

		$toc.on('click','a', function(e) {
			e.preventDefault();
			scrollTo($(this).attr('href'));
			$toc.remove();
		});
		$toc.find('input').focus();

	}

	return {
		data: pageData,
		menuText: publicMenuText,
		activeItem: publicActiveItem,

		switchTo: switchActive,
		init: publicInit
	};
}());






(function($){
	if ($.cookie('cheatSheet-inverted') === "1") {
		$('body').addClass('inverted');
	}

	$('#nav a').each(function(i,n) {
		Cheaters.menuText += $(n).text() + "\n";
	});

	$("nav#menu").menutron({
		maxScreenWidth: 480,
		menuTitle: 'Cheatsheets:'
	});

	document.Cheat = Cheaters.init();

})(jQuery);

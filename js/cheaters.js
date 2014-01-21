var Cheaters = (function () {
	var publicMenuText;

	function switchActive(t,first) {
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
			$('#container').load( $($('#nav a').get(active)).attr('href'), function() {
				$(document).scrollTop(0);
			} );
			// localStorage.setItem('cheatSheet-active',$('#nav li.active').prevAll().length);
			$.cookie('cheatSheet-active', active, { expires: 365, path: '/' });
			return true;
		}
		return false;
	}

	function initClickHandlers() {
		$('#nav').on('click', 'a',function(e){
			e.preventDefault();
			var $this = $(this);
			$('.active').removeClass('active');
			$this.closest('li').addClass('active');
			$('#container').load($this.attr('href'));
			// localStorage.setItem('cheatSheet-active',$(this).closest('li').prevAll().length);
			$.cookie('cheatSheet-active',$(this).closest('li').prevAll().length, { expires: 365, path: '/' });
			document.location.hash = $(this).text().toLowerCase();
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
		$('#jquery').on('click','a',function(e){
			var $this = $(this);
			var href = $this.attr('href');
			if (/^http/.test(href) && $this.attr('target') != "_top") {
				e.preventDefault();
				$('<iframe>').attr('src',href).css({
					zIndex: 9998,
					height:$(window).height()-40,
					width:$(window).width(),
					display:'none'
				}).appendTo('body').fadeIn('slow',function(){
					$('<div id="closeiframe">').html('<p><a href="#">Click to close<a></p>').appendTo('body');
					$('#closeiframe a').click(function(){
						$('iframe,#closeiframe').fadeOut('fast',function(){
							$(this).remove();
						});
					});
				});
				// $('body').click(function(){ $('iframe').remove(); });
				return false;
			}
			return true;
		});
	}

	function initKeybindings() {
		Mousetrap.bind('f', function(ev) {
			ev.preventDefault();
			$('#goto').remove();
			$('<input id="goto" type="text">').insertAfter('#nav').val('');
			$('#goto').unbind('keyup').keyup(function(ev){
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
			$('#goto').remove();
			return false;
		}, 'keyup');
		Mousetrap.bind('g g', function(ev) {
			$(document).scrollTop(0);
		});
		Mousetrap.bind('G', function(ev) {
			$(document).scrollTop($(document).height());
		});
		Mousetrap.bind('g g', function(ev) {
			$(document).scrollTop(0);
		});
		Mousetrap.bind('G', function(ev) {
			$(document).scrollTop($(document).height());
		});
		Mousetrap.bind(['k','shift+k','u','ctrl+u'], function(ev) {
			var inc = (ev.shiftKey || ev.ctrlKey) ? 400 : 100;
			$('body,html').stop().animate({
				scrollTop: $(document).scrollTop() - inc
			}, 100);
		});

		Mousetrap.bind(['j','shift+j','d','ctrl+d'], function(ev) {
			var inc = (ev.shiftKey || ev.ctrlKey) ? 400 : 100;
			$('body,html').stop().animate({
				scrollTop: $(document).scrollTop() + inc
			}, 100);
		});

		Mousetrap.bind('.', function() {
			if ($('#typeahead').is(':focus')) return true;
				var loc = window.pageYOffset, headers = $('h1,h2,h3,h4,h5,h6,caption');

				headers = $.makeArray(headers);
				$.each(headers, function(i, a) {
				if ($(a).offset().top > loc) {
					$('html,body').animate({
						scrollTop: $(a).offset().top
					}, 'fast');
					// headers.removeClass('active');
					// $(a).addClass('active');
					return false;
				}
			});
		});
		Mousetrap.bind(',', function() {
			if ($('#typeahead').is(':focus')) return true;
			var loc = window.pageYOffset;
			var headers = $('h1,h2,h3,h4,h5,h6,caption');
			headers = $.makeArray(headers);
			headers.reverse();
			$.each(headers, function(i, a) {
				if ($(a).offset().top < loc) {
					$('html,body').animate({
						scrollTop: $(a).offset().top
					}, 'fast');
					// headers.removeClass('active');
					// $(a).addClass('active');
					return false;
				}
			});
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
			if (!lastActive === null) {
				active = parseInt(lastActive,10);
			} else {
				active = 0;
			}
		}

		return active;
	}

	function publicInit() {
		switchActive(findStartPage() + 1);
		initKeybindings();
		initClickHandlers();
	}

	return {
		menuText: publicMenuText,

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

	Cheaters.init();

})(jQuery);

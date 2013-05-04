(function($){
	var active = null,
	hash = document.location.hash;
	if (hash !== "") {
		hash = hash.replace(/^#/,'').toLowerCase();
		if (/^\d+$/.test(hash)) {
			active = hash;
		} else {
			var re = new RegExp(hash);
			$('#nav a').each(function(i,e) {
				if (re.test($(e).text().toLowerCase())) {
					if (active === null) { active = i; }
				}
			});
		}
	} else {
		active = localStorage.getItem('cheatSheet-active');
	}

	if (active !== null) {
		$($('#nav li').get(active)).addClass('active');
		$('#container').load( $($('#nav a').get(active)).attr('href') );
	} else {
		$('#nav li').first().addClass('active');
		$('#container').load( $('#nav a').first().attr('href') );
	}
	$('#nav a').live('click',function(e){
		e.preventDefault();
		var $this = $(this);
		$('.active').removeClass('active');
		$this.closest('li').addClass('active');
		$('#container').load($this.attr('href'));
		localStorage.setItem('cheatSheet-active',$(this).closest('li').prevAll().length);
		document.location.hash = $(this).text().toLowerCase();
		return false;
	});
	$('#contrast').click(function(e){
		e.preventDefault();
		$body = $('body').first();
		if ($body.hasClass('inverted')) {
			$body.removeClass('inverted');
		} else {
			$body.addClass('inverted');
		}
		return false;
	});
	$('#jquery a').live('click',function(e){
		var $this = $(this);
		var href = $this.attr('href');
		if (/^http/.test(href) && $this.attr('target') != "_top") {
			e.preventDefault();
			$('<iframe>').attr('src',href).css({
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
})(jQuery);

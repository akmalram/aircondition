function setCookie(name, value, expires, path, domain, secure) {
    if (expires) {
		var d = new Date();
		d.setTime(d.getTime() + (expires * 24 * 60 * 60 * 1000));
		expires = d.toUTCString();
	}
    document.cookie = name + "=" + encodeURIComponent(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            try {
				setStr = decodeURIComponent(cookie.substring(offset, end));
			} catch (err) {
				setCookie(name, '', 365, "/");
				setStr = '';
			}
        }
    }
    return (setStr);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var sec17 = 17;
var setint = false;

var ssecond_button = function(close = true) {
	if (setint) {
		clearInterval(setint);
		sec17 = 17;
	}
	
	var but = $(".17seccond_button_m");
	for (var i = 0; i < but.length; i++) {
		but.eq(i).html(but.eq(i).attr('data-txt2'));
		but.eq(i).val(but.eq(i).attr('data-txt2'));
	}
	
	setint = setInterval(function() {
		sec17--;
		
		if (sec17 < 0) {
			clearInterval(setint);
			sec17 = 17;
			var but = $(".17seccond_button_m");
			for (var i = 0; i < but.length; i++) {
				but.eq(i).html(but.eq(i).attr('data-txt1'));
				but.eq(i).val(but.eq(i).attr('data-txt1'));
			}
			$(".second17").html(sec17);
			if (close) {
				$.fancybox.close();
			}
			return;
		}
		
		$(".second17").html(sec17);
		
	}, 1000)
}

var form = false;

$(document).scroll(function() {
	if ($(document).scrollTop() + 200 > $(".section-cond-slider").offset().top) {
		$('.side-block').removeClass('hidden');
	} else {
		$('.side-block').addClass('hidden');
	}	
})
var tov_slide_hide_time;
$(document).ready(function() {

$(document).click(function (e){ // событие клика по веб-документу
		var div = $(".sel-fake1 .filter1-change.opened"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('opened'); // скрываем его
		$('.sel-fake1 .jq-selectbox__dropdown').hide();
		}
	});


	$('.tov_slide_arr, .tov_slide_arr_link').click(function(){
		if ( $(this).parents('.tov_slide_hide').hasClass('tov_slide_hide__act') ){
			$(this).parents('.tov_slide_hide').removeClass('tov_slide_hide__act').find('.all-options-list-hiding').animate({'height':'hide'});
		} else {
			$('.tov_slide_hide.tov_slide_hide__act').removeClass('tov_slide_hide__act').find('.all-options-list-hiding').animate({'height':'hide'});
			$(this).parents('.tov_slide_hide').addClass('tov_slide_hide__act').find('.all-options-list-hiding').animate({'height':'show'},
				function(){
					$('html, body').animate({scrollTop: $('.tov_slide_hide.tov_slide_hide__act').offset().top},0);
				});
		}
		
	});
	
	$(".sel-fake .jq-selectbox__select").click(function() {
		var sel_fake = $(this).parent().parent();
		var el = sel_fake.find(".jq-selectbox__dropdown");
		if (el.is(":visible")) {
			sel_fake.find(".jq-selectbox__dropdown").hide();
			sel_fake.find(".jq-selectbox").removeClass('opened');
		} else {
			$(".ch-filters .jq-selectbox.opened").click();
			sel_fake.find(".jq-selectbox__dropdown").show();
			sel_fake.find(".jq-selectbox").addClass('opened');
		}
	})
	
	$(".sel-fake .jq-selectbox__dropdown li a").click(function() {
		var name = $(this).html();
		var sel_fake = $(this).closest(".sel-fake");
		sel_fake.find(".jq-selectbox__select-text").html(name);
		sel_fake.find(".jq-selectbox__dropdown").hide();
		sel_fake.find(".jq-selectbox").removeClass('opened');		
	})
	
	$(".show_txt").click(function() {
		$.fancybox({
			wrapCSS:'faqf',
			href : $(this).attr('href')
		});
		return false;
	})
	
	$("body").on("click", ".send-to-email-link", function() {
		var curr = $(".all-options-list .current a");
		var data = new Array();
		for (var i = 0; i < curr.length; i++) {
			data.push(curr.eq(i).data('id'));
		}
		$("#order-cond-models-sent-to-email").val(data.join(','));
	})
	
	$("#comm-submit").click(function() {
		
		if (validateEmail($("#comm-email").val())) {
			
			var data = $("#filter2").serialize();
			data = data.replace('reload-cond-filter2', 'comm-email');
			data = data.replace('cond', 'orders');
			data += '&email=' + $("#comm-email").val();
			
			$.ajax({
				url: '/',
				method: 'POST',
				dataType: 'json',
				data: data,
				success: function(response) {
					if (response && response.data && response.data == 51) {
						$.fancybox.close();
						$.fancybox({
							margin: 0,
							padding: 0,
							autoCenter: false,
							href : '#win7'
						});
					}
				}
			});
			
			
		}
		
		return false;
	})
	
	$("#comm-phone-submit").click(function() {
		
			
		var data = $("#filter2").serialize();
		data = data.replace('reload-cond-filter2', 'comm-phone');
		data = data.replace('cond', 'orders');
		data += '&phone=' + $("#comm-phone").val();
		
		$.ajax({
			url: '/',
			method: 'POST',
			dataType: 'json',
			data: data,
			success: function(response) {
				if (response && response.data && response.data == 51) {
					$.fancybox.close();
					$.fancybox({
						margin: 0,
						padding: 0,
						autoCenter: false,
						href : '#win7'
					});
				}
			}
		});
			
			
		
		return false;
	})
	
	
	
	$("body").on("click", ".show-plus", function() {
		
		$.ajax({
			url: '/',
			method: 'POST',
			data: {'module': 'plus', 'action': 'show-plus', 'name': $(this).data('name')},
			success: function(response) {
				
				$("#win12").html(response);
				$.fancybox({
					margin: 0,
					padding: 0,
					autoCenter: false,
					href : '#win12',
					'wrapCSS':'faqf'
				});
				
			}
		});
		
	})
	
	if ($(document).scrollTop() + 200 > $(".section-cond-slider").offset().top) {
		$('.side-block').removeClass('hidden');
	} else {
		$('.side-block').addClass('hidden');
	}
	
	$("body").on("click", ".order-cond1", function() {
		if ($(this).closest('.tov').find(".tov__title a").length){
			$("#order-cond-models").val($(this).closest('.tov').find(".tov__title a").html());
		} else {
			$("#order-cond-models").val($(this).closest('.tov').find(".tov__title").html());
		}
		
		$.fancybox({
			margin: 0,
			padding: 0,
			autoCenter: false,
			href : '#win11'
		});
		return false;
	})
	
//	$("body").on("click", ".order-cond1", function() {
//		$("#order-cond-models").val($(this).closest('.tov').data('id'));
//		$.fancybox({
//			margin: 0,
//			padding: 0,
//			autoCenter: false,
//			href : '#win11'
//		});
//		return false;
//	})
//	
//	$("body").on("click", ".order-cond11", function() {
//		$("#order-cond-models").val($(this).closest('.cond-slide').data('id'));
//		$.fancybox({
//			margin: 0,
//			padding: 0,
//			autoCenter: false,
//			href : '#win11'
//		});
//		return false;
//	})
	
//	$("body").on("click", ".order-cond2", function() {
//		var curr = $(".all-options-list .current a");
//		var data = new Array();
//		for (var i = 0; i < curr.length; i++) {
//			data.push(curr.eq(i).data('id'));
//		}
//		$("#order-cond-models").val(data.join(','));
//		
//		$.fancybox({
//			margin: 0,
//			padding: 0,
//			autoCenter: false,
//			href : '#win11'
//		});
//		return false;
//	})
	
	
	
//	$("body").on("click", ".change-component", function() {
//		$(this).parent().parent().find(".current").removeClass("current");
//		$(this).parent().addClass("current");
//		
//		var curr = $(".all-options-list .current a");
//		var data = new Array();
//		for (var i = 0; i < curr.length; i++) {
//			data.push(curr.eq(i).data('id'));
//		}
//		var curr = $(this).parent().parent().find('li a');
//		var data2 = new Array();
//		for (var i = 0; i < curr.length; i++) {
//			data2.push(curr.eq(i).data('id'));
//		}
//		
////		console.log(data);
////		console.log(data2);
//		var _this = $(this);
//		$.ajax({
//			url: '/',
//			method: 'POST',
//			data: {'module': 'cond', 'action': 'change-component', 'data': data, 'data2': data2, 'id': $(this).data('id'), 'sqr': $(this).data('sqr')},
//			dataType: 'json',
//			success: function(response) {
//				_this.closest('.tov').html(response.html);
//				$(".information-block2").html(response.price_html);
//			}
//		});
//		
//		return false;
//	})
	
//	$('input[name=rooms]').change(function() {
//		var val = $(this).val();
//		
//		for (var i = 1; i < 11; i++) {
//			if (val >= i) {
//				$(".options-tov-numb2-" + i).show();
//			} else {
//				$(".options-tov-numb2-" + i).hide();
//			}
//		}
//	})
	
	$('body').on("click", '.fakelink', function() {
		return false;
	})
	
	$('body').on("click", '.tov-characteristics a.tov-characteristics-a', function() {
		var ul = $(this).parent().find('ul.tov-all-characteristics');
		if (ul.is(':visible')) {
			$(this).parent().find('ul.tov-all-characteristics').slideUp();
			$(this).removeClass('rotate');
		} else {
			$(this).parent().find('ul.tov-all-characteristics').slideDown();
			$(this).addClass('rotate');
			
			$(this).closest('.tov').find('.tov-reviews').slideUp();
			$(this).parent().find('.tov-reviews-a').removeClass('rotate');
		}
	})
	
	$('body').on("click", '.tov-characteristics a.tov-reviews-a', function() {
		var ul = $(this).closest('.tov').find('.tov-reviews');
		if (ul.is(':visible')) {
			$(this).closest('.tov').find('.tov-reviews').slideUp();
			$(this).removeClass('rotate');
		} else {
			$(this).closest('.tov').find('.tov-reviews').slideDown();
			$(this).addClass('rotate');
			
			$(this).parent().find('ul.tov-all-characteristics').slideUp();
			$(this).parent().find('.tov-characteristics-a').removeClass('rotate');
		}
	})
	
	
	
	$('.scrollTo').click(function(event){
		$('.mobile-button').click();

	      $('html, body').animate({
	          scrollTop: $( $.attr(this, 'href') ).offset().top
	      }, 700);
	      event.preventDefault();
	});
	
	var phone = getCookie('phone');
	if (phone) {
		$('input[type="tel"]').val(phone);
	}
	
	var email = getCookie('email');
	if (email) {
		$('input[name="email"]').val(email);
	}
	
	var name = getCookie('name');
	if (name) {
		$('input[name="name"]').val(name);
	}
	
	$("body").on("submit", ".orders-ajax-form", function() {

		if ($(this).find('input[type="tel"]').length) {
			$('input[type="tel"]').val($(this).find('input[type="tel"]').val());
			setCookie('phone', $(this).find('input[type="tel"]').val(), 1000, '/');
		}
		
		if ($(this).find('input[name="name"]').length) {
			$('input[name="name"]').val($(this).find('input[name="name"]').val());
			setCookie('name', $(this).find('input[name="name"]').val(), 1000, '/');
		}
		
		if ($(this).find('input[name="email"]').length) {
			$('input[name="email"]').val($(this).find('input[name="email"]').val());
			setCookie('email', $(this).find('input[name="email"]').val(), 1000, '/');
		}
		
		if ($(this).find('input[name="action"]').val() == 'get-ticket') {
			if ($('input[name="email"]').val().length == 0) {
				return false;
			}
		}

		if ($(this).hasClass("check-oferta")) {
			
			form = $(this);
			$.ajax({
				url: '/',
				method: 'POST',
				data: {'module': 'orders', 'action': 'check-oferta', 'phone': $(this).find('input[type="tel"]').val()},
				success: function(response) {
					
					if (response == 1) {
						
						if (form.hasClass('ssecond-button-start')) {
							ssecond_button();
						}
						
						$.ajax({
							url: '/',
							method: 'POST',
							data: form.serialize(),
							dataType: 'json',
							success: function(response) {
								
								if (response && response.data && response.data == 51) {
									$.fancybox.close();
									$.fancybox({
										margin: 0,
										padding: 0,
										autoCenter: false,
										href : '#win7'
									});
								} else if (response && response.data && response.data == 52) {
									$.fancybox.close();
									$.fancybox({
										margin: 0,
										padding: 0,autoCenter: false,
										href : '#win_10'
									});
								}
								
							}
						});
					
					} else {
						
						$.fancybox({
							margin: 0,
							padding: 0,
							autoCenter: false,
							href : '#win6'
						});
						
					}
					
				}
			});
			
		} else {
			
			form = $(this);
			
			if ($(this).hasClass('ssecond-button-start')) {
				ssecond_button();
			}
			
			$.ajax({
				url: '/',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
				success: function(response) {
					
					if (response && response.data && response.data == 51) {
						$.fancybox.close();
						$.fancybox({
							margin: 0,
							padding: 0,
							autoCenter: false,
							href : '#win7'
						});
					}
//					else if (response && response.data && response.data == 52) {
//						$.fancybox.close();
//						$.fancybox({
//							margin: 0,
//							padding: 0,
//							autoCenter: false,
//							href : '#win_10'
//						});
//					}
					
				}
			});
			
		}
		
		
	
		return false;
	})
	
	$('body').on('click', '.js-popup-close', function() {
        $('.fancybox-close').click();
        return false;
    });
	
	$("#win6-accept").click(function() {
		
		$.ajax({
			url: '/',
			method: 'POST',
			data: {'module': 'orders', 'action': 'add-oferta', 'phone': form.find('input[type="tel"]').val()},
			success: function(response) {
				
				if (response == 1) {
					form.removeClass('check-oferta');
					
					$.fancybox.close();
					
					if (form.parent().parent().attr('id') == 'win_11') {
						$.fancybox({
							margin: 0,
							padding: 0,
							autoCenter: false,
							href : '#win_11'
						});
					} else if (form.parent().parent().attr('id') == 'win_8') {
						$.fancybox({
							margin: 0,
							padding: 0,
							autoCenter: false,
							href : '#win_8'
						});
					}
					
					form.submit();
				}
				
			}
		});
		
		return false;
	})
	
    
	$("#filter1").on("change", ".filter1-change", function() {
		$("#page1").val(0);
		
		reload_filter1();
		return false;
	})
	
	$("#filter1").on("change", "#filter-select-4", function() {
		$.ajax({
			url: '/',
			method: 'POST',
			data: {'module': 'cond', 'action': 'get-param4-text', 'id':$(this).val()},
			dataType: 'json',
			success: function(response) {
				$("#win17").html(response);
				$.fancybox({
					wrapCSS:'faqf',
					href : '#win17'
				});
				
			}
		})
		return false;
	})
	
	$("#filter2").on("change", ".filter2-change", function() {
		$("#page2").val(0);
		
		reload_filter2();
		return false;
	})
	
	$("#filter-clear-link1").click(function() {
		$("#page1").val(0);
		$("#filter1")[0].reset();
		$("#sort-price-1").val(0);
		$("#sort-price-1-a").removeClass('up down').addClass('up');
		$("#sort-brend-1").val(-1);
		$("#sort-brend-1-a").removeClass('up down').addClass('up');
		
		$(".filter1-change").val(0).trigger('refresh');
		
		var min = parseInt($("#filter-slider").data('from'));
		var max = parseInt($("#filter-slider").data('to'));
		
		
		$("#min-price").val(min);
    	$("#max-price").val(max);
		
    	$("#filter-slider").rangeSlider("values", min, max);

    	reload_filter1();
		return false;
	})
	
	$(".sel-s a").click(function() {
		$("#page1").val(0);
		$("#sort-price-1").val(-1);
		$("#sort-brend-1").val(-1);
		if ($(this).hasClass('up')) {
			$(this).addClass('down');
			$(this).removeClass('up');
			
			var nm = $(this).attr('rel');
			$('#' + nm).val(1);
		} else {
			$(this).addClass('up');
			$(this).removeClass('down');
			
			var nm = $(this).attr('rel');
			$('#' + nm).val(0);
		}
		
		reload_filter1();
		return false;
	})
	
	$("#filter1").on("click", ".filter1-page-button", function() {
		$("#page1").val($(this).data('page'));
		reload_filter1();
		$('html, body').animate({
	          scrollTop: $("#reload-filter1-cont").offset().top
	    }, 700);
		return false;
	})
	
	$("#reload-filter2-cont").on("click", ".filter2-page-button", function() {
		$("#page2").val($(this).data('page'));
		reload_filter2();
		$('html, body').animate({
	          scrollTop: $("#reload-filter2-cont").offset().top
	    }, 700);
		return false;
	})
	
	
	
});

function reload_filter1() {
	
	$.ajax({
		url: '/',
		method: 'POST',
		data: $("#filter1").serialize(),
		dataType: 'json',
		success: function(response) {
			$("#reload-filter1-cont").html(response);
		}
	})
}

function reload_filter2() {
	
	$.ajax({
		url: '/',
		method: 'POST',
		data: $("#filter2").serialize(),
		dataType: 'json',
		success: function(response) {
			$("#reload-filter2-cont").html(response.html);
			$(".inform-items-title").html(response.count_text);
		}
	})
}

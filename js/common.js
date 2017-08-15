$(function() {

	$(window).scroll(function() {
		var $top = $('.header__top'),
				topHeight = $top.height(),
				$target = $('.header__bottom');

		if($(this).scrollTop() > topHeight){
				//$('body').css('position', 'relative');
				$target.addClass('header__bottom--abs');
		}else{
			$target.removeClass('header__bottom--abs');
		}
	});

	$(document).ready(function() {
		
		var $menu = $("#my-menu").mmenu({
			extensions: [ 'theme-dark', 'effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: "Меню"
			},

			offCanvas: {
				position: "left"
			}
		});

		var $icon = $(".toggle-mnu"),
		api = $menu.data( "mmenu" );

		api.bind("open:start", function($panel){
			$icon.addClass('on');
			$('.header-menu--mobile').removeClass('hidden');
		});
		api.bind('close:finish', function() {
			$icon.removeClass('on');
			$('.header-menu--mobile').addClass('hidden');
		});

		$("#designer-products, #similar-products").owlCarousel({
			items: 6,
			loop: true,
			margin: 36,
			nav: true,
			navText: [],
			autoplay: true,
			responsiveClass: true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				480:{
					items:3,
					nav:false
				},
				768:{
					items:4,
					nav:true
				},
				992:{
					items:5,
					nav:true,
					
				},
				1140:{
					items:6,
					nav:true,
					
				}
			}
		});
	});

	$('.select-quantity').ikSelect({
			autoWidth: true,
			
			onShow: function (inst) {
				
				$('.ik_select_link_focus .ik_select_link_text').addClass('lk-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_focus .ik_select_link_text').removeClass('lk-opened');
			}
		});
	
	$('.select-color').ikSelect({
			//autoWidth: true,
			dynamicWidth: true,
			customClass: 'color',
			ddCustomClass: 'color-dropdown',
			//linkCustomClass: 'color-item',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('lk-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('lk-opened');
			}
	});

	$('.select-size').ikSelect({
			//autoWidth: true,
			//dynamicWidth: true,
			customClass: 'size',
			ddCustomClass: 'size-dropdown',
			extraWidth: 30,
			//linkCustomClass: 'color-item',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('size-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('size-opened');
			}
	});

	$('.prod-select-quantity').ikSelect({
			//autoWidth: true,
			dynamicWidth: true,
			customClass: 'quantity',
			ddCustomClass: 'quantity-dropdown',
			extraWidth: 30,
			//linkCustomClass: 'color-item',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('quantity-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('quantity-opened');
			},
			// onShow: function (inst) {
			// 	$('.quantity-dropdown').width($('.product-card__top-quantity .gray').width()); 
			// }
	});

	$('.cart__tip-header').click(function(e) {
		e.preventDefault();
		var $parent = $(this).closest('.cart__tip'),
				$tipBody = $parent.find('.cart__tip-body'),
				$chevron = $parent.find('.cart__tip-chevron');
		$tipBody.stop(true, true).slideToggle(300);
		$parent.siblings().find('.cart__tip-body').slideUp(300);
		$parent.siblings()
					.find('.cart__tip-chevron')
					.removeClass('chevron-up');
		$chevron.toggleClass('chevron-up');
	});

	$('.socials-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('socials-toggle--open')
				.parent()
				.find('.socials-list')
				.fadeToggle();
	});

	var cartItemRender = (function() {

		return {
			init: function() {
				
				cartItemRender.regListeners();
			},

			regListeners: function() {
				$('.cart__item-close').on('click', cartItemRender.closeButtonListener);
				$('.add-to-cart').on('click', cartItemRender.addButtonListener);

			},

			closeButtonListener: function(e) {
				e.preventDefault();
				var $parent = $(this).closest('.cart__list'),
						$currentItem = $(this).closest('.cart__item'),
						flag = confirm('Действительно хотите удалить?');

				if(flag){
					$currentItem.remove();
				}else{
					return;
				}
			},
		

		addButtonListener: function(e) {
			var $cartCounter = $('.header__cart-count');
			$cartCounter.text(+$cartCounter.text() + 1);
		}
		}
	})();
	cartItemRender.init();


	
	
	
});


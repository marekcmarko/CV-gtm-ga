let mainObj;
(function ($) {
	mainObj = {
		//---------Glide-----------
		glide_init: function () {
			new Glide(".glide").mount();
		},
		// ---------Navigacia-----------
		navigation_init: function () {
			function test() {
				var tabsNewAnim = $("#navbarSupportedContent");
				var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
				var activeItemNewAnim = tabsNewAnim.find(".active");
				var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
				var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
				var itemPosNewAnimTop = activeItemNewAnim.position();
				var itemPosNewAnimLeft = activeItemNewAnim.position();
				$(".active-selector").css({
					top: itemPosNewAnimTop.top + "px",
					left: itemPosNewAnimLeft.left + "px",
					height: activeWidthNewAnimHeight + "px",
					width: activeWidthNewAnimWidth + "px",
				});
				$("#navbarSupportedContent").on("click", "li", function (e) {
					$("#navbarSupportedContent ul li").removeClass("active");
					$(this).addClass("active");
					var activeWidthNewAnimHeight = $(this).innerHeight();
					var activeWidthNewAnimWidth = $(this).innerWidth();
					var itemPosNewAnimTop = $(this).position();
					var itemPosNewAnimLeft = $(this).position();
					$(".active-selector").css({
						top: itemPosNewAnimTop.top + "px",
						left: itemPosNewAnimLeft.left + "px",
						height: activeWidthNewAnimHeight + "px",
						width: activeWidthNewAnimWidth + "px",
					});
				});
			}
			$(document).ready(function () {
				setTimeout(function () {
					test();
				});
			});
			$(window).on("resize", function () {
				setTimeout(function () {
					test();
				}, 500);
			});
			$(".navbar-toggler").click(function () {
				setTimeout(function () {
					test();
				});
			});
		},

		//---------Parallax-----------
		parallax_init: function () {
			const target = document.querySelectorAll(".parallax");
			window.addEventListener("scroll", () => {
				var index = 0,
					length = target.length;
				for (index; index < length; index++) {
					var pos = window.pageYOffset * target[index].dataset.rate;

					if (target[index].dataset.direction === "vertical") {
						target[index].style.transform =
							"translate3d(0px," + pos + "px, 0px)";
					} else {
						var posX = window.pageYOffset * target[index].dataset.ratex;
						var posY = window.pageYOffset * target[index].dataset.ratey;

						target[index].style.transform =
							"translate3d(" + posX + "px, " + posY + "px, 0px)";
					}
				}
			});
		},
		//---------Parsley-----------
		parsley_init: function () {
			$("#bootstrapForm")
				.parsley()
				.on("field:validated", function () {
					var ok = $(".parsley-error").length === 0;
					console.log(99999, ok, $(".parsley-error").length);
					// Objavenie a zmiznutie success
					$(".bs-callout-info").toggleClass("d-none", !ok).show();
					//pockaj 3 sekundy a potom sekundu fadeOut
					setTimeout(function () {
						$(".bs-callout-info").fadeOut(1000);
					}, 3000);
					(function () {
						$(".bs-callout-info").hide();
					});
					// Objavenie a zmiznutie warning
					$(".bs-callout-warning").toggleClass("d-none", ok).show();

					setTimeout(function () {
						$(".bs-callout-warning").fadeOut(1000);
					}, 3000);

					(function () {
						$(".bs-callout-warning").hide();
					});
				})
				.on("form:submit", function () {
					console.log(124578);
					return true;
					$(".bs-callout-info").addClass("d-none");
					$(".bs-callout-warning").addClass("d-none", !ok);
				});
		},

		form_submit_init: function () {
			$("#bootstrapForm").on("submit", function (e) {
				e.preventDefault();
				if ($(this).parsley().isValid()) {
					$.ajax({
						url: $(this).attr("action"),
						data: $(this).serialize(),
						dataType: "json",
						type: "POST",
						success: function (data) {
							console.log(data);
							$("#bootstrapForm").trigger("reset");
							$("#submit-done").removeClass("d-none");
							setTimeout(function () {
								$("#submit-done").addClass("d-none");
							}, 2000);

							$("#success").show().fadeOut(2000); //=== Show Success Message==
						},
						error: function (data) {
							console.log("error", data);
							$("#error").show().fadeOut(2000); //===Show Error Message====
						},
					});
					$("#bootstrapForm :input").removeClass("parsley-success hasValue");
				} else {
					console.log("not valid parsley");
					// $('#bootstrapForm :input').removeClass('parsley-error hasValue');
				}
			});
		},
		input_focus_init: function () {
			// Detect when form-control inputs are not empty
			$(".contact-form .form-control").on("input", function () {
				if ($(this).val()) {
					$(this).addClass("hasValue");
				} else {
					$(this).removeClass("hasValue");
				}
			});
		},
		//---------JS TABS-----------
		tabs_init: function () {
			let items = [];
			const buttons = document.querySelectorAll("button");
			const wrapper = document.querySelector("div.projects");

			buttons.forEach(function (button) {
				button.addEventListener("click", (event) => {
					changeCategoryItems(event.target.dataset.category);
				});
			});

			function createItem(item) {
				return `

            <a href="${item.href}" target="_blank" class="project__img" rel="noopener">
              <img src="${item.img}" alt="${item.alt}" loading="lazy">
            </a>
            `;
			}

			function changeCategoryItems(categoryId) {
				const viewItems =
					categoryId == 0
						? items
						: items.filter((item) => item.category == categoryId);
				wrapper.innerHTML = "";
				viewItems.forEach((item) => {
					const div = document.createElement("div");
					div.setAttribute("class", "project");
					div.innerHTML = createItem(item);
					wrapper.appendChild(div);
				});
			}

			fetch("https://api.npoint.io/fab8e873fcf3f688c86c")
				.then(function (res) {
					return res.json();
				})
				.then(function (data) {
					items = data;
					changeCategoryItems(1);
				});

			// SLIDING LIST TABS
			var lists = document.querySelectorAll(".js-filter-list .filter__tab");

			lists.forEach(function (list) {
				list.addEventListener("click", function (e) {
					e.preventDefault();
					if (this.classList.contains("active")) {
						return;
					}
					for (var i = 0; i < lists.length; i++) {
						lists[i].classList.remove("active");
					}
					this.classList.add("active");
				});
			});
		},

		//---------Reveal on Scroll-----------
		scrollreveal_init: function () {
			const scroll = ScrollReveal({
				origin: "top",
				distance: "60px",
				duration: 2500,
				delay: 0,
			});

			// after open/refresh page
			scroll.reveal(
				".intro__text-box, #education, .about__favorites, .form-container, #languages, .about__desc, .hex-grid",
				{
					origin: "left",
				}
			);
			scroll.reveal(".c-html, .about__quotes-group-2", {
				delay: 150,
			});
			scroll.reveal(".c-js, .about__quotes-group-1", {
				delay: 200,
			});
			scroll.reveal(".c-bs", { delay: 250 });
			scroll.reveal(".c-git", { delay: 300 });
			scroll.reveal(".c-css", { delay: 350 });
			scroll.reveal(".c-jinja", { delay: 400 });
			scroll.reveal(".c-sass", { delay: 400 });
			scroll.reveal(".c-gulp", { delay: 400 });
			scroll.reveal(".c-wp", { delay: 400 });
			scroll.reveal(".navbar, #portfolio");

			// after breakpoint - page resize
			const heroTextBox = document.querySelector(".intro__text-box");

			window.addEventListener("resize", function (event) {
				heroTextBox.removeAttribute("style");
				scroll.reveal(".intro__text-box", { origin: "left" });
			});
		},

		//---------Zoscrollovanie-----------
		zoscrollovanie_init: function () {
			var menu = $(".navbar-nav"),
				menuLinks = menu.find("a");

			menuLinks.on("click", function (e) {
				e.preventDefault();
				$("html,body")
					.stop()
					.animate(
						{ scrollTop: $(this.hash).offset().top },
						2000,
						"easeInOutCubic"
					);
			});
		},

		mojCustomInit: function () {
			this.glide_init();
			this.navigation_init();
			this.parallax_init();
			this.parsley_init();
			this.form_submit_init();
			this.input_focus_init();
			this.tabs_init();
			this.scrollreveal_init();
			this.zoscrollovanie_init();
		},
	};

	jQuery(document).ready(function () {
		mainObj.mojCustomInit();

		$(window).resize(function () {});
	});

	//---------Back to top-----------
	var backToTop = $(".back-to-top");
	backToTop
		.hide()
		.appendTo("body")
		.on("click", function () {
			$("html,body").animate({ scrollTop: 0 }, 1600, "easeInOutCubic");
		});

	var win = $(window);
	win.on("scroll", function () {
		//Back to top
		if (win.scrollTop() >= 700) backToTop.fadeIn(1000);
		else backToTop.fadeOut(500);

		//Add navbar shrink class
		if ($(document).scrollTop() > 1000) {
			$(".navbar").addClass("navbar-shrink");
		} else {
			$(".navbar").removeClass("navbar-shrink");
		}
	});
	//Add - Remove active card class
	function handleMouseover(e) {
		document.querySelector(".active-card").classList.remove("active-card");
		e.target.closest(".card-mini").classList.add("active-card");
	}
	document
		.querySelectorAll(".card-mini")
		.forEach((card) => card.addEventListener("mouseover", handleMouseover));
})(jQuery);

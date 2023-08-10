import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import HomeLayout from '@app/layouts/home/HomeLayout'
import Icon from '@app/components/icon'

const Home = () => {
	const swiperReviewsRef = useRef(null);
	const swiperClientsLogosRef = useRef(null);
	const [toggleSwitchChecked, setToggleSwitchChecked] = useState(false);

	const handleToggleChange = () => {
		setToggleSwitchChecked((prevChecked) => !prevChecked);
	};

	const handleNextButtonClick = () => {
		swiperReviewsRef.current.slideNext();
	};

	const handlePrevButtonClick = () => {
		swiperReviewsRef.current.slidePrev();
	};

	// const handleToggleChange = () => {
	//   const monthlyPrices = document.querySelectorAll('.price-monthly');
	//   const yearlyPrices = document.querySelectorAll('.price-yearly');
	//   const toggleSwitch = document.querySelector('.price-duration-toggler');

	//   if (toggleSwitch.checked) {
	//     monthlyPrices.forEach((e) => {
	//       e.classList.remove('d-none');
	//     });
	//     yearlyPrices.forEach((e) => {
	//       e.classList.add('d-none');
	//     });
	//   } else {
	//     monthlyPrices.forEach((e) => {
	//       e.classList.add('d-none');
	//     });
	//     yearlyPrices.forEach((e) => {
	//       e.classList.remove('d-none');
	//     });
	//   }
	// };

	useEffect(() => {
		const handleMousemove = (event) => {
			const o = event.target.querySelectorAll('.hero-elements-img');
			const n = event.target.querySelectorAll('.hero-dashboard-img');
			o.forEach((e) => {
				e.style.transform = 'translateZ(1rem)';
			});
			n.forEach((e) => {
				const t = (window.innerWidth - 2 * event.pageX) / 100;
				const n = (window.innerHeight - 2 * event.pageY) / 100;
				e.style.transform = `perspective(1200px) rotateX(${n}deg) rotateY(${t}deg) scale3d(1, 1, 1)`;
			});
		};

		const handleMouseout = (event) => {
			const o = event.target.querySelectorAll('.hero-elements-img');
			const n = event.target.querySelectorAll('.hero-dashboard-img');
			o.forEach((e) => {
				e.style.transform = 'translateZ(0)';
			});
			n.forEach((e) => {
				e.style.transform = 'perspective(1200px) scale(1) rotateX(0) rotateY(0)';
			});
		};

		swiperReviewsRef.current = new Swiper('#swiper-reviews', {
			slidesPerView: 1,
			spaceBetween: 5,
			grabCursor: !0,
			autoplay: { delay: 3e3, disableOnInteraction: !1 },
			loop: !0,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1200: { slidesPerView: 3, spaceBetween: 26 },
				992: { slidesPerView: 2, spaceBetween: 20 },
			},
		});

		swiperClientsLogosRef.current = new Swiper('#swiper-clients-logos', {
			slidesPerView: 2,
			autoplay: { delay: 3e3, disableOnInteraction: !1 },
			breakpoints: {
				992: { slidesPerView: 5 },
				768: { slidesPerView: 3 },
			},
		});

		handleToggleChange();

		document.querySelector('.layout-navbar').addEventListener('mousemove', handleMousemove);
		document.querySelector('#hero-animation').addEventListener('mousemove', handleMousemove);
		document.querySelector('#hero-animation').addEventListener('mouseout', handleMouseout);
		document.querySelector('.price-duration-toggler').onchange = handleToggleChange;

		return () => {
			document.querySelector('.layout-navbar').removeEventListener('mousemove', handleMousemove);
			document.querySelector('#hero-animation').removeEventListener('mousemove', handleMousemove);
			document.querySelector('#hero-animation').removeEventListener('mouseout', handleMouseout);
			document.querySelector('.price-duration-toggler').onchange = null;
		};
	}, []);

	return (
		<>
			<div data-bs-spy="scroll" className="scrollspy-example">
				{/* Hero: Start */}
				<section id="hero-animation">
					<div id="landingHero" className="section-py landing-hero position-relative">
						<div className="container">
							<div className="hero-text-box text-center">
								<h1 className="text-primary hero-title display-6 fw-bold">One dashboard to
									manage all your businesses</h1>
								<h2 className="hero-sub-title h6 mb-4 pb-1">
									Production-ready &amp; easy to use Admin Template<br className="d-none d-lg-block" />
									for Reliability and Customizability.
								</h2>
								<div className="landing-hero-btn d-inline-block position-relative">
									<span className="hero-btn-item position-absolute d-none d-md-flex text-heading">Join
										community
										<img src="/assets/img/front-pages/Join-community-arrow.png" alt="Join community arrow" className="scaleX-n1-rtl" /></span>
									<a href="#landingPricing" className="btn btn-primary btn-lg">Get early
										access</a>
								</div>
							</div>
							<div id="heroDashboardAnimation" className="hero-animation-img">
								<a href="/vertical-menu-template/dashboards-ecommerce.html" target="_blank">
									<div id="heroAnimationImg" className="position-relative hero-dashboard-img">
										<img src="/assets/img/front-pages/hero-dashboard-light.png" alt="hero dashboard" className="animation-img" data-app-light-img="front-pages/hero-dashboard-light.png" data-app-dark-img="front-pages/hero-dashboard-dark.png" />
										<img src="/assets/img/front-pages/hero-elements-light.png" alt="hero elements" className="position-absolute hero-elements-img animation-img top-0 start-0" data-app-light-img="front-pages/hero-elements-light.png" data-app-dark-img="front-pages/hero-elements-dark.png" />
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="landing-hero-blank" />
				</section>
				{/* Hero: End */}

				{/* Useful features: Start */}
				<section id="landingFeatures" className="section-py landing-features">
					<div className="container">
						<div className="text-center mb-3 pb-1">
							<span className="badge bg-label-primary">Useful Features</span>
						</div>
						<h3 className="text-center mb-1">
							<span className="section-title">Everything you need</span> to start your next project
						</h3>
						<p className="text-center mb-3 mb-md-5 pb-3">
							Not just a set of tools, the package includes ready-to-deploy conceptual application.
						</p>
						<div className="features-icon-wrapper row gx-0 gy-4 g-sm-5">
							<div className="col-lg-4 col-sm-6 text-center features-icon-box">
								<div className="text-center mb-3">
									<img src="/assets/img/front-pages/laptop.png" alt="laptop charging" />
								</div>
								<h5 className="mb-3">Quality Code</h5>
								<p className="features-icon-description">
									Code structure that all developers will easily understand and fall in love with.
								</p>
							</div>
							<div className="col-lg-4 col-sm-6 text-center features-icon-box">
								<div className="text-center mb-3">
									<img src="/assets/img/front-pages/rocket.png" alt="transition up" />
								</div>
								<h5 className="mb-3">Continuous Updates</h5>
								<p className="features-icon-description">
									Free updates for the next 12 months, including new demos and features.
								</p>
							</div>
							<div className="col-lg-4 col-sm-6 text-center features-icon-box">
								<div className="text-center mb-3">
									<img src="/assets/img/front-pages/paper.png" alt="edit" />
								</div>
								<h5 className="mb-3">Starter-Kit</h5>
								<p className="features-icon-description">
									Start your project quickly without having to remove unnecessary features.
								</p>
							</div>
							<div className="col-lg-4 col-sm-6 text-center features-icon-box">
								<div className="text-center mb-3">
									<img src="/assets/img/front-pages/check.png" alt="3d select solid" />
								</div>
								<h5 className="mb-3">API Ready</h5>
								<p className="features-icon-description">
									Just change the endpoint and see your own data loaded within seconds.
								</p>
							</div>
							<div className="col-lg-4 col-sm-6 text-center features-icon-box">
								<div className="text-center mb-3">
									<img src="/assets/img/front-pages/user.png" alt="lifebelt" />
								</div>
								<h5 className="mb-3">Excellent Support</h5>
								<p className="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
							</div>
							<div className="col-lg-4 col-sm-6 text-center features-icon-box">
								<div className="text-center mb-3">
									<img src="/assets/img/front-pages/keyboard.png" alt="google docs" />
								</div>
								<h5 className="mb-3">Well Documented</h5>
								<p className="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
							</div>
						</div>
					</div>
				</section>
				{/* Useful features: End */}

				{/* Real customers reviews: Start */}
				<section id="landingReviews" className="section-py bg-body landing-reviews pb-0">
					{/* What people say slider: Start */}
					<div className="container">
						<div className="row align-items-center gx-0 gy-4 g-lg-5">
							<div className="col-md-6 col-lg-5 col-xl-3">
								<div className="mb-3 pb-1">
									<span className="badge bg-label-primary">Real Customers Reviews</span>
								</div>
								<h3 className="mb-1"><span className="section-title">What people say</span></h3>
								<p className="mb-3 mb-md-5">
									See what our customers have to<br className="d-none d-xl-block" />
									say about their experience.
								</p>
								<div className="landing-reviews-btns">
									<button
										id="reviews-previous-btn"
										className="btn btn-label-primary reviews-btn me-3 scaleX-n1-rtl"
										type="button"
										onClick={handlePrevButtonClick}
									>
										{/* <i className="ti ti-chevron-left ti-sm"></i> */}
										<Icon icon="typcn:chevron-left" className="ti ti-chevron-left ti-sm" />
									</button>
									<button
										id="reviews-next-btn"
										className="btn btn-label-primary reviews-btn scaleX-n1-rtl "
										type="button"
										onClick={handleNextButtonClick}
									>
										{/* <i className="ti ti-chevron-right ti-sm"></i> */}
										<Icon icon="typcn:chevron-right" className="ti ti-chevron-right ti-sm" />
									</button>
								</div>
							</div>
							<div className="col-md-6 col-lg-7 col-xl-9">
								<div className="swiper-reviews-carousel overflow-hidden mb-5 pb-md-2 pb-md-3">
									<div className="swiper" id="swiper-reviews">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="card h-100">
													<div className="card-body text-body d-flex flex-column justify-content-between h-100">
														<div className="mb-3">
															<img src="/assets/img/front-pages/logo-1.png" alt="client logo" className="client-logo img-fluid" />
														</div>
														<p>
															This template is really clean & well documented. The docs are really easy to understand and it's always easy to find a screenshot from their website.
														</p>
														<div className="text-warning mb-3">
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
														</div>
														<div className="d-flex align-items-center">
															<div className="avatar me-2 avatar-sm">
																<img src="/assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
															</div>
															<div>
																<h6 className="mb-0">Cecilia Payne</h6>
																<p className="small text-muted mb-0">CEO of Airbnb</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="card h-100">
													<div className="card-body text-body d-flex flex-column justify-content-between h-100">
														<div className="mb-3">
															<img src="/assets/img/front-pages/logo-2.png" alt="client logo" className="client-logo img-fluid" />
														</div>
														<p>
															“I've never used a theme as versatile and flexible as Vuexy. It's
															my go to for building
															dashboard sites on almost any project.”
														</p>
														<div className="text-warning mb-3">
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
														</div>
														<div className="d-flex align-items-center">
															<div className="avatar me-2 avatar-sm">
																<img src="/assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
															</div>
															<div>
																<h6 className="mb-0">Eugenia Moore</h6>
																<p className="small text-muted mb-0">Founder of Hubspot</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="card h-100">
													<div className="card-body text-body d-flex flex-column justify-content-between h-100">
														<div className="mb-3">
															<img src="/assets/img/front-pages/logo-3.png" alt="client logo" className="client-logo img-fluid" />
														</div>
														<p>
															This template is really clean & well documented. The docs are
															really easy to understand and
															it's always easy to find a screenshot from their website.
														</p>
														<div className="text-warning mb-3">
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
														</div>
														<div className="d-flex align-items-center">
															<div className="avatar me-2 avatar-sm">
																<img src="/assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
															</div>
															<div>
																<h6 className="mb-0">Curtis Fletcher</h6>
																<p className="small text-muted mb-0">Design Lead at Dribbble</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="card h-100">
													<div className="card-body text-body d-flex flex-column justify-content-between h-100">
														<div className="mb-3">
															<img src="/assets/img/front-pages/logo-4.png" alt="client logo" className="client-logo img-fluid" />
														</div>
														<p>
															All the requirements for developers have been taken into
															consideration, so I’m able to build
															any interface I want.
														</p>
														<div className="text-warning mb-3">
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<Icon icon="pepicons-print:star-filled-circle" className="ti ti-star-filled ti-sm" />
															<i className="ti ti-star ti-sm"></i>
														</div>
														<div className="d-flex align-items-center">
															<div className="avatar me-2 avatar-sm">
																<img src="/assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
															</div>
															<div>
																<h6 className="mb-0">Sara Smith</h6>
																<p className="small text-muted mb-0">Founder of Continental</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="card h-100">
													<div className="card-body text-body d-flex flex-column justify-content-between h-100">
														<div className="mb-3">
															<img src="/assets/img/front-pages/logo-5.png" alt="client logo" className="client-logo img-fluid" />
														</div>
														<p>
															“I've never used a theme as versatile and flexible as Vuexy. It's
															my go to for building
															dashboard sites on almost any project.”
														</p>
														<div className="text-warning mb-3">
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
														</div>
														<div className="d-flex align-items-center">
															<div className="avatar me-2 avatar-sm">
																<img src="/assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
															</div>
															<div>
																<h6 className="mb-0">Eugenia Moore</h6>
																<p className="small text-muted mb-0">Founder of Hubspot</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="card h-100">
													<div className="card-body text-body d-flex flex-column justify-content-between h-100">
														<div className="mb-3">
															<img src="/assets/img/front-pages/logo-6.png" alt="client logo" className="client-logo img-fluid" />
														</div>
														<p>
															Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
															nemo mollitia, ad eum
															officia numquam nostrum repellendus consequuntur!
														</p>
														<div className="text-warning mb-3">
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star-filled ti-sm"></i>
															<i className="ti ti-star ti-sm"></i>
														</div>
														<div className="d-flex align-items-center">
															<div className="avatar me-2 avatar-sm">
																<img src="/assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
															</div>
															<div>
																<h6 className="mb-0">Sara Smith</h6>
																<p className="small text-muted mb-0">Founder of Continental</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="swiper-button-next"></div>
										<div className="swiper-button-prev"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* What people say slider: End */}
					<hr className="m-0" />
					{/* Logo slider: Start */}
					<div className="container">
						<div className="swiper-logo-carousel py-4 my-lg-2">
							<div className="swiper" id="swiper-clients-logos">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<img src="/assets/img/front-pages/logo_1-light.png" alt="client logo" className="client-logo" data-app-light-img="front-pages/logo_1-light.png" data-app-dark-img="front-pages/logo_1-dark.png" />
									</div>
									<div className="swiper-slide">
										<img src="/assets/img/front-pages/logo_2-light.png" alt="client logo" className="client-logo" data-app-light-img="front-pages/logo_2-light.png" data-app-dark-img="front-pages/logo_2-dark.png" />
									</div>
									<div className="swiper-slide">
										<img src="/assets/img/front-pages/logo_3-light.png" alt="client logo" className="client-logo" data-app-light-img="front-pages/logo_3-light.png" data-app-dark-img="front-pages/logo_3-dark.png" />
									</div>
									<div className="swiper-slide">
										<img src="/assets/img/front-pages/logo_4-light.png" alt="client logo" className="client-logo" data-app-light-img="front-pages/logo_4-light.png" data-app-dark-img="front-pages/logo_4-dark.png" />
									</div>
									<div className="swiper-slide">
										<img src="/assets/img/front-pages/logo_5-light.png" alt="client logo" className="client-logo" data-app-light-img="front-pages/logo_5-light.png" data-app-dark-img="front-pages/logo_5-dark.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Logo slider: End */}
				</section>
				{/* Real customers reviews: End */}

				{/* Our great team: Start */}
				<section id="landingTeam" className="section-py landing-team">
					<div className="container">
						<div className="text-center mb-3 pb-1">
							<span className="badge bg-label-primary">Our Great Team</span>
						</div>
						<h3 className="text-center mb-1"><span className="section-title">Supported</span> by Real People</h3>
						<p className="text-center mb-md-5 pb-3">Who is behind these great-looking interfaces?</p>
						<div className="row gy-5 mt-2">
							<div className="col-lg-3 col-sm-6">
								<div className="card mt-3 mt-lg-0 shadow-none">
									<div className="bg-label-primary position-relative team-image-box">
										<img src="/assets/img/front-pages/team-member-1.png" className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
									</div>
									<div className="card-body border border-top-0 border-label-primary text-center">
										<h5 className="card-title mb-0">Sophie Gilbert</h5>
										<p className="text-muted mb-0">Project Manager</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="card mt-3 mt-lg-0 shadow-none">
									<div className="bg-label-info position-relative team-image-box">
										<img src="/assets/img/front-pages/team-member-2.png" className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
									</div>
									<div className="card-body border border-top-0 border-label-info text-center">
										<h5 className="card-title mb-0">Paul Miles</h5>
										<p className="text-muted mb-0">UI Designer</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="card mt-3 mt-lg-0 shadow-none">
									<div className="bg-label-danger position-relative team-image-box">
										<img src="/assets/img/front-pages/team-member-3.png" className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
									</div>
									<div className="card-body border border-top-0 border-label-danger text-center">
										<h5 className="card-title mb-0">Nannie Ford</h5>
										<p className="text-muted mb-0">Development Lead</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="card mt-3 mt-lg-0 shadow-none">
									<div className="bg-label-success position-relative team-image-box">
										<img src="/assets/img/front-pages/team-member-4.png" className="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl" alt="human image" />
									</div>
									<div className="card-body border border-top-0 border-label-success text-center">
										<h5 className="card-title mb-0">Chris Watkins</h5>
										<p className="text-muted mb-0">Marketing Manager</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
				{/* Our great team: End */}

				{/* Pricing plans: Start */}
				<section id="landingPricing" className="section-py bg-body landing-pricing">
					<div className="container">
						<div className="text-center mb-3 pb-1">
							<span className="badge bg-label-primary">Pricing Plans</span>
						</div>
						<h3 className="text-center mb-1"><span className="section-title">Tailored pricing plans</span> designed for you</h3>
						<p className="text-center mb-4 pb-3">
							All plans include 40+ advanced tools and features to boost your product.<br />Choose the best plan to fit your needs.
						</p>
						<div className="text-center mb-5">
							<div className="position-relative d-inline-block pt-3 pt-md-0">
								<label className="switch switch-primary me-0">
									<span className="switch-label">Pay Monthly</span>
									<input
										type="checkbox"
										className="switch-input price-duration-toggler"
										// onClick={handleToggleChange}
										onChange={() => {
											const monthlyPrices = Array.from(document.querySelectorAll('.price-monthly'));
											const yearlyPrices = Array.from(document.querySelectorAll('.price-yearly'));
											const isToggled = document.querySelector('.price-duration-toggler').checked;

											monthlyPrices.forEach((price) => {
												price.classList.toggle('d-none', isToggled);
											});

											yearlyPrices.forEach((price) => {
												price.classList.toggle('d-none', !isToggled);
											});
										}}
									/>
									<span className="switch-toggle-slider">
										<span className="switch-on"></span>
										<span className="switch-off"></span>
									</span>
									{handleToggleChange ? (
										<>
											<span className="switch-label">Pay Annual</span>
										</>
									) : (
										<span className="switch-label">Pay Monthly</span>
									)}

								</label>
								<div className="pricing-plans-item position-absolute d-flex">
									<img src="/assets/img/front-pages/pricing-plans-arrow.png" alt="pricing plans arrow" className="scaleX-n1-rtl" />
									<span className="fw-semibold mt-2 ms-1"> Save 25%</span>
								</div>
							</div>
						</div>
						<div className="row gy-4 pt-lg-3">
							{/* Basic Plan: Start */}
							<div className="col-xl-4 col-lg-6">
								<div className="card">
									<div className="card-header">
										<div className="text-center">
											<img src="/assets/img/front-pages/paper-airplane.png" alt="paper airplane icon" className="mb-4 pb-2" />
											<h4 className="mb-1">Basic</h4>
											<div className="d-flex align-items-center justify-content-center">
												<span className="price-monthly h1 text-primary fw-bold mb-0">$19</span>
												<span className="price-yearly h1 text-primary fw-bold mb-0 d-none">$14</span>
												<sub className="h6 text-muted mb-0 ms-1">/mo</sub>
											</div>
											<div className="position-relative pt-2">
												<div className="price-yearly text-muted price-yearly-toggle d-none">$ 168 / year</div>
											</div>
										</div>
									</div>
									<div className="card-body">
										<ul className="list-unstyled">
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Timeline
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Basic search
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Live chat widget
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Email marketing
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Custom Forms
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Traffic analytics
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Basic Support
												</h5>
											</li>
										</ul>
										<div className="d-grid mt-4 pt-3">
											<a href="payment-page.html" className="btn btn-label-primary">Get Started</a>
										</div>
									</div>
								</div>
							</div>
							{/* Basic Plan: End */}

							{/* Favourite Plan: Start */}
							<div className="col-xl-4 col-lg-6">
								<div className="card border border-primary shadow-lg">
									<div className="card-header">
										<div className="text-center">
											<img src="/assets/img/front-pages/plane.png" alt="plane icon" className="mb-4 pb-2" />
											<h4 className="mb-1">Team</h4>
											<div className="d-flex align-items-center justify-content-center">
												<span className="price-monthly h1 text-primary fw-bold mb-0">$29</span>
												<span className="price-yearly h1 text-primary fw-bold mb-0 d-none">$22</span>
												<sub className="h6 text-muted mb-0 ms-1">/mo</sub>
											</div>
											<div className="position-relative pt-2">
												<div className="price-yearly text-muted price-yearly-toggle d-none">$ 264 / year</div>
											</div>
										</div>
									</div>
									<div className="card-body">
										<ul className="list-unstyled">
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs"></i></span>
													Everything in basic
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Timeline with database
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Advanced search
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Marketing automation
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Advanced chatbot
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Campaign management
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Collaboration tools
												</h5>
											</li>
										</ul>
										<div className="d-grid mt-4 pt-3">
											<a href="payment-page.html" className="btn btn-primary">Get Started</a>
										</div>
									</div>
								</div>
							</div>
							{/* Favourite Plan: End */}

							{/* Standard Plan: Start */}
							<div className="col-xl-4 col-lg-6">
								<div className="card">
									<div className="card-header">
										<div className="text-center">
											<img src="/assets/img/front-pages/shuttle-rocket.png" alt="shuttle rocket icon" className="mb-4 pb-2" />
											<h4 className="mb-1">Enterprise</h4>
											<div className="d-flex align-items-center justify-content-center">
												<span className="price-monthly h1 text-primary fw-bold mb-0">$49</span>
												<span className="price-yearly h1 text-primary fw-bold mb-0 d-none">$37</span>
												<sub className="h6 text-muted mb-0 ms-1">/mo</sub>
											</div>
											<div className="position-relative pt-2">
												<div className="price-yearly text-muted price-yearly-toggle d-none">$ 444 / year</div>
											</div>
										</div>
									</div>
									<div className="card-body">
										<ul className="list-unstyled">
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Everything in premium
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Timeline with database
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Fuzzy search
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													A/B testing sanbox
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Custom permissions
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Social media automation
												</h5>
											</li>
											<li>
												<h5>
													<span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i
														className="ti ti-check ti-xs"></i></span>
													Sales automation tools
												</h5>
											</li>
										</ul>
										<div className="d-grid mt-4 pt-3">
											<a href="payment-page.html" className="btn btn-label-primary">Get Started</a>
										</div>
									</div>
								</div>
							</div>
							{/* Standard Plan: End */}
						</div>
					</div>
				</section>
				{/* Pricing plans: End */}

				{/* <!-- Fun facts: Start --> */}
				<section id="landingFunFacts" className="section-py landing-fun-facts">
					<div className="container">
						<div className="row gy-3">
							<div className="col-sm-6 col-lg-3">
								<div className="card border border-label-primary shadow-none">
									<div className="card-body text-center">
										<img src="/assets/img/front-pages/laptop.png" alt="laptop"
											className="mb-2" />
										<h5 className="h2 mb-1">7.1k+</h5>
										<p className="fw-medium mb-0">
											Support Tickets<br />
											Resolved
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="card border border-label-success shadow-none">
									<div className="card-body text-center">
										<img src="/assets/img/front-pages/user-success.png" alt="laptop"
											className="mb-2" />
										<h5 className="h2 mb-1">50k+</h5>
										<p className="fw-medium mb-0">
											Join creatives<br />
											community
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="card border border-label-info shadow-none">
									<div className="card-body text-center">
										<img src="/assets/img/front-pages/diamond-info.png" alt="laptop"
											className="mb-2" />
										<h5 className="h2 mb-1">4.8/5</h5>
										<p className="fw-medium mb-0">
											Highly Rated<br />
											Products
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="card border border-label-warning shadow-none">
									<div className="card-body text-center">
										<img src="/assets/img/front-pages/check-warning.png" alt="laptop"
											className="mb-2" />
										<h5 className="h2 mb-1">100%</h5>
										<p className="fw-medium mb-0">
											Money Back<br />
											Guarantee
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- Fun facts: End --> */}

				{/* <!-- FAQ: Start --> */}
				<section id="landingFAQ" className="section-py bg-body landing-faq">
					<div className="container">
						<div className="text-center mb-3 pb-1">
							<span className="badge bg-label-primary">FAQ</span>
						</div>
						<h3 className="text-center mb-1">Frequently asked <span className="section-title">questions</span></h3>
						<p className="text-center mb-5 pb-3">Browse through these FAQs to find answers
							to commonly asked questions.</p>
						<div className="row gy-5">
							<div className="col-lg-5">
								<div className="text-center">
									<img src="/assets/img/front-pages/faq-boy-with-logos.png"
										alt="faq boy with logos" className="faq-image" />
								</div>
							</div>
							<div className="col-lg-7">
								<div className="accordion" id="accordionExample">
									<div className="card accordion-item active">
										<h2 className="accordion-header" id="headingOne">
											<button type="button" className="accordion-button"
												data-bs-toggle="collapse" data-bs-target="#accordionOne"
												aria-expanded="true" aria-controls="accordionOne">
												Do you charge for each upgrade?
											</button>
										</h2>

										<div id="accordionOne" className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Lemon drops chocolate cake gummies carrot cake chupa chups muffin
												topping. Sesame snaps icing
												marzipan gummi bears macaroon dragée danish caramels powder. Bear
												claw dragée pastry topping
												soufflé. Wafer gummi bears marshmallow pastry pie.
											</div>
										</div>
									</div>
									<div className="card accordion-item">
										<h2 className="accordion-header" id="headingTwo">
											<button type="button" className="accordion-button collapsed"
												data-bs-toggle="collapse" data-bs-target="#accordionTwo"
												aria-expanded="false" aria-controls="accordionTwo">
												Do I need to purchase a license for each website?
											</button>
										</h2>
										<div id="accordionTwo" className="accordion-collapse collapse"
											aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake.
												Bear claw dragée oat cake
												dragée ice cream halvah tootsie roll. Danish cake oat cake pie
												macaroon tart donut gummies. Jelly
												beans candy canes carrot cake. Fruitcake chocolate chupa chups.
											</div>
										</div>
									</div>
									<div className="card accordion-item">
										<h2 className="accordion-header" id="headingThree">
											<button type="button" className="accordion-button collapsed"
												data-bs-toggle="collapse" data-bs-target="#accordionThree"
												aria-expanded="false" aria-controls="accordionThree">
												What is regular license?
											</button>
										</h2>
										<div id="accordionThree" className="accordion-collapse collapse"
											aria-labelledby="headingThree" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Regular license can be used for end products that do not charge users
												for access or service(access
												is free and there will be no monthly subscription fee). Single
												regular license can be used for
												single end product and end product can be used by you or your client.
												If you want to sell end
												product to multiple clients then you will need to purchase separate
												license for each client. The
												same rule applies if you want to use the same end product on multiple
												domains(unique setup). For
												more info on regular license you can check official description.
											</div>
										</div>
									</div>
									<div className="card accordion-item">
										<h2 className="accordion-header" id="headingFour">
											<button type="button" className="accordion-button collapsed"
												data-bs-toggle="collapse" data-bs-target="#accordionFour"
												aria-expanded="false" aria-controls="accordionFour">
												What is extended license?
											</button>
										</h2>
										<div id="accordionFour" className="accordion-collapse collapse"
											aria-labelledby="headingFour" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et
												aliquid quaerat possimus maxime!
												Mollitia reprehenderit neque repellat deleniti delectus architecto
												dolorum maxime, blanditiis
												earum ea, incidunt quam possimus cumque.
											</div>
										</div>
									</div>
									<div className="card accordion-item">
										<h2 className="accordion-header" id="headingFive">
											<button type="button" className="accordion-button collapsed"
												data-bs-toggle="collapse" data-bs-target="#accordionFive"
												aria-expanded="false" aria-controls="accordionFive">
												Which license is applicable for SASS application?
											</button>
										</h2>
										<div id="accordionFive" className="accordion-collapse collapse"
											aria-labelledby="headingFive" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
												molestias exercitationem ab cum
												nemo facere voluptates veritatis quia, eveniet veniam at et
												repudiandae mollitia ipsam quasi
												labore enim architecto non!
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- FAQ: End --> */}

				{/* <!-- CTA: Start --> */}
				<section id="landingCTA" className="section-py landing-cta p-lg-0 pb-0">
					<div className="container">
						<div className="row align-items-center gy-5 gy-lg-0">
							<div className="col-lg-6 text-center text-lg-start">
								<h6 className="h2 text-primary fw-bold mb-1">Ready to Get Started?</h6>
								<p className="fw-medium mb-4">Start your project with a 14-day free trial</p>
								<a href="payment-page.html" className="btn btn-lg btn-primary">Get Started</a>
							</div>
							<div className="col-lg-6 pt-lg-5 text-center text-lg-end">
								<img src="/assets/img/front-pages/cta-dashboard.png"
									alt="cta dashboard" className="img-fluid" />
							</div>
						</div>
					</div>
				</section>
				{/* <!-- CTA: End --> */}

				{/* <!-- Contact Us: Start --> */}
				<section id="landingContact" className="section-py bg-body landing-contact">
					<div className="container">
						<div className="text-center mb-3 pb-1">
							<span className="badge bg-label-primary">Contact US</span>
						</div>
						<h3 className="text-center mb-1"><span className="section-title">Let's work</span>
							together</h3>
						<p className="text-center mb-4 mb-lg-5 pb-md-3">Any question or remark? just
							write us a message</p>
						<div className="row gy-4">
							<div className="col-lg-5">
								<div className="contact-img-box position-relative border p-2 h-100">
									<img src="/assets/img/front-pages/contact-customer-service.png"
										alt="contact customer service" className="contact-img w-100 scaleX-n1-rtl" />
									<div className="pt-3 px-4 pb-1">
										<div className="row gy-3 gx-md-4">
											<div className="col-md-6 col-lg-12 col-xl-6">
												<div className="d-flex align-items-center">
													<div className="badge bg-label-primary rounded p-2 me-2"><i
														className="ti ti-mail ti-sm"></i></div>
													<div>
														<p className="mb-0">Email</p>
														<h5 className="mb-0">
															<a href="mailto:example@gmail.com" className="text-heading">example@gmail.com</a>
														</h5>
													</div>
												</div>
											</div>
											<div className="col-md-6 col-lg-12 col-xl-6">
												<div className="d-flex align-items-center">
													<div className="badge bg-label-success rounded p-2 me-2">
														<i className="ti ti-phone-call ti-sm"></i>
													</div>
													<div>
														<p className="mb-0">Phone</p>
														<h5 className="mb-0"><a href="tel:+1234-568-963" className="text-heading">+1234
															568 963</a></h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="card">
									<div className="card-body">
										<h4 className="mb-1">Send a message</h4>
										<p className="mb-4">
											If you would like to discuss anything related to payment, account,
											licensing,<br className="d-none d-lg-block" />
											partnerships, or have pre-sales questions, you’re at the right place.
										</p>
										<form>
											<div className="row g-3">
												<div className="col-md-6">
													<label className="form-label" htmlFor="contact-form-fullname">Full Name</label>
													<input type="text" className="form-control" id="contact-form-fullname" placeholder="john" />
												</div>
												<div className="col-md-6">
													<label className="form-label" htmlFor="contact-form-email">Email</label>
													<input type="text" id="contact-form-email" className="form-control" placeholder="johndoe@gmail.com" />
												</div>
												<div className="col-12">
													<label className="form-label" htmlFor="contact-form-message">Message</label>
													<textarea id="contact-form-message" className="form-control" rows={8} placeholder="Write a message" defaultValue={""} />
												</div>
												<div className="col-12">
													<button type="submit" className="btn btn-primary">Send inquiry</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- Contact Us: End --> */}
			</div>
		</>
	)
}

Home.getLayout = page => <HomeLayout>{page}</HomeLayout>
Home.guestGuard = true

// export default dynamic(() => Promise.resolve(Home), { ssr: false });
export default Home;
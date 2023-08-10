import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@app/components/icon'
import useAuthStore from '@zustand/authSlice';
import { useRouter } from 'next/navigation'



const Navbar = () => {
	const router = useRouter()

	const [selectedIcon, setSelectedIcon] = useState('tabler:sun');
	const [isDarkStyle, setIsDarkStyle] = useState(false);
	const { userInfo } = useAuthStore();


	const handleIconChange = () => {
		setSelectedIcon((prevIcon) => {
			if (prevIcon === 'tabler:sun') {
				setIsDarkStyle(false);
				return 'tabler:moon-stars';
			} else if (prevIcon === 'tabler:moon-stars') {
				setIsDarkStyle(true);
				return 'tabler:device-desktop-check';
			} else {

				setIsDarkStyle(true);
				return 'tabler:sun';
			}
		});
		setIsDarkStyle((prevState) => !prevState);
	};

	// useEffect(() => {
	//   const e = document.getElementById('navbarSupportedContent');
	//   const a = document.querySelector('.layout-navbar');
	//   const t = document.querySelectorAll('.navbar-nav .nav-link');

	//   function o() {
	//     e.classList.remove('show');
	//   }

	//   setTimeout(() => {
	//     window.Helpers.initCustomOptionCheck();
	//   }, 1000);

	//   if (typeof Waves !== 'undefined') {
	//     Waves.init();
	//     Waves.attach(
	//       ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
	//       ['waves-light']
	//     );
	//     Waves.attach("[class*='btn-outline-']");
	//     Waves.attach("[class*='btn-label-']");
	//     Waves.attach('.pagination .page-item .page-link');
	//   }

	//   [].slice
	//     .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	//     .map(function (t) {
	//       return new bootstrap.Tooltip(t);
	//     });

	//   // const isDarkStyle = window.Helpers.isDarkStyle();

	//   if (isDarkStyle) {
	//     Helpers._addClass(
	//       'dropdown-menu-end',
	//       document.querySelectorAll('#layout-navbar .dropdown-menu')
	//     );
	//   }

	//   window.addEventListener('scroll', (t) => {
	//     if (window.scrollY > 10) {
	//       a.classList.add('navbar-active');
	//     } else {
	//       a.classList.remove('navbar-active');
	//     }
	//   });

	//   window.addEventListener('load', (t) => {
	//     if (window.scrollY > 10) {
	//       a.classList.add('navbar-active');
	//     } else {
	//       a.classList.remove('navbar-active');
	//     }
	//   });

	//   document.addEventListener('click', function (t) {
	//     if (!e.contains(t.target)) {
	//       o();
	//     }
	//   });

	//   t.forEach((e) => {
	//     e.addEventListener('click', (t) => {
	//       if (e.classList.contains('dropdown-toggle')) {
	//         t.preventDefault();
	//       } else {
	//         o();
	//       }
	//     });
	//   });

	//   if (isDarkStyle) {
	//     Helpers._addClass(
	//       'dropdown-menu-end',
	//       document.querySelectorAll('.dropdown-menu')
	//     );
	//   }

	//   var l,
	//     n,
	//     s = document.querySelectorAll('.nav-link.mega-dropdown');

	//   // if (s) {
	//   //   s.forEach((t) => {
	//   //     new MegaDropdown(t);
	//   //   });
	//   // }

	//   s = document.querySelector('.dropdown-style-switcher');

	//   if (window.templateCustomizer && s) {
	//     l =
	//       localStorage.getItem('templateCustomizer-' + templateName + '--Style') ||
	//       window.templateCustomizer.settings.defaultStyle;

	//     [].slice.call(s.children[1].querySelectorAll('.dropdown-item')).forEach(function (t) {
	//       t.addEventListener('click', function () {
	//         var t = this.getAttribute('data-theme');
	//         if (t === 'light') {
	//           window.templateCustomizer.setStyle('light');
	//         } else if (t === 'dark') {
	//           window.templateCustomizer.setStyle('dark');
	//         } else {
	//           window.templateCustomizer.setStyle('system');
	//         }
	//       });
	//     });

	//     s = s.querySelector('i');

	//     if (l === 'light') {
	//       s.classList.add('ti-sun');
	//       new bootstrap.Tooltip(s, {
	//         title: 'Light Mode',
	//         fallbackPlacements: ['bottom'],
	//       });
	//     } else if (l === 'dark') {
	//       s.classList.add('ti-moon');
	//       new bootstrap.Tooltip(s, {
	//         title: 'Dark Mode',
	//         fallbackPlacements: ['bottom'],
	//       });
	//     } else {
	//       s.classList.add('ti-device-desktop');
	//       new bootstrap.Tooltip(s, {
	//         title: 'System Mode',
	//         fallbackPlacements: ['bottom'],
	//       });
	//     }

	//     n = l;
	//     if (n === 'system') {
	//       n = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	//     }

	//     [].slice
	//       .call(document.querySelectorAll('[data-app-' + n + '-img]'))
	//       .map(function (t) {
	//         var e = t.getAttribute('data-app-' + n + '-img');
	//         t.src = assetsPath + 'img/' + e;
	//       });
	//   }
	// }, []);

	// useEffect(() => {
	//   const e = document.getElementById('navbarSupportedContent');
	//   const a = document.querySelector('.layout-navbar');
	//   const t = document.querySelectorAll('.navbar-nav .nav-link');

	//   function o() {
	//     e.classList.remove('show');
	//   }

	//   setTimeout(() => {
	//     window.Helpers.initCustomOptionCheck();
	//   }, 1000);

	//   if (typeof Waves !== 'undefined') {
	//     Waves.init();
	//     Waves.attach(
	//       ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
	//       ['waves-light']
	//     );
	//     Waves.attach("[class*='btn-outline-']");
	//     Waves.attach("[class*='btn-label-']");
	//     Waves.attach('.pagination .page-item .page-link');
	//   }

	//   [].slice
	//     .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	//     .map(function (t) {
	//       return new bootstrap.Tooltip(t);
	//     });

	//   if (isDarkStyle) {
	//     Helpers._addClass(
	//       'dropdown-menu-end',
	//       document.querySelectorAll('#layout-navbar .dropdown-menu')
	//     );
	//   }

	//   window.addEventListener('scroll', (t) => {
	//     if (window.scrollY > 10) {
	//       a.classList.add('navbar-active');
	//     } else {
	//       a.classList.remove('navbar-active');
	//     }
	//   });

	//   window.addEventListener('load', (t) => {
	//     if (window.scrollY > 10) {
	//       a.classList.add('navbar-active');
	//     } else {
	//       a.classList.remove('navbar-active');
	//     }
	//   });

	//   document.addEventListener('click', function (t) {
	//     if (!e.contains(t.target)) {
	//       o();
	//     }
	//   });

	//   t.forEach((e) => {
	//     e.addEventListener('click', (t) => {
	//       if (e.classList.contains('dropdown-toggle')) {
	//         t.preventDefault();
	//       } else {
	//         o();
	//       }
	//     });
	//   });

	//   if (isDarkStyle) {
	//     Helpers._addClass(
	//       'dropdown-menu-end',
	//       document.querySelectorAll('.dropdown-menu')
	//     );
	//   }

	//   var l,
	//     n,
	//     s = document.querySelectorAll('.nav-link.mega-dropdown');

	//   // if (s) {
	//   //   s.forEach((t) => {
	//   //     new MegaDropdown(t);
	//   //   });
	//   // }

	//   s = document.querySelector('.dropdown-style-switcher');

	//   if (window.templateCustomizer && s) {
	//     l =
	//       localStorage.getItem('templateCustomizer-' + templateName + '--Style') ||
	//       window.templateCustomizer.settings.defaultStyle;

	//     [].slice.call(s.children[1].querySelectorAll('.dropdown-item')).forEach(function (t) {
	//       t.addEventListener('click', function () {
	//         var t = this.getAttribute('data-theme');
	//         if (t === 'light') {
	//           window.templateCustomizer.setStyle('light');
	//         } else if (t === 'dark') {
	//           window.templateCustomizer.setStyle('dark');
	//         } else {
	//           window.templateCustomizer.setStyle('system');
	//         }
	//       });
	//     });

	//     s = s.querySelector('i');

	//     if (l === 'light') {
	//       s.classList.add('ti-sun');
	//       new bootstrap.Tooltip(s, {
	//         title: 'Light Mode',
	//         fallbackPlacements: ['bottom'],
	//       });
	//     } else if (l === 'dark') {
	//       s.classList.add('ti-moon');
	//       new bootstrap.Tooltip(s, {
	//         title: 'Dark Mode',
	//         fallbackPlacements: ['bottom'],
	//       });
	//     } else {
	//       s.classList.add('ti-device-desktop');
	//       new bootstrap.Tooltip(s, {
	//         title: 'System Mode',
	//         fallbackPlacements: ['bottom'],
	//       });
	//     }

	//     n = l;
	//     if (n === 'system') {
	//       n = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	//     }

	//     [].slice
	//       .call(document.querySelectorAll('[data-app-' + n + '-img]'))
	//       .map(function (t) {
	//         var e = t.getAttribute('data-app-' + n + '-img');
	//         t.src = assetsPath + 'img/' + e;
	//       });
	//   }
	// }, [isDarkStyle]);

	console.log('isDarkStyle:', isDarkStyle);

	return (
		<>
			{/* Navbar: Start */}
			{/* <nav className={`layout-navbar shadow-none py-0 ${isDarkStyle ? 'dark' : 'light'}`}> */}
			<nav className={`layout-navbar shadow-none py-0`}>
				<div className="container">
					<div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
						{/* Menu logo wrapper: Start */}
						<div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
							{/* Mobile menu toggle: Start*/}
							<button className="navbar-toggler border-0 px-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								{/* <i className="ti ti-menu-2 ti-sm align-middle" /> */}
								<Icon icon="tabler:menu-2" className="ti ti-menu-2 ti-sm align-middle" />
							</button>
							{/* Mobile menu toggle: End*/}
							<a href="landing-page.html" className="app-brand-link">
								<span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">My App</span>
							</a>
						</div>
						{/* Menu logo wrapper: End */}
						{/* Menu wrapper: Start */}
						<div className="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
							<button className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<i className="ti ti-x ti-sm" />
							</button>
							<ul className="navbar-nav me-auto">
								<li className="nav-item">
									<a className="nav-link fw-medium" aria-current="page" href="landing-page.html#landingHero">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fw-medium" href="landing-page.html#landingFeatures">Features</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fw-medium" href="landing-page.html#landingTeam">Team</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fw-medium" href="landing-page.html#landingFAQ">FAQ</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fw-medium" href="landing-page.html#landingContact">
										Contact us</a>
								</li>
								<li className="nav-item mega-dropdown">
									<a href="#" onClick={(e) => e.preventDefault()}
										className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium"
										aria-expanded="false" data-bs-toggle="mega-dropdown"
										data-trigger="hover">
										<span data-i18n="Pages">Pages</span>
									</a>
									<div className="dropdown-menu p-4">
										<div className="row gy-4">
											<div className="col-12 col-lg">
												<div className="h6 d-flex align-items-center mb-2 mb-lg-3">
													<div className="avatar avatar-sm flex-shrink-0 me-2">
														<span className="avatar-initial rounded bg-label-primary"><i className="ti ti-layout-grid" /></span>
													</div>
													<span className="ps-1">Other</span>
												</div>
												<ul className="nav flex-column">
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="pricing-page.html">
															<i className="ti ti-circle me-1" />
															<span data-i18n="Pricing">Pricing</span>
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="payment-page.html">
															<i className="ti ti-circle me-1" />
															<span data-i18n="Payment">Payment</span>
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="checkout-page.html">
															<i className="ti ti-circle me-1" />
															<span data-i18n="Checkout">Checkout</span>
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="help-center-landing.html">
															<i className="ti ti-circle me-1" />
															<span data-i18n="Help Center">Help Center</span>
														</a>
													</li>
												</ul>
											</div>
											<div className="col-12 col-lg">
												<div className="h6 d-flex align-items-center mb-2 mb-lg-3">
													<div className="avatar avatar-sm flex-shrink-0 me-2">
														<span className="avatar-initial rounded bg-label-primary"><i className="ti ti-lock-open" /></span>
													</div>
													<span className="ps-1">Auth Demo</span>
												</div>
												<ul className="nav flex-column">
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-login-basic.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Login (Basic)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-login-cover.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Login (Cover)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-register-basic.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Register (Basic)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-register-cover.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Register (Cover)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-register-multisteps.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Register (Multi-steps)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-forgot-password-basic.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Forgot Password (Basic)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-forgot-password-cover.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Forgot Password (Cover)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-reset-password-basic.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Reset Password (Basic)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-reset-password-cover.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Reset Password (Cover)
														</a>
													</li>
												</ul>
											</div>
											<div className="col-12 col-lg">
												<div className="h6 d-flex align-items-center mb-2 mb-lg-3">
													<div className="avatar avatar-sm flex-shrink-0 me-2">
														<span className="avatar-initial rounded bg-label-primary"><i className="ti ti-file-analytics" /></span>
													</div>
													<span className="ps-1">Other</span>
												</div>
												<ul className="nav flex-column">
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/pages-misc-error.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Error
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/pages-misc-under-maintenance.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Under Maintenance
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/pages-misc-comingsoon.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Coming Soon
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/pages-misc-not-authorized.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Not Authorized
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-verify-email-basic.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Verify Email (Basic)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-verify-email-cover.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Verify Email (Cover)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-two-steps-basic.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Two Steps (Basic)
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link mega-dropdown-link" href="/vertical-menu-template/auth-two-steps-cover.html" target="_blank">
															<i className="ti ti-circle me-1" />
															Two Steps (Cover)
														</a>
													</li>
												</ul>
											</div>
											<div className="col-lg-4 d-none d-lg-block">
												<div className="bg-body nav-img-col p-2">
													<img src="/assets/img/front-pages/nav-item-col-img.png" alt="nav item col image" className="w-100" />
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item">
									<a className="nav-link fw-medium" href="/vertical-menu-template/index.html" target="_blank">Admin</a>
								</li>
							</ul>
						</div>
						<div className="landing-menu-overlay d-lg-none" />
						{/* Menu wrapper: End */}
						{/* Toolbar: Start */}
						<ul className="navbar-nav flex-row align-items-center ms-auto">
							{/* Style Switcher */}
							<li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
								<a className="nav-link dropdown-toggle hide-arrow" href="#" onClick={handleIconChange} data-bs-toggle="dropdown">
									<i className='ti ti-sm' suppressHydrationWarning />
									<Icon icon={selectedIcon} className="ti ti-sm" />
								</a>
								{/* <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
									<li>
										<a className="dropdown-item" href="#" data-theme="light">
											<span className="align-middle">
												<Icon icon='tabler:sun' className="ti ti-sun me-2" />
												Light
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-theme="dark">
											<span className="align-middle">
												<Icon icon='tabler:moon' className="ti ti-moon me-2" />
												Dark
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-theme="system">
											<span className="align-middle">
												<Icon  icon="tabler:device-desktop-check" className="ti ti-device-desktop me-2" />
												System
											</span>
										</a>
									</li>
								</ul> */}
							</li>
							{/* / Style Switcher*/}
							{/* navbar button: Start */}
							<li>
								{/* <a href='auth/login' className="btn btn-primary waves-effect waves-light" >
									<span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1" />
									<span className="d-none d-md-block">Login/Register</span>
								</a> */}
								<Link href="/auth/login" className="btn btn-primary waves-effect waves-light">
									<span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1" />
									<span className="d-none d-md-block">Login/Register</span>
								</Link>
								{userInfo ? (
									<a href="dashboard">
										<button>My Account</button>
									</a>
								) : (
									<>
										<Link href="/auth/login">
											<button>Login</button>
										</Link>
										<Link href="/auth/register">
											<button>Register</button>
										</Link>
									</>
								)}
							</li>
							{/* navbar button: End */}
						</ul>
						{/* Toolbar: End */}
					</div>
				</div>
			</nav>
			{/* Navbar: End */}
		</>
	)
}

export default Navbar;
import React from 'react';

const Footer = () => {
	return (
		<footer className="landing-footer bg-body footer-text">
			<div className="footer-top">
				<div className="container">
					<div className="row gx-0 gy-4 g-md-5">
						<div className="col-lg-5">
							<a href="landing-page.html" className="app-brand-link mb-4">
								<span className="app-brand-logo demo">
									<svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0" />
										<path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
										<path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
										<path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0" />
									</svg>
								</span>
								<span className="app-brand-text demo footer-link fw-bold ms-2 ps-1">Vuexy</span>
							</a>
							<p className="footer-text footer-logo-description mb-4">
								Most developer friendly &amp; highly customisable Admin Dashboard Template.
							</p>
							<form className="footer-form">
								<label htmlFor="footer-email" className="small">Subscribe to newsletter</label>
								<div className="d-flex mt-1">
									<input
										type="email"
										className="form-control rounded-0 rounded-start-bottom rounded-start-top"
										id="footer-email"
										placeholder="Your email"
									/>
									<button
										type="submit"
										className="btn btn-primary shadow-none rounded-0 rounded-end-bottom rounded-end-top waves-effect waves-light"
									>
										Subscribe
									</button>
								</div>
							</form>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<h6 className="footer-title mb-4">Demos</h6>
							<ul className="list-unstyled">
								<li className="mb-3">
									<a href="../vertical-menu-template/" target="_blank" className="footer-link">Vertical Layout</a>
								</li>
								<li className="mb-3">
									<a href="../horizontal-menu-template/" target="_blank" className="footer-link">Horizontal Layout</a>
								</li>
								<li className="mb-3">
									<a href="../vertical-menu-template-bordered/" target="_blank" className="footer-link">Bordered Layout</a>
								</li>
								<li className="mb-3">
									<a href="../vertical-menu-template-semi-dark/" target="_blank" className="footer-link">Semi Dark Layout</a>
								</li>
								<li className="mb-3">
									<a href="../vertical-menu-template-dark/" target="_blank" className="footer-link">Dark Layout</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<h6 className="footer-title mb-4">Pages</h6>
							<ul className="list-unstyled">
								<li className="mb-3">
									<a href="pricing-page.html" className="footer-link">Pricing</a>
								</li>
								<li className="mb-3">
									<a href="payment-page.html" className="footer-link">Payment<span className="badge rounded bg-primary ms-2">New</span></a>
								</li>
								<li className="mb-3">
									<a href="checkout-page.html" className="footer-link">Checkout</a>
								</li>
								<li className="mb-3">
									<a href="help-center-landing.html" className="footer-link">Help Center</a>
								</li>
								<li className="mb-3">
									<a href="../vertical-menu-template/auth-login-cover.html" target="_blank" className="footer-link">Login/Register</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-4">
							<h6 className="footer-title mb-4">Download our app</h6>
							{/* <a href="javascript:void(0);" className="d-block footer-link mb-3 pb-2"> */}
							<a href="#" onClick={(e) => e.preventDefault()} className="d-block footer-link mb-3 pb-2">
								<img src="/assets/img/front-pages/apple-icon.png" alt="apple icon" />
							</a>
							{/* <a href="javascript:void(0);" className="d-block footer-link"> */}
							<a href="#" onClick={(e) => e.preventDefault()} className="d-block footer-link">
								<img src="/assets/img/front-pages/google-play-icon.png" alt="google play icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom py-3">
				<div className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
					<div className="mb-2 mb-md-0">
						<span className="footer-text">
							© {new Date().getFullYear()}
						</span>
						<a href="#" target="_blank" className="fw-medium text-white footer-link">Pixinvent,</a>
						<span className="footer-text"> Made with ❤️ for a better web.</span>
					</div>
					<div>
						<a href="https://github.com/pixinvent" className="footer-link me-3" target="_blank">
							<img
								suppressHydrationWarning
								src="/assets/img/front-pages/github-light.png"
								alt="github icon"
								data-app-light-img="front-pages/github-light.png"
								data-app-dark-img="front-pages/github-dark.png"
							/>
						</a>
						<a href="https://www.facebook.com/pixinvents/" className="footer-link me-3" target="_blank">
							<img
								suppressHydrationWarning
								src="/assets/img/front-pages/facebook-light.png"
								alt="facebook icon"
								data-app-light-img="front-pages/facebook-light.png"
								data-app-dark-img="front-pages/facebook-dark.png"
							/>
						</a>
						<a href="https://twitter.com/pixinvents" className="footer-link me-3" target="_blank">
							<img suppressHydrationWarning
								src="/assets/img/front-pages/twitter-light.png"
								alt="twitter icon"
								data-app-light-img="front-pages/twitter-light.png"
								data-app-dark-img="front-pages/twitter-dark.png"
							/>
						</a>
						<a href="https://www.instagram.com/pixinvents/" className="footer-link" target="_blank">
							<img suppressHydrationWarning
								src="/assets/img/front-pages/instagram-light.png"
								alt="google icon"
								data-app-light-img="front-pages/instagram-light.png"
								data-app-dark-img="front-pages/instagram-dark.png"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

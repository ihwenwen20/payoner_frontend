import Head from 'next/head'
import Script from 'next/script'
import { useEffect,useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import { Button } from 'react-bootstrap';
import Icon from '@app/components/icon'


export default function Layout({ children }) {

	useEffect(() => {
		const loadStylesheet = (url) => {
			return new Promise((resolve, reject) => {
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = url;
				link.onload = resolve;
				link.onerror = reject;
				document.head.appendChild(link);
			});
		};

		const loadStylesheets = async () => {
			try {
				await loadStylesheet('/assets/vendor/css/rtl/core.css');
				await loadStylesheet('/assets/vendor/css/rtl/theme-default.css');
				await loadStylesheet('/assets/css/demo.css');
				await loadStylesheet('/assets/vendor/libs/node-waves/node-waves.css');
				await loadStylesheet('/assets/vendor/libs/nouislider/nouislider.css');
				await loadStylesheet('/assets/vendor/libs/swiper/swiper.css');
				await loadStylesheet('/assets/vendor/css/pages/front-page.css');
				await loadStylesheet('/assets/vendor/css/pages/front-page-landing.css');
			} catch (error) {
				console.error('Failed to load stylesheets:', error);
			}
		};

		if (document) {
			loadStylesheets();
		}
	}, []);

	return (
		<>
			{/* <Head>
				<link rel="stylesheet" href="/assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
				<link rel="stylesheet" href="/assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
				<link rel="stylesheet" href="/assets/css/demo.css" />
				<link rel="stylesheet" href="/assets/vendor/libs/node-waves/node-waves.css" />
				<link rel="stylesheet" href="/assets/vendor/libs/nouislider/nouislider.css" />
				<link rel="stylesheet" href="/assets/vendor/libs/swiper/swiper.css" />
				<link rel="stylesheet" href="/assets/vendor/css/pages/front-page.css" />
				<link rel="stylesheet" href="/assets/vendor/css/pages/front-page-landing.css" />
			</Head> */}
			{/* <!-- Helpers --> */}
			<Script src="/assets/vendor/js/helpers.js" />
			{/* <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section --> */}
			{/* <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  --> */}
			<Script src="/assets/vendor/js/template-customizer.js" />
			{/* <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  --> */}
			<Script src="/assets/js/front-config.js" />
			<Script src="/assets/vendor/js/dropdown-hover.js" />
			<Script src="/assets/vendor/js/mega-dropdown.js" />

			{/* <!-- Core JS --> */}
			{/* <!-- build:js assets/vendor/js/core.js --> */}
			<Script src="/assets/vendor/libs/popper/popper.js" />
			<Script src="/assets/vendor/js/bootstrap.js" />

			{/* <!-- endbuild --> */}

			{/* <!-- Vendors JS --> */}
			<Script src="/assets/vendor/libs/nouislider/nouislider.js" />
			<Script src="/assets/vendor/libs/swiper/swiper.js" />

			{/* <!-- Main JS --> */}
			<Script src="/assets/js/front-main.js" />
			<Navbar />
			{/* <Header/> */}
			{children}
			<Footer />
			<ScrollButton />
		</>
	);
}
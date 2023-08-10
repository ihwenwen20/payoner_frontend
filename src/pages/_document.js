// ** React Import
import { Children } from 'react'

// ** Next Import
import Document, { Html, Head, Main, NextScript } from 'next/document'

// ** Emotion Imports
import createEmotionServer from '@emotion/server/create-instance'

// ** Utils Imports
import { createEmotionCache } from '@app/utils/create-emotion-cache'

class CustomDocument extends Document {
	render() {
		return (
			// <Html lang="en" className="light-style layout-navbar-fixed " dir="ltr"
			// 	data-theme="theme-default" data-assets-path="/assets/"
			// 	data-template="front-pages">
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
					/>
					<link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
					<link rel='shortcut icon' href='/images/favicon.png' />
					{/* <link rel="stylesheet" href="/assets/vendor/fonts/tabler-icons.css" /> */}
					{/* Core CSS */}
					{/* <link rel="stylesheet" href="/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
					<link rel="stylesheet" href="/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
					<link rel="stylesheet" href="/assets/css/demo.css" />
					<link rel="stylesheet" href="/assets/vendor/libs/node-waves/node-waves.css" />
					<link rel="stylesheet" href="/assets/vendor/libs/nouislider/nouislider.css" />
					<link rel="stylesheet" href="/assets/vendor/libs/swiper/swiper.css" /> */}
					{/* Page CSS */}
					{/* <link rel="stylesheet" href="/assets/vendor/css/pages/front-page.css" />
					<link rel="stylesheet" href="/assets/vendor/css/pages/front-page-landing.css" /> */}
					{/* Helpers */}
					{/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
					{/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
					{/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
CustomDocument.getInitialProps = async ctx => {
	const originalRenderPage = ctx.renderPage
	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props =>
			(
				<App
					{...props} // @ts-ignore
					emotionCache={cache}
				/>
			)
		})
	const initialProps = await Document.getInitialProps(ctx)
	const emotionStyles = extractCriticalToChunks(initialProps.html)

	const emotionStyleTags = emotionStyles.styles.map(style => {
		return (
			<style
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }}
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
			/>
		)
	})

	return {
		...initialProps,
		styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags]
	}
}

export default CustomDocument

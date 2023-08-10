import { listen } from '@store/listener';
import { useState, useEffect } from 'react'
// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import { Provider } from "react-redux";
import store from "@store/index";

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import 'src/configs/i18n'
import { CacheProvider } from '@emotion/react'
import { defaultACLObj } from 'src/configs/acl'
import themeConfig from 'src/configs/themeConfig'


// ** Component Imports
import UserLayout from '@layouts/UserLayout'
import ThemeComponent from '@app/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from '@app/context-hooks/settingsContext'
import AclGuard from '@app/components/auth/AclGuard'

import AuthGuard from '@app/components/auth/AuthGuard'
import GuestGuard from '@app/components/auth/GuestGuard'
import Spinner from '@app/components/spinner'
// ** Styled Components
import ReactHotToast from '@app/styles/libs/react-hot-toast'
import { Toaster } from 'react-hot-toast'
// ** Utils Imports
import { createEmotionCache } from '@app/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
	Router.events.on('routeChangeStart', () => {
		NProgress.start()
	})
	Router.events.on('routeChangeError', () => {
		NProgress.done()
	})
	Router.events.on('routeChangeComplete', () => {
		NProgress.done()
	})
}

const Guard = ({ children, authGuard, guestGuard }) => {
	if (guestGuard) {
		return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
	} else if (!guestGuard && !authGuard) {
		return <>{children}</>
	} else {
		return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
	}
}

// ** Configure JSS & ClassName
const App = props => {
	useEffect(() => {
    listen();
  }, []);

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	// Variables
	const contentHeightFixed = Component.contentHeightFixed ?? false

	const getLayout =
		Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
	const setConfig = Component.setConfig ?? undefined
	const authGuard = Component.authGuard ?? true
	const guestGuard = Component.guestGuard ?? false
	const aclAbilities = Component.acl ?? defaultACLObj

	return (

		<CacheProvider value={emotionCache}>
			<Head>
				<title>Landing Page - Front Pages</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
				<meta name='keywords' content='Payoner, payoner, payon, Payoner Design, aplikasi payoner, billing, billing rt rw net, rt rw net, payoner app, aplikasi billing, RT/RW net' />
			</Head>
			<Provider store={store}>

			<SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
				<SettingsConsumer>
					{({ settings }) => {
						return (
							<ThemeComponent settings={settings}>
								<ReactHotToast>
									<Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
								</ReactHotToast>
								{/* <Guard authGuard={authGuard} guestGuard={guestGuard}> */}
									{/* <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}> */}
										{getLayout(<Component {...pageProps} />)}
									{/* </AclGuard> */}
								{/* </Guard> */}
							</ThemeComponent>
						)
					}}
				</SettingsConsumer>
			</SettingsProvider>

			</Provider>
		</CacheProvider>

	)
}

export default App

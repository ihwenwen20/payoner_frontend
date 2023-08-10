// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from '@app/components/icon'

// ** Components
import ModeToggler from '@app/layouts/components/shared-components/ModeToggler'
import UserDropdown from '@app/layouts/components/shared-components/UserDropdown'
import Autocomplete from 'src/layouts/components/Autocomplete'
import LanguageDropdown from '@app/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown from '@app/layouts/components/shared-components/NotificationDropdown'
import ShortcutsDropdown from '@app/layouts/components/shared-components/ShortcutsDropdown'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import useAuthStore from '@zustand/authSlice'

const AppBarContent = props => {
	const router = useRouter()
	const { userInfo, logout } = useAuthStore();
	const [isLoading, setIsLoading] = useState(true);

	// ** Props
	const { hidden, settings, saveSettings, toggleNavVisibility } = props

	useEffect(() => {
		if (!userInfo || !userInfo.accessToken) {
			handleLogout();
		} else {
			setIsLoading(false);
		}
	}, [userInfo]);

	const handleLogout = () => {
		logout();
		router.push('/');
	};

	if (isLoading) {
		// Tampilkan loading spinner atau pesan loading di sini
		return <p>Loading...</p>;
	}

	return (
		<>
			{userInfo && (
				<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
						{hidden && !settings.navHidden ? (
							<IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
								<Icon fontSize='1.5rem' icon='tabler:menu-2' />
							</IconButton>
						) : null}
							<Autocomplete hidden={hidden} settings={settings} />
						{/* {userInfo &&
						} */}
					</Box>
					<Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
						<LanguageDropdown settings={settings} saveSettings={saveSettings} />
						<ModeToggler settings={settings} saveSettings={saveSettings} />

								{/* <ShortcutsDropdown settings={settings}
						// shortcuts={shortcuts}
						/> */}
								{/* <NotificationDropdown settings={settings}
						//  notifications={notifications}
						  /> */}
						<UserDropdown settings={settings} />
					</Box>
				</Box>
			)}
		</>

	)
}

export default AppBarContent

import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';

const CustomBreadcrumb = ({ url2, url3, urlActive }) => {
	return (
		<Breadcrumbs aria-label="breadcrumb">
			<Link href="/dashboard"
				underline="hover"
				sx={{ display: 'flex', alignItems: 'center' }}
				color="inherit"
			>Dashboard</Link>
			{!url3 && <Link
				sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">{url2}</Link>}
			{url3 && (
				<Link href={urlActive} underline="hover"
				sx={{ display: 'flex', alignItems: 'center' }} color="inherit">
					{url2}
				</Link>
			)}
			{url3 && <Link
				sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">{url3}</Link>}
		</Breadcrumbs>
	);
};

export default CustomBreadcrumb;
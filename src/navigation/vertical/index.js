const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'bi:laptop',
    },
		{
      title: 'Components',
      icon: 'tabler:archive',
      children: [
        {
          title: 'Buttons',
          path: '/components/buttons'
        },
        {
          title: 'Text Field',
          path: '/components/form/text-field'
        },
				{
					title: 'Form',
					path: '/form',
				},
				{
					title: 'Dialog',
					path: '/dialog',
				},
      ]
    },
		{
      sectionTitle: 'Management'
    },
		{
			title: 'Companies',
			icon: 'fluent:building-people-24-filled',
      path: '/companies',
		},
		{
      title: 'Employee',
      icon: 'clarity:employee-group-line',
    },
    {
      title: 'Users',
      icon: 'raphael:users',
      path: '/users',
    },
    {
			path: '/acl',
      // action: 'read',
      // subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:access-point-network-off',
    },
		{
			title: 'Coverage Area',
			icon: 'arcticons:maps',
			path: '/coverages',
		},
		{
      sectionTitle: 'Service'
    },
		{
      title: 'Categories',
      path: '/categories',
      icon: 'tabler:category-2',
    },
		{
      title: 'Products',
      path: '/products',
      icon: 'fluent:box-edit-20-regular',
    },
		{
      sectionTitle: 'History Transactions'
    },
		{
      title: 'Orders',
      path: '/accounting/orders',
      icon: 'el:shopping-cart-sign',
    },
		{
      title: 'Finance',
      // path: '/second-page',
      icon: 'lucide:circle-dollar-sign',
    },
		{
      sectionTitle: 'Mikrotik'
    },
		{
      title: 'ODP',
      icon: 'carbon:server-proxy',
      path: '/mikrotik/odp',
    },
		{
      title: 'ODC',
      icon: 'simple-icons:traefikproxy',
      path: '/mikrotik/odc',
    },
		{
      title: 'OLT',
      icon: 'ri:signal-tower-fill',
    },
		{
      sectionTitle: 'Other'
    },
		{
      title: 'Customers',
      icon: 'dashicons:buddicons-buddypress-logo',
      path: '/customers',
    },
		{
			title: 'Voucher',
			icon: 'mdi:voucher-outline',
      path: '/voucher',
		},
		{
      title: 'Bank',
      icon: 'noto:bank',
      path: '/banks',
    },
		{
      sectionTitle: 'Integration'
    },
		{
			title: 'WhatsApp',
			icon: 'ph:whatsapp-logo-duotone',
		},
		{
			title: 'Telegram',
			icon: 'line-md:telegram',
      path: '/connection/telegrams',
		},
		{
			title: 'Email',
			icon: 'basil:gmail-outline',
		},
		{
			title: 'SMS',
			icon: 'fa-solid:sms',
		},
		{
      sectionTitle: 'Payments Gateway'
    },
		{
			title: 'Payments Gateway',
			icon: 'arcticons:ok-payment',
		},
		{
			title: 'Midtrans',
			icon: 'mdi:account-payment-outline',
		},
		{
			title: 'Tripay',
			icon: 'streamline:money-wallet-money-payment-finance-wallet',
		},
		{
			title: 'Xendit',
			icon: 'iconamoon:sign-x',
		},
		{
			title: 'Paypal',
			icon: 'uim:paypal',
		},
		{
			title: 'Flip',
			icon: 'gis:flip-h',
		},
		{
      sectionTitle: '. . . Others'
    },
		{
			title: 'Roles & Permissions',
			icon: 'game-icons:car-key',
		},
		{
			title: 'Disabled Menu',
			icon: 'tabler:eye-off',
			disabled: true
		},
		{
			title: 'Raise Support',
			icon: 'tabler:lifebuoy',
			externalLink: true,
			openInNewTab: true,
			// path: 'https://pixinvent.ticksy.com/'
		},
		{
			title: 'Documentation',
			icon: 'tabler:file-text',
			externalLink: true,
			openInNewTab: true,
			// path: 'https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation'
		},
		{
			title: 'About',
			icon: 'mdi:about-variant',
		},
		{
			title: 'Setting',
			icon: 'ant-design:setting-twotone',
		},
		{
			title: 'Logout',
			icon: 'solar:logout-3-bold',
		},
  ]
}

export default navigation
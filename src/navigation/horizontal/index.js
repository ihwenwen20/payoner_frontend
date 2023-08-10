const navigation = () => {
  return [
    {
      icon: 'line-md:home-twotone',
      title: 'Dashboard',
      children: [
        {
					title: 'Dashboard',
					path: '/dashboard',
					icon: 'line-md:laptop',
				},
      ]
    },
    {
      icon: 'tabler:layout-grid-add',
      title: 'Management',
      children: [
        {
					title: 'Companies',
					icon: 'fluent:building-people-24-filled',
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
					path: '/coverage',
				},
        {
          title: 'Invoice',
          icon: 'tabler:file-dollar',
          children: [
            {
              title: 'List',
              path: ''
            },
            {
              title: 'Preview',
              path: ''
            },
            {
              title: 'Edit',
              path: ''
            },
            {
              title: 'Add',
              path: ''
            }
          ]
        },
        {
          title: 'User',
          icon: 'tabler:user',
          children: [
            {
              title: 'List',
              path: '/apps/user/list'
            },
            {
              title: 'View',
              children: [
                {
                  title: 'Account',
                  path: '/apps/user/view/account'
                },
                {
                  title: 'Security',
                  path: '/apps/user/view/security'
                },
                {
                  title: 'Billing & Plans',
                  path: '/apps/user/view/billing-plan'
                },
                {
                  title: 'Notifications',
                  path: '/apps/user/view/notification'
                },
                {
                  title: 'Connection',
                  path: '/apps/user/view/connection'
                }
              ]
            }
          ]
        },
        {
          title: 'Roles & Permissions',
          icon: 'tabler:settings',
          children: [
            {
              title: 'Roles',
              path: '/apps/roles'
            },
            {
              title: 'Permissions',
              path: '/apps/permissions'
            }
          ]
        }
      ]
    },
    {
      icon: 'tabler:color-swatch',
      title: 'Service',
      children: [
        {
					title: 'Categories',
					path: '/categories',
					icon: 'tabler:category-2',
				},
				{
					title: 'Products',
					// path: '/categories',
					icon: 'fluent:box-edit-20-regular',
				},
      ]
    },
    {
      icon: 'arcticons:mopria-print-service',
      title: 'History Transactions',
      children: [
        {
					title: 'Orders',
					icon: 'el:shopping-cart-sign',
				},
				{
					title: 'Finance',
					icon: 'lucide:circle-dollar-sign',
				},
      ]
    },
    {
      icon: 'iconoir:antenna-signal-tag',
      title: 'Mikrotik',
      children: [
        {
					title: 'ODP',
					icon: 'carbon:server-proxy',
				},
				{
					title: 'ODC',
					icon: 'simple-icons:traefikproxy',
				},
				{
					title: 'OLT',
					icon: 'ri:signal-tower-fill',
				},
      ]
    },
    {
      icon: 'carbon:id-management',
      title: 'Other',
      children: [
        {
					title: 'Customers',
					icon: 'dashicons:buddicons-buddypress-logo',
				},
        {
					title: 'Voucher',
					icon: 'mdi:voucher-outline',
				},
				{
					title: 'Bank',
					icon: 'noto:bank',
				},
      ]
    },
    {
      icon: 'carbon:ibm-cloud-pak-integration',
      title: 'Integration',
      children: [
        {
					title: 'WhatsApp',
					icon: 'ph:whatsapp-logo-duotone',
				},
        {
					title: 'Telegram',
					icon: 'line-md:telegram',
				},
        {
					title: 'Email',
					icon: 'basil:gmail-outline',
				},
        {
					title: 'SMS',
					icon: 'fa-solid:sms',
				},
      ]
    },
    {
      icon: 'arcticons:whatsappwebtogo',
      title: '',
      children: [
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
      ]
    },
    {
      title: 'Others',
      icon: 'tabler:dots',
      children: [
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
  ]
}

export default navigation
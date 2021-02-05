export default [
	{ label: 'angellist', value: 'angellist' },
	{ label: 'codepen', value: 'codepen' },
	{ label: 'envelope', value: 'envelope' },
	{ label: 'etsy', value: 'etsy' },
	{ label: 'facebook', value: 'faceboo' },
	{ label: 'foursquare', value: 'foursquare' },
	{ label: 'github-alt', value: 'github-alt' },
	{ label: 'github', value: 'github' },
	{ label: 'gitlab', value: 'gitlab' },
	{ label: 'instagram', value: 'instagrama' },
	{
		label: 'Selecciona una empresa',
		value: 'placeholder',
		selected: true,
		icon: () => <FontAwesome5 name="search" size={18} color="#000" />,
		hidden: true,
	},
];

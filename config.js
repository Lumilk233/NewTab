// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '屑荧',
	openInNewTab: true,
	twelveHourFormat: false,

	// Theme
	theme: 'bento',
	imageBackground: false,
	iamgeUrl: './assets/background.jpg',

	// Search Bar
	searchBar: true,
	searchEngine: 'google', // google, ddg
	barStyle: 'bento',
	barPlaceholder: '', // if blank, use search engine name. Set to ' ' for no placeholder.
	
	// Greetings
	greetingMorning: '{name} 早安!',
	greetingAfternoon: '中午好 记得吃午饭,',
	greetingEvening: '晚上好,',
	greetingNight: '{name} 该睡觉啦',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'ebdeb1d750e0268fdf9804ca3bc4ce58', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'zh_cn', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '114.5',
	defaultLongitude: '30.5',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Search',
			icon: 'search',
			link: 'https://search.lumine233.ml/',
		},
		{
			id: '2',
			name: 'Lumine Blog',
			icon: 'trello',
			link: 'https://blog.lumine233.ml/',
		},
		{
			id: '3',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '4',
			name: 'Mail',
			icon: 'mail',
			link: 'https://outlook.office.com/mail/',
		},
		{
			id: '5',
			name: 'Lumine Pan',
			icon: 'cloud',
			link: 'https://pan.lumine233.ml/',
		},
		{
			id: '6',
			name: 'Heroku',
			icon: 'server-crash',
			link: 'https://dashboard.heroku.com/apps',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://open.spotify.com',
				},
				{
					name: 'Apple Music',
					link: 'https://music.apple.com/',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com',
				},
				{

					name: '网易云音乐',
					link: 'https://music.163.com/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Twitter',
					link: 'https://twitter.com/',
				},
				{
					name: 'Facebook',
					link: 'https://zh-cn.facebook.com/',
				},
				{
					name: 'Discord',
					link: 'https://discord.com/app',
				},
				{
					name: 'Telegram',
					link: 'https://t.me/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};

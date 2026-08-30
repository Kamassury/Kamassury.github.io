export const profile = {
	fullName: 'Jorge Kamassury',
	title: 'AI Researcher',
	institute: 'CERTI Foundation',
	author_name: 'Kamassury', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Robust Deep Learning', description: 'Aprendizado com rotulos ruidosos, incerteza e confiabilidade em dados imperfeitos.', field: 'computer-science' },
		{ title: 'Physics-Informed ML', description: 'Modelagem informada por fisica e sistemas dinamicos.', field: 'physics' },
		{ title: 'Information Theory', description: 'Codificacao, decodificacao neural e teoria da informacao.', field: 'mathematics' },
		{ title: 'Industrial AI', description: 'Metodos para sistemas complexos e de missao critica.', field: 'engineering' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'kamassury@gmail.com',
	linkedin: 'https://www.linkedin.com/in/jorge-kamassury/',
	x: '',
	bluesky: '',
	github: 'https://github.com/kamassury',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=k36ZhmMAAAAJ&hl=en',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0001-8335-9796',
}

export const template = {
	website_url: 'https://kamassury.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: true,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/research-site'
}

export const seo = {
	default_title: 'Jorge Kamassury — Research',
	default_description: 'Research in robust deep learning, physics-informed modeling and information theory.',
	default_image: '/images/astro-academia.png',
}

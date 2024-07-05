import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'HTKBD',
			social: {
				github: 'https://github.com/at-the-vr/HTKBD',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Guide', link: '/guides/guide/' },
						{ label: 'Test', link: '/guides/kbd-test/' },
					],
				},
			],
		}),
	],
});

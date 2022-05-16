import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import laravel from 'vite-plugin-laravel'
import vue from '@vitejs/plugin-vue'
import inertia from './resources/scripts/vite/inertia-layout'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
	plugins: [
		inertia(),
		vue({
            template: { transformAssetUrls }
        }),
		laravel({
			postcss: [
				tailwindcss(),
				autoprefixer(),
			],
		}),
        quasar({
            // sassVariables: './css/quasar-variables.sass'
        })
	],
})

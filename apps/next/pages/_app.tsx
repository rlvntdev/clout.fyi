import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (process.env.NODE_ENV === 'production') {
	require('../public/tamagui.css')
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: SolitoAppProps) {
	return (
		<>
			<Head>
				<title>Tamagui Example App</title>
				<meta name="description" content="Tamagui, Solito, Expo & Next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</ThemeProvider>
		</>
	)
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useRootTheme()

	return (
		<NextThemeProvider
			onChangeTheme={(next) => {
				setTheme(next as any)
			}}
		>
			<Provider disableRootThemeClass defaultTheme={theme}>
				{children}
			</Provider>
		</NextThemeProvider>
	)
}

export default MyApp

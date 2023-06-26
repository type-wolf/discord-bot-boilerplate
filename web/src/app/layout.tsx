import { Inter } from 'next/font/google';
import ChakraProviders from '../components/ChakraProvider';
import ReduxProviders from '../components/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
// 	title: 'DiscordBot x Next.js',
// 	description: 'DiscordBot x Next.js　boilerplate',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProviders>
					<ChakraProviders>{children}</ChakraProviders>
				</ReduxProviders>
			</body>
		</html>
	);
}

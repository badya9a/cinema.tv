import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
				/>
			</Head>
			<body>
      <Main />
				<NextScript />
			</body>
		</Html>
	)
}
export default Document

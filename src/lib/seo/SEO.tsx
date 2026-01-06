import { type FC } from "react"
import { onlyText, siteName, titleMerge } from "./seo.config"

import { MetaNoIndex } from "./meta-noindex"
import { useLocation } from "@tanstack/react-router"

type SEOProps = {
	title: string
	description?: string
	type?: string
	keywords?: string
}
const SEO: FC<SEOProps> = ({
	title,
	description,
	keywords = "qaraqalpaqstan",
	type = "article",
}) => {
	const { pathname } = useLocation()
	const currentUrl = "https://qr-ideas.uz/" + pathname
	return (
		<>
			{description ? (
				<>
					<title>{titleMerge(title)}</title>
					<meta name="description" content={description} />
					<meta property="keywords" content={keywords} />
					<meta property="og:type" content={type} />
					<meta property="og:title" content={titleMerge(title)} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
					<meta property="og:url" content={currentUrl} />
					<meta property="og:site_name" content={siteName} />
				</>
			) : (
				<MetaNoIndex title={title} />
			)}
		</>
	)
}
export default SEO

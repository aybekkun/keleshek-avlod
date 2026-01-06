import { type FC } from "react"

import { titleMerge } from "./seo.config"

export const MetaNoIndex: FC<{ title?: string }> = ({ title = "Error" }) => {
	return (
		<html>
			<title>{titleMerge(title)}</title>
			<meta name="robots" content="noindex, nofollow" />
		</html>
	)
}

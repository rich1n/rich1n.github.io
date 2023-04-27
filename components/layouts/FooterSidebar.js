import { useRouter } from "next/router"
import SocialLinksIcons from "./SocialLinksIcons"

export default function FooterBar() {
	const { locale } = useRouter()
	const defaultLang = locale === 'es'

	return (
		<div className="mx-auto mt-16 flex flex-col items-center">
			<div>
				<button 
					className="ml-1 mr-1 rounded p-1 sm:ml-4 hover:bg-gray-600 duration-500"
					type="button" 
					aria-label="Subscribe Button"
				>
					<span>
						{ defaultLang ? 'SUS' : 'SUB' }
					</span>
					<br/>
					<span>
								{ defaultLang ? 'CRI' : 'SCR' }
					</span>
					<br/>
					<span>
						{ defaultLang ? 'BIR.' : 'IBE.' }
					</span>
				</button>
			</div>
			<div>
				<SocialLinksIcons />
			</div>
		</div>        
  )
}

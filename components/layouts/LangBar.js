import { useRouter } from "next/router"
import English from "@/public/english.png";
import Spanish from "@/public/spanish.png";
import Image from "next/image";

export default function LangBar2() {
	const router = useRouter();
	  const { locale } = useRouter()
	const defaultLang = locale === 'es'

	const onChangeLanguage = (lang) => (e) => {
		e.preventDefault()
		router.push(router.asPath, undefined, { locale: lang })
	}

	return (
		<div className="border-none">
			<div className="p-1">
				{ defaultLang ?
					<button onClick={onChangeLanguage('en')} value='' defaultChecked = { locale === 'es' }>
						<div className="flex gap-2 uppercase">
							{locale}
						</div>
					</button>
					:
					<button onClick={onChangeLanguage('es')} value='' defaultChecked = { locale === 'es' }>
						<div className="flex gap-2 uppercase">
							{locale}
						</div>
					</button>
				}
			</div>
		</div>
	)
}



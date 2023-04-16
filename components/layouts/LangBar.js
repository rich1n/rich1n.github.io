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
			<div className="p-1 px-3">
				{ defaultLang ?
					<button onClick={onChangeLanguage('en')} value='' defaultChecked = { locale === 'es' }>
						<div className="flex gap-2">
							{locale}
							<Image
								src={English.src}
								width={24}
								height={24}
								alt={ defaultLang ? 'Ícono idioma inglés' : 'English flag icon' } 
								loading="lazy"
							/>
						</div>
					</button>
					:
					<button onClick={onChangeLanguage('es')} value='' defaultChecked = { locale === 'es' }>
						<div className="flex gap-2">
							{locale}
							<Image
								src={Spanish.src}
								width={24}
								height={24}
								alt={ defaultLang ? 'Ícono idioma español' : 'Spanish flag icon' } 
								loading="lazy"                  />
						</div>
					</button>
				}
			</div>
		</div>
	)
}



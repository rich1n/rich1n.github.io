import LanguageBar from "../LangBar"

export default function FooterBar() {
  return (
		<div className="mx-auto  mt-16 flex flex-col items-center">
			<div className="mb-3">
				<ul className="space-y-2 text-center">
					<li>
						<LanguageBar />
					</li>
				</ul>
			</div>
			<div className="">
				<button type="button" aria-label="Subscribe Button">
					Subscribe
				</button>
			</div>
		</div>        
  )
}

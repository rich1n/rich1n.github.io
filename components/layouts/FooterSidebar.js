import SocialLinksIcons from "./SocialLinksIcons"

export default function FooterBar() {
  return (
		<div className="mx-auto  mt-16 flex flex-col items-center">
			<div>
				<button 
					className="ml-1 mr-1 h-8 rounded p-1 sm:ml-4 hover:bg-gray-600 duration-700"
					type="button" 
					aria-label="Subscribe Button">
					Subscribe
				</button>
			</div>
			<div>
				<SocialLinksIcons />
			</div>
		</div>        
  )
}

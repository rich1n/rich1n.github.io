import { github, linkedin, email, twitter } from '@/data/siteMetadata'
import Mail from '@/public/social-icons/mail.svg'
import Github from '@/public/social-icons/github.svg'
import Linkedin from '@/public/social-icons/linkedin.svg'
import Twitter from '@/public/social-icons/twitter.svg'

const socialLinks = [
    { href: email, title: 'Mail', icon: Mail },
    { href: twitter, title: 'Twitter', icon: Twitter  },
    { href: github, title: 'Github', icon: Github },
    { href: linkedin, title: 'LinkedIn', icon: Linkedin },
  ]
  
  export default socialLinks
  
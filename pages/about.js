import Image from "next/image"
import Link from "next/link"

export default function about() {
  return (

    <>
      <div className="my-12">
        <div className="flex justify-evenly space-x-4">
          <div>
            <Image
              className="mx-auto object-cover"
              src='https://res.cloudinary.com/rich1n/image/upload/v1700999988/richin.com/profilepic_oxen7b.jpg'
              width={500}
              height={700} 
              alt='Linkedin Footer Logo'
            />
          </div>
          <div className="my-auto md:text-2xl">
            <h2>Hello I&apos;m <span className="text-red-500">Richard</span></h2>
            <p>If you came here, let me congratulate you because you are a special person</p>
          </div>
        </div>
        <div>
          <p>
            I was living in Caracas but now I recently move to Hamburg, and you know what. I love it!
          </p>
          <p>
          I was born in Kansas, and like little Ellie, I always dreamed that a hurricane would take me somewhere to another country. And once I really ended up in another country - in China, studying at a business school. There I began to travel a lot around Asia in my free time and then moved to work in Munich.

I discovered the world of low-cost airlines and began to fly somewhere and see the world every weekend. Being somewhere in the 15th country, I realized that I had enough experience and knowledge to share with others - and so this blog appeared. Here you will find useful tips, my travel experiences, life hacks and the usual daily thoughts about everything that surrounds me.
          </p>
        </div>

        <div className="my-12">
        <Link href='/coffee'>
            <p className="text-gray-400">My Coffee Journey -foto de richin haciendo cafe-</p>
          </Link>
          <Link href='/developer'>
            <p className="text-gray-400">My Developing Journey</p>
          </Link>
          <Link href='/me'>
            <p className="text-gray-400">My never ending learning process</p>
          </Link>
          <p>My Resume</p>
        </div>
        <div className="relative h-60 bg-purple-200">
          <div className="text-gray-700 text-xl items-center	 text-center">
            <p>&apos;aqui va una frase celebre altoke, ratas&apos;</p>
          </div>
        </div>
        <div className="h-60 bg-blue-500">
          <h3 className="text-3xl">FOLLOW ME</h3>
        </div>
      </div>
    </>
  )
}




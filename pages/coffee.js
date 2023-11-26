import Image from "next/image"

export default function about() {
  return (

    <>
      <div className="my-12">
        <div className="flex justify-evenly space-x-4">
          <div>
            <Image
              className="mx-auto object-cover"
              src='https://res.cloudinary.com/rich1n/image/upload/v1700999988/richin.com/profilepic_oxen7b.jpg'
              width={300}
              height={500} 
              alt='Linkedin Footer Logo'
            />
          </div>
          <div className="my-auto md:text-2xl">
            <h2>Hello I&apos;m <span className="text-red-500">Richard</span></h2>
            <p>The Coffee Persona</p>
            <hr />
            <p></p>
          </div>
        </div>

        <div className="my-12">
          <p>My Coffee Journey</p>
          <p>My never ending learning process</p>
          <p>My Developing Journey</p>
          <p>My Resume</p>
        </div>
      </div>
    </>
  )
}




import { FaLinkedinIn , FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";

export default function Contacts() {
  const contacts = [
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/raja-muhammad-farhan-zahputra" },
    { icon: FaGithub, link: "https://github.com/RajaFarhann" },
    { icon: AiFillInstagram, link: "https://www.instagram.com/raja.farhan" },
    
  ]

  return (
    <section id="contacts" className="mt-8 md:mt-12 lg:mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Find Me On
        </h2>
        <h2 className="mb-4 text-center text-xs md:text-sm lg:text-md ">
          Feel free to <span className="text-violet-600">connect</span> with me
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {contacts.map((contacts) => (
            <div
              key={contacts.icon}
              className="
                group
                flex items-center gap-2
                rounded-full
                border-2 border-violet-600
                bg-violet-900
                shadow-sm shadow-violet-600/50
                px-4 py-2
                transition
                duration-300
                ease-out
                hover:shadow-md
              "
            >
                <a
                    href={`${contacts.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                ><contacts.icon className="text-base md:text-xl lg:text-2xl" />
                </a>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

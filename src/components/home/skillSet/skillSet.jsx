export default function Skills() {
  const skills = [
    { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
    { name: "Jetpack Compose", icon: "devicon-jetpackcompose-plain colored" },
    { name: "Flutter", icon: "devicon-flutter-plain colored" },
    { name: "Dart", icon: "devicon-dart-plain colored" },
    { name: "Javascript", icon: "devicon-javascript-plain colored" },
    { name: "React.Js", icon: "devicon-react-original colored" },
    { name: "Next.Js", icon: "devicon-nextjs-plain" },
    { name: "Express.Js", icon: "devicon-express-original" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Node.Js", icon: "devicon-nodejs-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    
  ]

  return (
    <section id="skills" className="py-4">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Skillset
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                flex items-center gap-2
                rounded-full
                border-2 border-violet-600
                bg-transparent
                shadow-md shadow-violet-600/50
                px-4 py-2
                transition
                duration-300
                ease-out
                hover:scale-110
                hover:shadow-lg
              "
            >
              <i className={`${skill.icon} text-base md:text-xl lg:text-2xl`} />
              <span className="text-xs md:text-sm lg:text-base font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Tools() {
  const tools = [
    { name: "Windows", icon: "devicon-windows11-original colored" },
    { name: "Vs Code", icon: "devicon-vscode-plain colored" },
    { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
    { name: "Chrome", icon: "devicon-chrome-plain" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
  ]

  return (
    <section id="tools">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {tools.map((tools) => (
            <div
              key={tools.name}
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
              <i className={`${tools.icon} text-base md:text-xl lg:text-2xl`} />
              <span className="text-xs md:text-sm lg:text-base font-medium">
                {tools.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

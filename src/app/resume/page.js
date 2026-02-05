export default function Resume() {
  return (
    <section className="min-h-screen text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          My <span className="text-violet-600">Resume</span>
        </h1>

        <p className="text-gray-300 mb-8 text-xs md:text-sm lg:text-base">You can view my resume directly below or download it for later.</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center text-xs md:text-sm lg:text-base">
          <a href="/resume/Raja-Muhammad-Farhan-Resume.pdf" download className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition">
            Download Resume
          </a>

          <a href="/resume/Raja-Muhammad-Farhan-Resume.pdf" target="_blank" className="px-6 py-3 rounded-lg border border-violet-600 hover:bg-violet-600/20 transition">
            Open in New Tab
          </a>
        </div>

        {/* PDF Preview */}
        <div className="w-full h-[80vh] rounded-xl overflow-hidden border border-white/10">
          <iframe src="/resume/Raja-Muhammad-Farhan-Resume.pdf" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

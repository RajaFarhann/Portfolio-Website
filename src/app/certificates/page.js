import CertificateCard from "@/components/certificates/certificateCard"
import { certificates } from "@/data/certificatesData"

export const metadata = {
  title: "Certificates | Raja Muhammad Farhan Zahputra",
}

export default function CertificatesPage() {
  return (
    <div className="relative z-10">
      
      {/* TITLE */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            My <span className="text-violet-600">Certificates</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Some of the certifications I have earned
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  )
}

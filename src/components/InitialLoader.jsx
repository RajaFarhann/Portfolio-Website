"use client"

import Lottie from "lottie-react"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <Lottie
        animationData={require("@/assets/lottie/petLoading.json")}
        loop
        className="h-32 w-32"
      />
    </div>
  )
}

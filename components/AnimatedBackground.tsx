"use client"
import React from "react"

export default function AnimatedBackground(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 10% 20%, rgba(124,58,237,0.08) 0%, transparent 20%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.06) 0%, transparent 18%)",
        mixBlendMode: 'screen',
        filter: 'blur(48px)',
        opacity: 0.9
      }} />
      {/* animated shapes (CSS) */}
      <div className="absolute inset-0 animate-float-18s" style={{opacity:0.06}}>
         {/* you can include svg blobs or pseudo elements */}
      </div>
    </div>
  )
}

"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-8 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Recherche alternance 3 ans - Big Data & ML
        </div>

        {/* Name and title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
          <span className="text-foreground">Aziz</span>{" "}
          <span className="text-primary">Djerbi</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
          Data Scientist · Data Engineer · ML Engineer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed text-pretty">
          Étudiant en fin de BUT Science des Données, admis au programme Ingénieur Big Data & Machine Learning 
          pour la rentrée 2026. Passionné par les systèmes IA, le data engineering et les outils d&apos;aide à la décision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a 
            href="https://github.com/azizlatabase" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 border border-border rounded-lg text-foreground font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/aziz-djerbi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 border border-border rounded-lg text-foreground font-medium transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a 
            href="mailto:azizdjerbi5@gmail.com" 
            className="inline-flex items-center gap-2 px-5 py-2.5 hover:bg-secondary/50 rounded-lg text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            azizdjerbi5@gmail.com
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border">
          {[
            { value: "3+", label: "Années de formation" },
            { value: "8+", label: "Projets réalisés" },
            { value: "B2", label: "Anglais" },
            { value: "2026", label: "Entrée en école d'ingé" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-wider">Défiler</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  )
}

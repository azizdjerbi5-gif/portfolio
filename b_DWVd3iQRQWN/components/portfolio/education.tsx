import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Programme Ingénieur — Big Data & Machine Learning",
    school: "EFREI Paris (Admis)",
    location: "France",
    period: "2026 - 2029",
    status: "upcoming",
    description: "Programme ingénieur de 3 ans spécialisé en Big Data et Machine Learning. Format alternance : 2 jours école / 3 jours entreprise.",
    highlights: ["Architecture Big Data", "Machine Learning Avancé", "Cloud Computing", "Ingénierie IA"],
  },
  {
    degree: "BUT Science des Données (3ème année)",
    school: "IUT de Paris - Rives de Seine",
    location: "Paris, France",
    period: "2023 - 2026",
    status: "current",
    description: "Diplôme Universitaire de Technologie en Science des Données. Spécialisation en analyse statistique, programmation data et gestion de bases de données.",
    highlights: ["Analyse statistique", "Programmation Data", "Gestion BDD", "Fondamentaux ML"],
  },
  {
    degree: "Baccalauréat Général",
    school: "Lycée La Salle-Saint Rosaire",
    location: "Sarcelles, France",
    period: "2020 - 2023",
    status: "completed",
    description: "Baccalauréat général avec orientation scientifique.",
    highlights: [],
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm font-mono">05.</span>
          <h2 className="text-2xl font-bold text-foreground">Formation</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              {/* Status indicator */}
              {edu.status === "upcoming" && (
                <div className="absolute top-6 right-6">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    Rentrée 2026
                  </span>
                </div>
              )}
              {edu.status === "current" && (
                <div className="absolute top-6 right-6">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En cours
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 pr-24">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>

                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

                  {edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

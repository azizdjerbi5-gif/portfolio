import { Briefcase, MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Stagiaire Data Analyst",
    company: "Laevitas",
    location: "Tunis",
    period: "Juin - Août 2025",
    description: [
      "Développement d'une application de monitoring des coûts cloud (AWS, OVH, Azure)",
      "Conception d'un pipeline de traitement de données : collecte, nettoyage, stockage SQLite et visualisation via Dash/Plotly",
      "Mise en place de KPI et dashboards interactifs pour l'analyse et l'optimisation des coûts",
    ],
    technologies: ["Python", "Dash", "Plotly", "SQLite", "AWS", "Azure", "OVH"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm font-mono">03.</span>
          <h2 className="text-2xl font-bold text-foreground">Expérience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1.5" />

              <div className="md:w-1/2 md:ml-auto md:pl-12">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

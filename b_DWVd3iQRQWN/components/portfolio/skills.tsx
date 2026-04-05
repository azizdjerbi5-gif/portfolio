import { Code2, Database, Brain, Wrench, BarChart3 } from "lucide-react"

const skillCategories = [
  {
    title: "Programmation",
    icon: Code2,
    skills: ["Python", "SQL", "R", "VBA", "SAS", "HTML/CSS"],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    skills: ["Machine Learning", "Deep Learning", "Statistiques", "Analyse de données", "Feature Engineering"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "ETL Pipelines", "PyMongo"],
  },
  {
    title: "IA & ML",
    icon: Brain,
    skills: ["LLMs", "NLP", "Computer Vision", "MLOps", "Systèmes RAG", "IA Générative"],
  },
  {
    title: "Outils & Frameworks",
    icon: Wrench,
    skills: ["Git", "Docker", "FastAPI", "Streamlit", "Airflow", "MLflow", "Power BI", "Dash/Plotly"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm font-mono">02.</span>
          <h2 className="text-2xl font-bold text-foreground">Compétences</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-8 p-6 rounded-xl bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-4">Langues</h3>
          <div className="flex flex-wrap gap-6">
            {[
              { lang: "Français", level: "Natif" },
              { lang: "Anglais", level: "B2" },
              { lang: "Allemand", level: "B1" },
            ].map((item) => (
              <div key={item.lang} className="flex items-center gap-2">
                <span className="text-foreground font-medium">{item.lang}</span>
                <span className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">{item.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

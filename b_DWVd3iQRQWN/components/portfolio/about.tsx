export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary text-sm font-mono">01.</span>
          <h2 className="text-2xl font-bold text-foreground">Profil</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Passionné par la transformation de données brutes en insights actionnables et la construction 
              de systèmes intelligents qui résolvent des problèmes concrets. En fin de BUT Science des Données, 
              j&apos;ai développé de solides bases en <span className="text-foreground font-medium">Python</span>, 
              <span className="text-foreground font-medium"> SQL</span> et 
              <span className="text-foreground font-medium"> Machine Learning</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon objectif est de construire des systèmes intelligents et scalables qui font le pont entre 
              les données complexes et les décisions business. Je m&apos;intéresse particulièrement aux 
              <span className="text-foreground font-medium"> pipelines MLOps</span>, 
              <span className="text-foreground font-medium"> NLP/LLMs</span> et 
              <span className="text-foreground font-medium"> architectures data engineering</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En dehors du code, vous me trouverez à suivre le football, jouer aux jeux vidéo, 
              faire de la veille technologique ou explorer le monde automobile.
            </p>
          </div>

          {/* Quick facts */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="text-sm font-medium text-primary mb-3">Focus actuel</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Systèmes RAG & LLMs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Pipelines MLOps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Data Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Déploiement Edge AI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

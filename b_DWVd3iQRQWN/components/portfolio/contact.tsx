import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary text-sm font-mono">06.</span>
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="max-w-xl">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Je suis actuellement à la recherche d&apos;une alternance de 3 ans à partir de septembre 2026. 
            N&apos;hésitez pas à me contacter pour toute question ou opportunité !
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:azizdjerbi5@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span>azizdjerbi5@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-secondary">
                <Phone className="w-5 h-5" />
              </div>
              <span>+33 07 78 16 05 47</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-secondary">
                <MapPin className="w-5 h-5" />
              </div>
              <span>Pierrefitte-sur-Seine, France</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/azizlatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aziz-djerbi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:azizdjerbi5@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Availability info */}
          <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground">
              <span className="font-medium text-primary">Rythme d&apos;alternance :</span> 2 jours école / 3 jours entreprise
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Permis B
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Aziz Djerbi</span>
            {" · "}
            Fait avec Next.js & Tailwind CSS
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/azizlatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aziz-djerbi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:azizdjerbi5@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  )
}

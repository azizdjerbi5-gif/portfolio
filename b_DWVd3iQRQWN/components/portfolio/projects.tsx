"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projectCategories = ["Tous", "Projets IA/ML", "Projets IUT"]

// Projets du portfolio (personnels / professionnels hors IUT)
const aiProjects = [
  {
    id: 1,
    type: "NLP & LLMs",
    title: "DocuRAG — Système de Q&A sur documentation technique",
    description: "Système RAG (Retrieval-Augmented Generation) permettant d'interroger en langage naturel un corpus de documentation technique avec traçabilité des sources. Réduction estimée de 40-60% du temps de recherche documentaire.",
    problem: "Les équipes techniques perdent un temps considérable à parcourir des centaines de pages de documentation. Un LLM seul hallucine ; un moteur de recherche classique ne comprend pas le sens.",
    technologies: ["Python", "LangChain", "HuggingFace", "ChromaDB", "FastAPI", "Streamlit", "Docker"],
    metrics: [
      { value: "87%", label: "Faithfulness (RAGAS)" },
      { value: "92%", label: "Answer Relevancy" },
      { value: "<1.2s", label: "Latence moyenne" },
      { value: "300+", label: "Pages indexées" },
    ],
    architecture: ["PDF Ingestion", "Chunking sémantique", "Embeddings", "ChromaDB", "Reranking", "Mistral-7B", "FastAPI", "Streamlit"],
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
  },
  {
    id: 2,
    type: "Computer Vision · Edge AI",
    title: "EdgeVision — Détection d'anomalies industrielles temps réel",
    description: "Système de vision par ordinateur détectant des défauts sur une ligne de production, optimisé pour tourner sur Raspberry Pi 4 / Jetson Nano avec contraintes de latence strictes (<50ms/image).",
    problem: "Sur une chaîne industrielle, 2-5% des pièces présentent des défauts. L'inspection manuelle est lente, coûteuse et non scalable. Le cloud introduit une latence incompatible avec le temps réel.",
    technologies: ["PyTorch", "OpenCV", "ONNX Runtime", "TensorFlow Lite", "FastAPI", "MQTT", "Docker ARM"],
    metrics: [
      { value: "96.3%", label: "AUC-ROC" },
      { value: "38ms", label: "Latence edge" },
      { value: "4×", label: "Réduction modèle" },
      { value: "2.1%", label: "Faux négatifs" },
    ],
    architecture: ["Flux caméra", "Preprocessing GPU", "EfficientNet-Lite", "Quantization INT8", "TFLite Inference", "Alerte MQTT"],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
  {
    id: 3,
    type: "MLOps Pipeline",
    title: "ChurnScope — Pipeline MLOps de prédiction de churn",
    description: "Pipeline complet de bout en bout pour prédire le churn client dans un contexte SaaS : de l'ingestion des données brutes jusqu'au modèle en production avec monitoring de la dérive.",
    problem: "Le churn non détecté coûte 5 à 25× le coût d'acquisition client. Prédire à 30 jours le risque de désabonnement permet des actions de rétention ciblées et mesurables.",
    technologies: ["Python", "Airflow", "MLflow", "XGBoost", "scikit-learn", "FastAPI", "PostgreSQL", "Evidently AI"],
    metrics: [
      { value: "0.89", label: "AUC-PR" },
      { value: "78%", label: "Recall @0.4" },
      { value: "12", label: "Expériences MLflow" },
      { value: "100%", label: "Pipeline automatisé" },
    ],
    architecture: ["PostgreSQL", "Airflow DAG", "Feature Engineering", "MLflow Tracking", "XGBoost", "Model Registry", "FastAPI Serving", "Evidently"],
    color: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-400",
  },
  {
    id: 4,
    type: "Multi-Agent · IA Générative",
    title: "InsightFlow — Système multi-agents de veille automatique",
    description: "Système de veille technologique entièrement automatisé où plusieurs agents IA collaborent pour collecter, filtrer, résumer et générer des rapports de synthèse structurés.",
    problem: "Les analystes passent 2 à 4h/semaine à surveiller des sources hétérogènes (arXiv, blogs, actualités). Ce travail répétitif est mal valorisé et peu scalable.",
    technologies: ["Python", "LangChain", "LangGraph", "Mistral", "FastAPI", "MongoDB", "Celery", "Redis"],
    metrics: [
      { value: "50+", label: "Sources/run" },
      { value: "4min", label: "Rapport complet" },
      { value: "91%", label: "Satisfaction test" },
      { value: "-3h", label: "Gain/semaine" },
    ],
    architecture: ["Agent Collecteur", "Agent Filtreur", "Agent Résumeur", "Agent Synthèse", "LangGraph Orchestrator"],
    color: "from-violet-500/20 to-purple-500/20",
    accent: "text-violet-400",
  },
]

// Projets réalisés au sein de l'IUT
const iutProjects = [
  {
    id: 5,
    type: "Projet SNCF",
    title: "Analyse des incidents ferroviaires — SNCF",
    description: "Projet en équipe sur l'analyse des événements caténaire et matériel roulant à partir de données SNCF. Production d'indicateurs et visualisations afin de repérer les zones critiques.",
    period: "Janvier 2026",
    technologies: ["R", "ggplot2", "Statistiques", "Data Visualization"],
    tasks: [
      "Nettoyage et structuration des données",
      "Analyses statistiques (univariées, bivariées)",
      "Production d'indicateurs et visualisations",
      "Recommandations pour zones critiques",
    ],
    color: "from-rose-500/20 to-pink-500/20",
    accent: "text-rose-400",
  },
  {
    id: 6,
    type: "Migration NoSQL",
    title: "Migration SQLite vers MongoDB",
    description: "Migration d'une base relationnelle vers MongoDB avec Python (PyMongo). Coordination de l'équipe, définition des spécifications et optimisation des performances.",
    period: "Décembre 2025",
    technologies: ["Python", "MongoDB", "PyMongo", "SQLite"],
    tasks: [
      "Recueil des besoins et spécifications",
      "Conception du schéma NoSQL",
      "Mise en place de pipelines d'agrégation",
      "Optimisation des index",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-400",
  },
  {
    id: 7,
    type: "SQL & Reporting",
    title: "Création de reporting — Ventes DVD",
    description: "Utilisation de requêtes SQL pour extraire des informations pertinentes d'une base de données. Élaboration de recommandations visant à améliorer le chiffre d'affaires.",
    period: "Janvier 2024",
    technologies: ["SQL", "Excel", "Power BI", "Data Analysis"],
    tasks: [
      "Extraction de données via SQL",
      "Analyse et visualisation Excel",
      "Recommandations business",
      "Dashboard KPIs",
    ],
    color: "from-sky-500/20 to-blue-500/20",
    accent: "text-sky-400",
  },
  {
    id: 8,
    type: "Enquête & Analyse",
    title: "Réalisation d'une enquête — Intelligence Artificielle",
    description: "Conception en équipe d'un sondage portant sur le thème de l'IA. Analyse approfondie des résultats et présentation orale des conclusions.",
    period: "Nov. 2023 - Jan. 2024",
    technologies: ["Statistiques", "PowerPoint", "Analyse de données"],
    tasks: [
      "Conception du questionnaire",
      "Collecte des réponses",
      "Analyse statistique des résultats",
      "Présentation orale",
    ],
    color: "from-indigo-500/20 to-violet-500/20",
    accent: "text-indigo-400",
  },
  {
    id: 9,
    type: "Traitement de données",
    title: "Écriture et lecture de fichiers de données",
    description: "Traitement d'un jeu de données brut en format texte à l'aide de scripts Python. Nettoyage, tri et conversion des données en format CSV structuré.",
    period: "Décembre 2023",
    technologies: ["Python", "Pandas", "Data Cleaning"],
    tasks: [
      "Lecture de fichiers texte bruts",
      "Nettoyage et validation des données",
      "Tri et transformation",
      "Export CSV structuré",
    ],
    color: "from-teal-500/20 to-cyan-500/20",
    accent: "text-teal-400",
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const showAll = activeCategory === "Tous"
  const showAI = activeCategory === "Projets IA/ML" || showAll
  const showIUT = activeCategory === "Projets IUT" || showAll

  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary text-sm font-mono">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Projets</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AI/ML Projects Section */}
        {showAI && (
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Projets IA & Machine Learning
              <span className="text-xs text-muted-foreground font-normal">(Projets personnels / professionnels)</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {aiProjects.map((project) => (
                <div
                  key={project.id}
                  className={cn(
                    "group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity", project.color)} />
                  
                  <div className="relative">
                    <span className={cn("text-xs font-mono uppercase tracking-wider mb-2 block", project.accent)}>
                      {project.type}
                    </span>

                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture flow */}
                    <div className="mb-4 overflow-x-auto pb-2">
                      <div className="flex items-center gap-1 text-xs">
                        {project.architecture.map((step, i) => (
                          <div key={i} className="flex items-center gap-1 shrink-0">
                            <span className="px-2 py-1 rounded bg-secondary text-muted-foreground whitespace-nowrap">
                              {step}
                            </span>
                            {i < project.architecture.length - 1 && (
                              <ChevronRight className="w-3 h-3 text-muted-foreground" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className={cn("text-lg font-bold", project.accent)}>{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IUT Projects Section */}
        {showIUT && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Projets Universitaires
              <span className="text-xs text-muted-foreground font-normal">(Réalisés à l&apos;IUT Paris - Rives de Seine)</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {iutProjects.map((project) => (
                <div
                  key={project.id}
                  className={cn(
                    "group relative p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity", project.color)} />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className={cn("text-xs font-mono uppercase tracking-wider", project.accent)}>
                        {project.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.period}</span>
                    </div>

                    <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tasks */}
                    <ul className="space-y-1 mb-3">
                      {project.tasks.slice(0, 3).map((task, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">→</span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-xs rounded bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

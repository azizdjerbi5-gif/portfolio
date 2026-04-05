import streamlit as st

st.set_page_config(page_title="Aziz Djerbi Portfolio", layout="wide")

st.title("Aziz Djerbi")
st.subheader("Data Scientist | Data Engineer | ML Engineer")

st.write("""
Final-year BUT Data Science student admitted to an engineering program in Big Data & Machine Learning.
Seeking an apprenticeship in Data / AI.
""")

st.header("Experience")
st.subheader("Data Analyst Intern — Laevitas")
st.write("""
- Cloud cost monitoring application (AWS, OVH, Azure)
- Data collection, cleaning and storage in SQLite
- Dashboard creation with Dash / Plotly
- KPI analysis for cloud cost optimization
""")

st.header("Projects")

st.subheader("Migration SQLite → MongoDB")
st.write("""
Migration of a relational database to MongoDB using Python (PyMongo).
Needs analysis, NoSQL schema design, aggregation pipelines and index optimization.
""")

st.subheader("SNCF Data Analysis Project")
st.write("""
Cleaning, structuring and statistical analysis of railway incident data in R.
Identification of critical zones and decision-support indicators.
""")

st.subheader("AI Projects")
st.write("""
- RAG Question Answering System
- Computer Vision Anomaly Detection
- End-to-End MLOps Prediction Pipeline
- Multi-Agent Generative AI Workflow
""")

st.header("Skills")
st.write("""
Python • SQL • R • MongoDB • SQLite • Dash • Plotly • Machine Learning • Data Analysis • Statistics
""")

st.header("Contact")
st.write("GitHub: https://github.com/azizdjerbi5-gif")
st.write("Email: azizdjerbi5@gmail.com")

---
title: "Benchmarking Noisy Label Detection Methods"
authors:
  - "Henrique Pickler"
  - "Jorge K. S. Kamassury"
  - "Danilo Silva"
date: "2025-10-16T00:00:00Z"

# Data de publicação no site (não confundir com a data do artigo)
publishDate: "2025-10-20T00:00:00Z"

# Tipo da publicação
publication_types: ["article"]

# Nome do local de publicação
publication: "arXiv"
publication_short: "arXiv Preprint"

abstract: |
  Este trabalho apresenta um **benchmark abrangente** para métodos de detecção de rótulos ruidosos, abordando três componentes principais: função de concordância, método de agregação e forma de coleta de informação (*in-sample* e *out-of-sample*).  
  A partir dessa decomposição, é proposta uma tarefa padronizada de detecção e uma nova métrica de desempenho, a **taxa de falso negativo** em ponto de operação fixo.  
  Os resultados mostram que abordagens *in-sample* com agregação por probabilidade média e margem de logit alcançam melhor desempenho em cenários com ruído sintético e real.

summary: "Estudo que compara métodos de detecção de rótulos ruidosos, propondo uma estrutura unificada para análise e um benchmark padronizado de desempenho."

tags:
  - Aprendizado com Rótulos Ruidosos
  - Noisy label detection
  - Data Cleaning
  - Data Quality
  - Benchmark

featured: true

#hugoblox:
#  ids:
#    arxiv: 2510.16211
#    doi: 10.48550/arXiv.2510.16211

links:
  - type: preprint
    provider: arxiv
    id: 2510.16211
  - type: code
    url: https://github.com/HugoBlox/hugo-blox-builder
  #- type: slides
  #  url: https://www.slideshare.net/
  #- type: dataset
  #  url: "#"
  #- type: poster
  #  url: "#"
  #- type: source
  #  url: "#"
  #- type: video
  #  url: "https://youtube.com"
  #- type: custom
  #  label: Página do arXiv
  #  url: "https://arxiv.org/abs/2510.16211"

# Imagem destacada
image:
  caption: "Imagem ilustrativa de benchmark de métodos de detecção de ruído."
  focal_point: "center"
  preview_only: false

# Projetos relacionados (opcional)
projects: []

# Slides associados (opcional)
slides: ""
---

Este preprint investiga **métodos de detecção de rótulos ruidosos**, propondo uma análise comparativa estruturada e uma métrica inédita para avaliar a robustez de modelos de aprendizado supervisionado em ambientes com ruído.
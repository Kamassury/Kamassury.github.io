---
title: "Benchmarking Noisy Label Detection Methods"

authors:
  - "Henrique Pickler"
  - "Jorge K. S. Kamassury"
  - "Danilo Silva"

date: "2025-10-16"
publishDate: "2025-10-20"

publication_types: ["article"]
publication: "*arXiv preprint* arXiv:2510.16211"
publication_short: "arXiv"

#hugoblox:
#  ids:
#    arxiv: "2510.16211"

abstract: |
  Este trabalho apresenta um **benchmark abrangente** para métodos de **detecção de rótulos ruidosos**, abordando três componentes principais: função de concordância, método de agregação e forma de coleta de informação (*in-sample* e *out-of-sample*). A partir dessa decomposição, é proposta uma **tarefa padronizada de detecção** e uma nova métrica de desempenho, a **taxa de falso negativo** em ponto de operação fixo. Os resultados mostram que abordagens *in-sample* com agregação por **probabilidade média** e **margem de logit** alcançam melhor desempenho em cenários com ruído sintético e real.

summary: "Benchmark unificado de métodos de detecção de rótulos ruidosos, com estrutura decomposta em três componentes e nova métrica de desempenho padronizada. arXiv, 2025."

tags:
  - Noisy Labels
  - Label Noise Detection
  - Benchmark
  - Data Quality
  - Machine Learning

links:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2510.16211"
    icon_pack: "hero"
    icon: "document-text"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2510.16211"
    icon_pack: "hero"
    icon: "document-arrow-down"

image:
  caption: ""
  focal_point: "center"
  preview_only: false

projects: []
---

Preprint que propõe um **benchmark abrangente de métodos de detecção de rótulos ruidosos** em aprendizado supervisionado. O trabalho decompõe a detecção em três componentes estruturais — função de concordância, método de agregação e tipo de coleta (*in-sample* vs. *out-of-sample*) — permitindo uma análise comparativa sistemática. Também introduz uma **métrica inédita** de avaliação baseada na taxa de falso negativo em ponto de operação fixo. Trabalho em colaboração com o grupo de pesquisa em aprendizado robusto da UFSC, complementando o método [CCT](/publication/cyclic-co-teaching/) com ênfase no aspecto de **detecção** em vez de treinamento robusto.
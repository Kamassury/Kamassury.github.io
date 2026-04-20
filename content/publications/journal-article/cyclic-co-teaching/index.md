---
title: "CCT: A Cyclic Co-Teaching Approach to Train Deep Neural Networks With Noisy Labels"
authors:
  - Jorge K. S. Kamassury
  - Henrique Pickler
  - Filipe R. Cordeiro
  - Danilo Silva
date: "2025-05-15"
publication_types: ["article-journal"]
publication: "*IEEE Access*, 13, 43843–43860"
publication_short: "IEEE Access"
featured: true
hugoblox:
  ids:  
    doi: "10.1109/ACCESS.2025.3548510"
abstract: |
  Deep neural networks are highly susceptible to memorizing incorrect labels, compromising generalization on real-world datasets with inaccurate annotations. Among existing approaches, Co-Teaching trains two models in parallel to identify potentially noisy samples through cross-selection, but still suffers from error accumulation and overfitting. We propose **Cyclic Co-Teaching (CCT)**, which mitigates these limitations through periodic modulations of the learning rate and sample retention, establishing an alternating dynamic between specialization and consolidation phases. We also introduce a two-step univariate optimization for hyperparameter tuning. CCT consistently outperforms state-of-the-art methods on synthetic (CIFAR-10, CIFAR-100, Tiny-ImageNet) and real-world (Animal-10N, Food-101N, Clothing1M) benchmarks, particularly under high-noise scenarios.
summary: "Método CCT: ciclos de aprendizado e retenção de amostras para aprendizado profundo robusto com rótulos ruidosos. IEEE Access, 2025."
tags:
  - Noisy Labels
  - Robust Deep Learning
  - Co-Teaching
  - Cyclic Learning Rate
  - Sample Selection
links:
  - name: "IEEE Access"
    url: "https://doi.org/10.1109/ACCESS.2025.3548510"
    icon_pack: "hero"
    icon: "document-text"
  - name: "Code"
    url: "https://github.com/Kamassury/CCT"
    icon_pack: "hero"
    icon: "code-bracket"
image:
  caption: "Visão geral do método Cyclic Co-Teaching."
  focal_point: "center"
  preview_only: false
projects: []
---

Propomos **Cyclic Co-Teaching (CCT)**, um método de treinamento robusto para redes neurais profundas em bases com rótulos ruidosos. O método combina **modulações cíclicas da taxa de aprendizado** e **retenção de amostras**, criando uma dinâmica alternada entre fases de especialização (aprendizado intensivo) e consolidação (estabilização). Experimentos em bases sintéticas (CIFAR-10/100, Tiny-ImageNet) e reais (Animal-10N, Food-101N, Clothing1M) mostram ganhos consistentes sobre o estado da arte, especialmente em cenários de alta taxa de ruído.
---
title: "Iterative Error Decimation for Syndrome-Based Neural Network Decoders"
authors:
  - Jorge K. S. Kamassury
  - Danilo Silva
date: "2021-08-27"
publication_types: ["article-journal"]
publication: "*Journal of Communication and Information Systems*, 36(1), 151–155"
publication_short: "JCIS"
featured: true
hugoblox:
  ids:
    doi: "10.14209/jcis.2021.16"
abstract: |
  In this letter, we introduce a new syndrome-based decoder where a deep neural network (DNN) estimates the error pattern from the reliability and syndrome of the received vector. The proposed algorithm works by iteratively selecting the most confident positions to be the error bits of the error pattern, updating the vector received when a new position of the error pattern is selected. Simulation results for the (63,45) and (63,36) BCH codes show that the proposed approach outperforms existing neural network decoders. In addition, the new decoder is flexible in that it can be applied on top of any existing syndrome-based DNN decoder without retraining.
summary: "Decodificador iterativo baseado em síndrome com redes neurais profundas para códigos BCH curtos. JCIS Letters, 2021."
tags:
  - Neural Network Decoders
  - Syndrome-Based Decoding
  - BCH Codes
  - Error Correction
  - Deep Learning
links:
  - name: "Paper"
    url: "https://jcis.sbrt.org.br/jcis/article/view/776"
  - name: "PDF"
    url: "https://jcis.sbrt.org.br/jcis/article/view/776/526"
  - name: "BibTeX"
    url: "cite.bib"
image:
  caption: ""
  focal_point: "center"
  preview_only: false
projects: []
---

Propomos o **Iterative Error Decimation (IED)**, um método iterativo de decodificação neural baseado em síndrome, onde uma rede neural profunda estima o padrão de erro a partir da confiabilidade e da síndrome do vetor recebido. A cada iteração, a posição mais confiável é selecionada como bit de erro e o vetor recebido é atualizado. O método supera decodificadores neurais existentes em códigos **BCH curtos (63,45) e (63,36)** e pode ser aplicado sobre qualquer decodificador DNN baseado em síndrome **sem necessidade de retreinamento**.
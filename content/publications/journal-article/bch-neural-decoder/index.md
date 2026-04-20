---
title: "Otimização de um decodificador neural para códigos BCH curtos sob regime de comunicação crítica"
authors:
  - Jorge K. S. Kamassury
date: "2022-11-02"
publication_types: ["article-journal"]
publication: "*Revista Brasileira de Computação Aplicada*, 14(3), 86–95"
publication_short: "RBCA"
featured: false
hugoblox:
  ids:
    doi: "10.5335/rbca.v14i3.13278"
abstract: |
  No presente trabalho, introduz-se no contexto dos **códigos corretores de erros** uma estratégia de decodificação onde uma rede neural é treinada para predizer padrões de erros usando simultaneamente as informações dos **módulos** e das **síndromes** dos vetores recebidos. No decodificador proposto, as posições mais confiáveis são selecionadas de forma iterativa para serem os bits errôneos do padrão de erro estimado, de modo que estas são posteriormente subtraídas do vetor recebido antes que uma nova decodificação seja realizada. Para a predição do padrão de erro, projeta-se uma **rede neural profunda com complexidade reduzida**. Os experimentos realizados para os códigos BCH curtos transmitindo via canal AWGN evidenciam que os desempenhos obtidos com essa estratégia de decodificação superam àqueles obtidos exclusivamente com a rede neural.
summary: "Decodificador iterativo com rede neural de baixa complexidade para códigos BCH curtos em comunicações críticas. RBCA, 2022."
tags:
  - Error-Correcting Codes
  - BCH Codes
  - Neural Network Decoder
  - Iterative Decoding
  - Critical Communications
links:
  - name: "RBCA"
    url: "https://ojs.upf.br/index.php/rbca/article/view/13278"
    icon_pack: "hero"
    icon: "document-text"
  - name: "PDF"
    url: "https://ojs.upf.br/index.php/rbca/article/view/13278/114116767"
    icon_pack: "hero"
    icon: "document-arrow-down"
image:
  caption: ""
  focal_point: "center"
  preview_only: false
projects: []
---

Extensão aplicada do método [IED (Iterative Error Decimation)](/publication/iterative-error-decimation/) para **códigos BCH curtos em regime de comunicação crítica**, empregando uma rede neural profunda de **complexidade reduzida** treinada sobre módulos e síndromes dos vetores recebidos. A abordagem iterativa de decimação supera o desempenho do decodificador neural puro em canais AWGN.
---
title: Publicações
cms_exclude: true
type: landing

design:
  spacing: '4rem'

sections:
  - block: collection
    id: journal-articles
    content:
      title: 📘 Artigos em Periódicos
      text: ''
      count: 0
      filters:
        folders:
          - publications
        publication_type: 'article-journal'
    design:
      view: citation
      columns: 2

  - block: collection
    id: conference-papers
    content:
      title: 📄 Trabalhos em Conferências
      text: ''
      count: 0
      filters:
        folders:
          - publications
        publication_type: 'paper-conference'
    design:
      view: citation
      columns: 2

  - block: collection
    id: preprints
    content:
      title: 📝 Preprints
      text: ''
      filters:
        folders:
          - publications
        publication_type: 'article'
    design:
      view: citation
      columns: 2
---
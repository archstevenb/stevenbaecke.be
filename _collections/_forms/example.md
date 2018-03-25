---
title: Contactformulier
name: example
success: /bericht-verzonden
fields:
  - label: Volledige naam
    name: name
    required: true
    type: text

  - label: Email
    name: E-mail
    required: true
    type: email

  - label: Select
    name: Select
    required: true
    type: select
    options:
      - Option 1
      - Option 2

  - label: Checkboxes
    name: checkboxes
    type: checkboxes
    required: false
    options:
      - Option 1
      - Option 2

  - label: Radios
    name: radios
    type: radios
    required: false
    options:
      - Option 1
      - Option 2  

  - label: Bericht
    name: message
    required: true
    type: textarea

  - label: Verzenden
    name: submit
    type: submit
---

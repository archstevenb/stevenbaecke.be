---
title: Contactformulier
name: contact
success: /bericht-verzonden
fields:
  - label: Kies een onderwerp
    name: onderwerp
    required: true
    type: select
    options:
      - Afspraak maken
      - Informatie aanvragen
      - Stel een vraag

  - label: Volledige naam
    name: naam
    required: true
    type: text

  - label: E-mail adres
    name: email
    required: true
    type: email

  - label: Bericht
    name: message
    required: true
    type: textarea

  - label: Verzenden
    name: submit
    type: submit
---

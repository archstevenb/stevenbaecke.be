---
title: Contactformulier
name: contact
success: Bericht werd succesvol verzonden
fields:
  - label: Kies een onderwerp
    name: onderwerp
    options:
      - Afspraak maken
      - Informatie aanvragen
      - Stel een vraag
    required: true
    type: select
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


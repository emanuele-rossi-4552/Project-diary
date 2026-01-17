# Registro Idee – Diario Attività e Progetti

Web app React per tracciare progetti e idee nel tempo, con persistenza locale e build Android tramite Capacitor.

**Registro Idee** è un’applicazione sviluppata per gestire e mantenere nel tempo uno storico personale di attività, progetti e idee.  
Il progetto nasce da un’esigenza reale e viene condiviso su GitHub **a scopo dimostrativo** come esempio di applicazione completa, autonoma e portata a termine.

## Problema affrontato

Durante lo sviluppo di progetti personali è facile perdere traccia di:
- idee iniziali
- motivazioni
- stati di avanzamento
- progetti abbandonati e relative ragioni

Questo porta a ripetere errori o a dimenticare contesto utile nel tempo.

L’app risolve questo problema fornendo un **diario strutturato**, persistente e consultabile offline.

## Funzionalità principali

- Creazione e gestione di attività / progetti  
- Suddivisione per stato:
  - da fare
  - in corso
  - completati
  - abbandonati
- Commenti associati a ogni progetto per annotare pensieri e riflessioni
- Persistenza locale dei dati
- Utilizzo offline

## Stack tecnologico

- **React** (v19)
- **Vite** come build tool
- **React Router DOM** per la navigazione
- **IndexedDB** per la persistenza dei dati
- **idb** come layer di astrazione sul database
- **Capacitor** per la distribuzione Android

Non è presente alcun backend: l’architettura è volutamente semplice e locale.

## Scelte architetturali

### IndexedDB
Scelta per garantire:
- persistenza dei dati
- funzionamento offline
- assenza di costi e complessità di un backend non necessario

### Separazione delle responsabilità
- componenti UI separati per bottoni e pagine
- gestione centralizzata dei dati tramite context
- logica database isolata in file dedicati

### Web → Mobile
L’app nasce come web app React e viene successivamente:
1. buildata con Vite
2. convertita tramite Capacitor
3. compilata in APK da Android Studio

Questo approccio consente di mantenere **un’unica codebase** per web e mobile.

## Script principali

- Avvio in sviluppo:
    npm run dev

- Build di produzione:
    npm run build

- Copia per Android:
    npx cap copy android

## Stato del progetto
Il progetto è completato.
Non sono previste nuove funzionalità, poiché l’app soddisfa pienamente l’obiettivo per cui è stata creata.
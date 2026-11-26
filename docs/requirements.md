# Descrizione di Progetto — Quali.T (estratto dal D1)

- **Document:** Descrizione di Progetto
- **Revision:** 1.0
- **Progetto:** Quali.T
- **Titolo del documento:** Descrizione di Progetto

---

## 1. Il progetto Quali.T

### Slides Pitch (Riepilogo Contenuti Visivi)

#### Slide 1: Il Problema
*Le attività locali hanno qualità, le persone la cercano: manca il ponte che le connette.*
- **Trovare qualità è difficile:** Le persone cercano prodotti di qualità, ma manca un modo semplice per trovarli vicino a sé.
- **Farsi conoscere:** Le piccole attività offrono qualità, ma faticano a raggiungere nuovi clienti.
- **Valorizzare il territorio:** Rendere visibili le realtà locali significa valorizzare il territorio e rafforzarne l'economia.

#### Slide 2: La nostra soluzione — Qualità, Visibilità, Vicino a te
- **Tutte le offerte in un unico posto:** Un unico luogo per visualizzare tutti i prodotti che ti servono senza dover andare di persona a trovarli.
- **Scopri il genuino vicino a te:** Trova negozi vicino a te che offrono quello che cerchi. Una vetrina digitale per farsi vedere.
- **Conosci il Trentino dai suoi prodotti:** Uno spazio dedicato alla promozione delle realtà locali e ai prodotti d'eccellenza trentina.

#### Slide 3: Perché noi
- **Facilità e comodità d'uso:** Crea la tua lista della spesa e trova ciò che cerchi.
- **Una piattaforma equa e solidale:** Uno spazio trasparente e leale che privilegia il consumatore.
- **Promuovi l'economia locale:** Partecipa attivamente alla valorizzazione del territorio.

---

### Descrizione del Progetto

Il problema che ci siamo posti di risolvere è la difficoltà nel reperire informazioni riguardo a listini prezzi di piccole attività locali come botteghe, produttori e mercatini locali. Al momento, questo è solo possibile recandosi di persona dal venditore in questione. Ciò rende scegliere questo genere di venditori più scomodo, in particolar modo se questi non si conoscono a priori, portando i consumatori a evitare questi esercenti, optando per scelte più standard e agevoli ma meno soddisfacenti complessivamente come i supermercati e, di converso, queste stesse attività hanno difficoltà a farsi conoscere, non potendo permettersi grandi campagne pubblicitarie. Ciò risulta in una graduale devalorizzazione dell'impresa locale.

Il progetto ha dunque come scopo la realizzazione di un'applicazione mobile per la consultazione di tutte queste attività locali, permettendo di cercarle per nome e mostrandole sulla mappa, e dei prodotti che quest'ultime vendono. Il sistema inoltre permetterà di cercare un determinato prodotto e restituire i negozi che lo offrono. In questo modo, l'utente può scegliere e aggiungere i prodotti che desidera a una lista della spesa. Allo stesso modo, alle attività sarà esposta un'applicazione web "business" in cui possono caricare, modificare e/o rimuovere i prodotti che offrono. In maniera mirata a esercenti come mercatini o comunque a produttori con scorte "limitate", sarà implementato un sistema di prenotazione di un prodotto, tramite il quale i consumatori possono poi ritirare, entro un determinato orario prestabilito, ciò che avevano prenotato dall'app.

#### Vantaggi per il Comune
- Promozione dell'economia locale e valorizzazione dei piccoli produttori del territorio.
- Incentivazione del turismo di prossimità e riscoperta delle tipicità locali.
- Monitoraggio e supporto alla rete commerciale cittadina attraverso segnalazioni e valutazioni.

#### Vantaggi per i consumatori
- Facile individuazione sulla mappa dei negozi di vicinato e dei mercatini della propria zona.
- Accesso rapido e centralizzato alle offerte e ai listini dei prodotti delle attività locali.
- Possibilità di cercare prodotti specifici, confrontare opzioni e creare una lista della spesa integrata.
- Comodità di prenotazione dei prodotti da ritirare in negozio entro gli orari prestabiliti.

#### Vantaggi per i negozianti
- Digitalizzazione delle attività artigianali e di vicinato senza costi pubblicitari elevati per gli esercenti.
- Maggiore visibilità verso i consumatori della zona e attrazione di nuova clientela locale.
- Gestione semplice ed efficiente del catalogo prodotti e delle prenotazioni.

#### Limiti dell'applicazione
- Limitata scalabilità geografica, in quanto il servizio è focalizzato sulla realtà della città di Trento.
- Forte dipendenza dalla partecipazione attiva e costante dei piccoli esercenti locali nel mantenere aggiornato il catalogo prodotti.
- Assenza di un servizio integrato di logistica e consegna a domicilio su larga scala, limitando le operazioni al ritiro in negozio.

---

## 2. Requisiti Funzionali

- **RF1: Tipologie di account:** Il sistema deve gestire tre tipologie di account: cittadino, negozio e operatore. Il sistema non deve imporre vincoli di unicità reciproca tra gli account di tipo cittadino e negozio, consentendo a uno stesso utente di disporre di entrambe le tipologie di account associate ad un unico indirizzo e-mail. L'account operatore è invece unico e condiviso tra gli addetti del comune.

- **RF2: Accesso al sistema.** Il sistema deve consentire a cittadini e negozianti registrati di autenticarsi mediante le credenziali associate al loro account e di fruire delle funzionalità disponibili per il ruolo assegnato. L'accesso deve poter avvenire mediante credenziali registrate nel sistema centralizzato. A seguito dell'autenticazione, il sistema deve riconoscere il ruolo associato all'identità autenticata e abilitare l'accesso alle funzionalità previste per tale ruolo. In caso di autenticazione non riuscita, il sistema deve impedire l'accesso alle funzionalità riservate e fornire un adeguato riscontro all'utente.

- **RF3: Visualizzazione per utenti non registrati.** Il sistema deve consentire agli utenti non registrati di accedere a una versione limitata dell'interfaccia e di consultare funzionalità quali la creazione di una lista della spesa in locale e la visualizzazione dei negozi e prodotti.

- **RF4: Registrazione e gestione del profilo cittadino.** Il sistema deve consentire agli utenti cittadini non ancora registrati di creare un account inserendo le informazioni richieste. Il sistema deve validare i dati, conservare le informazioni associate e impedire la creazione di profili che violino i vincoli di unicità previsti. A registrazione completata, l'utente deve poter consultare le informazioni associate al proprio profilo e modificare i dati per i quali è prevista la possibilità di aggiornamento.

- **RF5: Registrazione e gestione del profilo negozio.** Il sistema deve consentire ai negozianti di registrare il proprio negozio mediante l'inserimento delle informazioni richieste. Il sistema deve validare i dati forniti, conservarli e garantire il rispetto dei vincoli di integrità e unicità previsti, tra cui l'univocità dell'indirizzo, via e civico. A registrazione completata, il negoziante deve poter consultare le informazioni associate al profilo del negozio e aggiornare i dati per i quali è prevista tale possibilità.

- **RF6: Consultazione del catalogo prodotti.** Il sistema deve consentire agli utenti cittadini di consultare il catalogo dei prodotti disponibili presso i negozi registrati. Deve essere possibile effettuare ricerche utilizzando uno o più criteri, tra cui il nome del prodotto, la presenza di allergeni e il negozio presso cui il prodotto è disponibile. Per ciascun prodotto individuato, il sistema deve rendere consultabili le informazioni generali previste, la quantità disponibile, ove specificata, e le informazioni relative alla posizione del negozio.

- **RF7: Gestione delle prenotazioni.** Il sistema deve consentire ai negozianti di gestire le prenotazioni dei prodotti effettuate dagli utenti registrati. Per ciascuna prenotazione devono essere registrate almeno le informazioni relative all'utente richiedente, al prodotto prenotato e alla data prevista per il ritiro.
  A seguito della prenotazione, il sistema deve aggiornare la disponibilità del prodotto per impedirne la contemporanea prenotazione oltre le quantità effettivamente disponibili. La quantità prenotata deve essere riservata temporaneamente fino al completamento del ritiro o alla scadenza del termine previsto. Il sistema deve consentire al negoziante di confermare l'avvenuto ritiro, aggiornando coerentemente la disponibilità del prodotto e lo stato della prenotazione. Le prenotazioni concluse devono essere conservate per consentirne la consultazione storica.

- **RF8: Consultazione delle prenotazioni.** Il sistema deve consentire a ciascun cittadino registrato di consultare le prenotazioni associate al proprio account. Le prenotazioni devono essere classificate in base al loro stato, distinguendo quelle attive da quelle concluse con esito positivo e da quelle scadute senza ritiro.
  Per ciascuna prenotazione, il sistema deve rendere disponibili le informazioni relative al prodotto prenotato, alla data di creazione della prenotazione, ove prevista, alla data programmata per il ritiro, al termine ultimo per il ritiro e all'eventuale conferma dell'avvenuto ritiro. Lo storico delle prenotazioni concluse o scadute deve rimanere accessibile all'utente per successive consultazioni.

- **RF9: Consultazione dei negozi.** Il sistema deve consentire agli utenti di individuare i negozi presenti in una determinata area geografica. La ricerca deve poter essere effettuata specificando una via o un indirizzo oppure condividendo la propria posizione GPS e deve restituire i negozi corrispondenti ai criteri inseriti.
  Per ciascun negozio individuato, il sistema deve rendere consultabili le informazioni disponibili, tra cui denominazione, indirizzo, orari di apertura e recapiti. Deve inoltre consentire la visualizzazione della posizione geografica dei negozi su una mappa, utilizzando i dati di localizzazione memorizzati nel sistema.

- **RF10: Inserimento e gestione prodotti.** Il sistema deve consentire ai negozianti di inserire e gestire i prodotti del proprio catalogo attraverso due modalità: inserimento manuale mediante un modulo di compilazione e importazione automatica mediante file strutturati, quali CSV e JSON.
  Durante l'inserimento o l'importazione, il sistema deve validare i dati ricevuti e segnalare eventuali errori, indicando, ove possibile, le informazioni mancanti o non conformi. Nel caso in cui i dati importati risultino incompleti, il sistema deve consentire al negoziante di integrare manualmente le informazioni necessarie prima di completare l'inserimento.
  Il sistema deve inoltre consentire la rimozione dei prodotti dal catalogo, garantendo la coerenza dei dati correlati e la corretta gestione di eventuali prenotazioni o promozioni associate.

- **RF11: Categorie e gestione dei tag.** Il sistema deve assegnare automaticamente a ciascun prodotto una o più categorie o etichette descrittive (tag), sulla base delle informazioni disponibili. Deve inoltre consentire ai negozianti di modificare manualmente le categorie assegnate, al fine di correggere eventuali classificazioni errate o integrare quelle generate automaticamente.

- **RF12: Creazione e gestione degli sconti.** Il sistema deve consentire ai negozianti di creare e gestire promozioni associate ai prodotti del proprio catalogo. Per ciascuna promozione devono poter essere specificati almeno la tipologia di sconto, la percentuale di riduzione o il prezzo promozionale, la data di inizio e la data di fine della validità.
  Il sistema deve inoltre consentire di definire eventuali condizioni o limitazioni applicabili alla promozione, quali offerte del tipo «2 al prezzo di 1» oppure agevolazioni riservate ai possessori di una carta fedeltà. Le informazioni relative alle promozioni devono essere rese disponibili agli utenti secondo le modalità di consultazione previste dal sistema.

- **RF13: Visualizzazione offline.** Il sistema deve consentire agli utenti di accedere offline a una selezione di contenuti quali la lista della spesa e i dati relativi all'account. I contenuti disponibili offline devono essere consultabili nei limiti delle informazioni salvate localmente. In assenza di connettività, il sistema deve gestire le funzionalità che richiedono l'accesso ai dati remoti, segnalando eventuali limitazioni all'utente.

- **RF14: Valutazione di cittadini e negozi.** Il sistema deve consentire a cittadini e negozianti di esprimere valutazioni reciproche in relazione alle interazioni avvenute, nonché di valutare l'esperienza complessiva del ritiro. Le recensioni dovranno permettere anche di segnalare eventuali criticità, quali ritardi nella consegna, sconti promessi ma non applicati o comportamenti inappropriati.
  Il sistema dovrà inoltre consentire il filtraggio e l'ordinamento dei negozi in base alle valutazioni ricevute e prevedere la possibilità di limitare, notificare o impedire la prenotazione da parte di utenti con una valutazione inferiore a una soglia definita.

- **RF15: Gestione account operatore.** Il sistema deve gestire un singolo account operatore condiviso da più persone per monitorare la sezione valutazione tramite delle segnalazioni fatte dagli utenti e intervenire in caso di report di comportamenti scorretti o frodi.

---

## 3. Requisiti Non Funzionali

- **RNF1: Performance.** Il tempo di risposta del sistema per le operazioni di ricerca prodotti e negozi sulla mappa deve essere inferiore a 2 secondi per il 95% delle richieste con connettività $4\text{G}/5\text{G}$.
  - *Motivazione:* è necessario garantire un'esperienza d'uso fluida ai consumatori ed evitare l'abbandono dell'applicazione durante la consultazione in mobilità.

- **RNF2: Scalabilità.** Il sistema backend deve supportare fino a $2.500$ utenti contemporaneamente attivi e gestire almeno $50$ transazioni di prenotazione e ritiro al minuto senza degrado delle prestazioni (tempo di risposta $< 3$ secondi).
  - *Motivazione:* non sono disponibili valori noti di affluenze, ma considerando decine di migliaia di visitatori in una singola giornata nei periodi con maggiore affluenza (come durante i Mercatini di Natale) uniti agli utenti regolari quali cittadini e considerando un picco contemporaneo del $5\%$ dei presenti che stiano utilizzando l'applicazione.

- **RNF3: Affidabilità.** Il servizio deve garantire una disponibilità (uptime) del $99,5\%$ su base mensile (escluse eventuali finestre di manutenzione programmata comunicate almeno con 24 ore di preavviso, che comunque devono durare al massimo un'ora).
  - *Motivazione:* bisogna assicurare ai consumatori che le funzionalità di prenotazione e consultazione siano accessibili negli orari di apertura dei negozi e che eventuali periodi di downtime non coprano totalmente la finestra di apertura di questi, negando totalmente la possibilità di consultare chi abbia prenotato la propria merce.

- **RNF4: Usabilità.** L'interfaccia utente mobile deve consentire a un nuovo cittadino o turista di completare la ricerca e la prenotazione di un prodotto in massimo 4 tocchi/passaggi, garantendo un punteggio System Usability Scale (SUS) non inferiore a $75/100$ nei test con gli utenti.
  - *Motivazione:* l'applicazione viene utilizzata prevalentemente in mobilità o al volo durante la spesa; ridurre la complessità d'uso e mantenere una valutazione SUS elevata garantisce che anche utenti meno esperti o turisti occasionali riescano a prenotare senza frustrazione né abbandoni.

- **RNF5: Sicurezza.** Tutte le comunicazioni client-server devono essere cifrate tramite protocollo HTTPS/TLS 1.3. I dati personali e le credenziali degli utenti devono essere archiviati in conformità alla normativa GDPR.
  - *Motivazione:* è fondamentale proteggere le informazioni sensibili degli utenti (dati di contatto e cronologia prenotazioni) e prevenire intercettazioni delle credenziali quando ci si connette a reti Wi-Fi pubbliche o aperte nel centro cittadino.

- **RNF6: Compatibilità.** L'applicazione mobile cittadino deve supportare sistemi Android (versione 10.0 o superiore) e iOS (versione 15.0 o superiore), coprendo almeno il $95\%$ dei dispositivi smartphone attualmente in uso sul mercato target.
  - *Motivazione:* per garantire l'inclusività e la massima diffusione del servizio tra i cittadini e i turisti, l'app deve funzionare correttamente sulla quasi totalità degli smartphone attualmente in circolazione, senza escludere chi possiede dispositivi meno recenti.

- **RNF7: Accessibilità.** L'interfaccia utente delle applicazioni mobile e web deve essere conforme alle linee guida WCAG 2.1 livello AA.
  - *Motivazione:* trattandosi di un servizio rivolto all'intera cittadinanza e promosso nel contesto locale, è necessario assicurare la piena fruibilità dei contenuti anche a persone con disabilità visive o motorie, garantendo un elevato contrasto cromatico e la compatibilità con i lettori di schermo.

- **RNF8: Localizzazione.** Il sistema deve supportare la lingua italiana come predefinita, la lingua inglese e tedesca per l'interfaccia utente mobile, consentendo il cambio di lingua istantaneo senza riavvio dell'applicazione.
  - *Motivazione:* la città di Trento accoglie un flusso consistente di turisti e studenti internazionali; il supporto multilingue immediato permette anche agli utenti non madrelingua di consultare facilmente i prodotti tipici e localizzare i negozianti della zona.

- **RNF9: Equità.** Gli algoritmi di posizionamento e visualizzazione dei negozi sulla mappa e nei risultati di ricerca non devono applicare sponsorizzazioni a pagamento, garantendo pari visibilità a tutti i piccoli esercenti e produttori locali registrati a parità di distanza geografica o pertinenza della ricerca.
  - *Motivazione:* l'obiettivo primario della piattaforma è valorizzare e tutelare l'intero tessuto commerciale di vicinato; evitare posizionamenti prioritari a pagamento garantisce condizioni di concorrenza leale anche per le piccolissime attività con budget pubblicitari nulli.

- **RNF10: Usabilità dell'Interfaccia Negoziante.** L'interfaccia web per i negozianti deve essere accessibile dai principali browser desktop e tablet (Google Chrome, Mozilla Firefox, Safari e Microsoft Edge) e ottimizzata per consentire il completamento delle operazioni frequenti (aggiornamento catalogo, gestione prenotazioni e applicazione sconti) in modo intuitivo e con non più di 3 clic dalla dashboard principale.
  - *Motivazione:* i piccoli commercianti e i produttori locali dispongono spesso di poco tempo e limitate competenze informatiche; un'interfaccia essenziale e rapida riduce la barriera all'ingresso e incentiva l'aggiornamento costante del catalogo prodotti.

- **RNF11: Efficienza dell'Importazione Dati Negoziante.** La funzionalità di caricamento massivo del catalogo può avvenire tramite file CSV o JSON e deve elaborare e validare un file contenente fino a 500 prodotti in un tempo inferiore a 5 secondi, fornendo un riepilogo immediato degli eventuali errori di formattazione.
  - *Motivazione:* molti esercenti gestiscono l'inventario tramite sistemi gestionali propri; consentire un caricamento rapido e con feedback immediato sugli errori evita l'inserimento manuale e garantisce che i listini esposti ai consumatori siano sempre aggiornati.

- **RNF12: Privacy e Confidenzialità dei Dati.** Il sistema deve garantire che le informazioni personali, i dati relativi alle liste della spesa e la cronologia delle prenotazioni siano trattati nel rispetto dei principi di confidenzialità e non vengano utilizzati per la profilazione non autorizzata delle abitudini di acquisto degli utenti. Il sistema non deve memorizzare in modo persistente lo storico dei tracciamenti GPS degli utenti. I dati di geolocalizzazione puntuale devono essere elaborati esclusivamente in memoria per il tempo necessario a restituire i negozi vicini e cancellati immediatamente dopo la richiesta. I dati raccolti in relazione alle segnalazioni reciproche devono essere trattati in modo anonimizzato, limitando l'accesso solo all'account operatore per le sole finalità di moderazione e gestione delle criticità, prevenendo qualsiasi utilizzo improprio o diffusione di dati sensibili a terzi.
  - *Motivazione:* proteggere la privacy dei cittadini e prevenire la profilazione commerciale aggressiva o discriminatoria è essenziale per instaurare un rapporto di fiducia nell'uso dell'applicazione locale.

---

## 4. Use Case Diagram

### Utente Anonimo

#### Use Case UC-01: Visualizzazione e ricerca prodotti e negozi — RF3, RF6, RF9
- **Riassunto:** Questo use case descrive come un utente non registrato consulta il catalogo prodotti e individua i negozi dell'area geografica desiderata.
- **Descrizione:**
  1. L'utente apre l'applicazione e accede alla schermata principale di consultazione.
  2. L'utente inserisce uno o più criteri di ricerca (nome del prodotto, presenza di allergeni, nome del negozio o indirizzo) oppure attiva la ricerca tramite posizione GPS [eccezione 1].
  3. Il sistema restituisce l'elenco dei prodotti e dei negozi pertinenti, mostrando le informazioni dettagliate e la posizione geografica sulla mappa [estensione 1].
- **Eccezioni:**
  1. Se non viene trovato alcun prodotto o negozio corrispondente ai criteri inseriti, il sistema mostra un messaggio informativo e invita a modificare i filtri.
- **Estensioni:**
  1. Selezionando un specifico prodotto dall'elenco, l'utente può aggiungerlo direttamente alla propria lista della spesa locale (UC-02).

#### Use Case UC-02: Gestione della lista spesa locale ed accesso offline — RF3, RF13
- **Riassunto:** Questo use case descrive come un utente non registrato o in modalità offline crea, consulta e modifica la propria lista della spesa salvata nel dispositivo.
- **Descrizione:**
  1. L'utente accede alla sezione "Lista della Spesa" per visualizzare gli elementi salvati localmente sul dispositivo.
  2. L'utente aggiorna le quantità dei prodotti selezionati (utilizzando i pulsanti "+" e "-") oppure rimuove elementi dalla lista preimpostata [eccezione 1].
  3. In assenza di connettività di rete, il sistema garantisce l'accesso in sola lettura ai dati della lista salvati localmente, segnalando eventuali funzionalità remote disabilitate [estensione 1].
- **Eccezioni:**
  1. Se l'utente tenta di eseguire un'operazione che richiede l'accesso al server centrale in assenza di rete, il sistema mostra un avviso relativo alle limitazioni della modalità offline.
- **Estensioni:**
  1. Quando l'utente decide di procedere alla prenotazione dei prodotti inclusi nella lista, il sistema richiede di completare il login (UC-03) o la registrazione (UC-04).

#### Use Case UC-03: Effettuare il login — RF1, RF2
- **Riassunto:** Questo use case descrive come un utente non autenticato effettua l'accesso al sistema tramite credenziali locali o autenticazione centralizzata per accedere alle funzionalità del proprio ruolo.
- **Descrizione:**
  1. L'utente apre la pagina principale dell'applicazione e seleziona il campo per fare il login.
  2. Se l'utente inserisce all'interno degli appositi campi il nome utente e la password, preme sul pulsante "Login" presente nella schermata e nome utente e password sono corretti, si apre la schermata principale dell'applicazione [eccezione 1].
- **Eccezioni:**
  1. Se l'utente inserisce credenziali errate o non registrate, l'applicazione mostra un messaggio di errore opportuno e richiede nuovamente l'inserimento dei dati di accesso.

#### Use Case UC-04: Registrazione nuovo utente — RF1, RF4
- **Riassunto:** Questo use case descrive la procedura con cui un cittadino non registrato crea un nuovo account all'interno del sistema Quali.T.
- **Descrizione:**
  1. L'utente accede alla schermata di registrazione e compila i campi obbligatori per il profilo cittadino (nome, cognome, email, password) [eccezione 1].
  2. Il sistema valida le informazioni inserite e verifica l'univocità dell'indirizzo e-mail fornito [eccezione 2].
  3. Il sistema invia un messaggio di conferma all'indirizzo e-mail specificato.
  4. L'utente conferma la registrazione tramite il link ricevuto; il profilo cittadino viene così abilitato.
- **Eccezioni:**
  1. Se l'utente non inserisce tutti i campi obbligatori, il sistema segnala i dati mancanti e blocca il proseguimento della registrazione.
  2. Se l'indirizzo email è già associato a un account cittadino esistente, il sistema segnala la violazione del vincolo di unicità.
- **Estensioni:**
  1. Se l'email è già associata a un account di tipo negozio, il sistema consente comunque la creazione del profilo cittadino, legando entrambi i ruoli allo stesso indirizzo e-mail (RF1).

---

### Utente Loggato

#### Use Case UC-05: Prenotazione prodotti dalla lista spesa — RF7, RF8
- **Riassunto:** Questo use case descrive come un cittadino autenticato invia una richiesta di prenotazione per i prodotti selezionati nella propria lista spesa.
- **Descrizione:**
  1. L'utente accede alla lista spesa (sincronizzata online) e seleziona i prodotti da prenotare, indicando l'orario/data di ritiro previsti.
  2. Il sistema verifica la disponibilità effettiva dei prodotti presso i rispettivi negozi [eccezione 1] e le limitazioni sull'account utente [eccezione 2].
  3. Il sistema aggiorna temporaneamente le giacenze, crea le prenotazioni e notifica i negozianti interessati.
- **Eccezioni:**
  1. Se la quantità di un prodotto non è sufficiente, il sistema avvisa l'utente proponendo di adeguare il numero di pezzi.
  2. Se l'utente ha un rating medio inferiore alla soglia di blocco stabilita a causa di mancati ritiri, il sistema impedisce la prenotazione (RF14).

#### Use Case UC-06: Valutazione e segnalazione negozio — RF14
- **Riassunto:** Questo use case descrive come un cittadino valuta l'esperienza di ritiro o segnala un disservizio relativo a un negozio.
- **Descrizione:**
  1. L'utente seleziona una prenotazione conclusa o consultata dalla propria cronologia e accede al modulo di valutazione.
  2. L'utente inserisce un punteggio numerico, eventuale recensione testuale ed evidenzia eventuali anomalie (es. sconti non applicati).
  3. Il sistema registra la recensione e, in caso di segnalazione di criticità grave, inoltra il report in modalità anonimizzata alla sezione di moderazione [estensione 1].
- **Estensioni:**
  1. Se la valutazione contiene una segnalazione di frode o comportamento scorretto, viene generata un'istanza di revisione per l'account admin (UC-10).

#### Diagramma 1 — Quali.T Casi d'uso: Utente (Anonimo e Cittadino) (Pagina 11)
- **Sistema:** `Sistema Quali.T - Area Utente`
- **Attori:**
  - `Utente Anonimo`
  - `Utente registrato` (specializzazione / generalizzazione di `Utente Anonimo`)
  - `Email Server` (`<<sistema esterno>>`)
- **Funzioni riservate al Cittadino:**
  - `UC-05 Prenotazione prodotti dalla lista spesa` (associato a `Utente registrato`)
  - `UC-06 Valutazione e segnalazione negozio` (associato a `Utente registrato`)
  - `Generazione istanza di revisione` — relazione `<<extend>>` verso `UC-06 Valutazione e segnalazione negozio` (con nota: *"La segnalazione viene presa in carico dall'Operatore (vedi diagramma Admin)"*)
- **Funzioni pubbliche:**
  - `UC-01 Visualizzazione e ricerca prodotti e negozi` (associato a `Utente Anonimo`)
    - `Aggiunta prodotto alla lista spesa` — `<<extend>>` verso `UC-01`
    - `Ricerca avanzata con filtri e GPS` — `<<extend>>` verso `UC-01`
  - `UC-02 Gestione lista spesa locale ed accesso offline` (associato a `Utente Anonimo`)
  - `UC-03 Effettuare il login` (associato a `Utente Anonimo`)
    - `Cambio password temporanea` — `<<extend>>` verso `UC-03`
  - `UC-04 Registrazione nuovo utente` (associato a `Utente Anonimo`)
    - `Inserimento dati anagrafici e validazione` — `<<include>>` da `UC-04`
    - `Invio email di conferma e attivazione` — `<<include>>` da `UC-04` (interagisce con `Email Server`)

---

### Negoziante

#### Use Case UC-07: Registrazione e gestione profilo negozio — RF1, RF5
- **Riassunto:** Questo use case descrive come un esercente registra la propria attività commerciale sulla piattaforma inserendone i dati identificativi e geografici.
- **Descrizione:**
  1. Il negoziante compila il modulo di registrazione inserendo denominazione, indirizzo completo (via, civico), orari di apertura e recapiti.
  2. Il sistema esegue i controlli di validazione e la verifica di unicità dell'indirizzo [eccezione 1].
  3. A registrazione completata, il negozio viene geolocalizzato e reso visibile sulla mappa.
- **Eccezioni:**
  1. Se esiste già un altro negozio registrato al medesimo indirizzo (via e civico), il sistema blocca l'operazione segnalando l'errore.

#### Use Case UC-08: Gestione catalogo prodotti e promozioni — RF10, RF11, RF12
- **Riassunto:** Questo use case descrive le attività con cui il negoziante inserisce, aggiorna, categorizza o rimuove prodotti dal catalogo, anche tramite file (CSV/JSON), e ne definisce eventuali promozioni.
- **Descrizione:**
  1. Il negoziante accede alla dashboard e sceglie se inserire manualmente i prodotti o caricarne un batch tramite un file CSV/JSON [estensione 1].
  2. Il sistema assegna automaticamente i tag/categorie di appartenenza e consente l'eventuale rettifica manuale.
  3. Il negoziante imposta eventuali promozioni o sconti a tempo indicando percentuali, prezzi promozionali e condizioni di validità.
- **Eccezioni:**
  1. In caso di errori nei dati importati (file non formattato o campi mancanti), il sistema segnala i record errati richiedendo integrazione manuale.
- **Estensioni:**
  1. Il caricamento massivo valida ed elabora file contenenti fino a 500 prodotti conformemente alle specifiche di prestazione.

#### Use Case UC-09: Gestione prenotazioni e ritiri — RF7, RF14
- **Riassunto:** Questo use case descrive la gestione delle richieste di prenotazione in arrivo e la conferma dell'avvenuto ritiro da parte del negoziante.
- **Descrizione:**
  1. Il negoziante consulta l'elenco delle prenotazioni attive ricevute dai cittadini.
  2. Al momento della consegna della merce in negozio, il negoziante registra la conferma di avvenuto ritiro.
  3. Il sistema aggiorna lo stato della prenotazione in "conclusa" e consolida la giacenza di magazzino.
- **Eccezioni:**
  1. Se il termine massimo per il ritiro spira senza che il cliente si sia presentato, la prenotazione viene contrassegnata come "scaduta", ripristinando la disponibilità del prodotto e aggiornando il punteggio dell'utente.

#### Diagramma 2 — Quali.T Casi d'uso: Negoziante (Pagina 13)
- **Sistema:** `Sistema Quali.T - Area Negoziante`
- **Attore:** `Negoziante`
- **Casi d'uso:**
  - `UC-03 Effettuare il login` (associato a `Negoziante`)
  - **Sotto-area `Gestione negozio`:**
    - `UC-07 Registrazione e gestione profilo negozio` (associato a `Negoziante`)
    - `UC-09 Gestione prenotazioni e ritiri` (associato a `Negoziante`)
      - `Conferma avvenuto ritiro o scadenza` — `<<include>>` da `UC-09`
    - `UC-08 Gestione catalogo prodotti e promozioni` (associato a `Negoziante`)
      - `Importazione massiva CSV / JSON` — `<<extend>>` verso `UC-08`
      - `Gestione sconti e promozioni a tempo` — `<<include>>` da `UC-08`

---

### Utente admin

#### Use Case UC-10: Moderazione e gestione segnalazioni — RF14, RF15
- **Riassunto:** Questo use case descrive come l'operatore del comune monitora le valutazioni ed esamina le segnalazioni di comportamenti scorretti o frodi effettuate da utenti e negozianti.
- **Descrizione:**
  1. L'operatore accede al pannello di controllo riservato e consulta l'elenco delle segnalazioni ricevute dagli utenti [eccezione 1].
  2. L'operatore analizza i dati correlati (trattati in forma anonimizzata) ed esegue le verifiche necessarie sul caso.
  3. L'operatore dispone gli interventi opportuni, quali l'invio di un sollecito, la rimozione di recensioni inappropriate o la limitazione/sospensione dell'account interessato.
- **Eccezioni:**
  1. Se non vi sono segnalazioni aperte da esaminare, il sistema mostra un messaggio informativo di assenza di pendenze.

#### Diagramma 3 — Quali.T Casi d'uso: Operatore / Admin (Pagina 14)
- **Sistema:** `Sistema Quali.T - Area Moderazione`
- **Attori:** `Operatore / Admin`, `Utente Registrato`
- **Casi d'uso:**
  - `UC-03 Effettuare il login` (associato a `Operatore / Admin`)
  - `Generazione istanza di revisione (da UC-06)` (associato a `Utente Registrato`) — `<<include>>` verso `UC-10 Moderazione e gestione segnalazioni`
  - **Sotto-area `Moderazione`:**
    - `UC-10 Moderazione e gestione segnalazioni` (associato a `Operatore / Admin`)

#### Diagramma 4 — Quali.T Diagramma completo dei casi d'uso (Pagina 15)
Raggruppa nel confine di sistema `Sistema Quali.T` tutti gli attori (`Utente Anonimo`, `Negoziante`, `Operatore / Admin`, `Email Server` `<<sistema esterno>>`) e le quattro sotto-aree:
1. `Area Utente - Prenotazione e valutazione` (`UC-05`, `UC-06`, `Generazione istanza di revisione` con `<<extend>>` verso `UC-06` e `<<include>>` verso `UC-10`)
2. `Area Utente - Funzioni pubbliche` (`UC-01`, `UC-02`, `UC-03`, `UC-04`, `Aggiunta prodotto alla lista spesa`, `Ricerca avanzata con filtri e GPS`, `Inserimento dati anagrafici e validazione`, `Invio email di conferma e attivazione`, `Cambio password temporanea`)
3. `Area Moderazione / Admin` (`UC-10`)
4. `Area Negoziante` (`UC-07`, `UC-08`, `UC-09`, `Conferma avvenuto ritiro o scadenza`, `Importazione massiva CSV / JSON`, `Gestione sconti e promozioni a tempo`)

---

## 5. User Story

### US-01 — Collegamenti: RF1, RF2; UC-03
**Accesso e autenticazione utenti e negozianti**
Come cittadino o negoziante registrato, voglio autenticarmi tramite le mie credenziali, per poter accedere alle funzionalità riservate al mio ruolo.
- **Criteri di accettazione:**
  - `AC-US01-01`: L'utente inserisce le proprie credenziali per accedere al sistema.
  - `AC-US01-02`: A seguito dell'autenticazione riuscita, il sistema abilita l'accesso alle funzionalità previste per il ruolo dell'account (cittadino o negoziante).
  - `AC-US01-03`: In caso di credenziali errate, il sistema mostra un messaggio di errore e blocca l'accesso, chiedendo un nuovo inserimento delle credenziali.

### US-02 — Collegamenti: RF1, RF4; UC-04
**Registrazione nuovo cittadino**
Come nuovo cittadino, voglio registrarmi fornendo i miei dati personali ed email, per poter attivare un profilo e prenotare i prodotti dei negozi locali.
- **Criteri di accettazione:**
  - `AC-US02-01`: L'utente compila il modulo con nome, cognome, email e password.
  - `AC-US02-02`: Il sistema valida la presenza dei campi obbligatori e l'univocità dell'indirizzo email per il profilo cittadino.
  - `AC-US02-03`: Qualora l'email sia già associata ad un account negoziante, il sistema permette comunque la creazione del profilo cittadino associato alla medesima email.
  - `AC-US02-04`: Il sistema invia una mail all’utente per verificarne la validità.

### US-03 — Collegamenti: RF3, RF6, RF9; UC-01
**Ricerca e consultazione prodotti e negozi**
Come utente (anonimo o registrato), voglio cercare i prodotti per nome, allergeni o caratteristiche sotto forma di "tag" e visualizzare i negozi vicini sulla mappa, per individuare facilmente le attività locali ed i loro listini.
- **Criteri di accettazione:**
  - `AC-US03-01`: L'utente può filtrare la ricerca per nome del prodotto, presenza di allergeni, caratteristiche o distanza dalla propria posizione del negozio (tramite indirizzo o GPS).
  - `AC-US03-02`: Per ogni negozio individuato, il sistema ne mostra la posizione geografica sulla mappa e le informazioni dettagliate (orari, recapiti).
  - `AC-US03-03`: Se non vi sono prodotti o negozi corrispondenti ai criteri, viene mostrato un opportuno messaggio informativo.

### US-04 — Collegamenti: RF3, RF13; UC-02
**Gestione della lista spesa locale ed accesso offline**
Come utente, voglio gestire una lista della spesa salvata sul dispositivo e consultarla anche offline, per preparare gli acquisti in autonomia prima del loro acquisto.
- **Criteri di accettazione:**
  - `AC-US04-01`: L'utente può aggiungere prodotti alla lista della spesa locale, modificarne le quantità o rimuoverli.
  - `AC-US04-02`: In assenza di connessione di rete, il sistema permette la consultazione in sola lettura della lista della spesa salvata localmente.
  - `AC-US04-03`: Se l'utente intende avviare la prenotazione dei prodotti in lista, il sistema richiede l'autenticazione o registrazione dell'account.

### US-05 — Collegamenti: RF7, RF8, RF15; UC-05, UC-10
**Prenotazione prodotti**
Come cittadino registrato, voglio inviare la prenotazione dei prodotti selezionati specificando l'orario di ritiro, per assicurarmi la disponibilità della merce presso il negozio.
- **Criteri di accettazione:**
  - `AC-US05-01`: Il sistema verifica che la quantità richiesta di ciascun prodotto sia effettivamente disponibile presso il negoziante.
  - `AC-US05-02`: In caso di esito positivo, il sistema riserva la quantità richiesta, crea la prenotazione e notifica il negoziante.
  - `AC-US05-03`: Se il cittadino è stato bandito dal prenotare prodotti a causa di mancati ritiri precedenti, la prenotazione viene bloccata.

### US-06 — Collegamenti: RF1, RF5; UC-07
**Registrazione e gestione del profilo negozio**
Come negoziante, voglio registrare la mia attività commerciale con i dati identificativi e l'indirizzo esatto, per renderla visibile ai cittadini sulla mappa.
- **Criteri di accettazione:**
  - `AC-US06-01`: Il negoziante inserisce denominazione, indirizzo completo (via e civico), orari di apertura e recapiti.
  - `AC-US06-02`: Il sistema verifica l'univocità dell'indirizzo del negozio (via e civico) e impedisce registrazioni duplicate.
  - `AC-US06-03`: A registrazione completata, il negozio viene geolocalizzato e reso consultabile nel sistema.
  - `AC-US06-04`: Il negoziante registrato, dopo aver acceduto alla piattaforma, può modificare le informazioni del proprio negozio

### US-07 — Collegamenti: RF10, RF11, RF12; UC-08
**Gestione catalogo prodotti, categorie e promozioni**
Come negoziante, voglio caricare i prodotti (manualmente o via CSV/JSON), gestire categorie/tag e definire offerte a tempo, per mantenere il mio listino aggiornato e attrattivo.
- **Criteri di accettazione:**
  - `AC-US07-01`: Il negoziante può caricare prodotti singolarmente oppure importare massivamente un file CSV/JSON contenente una lista di prodotti.
  - `AC-US07-02`: Il sistema assegna automaticamente le categorie/tag ai prodotti lasciando al negoziante la possibilità di rettifica manuale.
  - `AC-US07-03`: Il negoziante può applicare sconti, prezzi promozionali e condizioni di validità temporale per ciascun prodotto.

### US-08 — Collegamenti: RF7, RF14; UC-09
**Gestione prenotazioni e conferma ritiri**
Come negoziante, voglio consultare le prenotazioni in arrivo e confermare l'avvenuto ritiro da parte del cliente, per aggiornare lo stato degli ordini e la disponibilità di magazzino.
- **Criteri di accettazione:**
  - `AC-US08-01`: Il negoziante visualizza l'elenco delle prenotazioni attive con i dettagli dell'utente e dell'orario di ritiro.
  - `AC-US08-02`: Al momento della consegna della merce, il negoziante conferma il ritiro e il sistema aggiorna lo stato della prenotazione a "conclusa".
  - `AC-US08-03`: Se il termine di ritiro spira senza consegna, la prenotazione viene segnata come "scaduta" ripristinando la disponibilità del prodotto.

### US-09 — Collegamenti: RF14; UC-06
**Valutazione ed eventuale segnalazione del negozio**
Come cittadino, voglio valutare l'esperienza di acquisto e/o ritiro al negozio ed eventualmente segnalare criticità (es. sconti non applicati, prezzi scorretti, mancata disponibilità di prodotti), per condividere la qualità del servizio fornito.
- **Criteri di accettazione:**
  - `AC-US09-01`: Il cittadino può rilasciare un punteggio ed una recensione sintetica per le prenotazioni concluse.
  - `AC-US09-02`: Qualora il cittadino evidenzi una scorrettezza grave o frode, può essere creata un'istanza di segnalazione per la moderazione.

### US-10 — Collegamenti: RF14, RF15; UC-10
**Moderazione e gestione delle segnalazioni da parte dell'operatore**
Come operatore del comune, voglio esaminare i report di scorrettezza o frode in forma anonimizzata, per intervenire tempestivamente a tutela dell'equità del servizio.
- **Criteri di accettazione:**
  - `AC-US10-01`: L'operatore accede ad un pannello di controllo dove visualizza le segnalazioni aperte elaborate in forma anonimizzata.
  - `AC-US10-02`: L'operatore può adottare provvedimenti moderativi quali l'invio di solleciti, la rimozione di recensioni o la sospensione dell'account.

### US-11 — Collegamenti: RNF1, RNF4; UC-01
**Efficienza nelle prestazioni di ricerca e tempi di risposta**
Come utente in mobilità, voglio che la ricerca di prodotti e negozi sulla mappa fornisca risultati in meno di 2 secondi, per poter consultare rapidamente le offerte senza interruzioni.
- **Criteri di accettazione:**
  - `AC-US11-01`: Il tempo di caricamento ed elaborazione delle ricerche di prodotti e negozi non deve superare i 2 secondi su rete $4\text{G}/5\text{G}$ nel 95% dei casi.
  - `AC-US11-02`: L'interfaccia utente mostra un indicatore di caricamento immediato durante l'attesa dei risultati per garantire il feedback visivo.

### US-12 — Collegamenti: RNF2; UC-05, UC-09
**Gestione dei picchi di affluenza e scalabilità del servizio**
Come cittadino o turista durante eventi ad alta affluenza, voglio che l'applicazione mantenga le sue funzionalità operative e reattive anche in presenza di molti utenti contemporanei, per effettuare prenotazioni senza errori di sistema.
- **Criteri di accettazione:**
  - `AC-US12-01`: Il sistema supporta fino a $2.500$ utenti attivi contemporaneamente senza generare errori di timeout o disconnessioni.
  - `AC-US12-02`: Le operazioni di prenotazione e conferma ritiro vengono elaborate entro un tempo massimo di 3 secondi anche durante i picchi di carico.

### US-13 — Collegamenti: RNF5, RNF12; UC-03, UC-04, UC-05
**Sicurezza delle comunicazioni e protezione della privacy**
Come utente del servizio, voglio che i miei dati personali rimangano confidenziali, e che le mie posizioni GPS non vengano memorizzate in modo persistente o usate per profilazione, per utilizzare l'app in totale sicurezza e riservatezza.
- **Criteri di accettazione:**
  - `AC-US13-01`: Tutte le comunicazioni tra client e server sono cifrate tramite il protocollo HTTPS/TLS 1.3.
  - `AC-US13-02`: I dati di geolocalizzazione GPS vengono elaborati esclusivamente in memoria temporanea e cancellati subito dopo aver restituito le attività vicine.
  - `AC-US13-03`: Le informazioni di tracciamento e le liste della spesa non vengono impiegate per attività di profilazione commerciale non autorizzata.

### US-14 — Collegamenti: RNF7; UC-01, UC-02, UC-08
**Accessibilità universale dell'interfaccia utente**
Come utente con disabilità visive o motorie, voglio poter navigare l'interfaccia dell'applicazione tramite screen reader e con contrasti cromatici adeguati, per accedere in modo autonomo a tutte le funzionalità.
- **Criteri di accettazione:**
  - `AC-US14-01`: L'interfaccia grafica mobile e web garantisce la conformità alle linee guida WCAG 2.1 livello AA.
  - `AC-US14-02`: Tutti gli elementi interattivi e di testo sono compatibili con i principali lettori di schermo e mantengono un rapporto di contrasto cromatico elevato.

---

## 6. Design Front-end

### Applicazione Mobile Cittadino

- **MU-Fig.1a, MU-Fig.1b, MU-Fig.1c: Schermata home cittadino e menu di navigazione**
  - `MU-Fig.1a` rappresenta la schermata principale dell'applicazione per i cittadini con la panoramica dei prodotti e delle offerte in evidenza (indirizzo corrente in alto es. *Via Sommarive, 5, Trento TN*, banner *"Scopri tanti negozi locali — Visualizza tutti"*, barra di ricerca `Search...` con pulsante filtri, sezione *"Offerte Del Giorno"* con tab `Tutto`, `Carne`, `Verdura`, `Pasta` e griglia prodotti con nome, negozio e prezzo). **Collegamenti principali:** RF6, RF9.
  - `MU-Fig.1b` e `MU-Fig.1c` illustrano la struttura del menu di navigazione principale (hamburger menu) rispettivamente per utenti autenticati (`Home`, `Lista della spesa`, `Negozi`, `Offerte`, `Prenotazioni`, `Recensioni`, `Account`) e visitatori non autenticati (`Home`, `Lista della spesa`, `Negozi`, `Offerte`, `Recensioni`, `Accedi`). **Collegamenti principali:** RF1, RF2, RF3.

- **MU-Fig.2: Schermata di registrazione nuovo cittadino**
  - `MU-Fig.2` illustra il modulo di registrazione dedicato ai nuovi cittadini, comprensivo dei campi per l'inserimento dei dati personali e delle credenziali di accesso (`Email`, `Via (facoltativo)`, `Password`, `Confirm Password`, pulsante `Registrati`, link *"Hai già un account? Sign In"*). **Collegamenti principali:** RF1, RF4, UC-04, US-02.

- **MU-Fig.3: Schermata di autenticazione e login**
  - `MU-Fig.3` mostra la schermata di accesso al sistema tramite e-mail e password per gli utenti registrati (`Email`, `Password`, pulsante `Accedi`, link *"Non hai un account? Registrati"*). **Collegamenti principali:** RF1, RF2, UC-03, US-01.

- **MU-Fig.4: Schermata di gestione del profilo e impostazioni utente**
  - `MU-Fig.4` rappresenta il pannello di gestione del profilo del cittadino (*"Il tuo account"*), con la possibilità di aggiornare le informazioni anagrafiche (`Modifica foto`, `Nome`, `Cognome`, `Email`, `Telefono`, `Indirizzo`) e configurare le preferenze sulle notifiche (`Notifiche offerte`, `Notifiche email`, `Notifiche SMS`), oltre ai pulsanti `Salva modifiche` ed `Esci dall'account`. **Collegamenti principali:** RF4, US-02, US-04.

- **MU-Fig.5a: Ricerca e filtraggio negozi / MU-Fig.5b: Visualizzazione negozi sulla mappa**
  - `MU-Fig.5a` e `MU-Fig.5b` mostrano rispettivamente l'interfaccia di ricerca dei negozi del territorio (*"Trova un negozio"*, barra *"Cerca negozi, prodotti, indirizzi"*) con l'applicazione di filtri (`Tutti`, `Aperti ora`, `Vicini`, `4.5★+`, elenco negozi con valutazione, recensioni, distanza e stato apertura, e pulsante `Mostra sulla mappa`) e la loro rappresentazione interattiva sulla mappa geografica con anteprima del negozio selezionato (*Negozio 1*, stato apertura e indirizzo). **Collegamenti principali:** RF3, RF9, UC-01, US-03.

- **MU-Fig.6a, MU-Fig.6b: Dettaglio negozio e scheda recensioni**
  - `MU-Fig.6a` e `MU-Fig.6b` illustrano la pagina di dettaglio di una singola attività commerciale (*Negozio 1*, stato apertura, indirizzo), fornendo informazioni di contatto, catalogo *In Evidenza* e la sezione *Recensioni* per la consultazione del punteggio medio, distribuzione valutazioni da 1 a 5 stelle e l'invio delle recensioni da parte dei cittadini (*"Lascia una recensione"*, selettore stelle, campo *"Scrivi il tuo commento..."*, pulsante `Invia recensione`). **Collegamenti principali:** RF6, RF9, RF14, UC-06, US-09.

- **MU-Fig.7: Gestione delle liste della spesa**
  - `MU-Fig.7` mostra la schermata panoramica contenente le liste della spesa salvate localmente o sul profilo dell'utente (*"Le tue Liste della Spesa"*), con conteggio prodotti, totale stimato, opzione di rimozione e opzioni per crearne di nuove (*"Aggiungi una lista"* / pulsante `+`) o accedere a quelle esistenti. **Collegamenti principali:** RF3, RF13, UC-02, US-04.

- **MU-Fig.8: Creazione di una nuova lista della spesa**
  - `MU-Fig.8` presenta il modulo di composizione di una nuova lista della spesa (*"Nuova Lista"*, campo *"Nome della lista"*) con funzionalità di ricerca rapida dei prodotti da inserire (*"Cerca un prodotto"*, filtri, elenco prodotti selezionati e pulsante `Salva lista`). **Collegamenti principali:** RF3, UC-02, US-04.

- **MU-Fig.9: Dettaglio lista della spesa e calcolo percorso**
  - `MU-Fig.9` illustra l'elenco dettagliato degli articoli presenti in una lista della spesa specifica (*"Articoli da acquistare"*), riportando i relativi prezzi stimati, i negozi di riferimento, il *Totale stimato* e la funzione per generare il percorso ottimale (pulsante `Calcola Percorso`) oltre al pulsante `+` per aggiungere altri prodotti. **Collegamenti principali:** RF3, RF6, RF13, UC-02, US-04.

- **MU-Fig.10: Ricerca del catalogo prodotti e selezione filtri**
  - `MU-Fig.10` mostra l'interfaccia di consultazione del catalogo prodotti con barra di ricerca, sezione *Offerte In Evidenza*, opzioni di filtraggio per categoria, prezzo, distanza e qualità (`Tutto`, `Prezzo`, `Distanza`, `Qualità`) e indicatori grafici per allergeni/caratteristiche (es. senza lattosio, vegetale/bio) con pulsante `+` di aggiunta rapida. **Collegamenti principali:** RF6, UC-01, US-03.

- **MU-Fig.11: Visualizzazione sconti e promozioni attive**
  - `MU-Fig.11` rappresenta la sezione dedicata alle offerte promozionali attive sul territorio (*"Promozioni per te"*), suddivise per filtri (`Tutte`, `Vicino a te`, `In scadenza`), con indicazione di stato (`Attiva`, `In Scadenza`), sconto/condizioni (es. `-20% su carne fresca`, `2×1 su verdure di stagione`, `Sconto 10% con carta fedeltà`), orari/scadenza e pulsante `Scopri l'offerta`. **Collegamenti principali:** RF6, RF12, US-03.

- **MU-Fig.12: Storico ed elenco delle prenotazioni effettuate**
  - `MU-Fig.12` illustra il riepilogo delle prenotazioni dell'utente (*"Le tue Prenotazioni"*), filtrabili per stato (`Tutte`, `In corso`, `Passate`), distinguendo quelle in corso (`Dettagli`) da quelle già completate (`Completata`) o scadute, con pulsante `+ Nuova prenotazione`. **Collegamenti principali:** RF7, RF8, UC-05, US-05.

- **MU-Fig.13: Dettaglio prenotazione e conferma ritiro al bancone**
  - `MU-Fig.13` mostra la schermata di dettaglio di una prenotazione confermata, con data/ora prevista, l'indicazione del codice identificativo da esibire al negoziante per il ritiro (*Codice ritiro*, es. `A7K2-94` — *"Mostra al bancone"*), il *Riepilogo* articoli e totale, e i pulsanti `Conferma ritiro` e `Annulla prenotazione` (con nota informativa sulla visibilità degli annullamenti degli ultimi 30 giorni ai venditori). **Collegamenti principali:** RF8, UC-05, US-05.

- **MU-Fig.14: Creazione e invio di una nuova prenotazione**
  - `MU-Fig.14` illustra l'interfaccia presso la scheda negozio per la selezione del prodotto, della data e della fascia oraria di ritiro dei prodotti prenotati presso l'esercente (`Conferma prenotazione`), con riepilogo delle *Prenotazioni in corso* e *Prenotazioni passate* (pulsante `Ordina di nuovo`). **Collegamenti principali:** RF7, UC-05, US-05.

---

### Applicazione Web Business (Negozianti) e Pannello Admin (Operatore)

- **MU-Fig.15: Home page del sito e presentazione della piattaforma web business per i negozianti**
  - `MU-Fig.15` (Home page) presenta la landing page promozionale rivolta ai negozianti e produttori locali (*"Fai conoscere ciò che offri"*), illustrando il funzionamento in 3 passi (`01 Crea la tua pagina`, `02 Racconta la tua storia`, `03 Vendi nel territorio`), i vantaggi dell'adesione alla piattaforma (abbonamento `$1/mese`, nessuna commissione, vetrina sempre aperta, prodotti illimitati, ordini in giornata), testimonianze e contatti. **Collegamenti principali:** RF5, UC-07, US-06.

- **MU-Fig.16: Schermata di registrazione del negozio e attivazione abbonamento**
  - `MU-Fig.16` illustra il modulo di registrazione dedicato agli esercenti (*"Crea la tua vetrina online"*) per l'inserimento dei dati identificativi (`Nome del negozio`, `Partita IVA`, `Email`, `Telefono`), dell'indirizzo univoco (`Comune`, `Indirizzo`) e della configurazione del profilo e abbonamento dell'attività (`Crea la mia vetrina`). **Collegamenti principali:** RF1, RF5, UC-07, US-06.

- **MU-Fig.17: Gestione e inserimento prodotti (manuale e da file CSV/JSON)**
  - `MU-Fig.17` mostra l'interfaccia di caricamento prodotti (*"Inserisci i tuoi prodotti"*) mediante inserimento manuale guidato (`Nome del prodotto`, `Categoria`, `Prezzo (€)`, `Prodotto Disponibile per Prenotazione`, `Descrizione breve`, pulsante `Aggiungi prodotto`) oppure importazione massiva da file strutturati `JSON` o `CSV` (drag & drop / upload), con riepilogo *Prodotti inseriti*, generazione automatica dei tag e funzione `Esporta`. **Collegamenti principali:** RF10, RF11, RNF11, UC-08, US-07.

- **MU-Fig.18: Creazione e gestione delle promozioni e sconti**
  - `MU-Fig.18` presenta il modulo (*"Crea le tue promozioni"*) per la definizione di offerte a tempo, sconti percentuali, prezzi fissi, codici sconto o promozioni speciali (es. *"Acquista due, paghi uno"*) riservate ai prodotti in catalogo (`Nome della promozione`, `Tipo di sconto`, `Valore`, `Prodotto o categoria`, `Specifiche`, intervallo `Dal` - `Al`, pulsante `Attiva promozione`), affiancato dalla tabella *Promozioni attive* (stati: `Attiva`, `In pausa`, `Scaduta`). **Collegamenti principali:** RF12, UC-08, US-07.

- **MU-Fig.19: Dashboard principale e panoramica dell'attività del negoziante**
  - `MU-Fig.19` illustra il pannello di controllo per l'esercente (*"Il tuo negozio, in un colpo d'occhio"*) con le metriche principali su visite (7 giorni), ordini ricevuti (e in attesa di conferma), prodotti in vetrina (e in esaurimento scorte), promozioni attive (e in scadenza), grafico *Visualizzazioni degli ultimi 7 giorni*, classifica *Prodotti più richiesti*, *Promozioni in corso* e *Prodotto più cercato*. **Collegamenti principali:** RF5, RF7, RNF10, UC-08, US-07.

- **MU-Fig.20: Gestione e consultazione del catalogo prodotti del negozio**
  - `MU-Fig.20` mostra la griglia di visualizzazione dei prodotti inseriti nel proprio catalogo (*"I tuoi prodotti, uno per uno"*) con barra di ricerca, filtri (`Tutti`, `In vetrina`, `Esauriti`, `Promozioni`), indicazione di disponibilità, prezzi, scorte esaurite (badge `Esaurito` e numero persone interessate) e stato di pubblicazione in vetrina, oltre al pulsante `+ Aggiungi prodotto`. **Collegamenti principali:** RF6, RF10, UC-08, US-07.

- **MU-Fig.21: Gestione delle richieste di prenotazione e conferma ritiri**
  - `MU-Fig.21` illustra la schermata per il tracciamento e la gestione delle prenotazioni dei clienti (*"Le tue prenotazioni, giorno per giorno"*), con ricerca e filtri (`Tutte`, `Da confermare`, `Confermate`, `Consegnate`, `A rischio`), schede ordine con azioni contestuali (`Conferma`, `Rifiuta`, `Completa`, `Valuta`, `Blocca`) e avvisi di rischio sugli utenti (es. consegne rifiutate/non ritirate o ordini annullati negli ultimi 30 giorni), consentendo la conferma dell'avvenuto ritiro o la gestione dei mancati ritiri. **Collegamenti principali:** RF7, RF14, UC-09, US-08.

- **MU-Fig.22: Dashboard di amministrazione e panoramica della piattaforma per l'operatore**
  - `MU-Fig.22` mostra il pannello di controllo riservato all'account operatore del comune (*"La piattaforma, in un colpo d'occhio"*) per il monitoraggio generale della piattaforma (KPI: *Produttori attivi*, *Visite mensili*, *Prenotazioni*, *Segnalazioni aperte*, *Abbonati attivi*), grafico *Visite mensili* e riquadro *Da controllare* con le richieste prioritarie. **Collegamenti principali:** RF15, UC-10, US-10.

- **MU-Fig.23: Gestione delle segnalazioni e moderazione riguardanti gli utenti**
  - `MU-Fig.23` illustra l'interfaccia di moderazione (*"Le segnalazioni fatte agli utenti"*) con contatori (*Segnalazioni aperte*, *Da verificare*, *Risolte questa settimana*, *Utenti sospesi*), ricerca e filtri (`Tutte`, `Aperte`, `Da verificare`, `Risolte`), per l'esame dei report su comportamenti scorretti o frodi relativi agli account cittadino e azioni (`Controlla`, `Risolvi`, `Sospendi`, `Riapri`). **Collegamenti principali:** RF14, RF15, RNF12, UC-10, US-10.

- **MU-Fig.24: Gestione delle segnalazioni e moderazione riguardanti i negozi**
  - `MU-Fig.24` mostra la schermata riservata all'operatore (*"Le segnalazioni fatte ai negozi"*) per verificare e gestire le segnalazioni e le recensioni critiche rivolte ai negozi ed esercenti registrati, con filtri per stato e azioni moderative (`Controlla`, `Risolvi`, `Sospendi`, `Riapri`). **Collegamenti principali:** RF14, RF15, RNF12, UC-06, UC-10, US-10.

- **MU-Fig.25: Schermata di autenticazione e login per negozianti e amministratori**
  - `MU-Fig.25` mostra la schermata di accesso riservata agli account negoziante e operatore/amministratore (`Email`, `Password`, `Accedi`) per entrare nel rispettivo pannello di gestione. **Collegamenti principali:** RF1, RF2, UC-03, US-01.

---

## 7. Traceability

La Traceability Matrix serve a verificare, prima della baseline, i collegamenti tra i diversi elementi del D1 e a individuare incoerenze, lacune o elementi non tracciati. Ogni RF deve essere collegato ad almeno un artefatto che ne dettaglia o rappresenta il comportamento, quando applicabile. Anche gli RNF devono essere tracciati verso gli artefatti pertinenti; non è richiesto che ogni RF/RNF abbia contemporaneamente Use Case, User Story, Acceptance Criteria e mockup. Collegamenti mancanti sono ammessi solo quando non applicabili o adeguatamente motivati.

### Traceability Matrix

| RF/RNF | Use Case | User Story | Acceptance Criteria | Mockup | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF1** | UC-03, UC-04, UC-07 | US-01, US-02, US-06 | AC-US01-02, AC-US02-03 | MU-Fig.1b, MU-Fig.1c, MU-Fig.2, MU-Fig.3, MU-Fig.16, MU-Fig.25 | Gestione tipologie di account e ruoli |
| **RF2** | UC-03 | US-01 | AC-US01-01 ...03 | MU-Fig.1b, MU-Fig.3, MU-Fig.25 | Autenticazione e accesso credenziali |
| **RF3** | UC-01, UC-02 | US-03, US-04 | AC-US03-01, AC-US04-01 ...02 | MU-Fig.1c, MU-Fig.5a, MU-Fig.7, MU-Fig.8, MU-Fig.9 | Consultazione pubblica e lista spesa locale |
| **RF4** | UC-04 | US-02 | AC-US02-01 ...03 | MU-Fig.2, MU-Fig.4 | Registrazione e gestione profilo cittadino |
| **RF5** | UC-07 | US-06 | AC-US06-01 ...03 | MU-Fig.15, MU-Fig.16, MU-Fig.19 | Registrazione e profilo negozio |
| **RF6** | UC-01 | US-03 | AC-US03-01 ...03 | MU-Fig.1a, MU-Fig.6a, MU-Fig.9, MU-Fig.10, MU-Fig.11, MU-Fig.20 | Consultazione catalogo prodotti |
| **RF7** | UC-05, UC-09 | US-05, US-08 | AC-US05-01 ...02, AC-US08-01 ...03 | MU-Fig.12, MU-Fig.14, MU-Fig.19, MU-Fig.21 | Gestione prenotazioni e ritiri |
| **RF8** | UC-05 | US-05 | AC-US05-01 ...03 | MU-Fig.12, MU-Fig.13, MU-Fig.14 | Consultazione prenotazioni utente |
| **RF9** | UC-01 | US-03 | AC-US03-01 ...02 | MU-Fig.1a, MU-Fig.5a, MU-Fig.5b, MU-Fig.6a, MU-Fig.6b | Consultazione e mappa negozi |
| **RF10** | UC-08 | US-07 | AC-US07-01 | MU-Fig.17, MU-Fig.20 | Inserimento manuale e importazione prodotti |
| **RF11** | UC-08 | US-07 | AC-US07-02 | MU-Fig.17 | Gestione automatica e manuale tag e categorie |
| **RF12** | UC-08 | US-07 | AC-US07-03 | MU-Fig.11, MU-Fig.18 | Creazione e gestione promozioni e sconti |
| **RF13** | UC-02 | US-04 | AC-US04-02 | MU-Fig.7, MU-Fig.9 | Funzionalità e consultazione offline |
| **RF14** | UC-05, UC-06, UC-09, UC-10 | US-08, US-09, US-10 | AC-US05-03, AC-US09-01 ...02, AC-US10-02 | MU-Fig.6a, MU-Fig.6b, MU-Fig.21, MU-Fig.23, MU-Fig.24 | Valutazioni reciproche e segnalazioni |
| **RF15** | UC-10 | US-05, US-10 | AC-US10-01 ...02 | MU-Fig.22, MU-Fig.23, MU-Fig.24 | Gestione account operatore e moderazione |
| **RNF1** | UC-01 | US-11 | AC-US11-01 ...02 | | Performance tempo di risposta $< 2\text{s}$ |
| **RNF2** | UC-05, UC-09 | US-12 | AC-US12-01 ...02 | | Scalabilità ($2.500$ utenti attivi) |
| **RNF3** | | | | | Affidabilità (uptime $> 99,5\%$) |
| **RNF4** | UC-01 | US-11 | | MU-Fig.1a...14 | Usabilità app mobile ($\le 4$ passaggi, SUS $\ge 75$) |
| **RNF5** | UC-03, UC-04, UC-05 | US-13 | AC-US13-01 | | Sicurezza HTTPS/TLS 1.3 e GDPR |
| **RNF6** | | | | | Compatibilità Android 10+ e iOS 15+ |
| **RNF7** | UC-01, UC-02, UC-08 | US-14 | AC-US14-01 ...02 | | Accessibilità WCAG 2.1 AA |
| **RNF8** | | | | | Localizzazione trilingue (IT/EN/DE) |
| **RNF9** | UC-01 | US-03 | AC-US03-01 ...02 | MU-Fig.5a, MU-Fig.5b | Equità di posizionamento senza sponsorizzazioni |
| **RNF10** | UC-08 | US-07 | | MU-Fig.19, MU-Fig.20 | Usabilità interfaccia negoziante ($\le 3$ clic) |
| **RNF11** | UC-08 | US-07 | | MU-Fig.17 | Efficienza importazione dati (500 prodotti in $< 5\text{s}$) |
| **RNF12** | UC-10 | US-13 | AC-US13-02 ...03 | MU-Fig.23, MU-Fig.24 | Privacy, confidenzialità dati e anonimizzazione |

---

## 8. Gestione delle modifiche dopo la baseline

Questa sezione documenta le modifiche significative apportate alla baseline, riportandone una breve sintesi e il collegamento alle relative GitHub Issue e/o Pull Request. Non è necessario duplicare la cronologia completa delle modifiche, che rimane tracciata nel repository GitHub.

### Template da compilare

| ID | Tipo | Descrizione | Origine | Artefatti impattati | GitHub / Stato |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CH-` | Requirement/UC/US/AC Change / Clarification | | Review / team / stakeholder | D1; D2, D3, code, test se esistenti | `#issue/ #PR OPEN` |

### Esempio Quali.T

| ID | Tipo | Descrizione | Origine | Artefatti impattati | GitHub / Stato |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CH-EASY-01` | Clarification | La proroga aggiunge 30 giorni alla data di scadenza corrente. | Team review | RF6; UC-11 Richiesta proroga; UC-12 Gestione proroga; AC-USXX-YY; D2-SPEC-XX; TEST-XX | `#47/#52 DONE` |

### Regole di gestione del living artifact
- Dopo la baseline, il D1 è un living artifact. Le modifiche significative devono essere tracciate in GitHub e sottoposte a impact analysis; gli artefatti successivi, il codice e i test vengono indicati come impattati solo se già esistenti.
- **Req./UC/US/AC/MU Change:** cambia un requisito/use case/user story/acceptance criteria/Mockup.
- **Clarification:** rende esplicito un significato precedentemente ambiguo o incompleto.
- Le modifiche possono propagarsi ai deliverable successivi, codice e test.
- Il living document contiene lo stato corrente; GitHub conserva la storia e il perché delle modifiche.
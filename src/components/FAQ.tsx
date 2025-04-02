
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Che cosa fanno i consulenti finanziari indipendenti?",
      answer: "I consulenti finanziari indipendenti, come noi, offrono consulenze personalizzate senza vendere prodotti finanziari. Veniamo pagati direttamente dai clienti (fee-only) e non riceviamo commissioni da banche o società di prodotto, eliminando così qualsiasi conflitto di interesse. Il nostro unico obiettivo è tutelare al massimo i tuoi interessi e aiutarti a raggiungere i tuoi obiettivi finanziari."
    },
    {
      question: "Quali sono i vantaggi delle consulenze finanziarie indipendenti?",
      answer: "I principali vantaggi includono: 1) Totale assenza di conflitti di interesse, 2) Accesso ad analisi oggettive dell'intero mercato e non solo dei prodotti di una singola banca, 3) Piani d'investimento personalizzati basati sui tuoi obiettivi, 4) Maggiore trasparenza sui costi e sui rischi degli investimenti, 5) Consulenze continuative che si adattano al cambiare della tua situazione personale."
    },
    {
      question: "Quanto costano i vostri servizi di consulenza?",
      answer: "I nostri modelli di compenso sono completamente trasparenti e basati su fee dirette. Per le consulenze continuative, le tariffe partono da 1.500€/anno o una percentuale tra lo 0,5-1% del patrimonio gestito (con fee decrescenti all'aumentare del patrimonio). Per piani finanziari una tantum, i costi variano da 500€ a 1.500€ in base alla complessità delle situazioni. Non riceviamo alcuna commissione da prodotti finanziari, assicurativi o bancari."
    },
    {
      question: "Quali servizi specifici offrite?",
      answer: "Offriamo una gamma completa di servizi finanziari: pianificazioni patrimoniali personalizzate, gestioni di portafogli basate su evidenze scientifiche, consulenze per investimenti in oro fisico, consulenze specializzate su Bitcoin e crypto asset, education e coaching finanziario per aumentare la tua consapevolezza e autonomia decisionale."
    },
    {
      question: "Come fate a garantire che i nostri investimenti siano sicuri?",
      answer: "Non deteniamo mai direttamente il tuo denaro o i tuoi strumenti finanziari. I tuoi asset rimangono depositati presso banche o broker regolamentati a tuo nome. Il nostro ruolo è guidarti nella scelta degli investimenti più adatti e monitorarli nel tempo. Inoltre, privilegiamo strumenti finanziari semplici, trasparenti e a basso costo come ETF, che offrono una diversificazione naturale e riducono il rischio specifico."
    },
    {
      question: "Quali sono le differenze tra i consulenti fee-only e i consulenti bancari?",
      answer: "I consulenti bancari sono dipendenti o agenti di una banca e possono consigliare solo i prodotti della loro banca, spesso percependo commissioni sulla vendita. Noi, come consulenti fee-only, veniamo pagati esclusivamente da te e possiamo consigliarti qualsiasi prodotto disponibile sul mercato, selezionando quelli più efficienti e adatti alle tue esigenze, senza alcun incentivo a preferirne alcuni rispetto ad altri."
    },
    {
      question: "Cosa dobbiamo portare ai primi appuntamenti?",
      answer: "Per massimizzare l'efficacia dei primi incontri, è utile portare: 1) Un elenco dei vostri obiettivi finanziari a breve, medio e lungo termine, 2) Gli estratti conto degli ultimi tre mesi dei vostri investimenti attuali, 3) Dettagli sulle vostre entrate e uscite mensili, 4) Informazioni su eventuali debiti (mutui, prestiti), 5) Documenti relativi a polizze assicurative esistenti. Questo ci permetterà di avere un quadro completo delle vostre situazioni finanziarie."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Domande Frequenti</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Risposte alle domande più comuni sulla consulenza finanziaria indipendente
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-toro-dark hover:text-toro-gold px-2">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 px-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

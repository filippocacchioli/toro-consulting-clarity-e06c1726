
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
      question: "Che cosa fa un consulente finanziario indipendente?",
      answer: "Un consulente finanziario indipendente, come me, offre consulenza personalizzata senza vendere prodotti finanziari. Vengo pagato direttamente dal cliente (fee-only) e non ricevo commissioni da banche o società di prodotto, eliminando così qualsiasi conflitto di interesse. Il mio unico obiettivo è tutelare al massimo i tuoi interessi e aiutarti a raggiungere i tuoi obiettivi finanziari."
    },
    {
      question: "Quali sono i vantaggi di una consulenza finanziaria indipendente?",
      answer: "I principali vantaggi includono: 1) Totale assenza di conflitti di interesse, 2) Accesso a un'analisi oggettiva dell'intero mercato e non solo dei prodotti di una singola banca, 3) Piani d'investimento personalizzati basati sui tuoi obiettivi, 4) Maggiore trasparenza sui costi e sui rischi degli investimenti, 5) Consulenza continuativa che si adatta al cambiare della tua situazione personale."
    },
    {
      question: "Quanto costa il tuo servizio di consulenza?",
      answer: "Il mio modello di compenso è completamente trasparente e basato su fee dirette. Per la consulenza continuativa, la tariffa parte da 1.500€/anno o una percentuale tra lo 0,5-1% del patrimonio gestito (con fee decrescenti all'aumentare del patrimonio). Per un piano finanziario una tantum, il costo varia da 500€ a 1.500€ in base alla complessità della situazione. Non ricevo alcuna commissione da prodotti finanziari, assicurativi o bancari."
    },
    {
      question: "Quali servizi specifici offri?",
      answer: "Offro una gamma completa di servizi finanziari: pianificazione patrimoniale personalizzata, gestione di portafogli basata su evidenze scientifiche, consulenza per investimenti in oro fisico, consulenza specializzata su Bitcoin e crypto asset, education e coaching finanziario per aumentare la tua consapevolezza e autonomia decisionale."
    },
    {
      question: "Come fai a garantire che i miei investimenti siano sicuri?",
      answer: "Non detengo mai direttamente il tuo denaro o i tuoi strumenti finanziari. I tuoi asset rimangono depositati presso banche o broker regolamentati a tuo nome. Il mio ruolo è guidarti nella scelta degli investimenti più adatti e monitorarli nel tempo. Inoltre, privilegio strumenti finanziari semplici, trasparenti e a basso costo come ETF, che offrono una diversificazione naturale e riducono il rischio specifico."
    },
    {
      question: "Qual è la differenza tra un consulente fee-only e un consulente bancario?",
      answer: "Un consulente bancario è dipendente o agente di una banca e può consigliare solo i prodotti della sua banca, spesso percependo commissioni sulla vendita. Io, come consulente fee-only, vengo pagato esclusivamente da te e posso consigliarti qualsiasi prodotto disponibile sul mercato, selezionando quelli più efficienti e adatti alle tue esigenze, senza alcun incentivo a preferirne alcuni rispetto ad altri."
    },
    {
      question: "Cosa devo portare al primo appuntamento?",
      answer: "Per massimizzare l'efficacia del primo incontro, è utile portare: 1) Un elenco dei tuoi obiettivi finanziari a breve, medio e lungo termine, 2) Gli estratti conto degli ultimi tre mesi dei tuoi investimenti attuali, 3) Dettagli sulle tue entrate e uscite mensili, 4) Informazioni su eventuali debiti (mutui, prestiti), 5) Documenti relativi a polizze assicurative esistenti. Questo mi permetterà di avere un quadro completo della tua situazione finanziaria."
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

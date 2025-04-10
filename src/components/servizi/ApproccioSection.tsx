
import React from 'react';
import { Target, ChartBar, Clock, Wallet, Users } from 'lucide-react';

const ApproccioSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Il Nostro Approccio</h2>
            <p className="text-lg text-gray-700 mb-6">
              Come consulenti finanziari indipendenti, il nostro unico obiettivo è tutelare i tuoi interessi. 
              Non vendiamo prodotti e non riceviamo commissioni da terze parti.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-toro-gold/10 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-toro-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Orientati ai tuoi obiettivi</h3>
                  <p className="text-gray-600">Ogni piano è costruito intorno alle tue esigenze e ai tuoi sogni.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-toro-gold/10 p-3 rounded-full mr-4">
                  <ChartBar className="h-6 w-6 text-toro-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Basati su evidenze</h3>
                  <p className="text-gray-600">Strategie supportate da ricerca accademica, non da opinioni o mode.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-toro-gold/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-toro-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Orizzonte a lungo termine</h3>
                  <p className="text-gray-600">Costruiamo strategie sostenibili e orientate al lungo periodo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <Wallet className="h-10 w-10 text-toro-gold mb-4" />
              <h3 className="text-lg font-medium mb-2">100% Indipendenti</h3>
              <p className="text-gray-600">Zero conflitti di interesse nella selezione degli investimenti</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <Users className="h-10 w-10 text-toro-gold mb-4" />
              <h3 className="text-lg font-medium mb-2">Fee-Only</h3>
              <p className="text-gray-600">Paghi solo per la consulenza, non per la vendita di prodotti</p>
            </div>
            <div className="col-span-2 bg-toro-gold/10 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-toro-dark">La nostra missione</h3>
              <p className="text-gray-700">
                Aiutarti a prendere decisioni finanziarie consapevoli, fornendoti gli strumenti 
                e le conoscenze per costruire un patrimonio solido e duraturo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproccioSection;

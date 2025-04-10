
import React from 'react';

const FeeSection = () => {
  return (
    <section id="fee" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-8">Le Nostre Fee</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Operiamo con un modello di compenso trasparente e orientato ai risultati.
          Tutte le nostre fee sono concordate in anticipo e non riceviamo commissioni da prodotti o società terze.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-toro-dark text-white">
                  <th className="py-4 px-6 text-left rounded-tl-md">Tipo di Servizio</th>
                  <th className="py-4 px-6 text-left">Modello di Fee</th>
                  <th className="py-4 px-6 text-left rounded-tr-md">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Consulenza Continuativa</td>
                  <td className="py-4 px-6">Da 1.500€/anno o 0,5-1% del patrimonio</td>
                  <td className="py-4 px-6">Fee decrescenti all'aumentare del patrimonio</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Piano Finanziario</td>
                  <td className="py-4 px-6">Da 500€ a 1.500€ una tantum</td>
                  <td className="py-4 px-6">Basato sulla complessità della situazione</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Coaching Finanziario</td>
                  <td className="py-4 px-6">Da 100€/ora</td>
                  <td className="py-4 px-6">Sessioni individuali o di gruppo</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Consulenza Specialistica</td>
                  <td className="py-4 px-6">Da 200€/ora</td>
                  <td className="py-4 px-6">Per temi specifici (oro, crypto, ecc.)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Tutte le fee sono trasparenti e concordate in anticipo. Non riceviamo commissioni da terze parti.
          </p>
        </div>
        
        <div className="mt-12 bg-toro-gold/10 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-4 text-center text-toro-dark">Perché scegliere il modello fee-only?</h3>
          <p className="text-gray-700 mb-6 text-center">
            Quando il consulente è pagato solo dal cliente, può agire esclusivamente nel tuo interesse 
            senza essere influenzato da incentivi esterni per vendere determinati prodotti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeeSection;

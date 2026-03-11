import SlideLayout from "./SlideLayout";

const HemsidaSeoSlide = () => (
  <SlideLayout variant="dark">
    <h2 className="font-display text-3xl font-bold mb-6">Hemsida & SEO</h2>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">Hemsidan ska innehålla</h3>
        <div className="space-y-2 font-body text-sm opacity-80">
          <p>• Beskrivning av verksamheten och erbjudande</p>
          <p>• Tydlig processbeskrivning</p>
          <p>• Tydligt bokningsflöde</p>
          <p>• Patientinformation och blogg</p>
          <p>• GDPR och juridiska avtal</p>
          <p>• Information om aktiva behandlare</p>
          <p>• FAQ</p>
          <p>• Kostnad och betalningsmetoder</p>
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">SEO</h3>
        <div className="space-y-2 font-body text-sm opacity-80">
          <p>Fokus på målgruppens sökbeteende och behandlingsrelaterade sökord.</p>
          <p className="mt-4 opacity-60">Tidsåtgång: ca 1 månad</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default HemsidaSeoSlide;

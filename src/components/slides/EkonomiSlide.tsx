import SlideLayout from "./SlideLayout";

const EkonomiSlide = () => (
  <SlideLayout variant="dark">
    <h2 className="font-display text-3xl font-bold mb-6">Ekonomisk kalkylmodell</h2>
    <p className="font-body text-sm opacity-60 mb-8">
      Innan lansering ska varje verksamhet ha en ekonomisk analys.
    </p>
    <div className="grid grid-cols-3 gap-6 flex-1">
      <div className="border border-primary-foreground/20 rounded-lg p-6">
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">Intäkter</h3>
        <ul className="space-y-2 font-body text-sm opacity-70">
          <li>• Pris per behandling/utredning</li>
          <li>• Antal patienter per månad</li>
          <li>• Förväntad tillväxt</li>
          <li>• Konkurrentanalys</li>
        </ul>
      </div>
      <div className="border border-primary-foreground/20 rounded-lg p-6">
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">Kostnader</h3>
        <ul className="space-y-2 font-body text-sm opacity-70">
          <li>• Personal</li>
          <li>• Teknik</li>
          <li>• Administration</li>
          <li>• Marknadsföring</li>
        </ul>
      </div>
      <div className="border border-primary-foreground/20 rounded-lg p-6">
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">Break-even</h3>
        <p className="font-body text-sm opacity-70">
          Antal patienter per månad som krävs för att täcka kostnader.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default EkonomiSlide;

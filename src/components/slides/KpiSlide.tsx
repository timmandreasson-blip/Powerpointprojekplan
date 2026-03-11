import SlideLayout from "./SlideLayout";

const KpiSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-6">Uppföljning & KPI</h2>
    <p className="font-body text-muted-foreground text-sm mb-6">Uppföljning ska ske månadsvis</p>
    <div className="grid grid-cols-3 gap-6 flex-1">
      <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
        <h3 className="font-display font-bold mb-3 text-slide-navy">Kliniska</h3>
        <ul className="space-y-2 font-body text-sm text-muted-foreground">
          <li>• Antal genomförda utredningar</li>
          <li>• Behandlingsavslut</li>
          <li>• Patientnöjdhet</li>
          <li>• Behandlingsresultat</li>
        </ul>
      </div>
      <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
        <h3 className="font-display font-bold mb-3 text-slide-navy">Operativa</h3>
        <ul className="space-y-2 font-body text-sm text-muted-foreground">
          <li>• Väntetid till bedömning</li>
          <li>• Avbokningsfrekvens</li>
        </ul>
      </div>
      <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
        <h3 className="font-display font-bold mb-3 text-slide-navy">Ekonomiska</h3>
        <ul className="space-y-2 font-body text-sm text-muted-foreground">
          <li>• Intäkt per patient</li>
          <li>• Kostnad per behandling</li>
          <li>• Beläggningsgrad</li>
          <li>• Lönsamhet per gren</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

export default KpiSlide;

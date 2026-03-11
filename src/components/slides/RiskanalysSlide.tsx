import SlideLayout from "./SlideLayout";

const risks = [
  { area: "Kliniska risker", color: "bg-destructive" },
  { area: "Tekniska risker", color: "bg-slide-blue" },
  { area: "Juridiska risker", color: "bg-slide-gold" },
  { area: "Operativa risker", color: "bg-slide-navy" },
];

const compliance = [
  "Dataskydd & GDPR",
  "Säker patientkommunikation",
  "Säker journalföring",
  "Legitimerad personal",
  "Medicinskt ansvar",
];

const RiskanalysSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-6">Riskanalys & Compliance</h2>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Riskområden</h3>
        <div className="space-y-3">
          {risks.map((r) => (
            <div key={r.area} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
              <div className={`w-3 h-3 rounded-full ${r.color}`} />
              <span className="font-body text-sm">{r.area}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground mt-3">
          Varje risk ska ha ansvarig person och åtgärdsplan.
        </p>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Juridisk compliance</h3>
        <div className="space-y-2">
          {compliance.map((c) => (
            <div key={c} className="flex items-center gap-3 bg-muted/60 rounded p-3">
              <div className="w-1.5 h-1.5 rounded-full bg-slide-gold" />
              <span className="font-body text-sm">{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 border border-border rounded-lg p-4">
          <h4 className="font-display text-sm font-bold mb-2">Internationell verksamhet</h4>
          <p className="font-body text-xs text-muted-foreground">
            EES-regler, försäkringsfrågor och betalningsregler vid behandling utanför Sverige.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default RiskanalysSlide;

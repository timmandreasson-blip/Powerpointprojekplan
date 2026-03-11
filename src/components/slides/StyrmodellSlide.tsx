import SlideLayout from "./SlideLayout";

const areas = [
  { title: "Strategiska beslut", desc: "Prioriteringar och resursfördelning" },
  { title: "Planering", desc: "Rekrytering, koordinering, rutiner och arbetssätt" },
  { title: "Teknik", desc: "Systemintegrationer, digitala flöden och betalsystem" },
  { title: "Implementering", desc: "Överlämning till daglig verksamhet" },
];

const StyrmodellSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-8">Styrmodell</h2>
    <p className="font-body text-muted-foreground mb-6">
      Varje projekt ska ha en tydlig styrstruktur inom följande områden:
    </p>
    <div className="flex flex-col gap-4 flex-1">
      {areas.map((a, i) => (
        <div key={a.title} className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border shadow-sm">
          <div className="w-8 h-8 rounded bg-slide-gold/20 flex items-center justify-center">
            <span className="font-display font-bold text-slide-gold text-sm">{i + 1}</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-base">{a.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default StyrmodellSlide;

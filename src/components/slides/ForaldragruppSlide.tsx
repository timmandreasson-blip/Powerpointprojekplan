import SlideLayout from "./SlideLayout";

const sessions = [
  "Träff 1: Introduktion, neuropsykiatriska tillstånd & föräldraskapets utmaningar",
  "Träff 2: Positivt samspel, verktygslådan, bygga relation & motivation",
  "Träff 3: Kommunikation + tydliga instruktioner & struktur",
  "Träff 4: Konflikter, känsloreglering — förebygga & hantera",
  "Träff 5: Nödbroms, regler & gränssättning samt avslut",
];

const ForaldragruppSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-2">Föräldragruppsverksamheten</h2>
    <p className="font-body text-sm text-muted-foreground mb-6">
      Digital behandlingsmodell baserad på EES vård · Leds av legitimerad psykolog
    </p>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-base font-bold mb-3">Gruppbehandling — 5 träffar</h3>
        <div className="space-y-2">
          {sessions.map((s, i) => (
            <div key={i} className="flex items-start gap-3 bg-muted/60 rounded p-3">
              <div className="w-6 h-6 rounded-full bg-slide-navy text-primary-foreground flex items-center justify-center font-body text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="font-body text-xs leading-relaxed">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display text-base font-bold mb-3">Process</h3>
        <div className="space-y-2 font-body text-sm text-muted-foreground">
          <p>• Patienter ansöker om förhandsbesked</p>
          <p>• Barnet har ADHD och/eller Autism</p>
          <p>• Saknar stöd i egen region/kommun</p>
          <p>• Klinisk bedömning → placering i grupp</p>
          <p>• Modulbaserad behandling med journalmall</p>
        </div>
        <div className="mt-4 bg-slide-gold/10 border border-slide-gold/30 rounded-lg p-3">
          <p className="font-body text-xs text-muted-foreground">
            💡 Behöver fler behandlingsprogram? Möjlig justering av utbildningsfokus.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ForaldragruppSlide;

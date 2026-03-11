import SlideLayout from "./SlideLayout";

const phases = [
  "Strategisk definiering",
  "Process och struktur",
  "Teknisk och organisatorisk uppbyggnad",
  "Hemsida och SEO",
  "Lansering och implementering",
];

const ProjektstrukturSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-8">Projektstruktur</h2>
    <p className="font-body text-muted-foreground mb-8">
      Etablering av nya verksamheter genomförs i fem projektfaser.
    </p>
    <div className="flex items-center gap-2 flex-1">
      {phases.map((p, i) => (
        <div key={p} className="flex items-center gap-2 flex-1">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-10 h-10 rounded-full bg-slide-navy text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
              {i + 1}
            </div>
            <p className="font-body text-xs text-center leading-tight">{p}</p>
          </div>
          {i < phases.length - 1 && (
            <div className="w-8 h-0.5 bg-slide-gold mt-[-20px]" />
          )}
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default ProjektstrukturSlide;

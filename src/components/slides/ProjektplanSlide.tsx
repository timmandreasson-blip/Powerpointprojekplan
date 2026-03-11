import SlideLayout from "./SlideLayout";

const tasks = [
  { name: "Workshops", months: [true, false, false, false] },
  { name: "Journalstruktur & Kaddio", months: [false, true, true, false] },
  { name: "Rutindokument", months: [true, true, true, false] },
  { name: "Tekniska lösningar", months: [false, true, true, false] },
  { name: "Betalningslösningar", months: [false, true, true, false] },
  { name: "Videoplattform", months: [false, true, false, false] },
  { name: "Hemsida & SEO", months: [false, true, true, false] },
  { name: "Rekrytering", months: [true, true, true, true] },
  { name: "Lansering", months: [false, false, true, false] },
  { name: "Implementering", months: [false, false, false, true] },
];

const ProjektplanSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-6">Projektplan — Tidslinje</h2>
    <div className="flex-1">
      {/* Header */}
      <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-2 mb-2">
        <div className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Arbete
        </div>
        {["M1", "M2", "M3", "M4"].map((m) => (
          <div key={m} className="font-body text-xs font-semibold text-muted-foreground text-center uppercase tracking-wider">
            {m}
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-border mb-2" />
      {tasks.map((t, i) => (
        <div
          key={t.name}
          className={`grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-2 py-1.5 ${
            i % 2 === 0 ? "bg-muted/50" : ""
          } rounded`}
        >
          <div className="font-body text-sm pl-2">{t.name}</div>
          {t.months.map((active, mi) => (
            <div key={mi} className="flex items-center justify-center">
              {active && (
                <div className="w-8 h-3 bg-slide-navy rounded-sm" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default ProjektplanSlide;

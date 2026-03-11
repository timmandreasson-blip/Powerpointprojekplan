import SlideLayout from "./SlideLayout";

const systems = [
  { title: "Bokningssystem", items: ["Automatiserad bokning", "Tidshantering"] },
  { title: "Betalningslösningar", items: ["Kort", "Faktura", "Internationellt", "Delbetalning"] },
  { title: "Videoplattform", items: ["Individuella besök", "Gruppbehandling", "Säker kommunikation"] },
  { title: "Journalsystem", items: ["Kaddio", "Modulbaserade mallar"] },
];

const TekniskSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-6">Teknisk uppbyggnad</h2>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {systems.map((s) => (
        <div key={s.title} className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <h3 className="font-display font-bold text-base mb-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slide-gold" />
            {s.title}
          </h3>
          <ul className="space-y-1">
            {s.items.map((item) => (
              <li key={item} className="font-body text-sm text-muted-foreground">• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default TekniskSlide;

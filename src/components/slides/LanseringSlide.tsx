import SlideLayout from "./SlideLayout";

const steps = [
  "Test av patientflöde",
  "Test av betalning",
  "Test av videoplattform",
  "Test av journalstruktur",
  "Pilotpatienter",
  "Patientintervjuer",
  "Full lansering",
];

const LanseringSlide = () => (
  <SlideLayout variant="navy">
    <h2 className="font-display text-3xl font-bold mb-6">Lansering & implementering</h2>
    <p className="font-body text-sm opacity-60 mb-8">
      Lansering sker först när system, rutiner och personal är på plats.
    </p>
    <div className="flex-1 flex flex-col gap-3">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-4">
          <div className={`w-3 h-3 rounded-full ${i === steps.length - 1 ? "bg-slide-gold" : "border-2 border-primary-foreground/30"}`} />
          <div className="flex-1 h-px bg-primary-foreground/10" />
          <span className="font-body text-sm opacity-80">{s}</span>
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default LanseringSlide;

import SlideLayout from "./SlideLayout";

const questions = [
  "Vilken målgrupp verksamheten riktar sig till",
  "Vilken behandling eller tjänst som erbjuds",
  "Hur patientflödet ska se ut",
  "Vilken vårdprocess som ska användas",
  "Vilka juridiska krav som gäller",
  "Vilka tekniska system som behövs",
];

const StrategiskSlide = () => (
  <SlideLayout variant="navy">
    <h2 className="font-display text-3xl font-bold mb-2">Strategisk definiering</h2>
    <p className="font-body text-sm opacity-60 mb-6">Strategisk workshop per verksamhet · ca 2–3 timmar</p>
    <div className="flex-1 grid grid-cols-2 gap-4">
      {questions.map((q, i) => (
        <div key={i} className="flex items-start gap-3 border border-primary-foreground/15 rounded-lg p-4">
          <span className="text-slide-gold font-display font-bold text-lg">?</span>
          <p className="font-body text-sm opacity-80">{q}</p>
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default StrategiskSlide;

import SlideLayout from "./SlideLayout";

const steps = [
  "Patient registrerar sig",
  "Bokning av tid",
  "Betalning",
  "Klinisk bedömning",
  "Behandling / utredning",
  "Uppföljning",
];

const PatientflodeSlide = () => (
  <SlideLayout variant="dark">
    <h2 className="font-display text-3xl font-bold mb-2">Digitalt patientflöde</h2>
    <p className="font-body text-sm opacity-60 mb-8">
      Standardiserat, automatiserat och sömlöst — utan manuella moment
    </p>
    <div className="flex items-center justify-center flex-1">
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-slide-gold/20 border-2 border-slide-gold flex items-center justify-center">
                <span className="font-display font-bold text-slide-gold text-sm">{i + 1}</span>
              </div>
              <span className="font-body text-xs text-center max-w-[80px] opacity-80">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-6 h-0.5 bg-slide-gold/40 mt-[-20px]" />
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="text-center font-body text-xs opacity-40">
      Mål: ett sömlöst patientflöde utan manuella moment
    </div>
  </SlideLayout>
);

export default PatientflodeSlide;

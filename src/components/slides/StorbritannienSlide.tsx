import SlideLayout from "./SlideLayout";

const StorbritannienSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-2">Utredningar — Storbritannien</h2>
    <p className="font-body text-sm text-muted-foreground mb-8">
      Digitala neuropsykiatriska utredningar riktade till vuxna i UK
    </p>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-base font-bold mb-4">Process</h3>
        <div className="space-y-2 font-body text-sm text-muted-foreground">
          <p>• Ett tillfälle med psykolog — DIVA-genomgång</p>
          <p>• Anhöriga får skattningsformulär</p>
          <p>• Engelskspråkig kommunikation</p>
          <p>• Internationella betalningslösningar</p>
          <p>• Anpassade juridiska patientavtal</p>
        </div>
      </div>
      <div>
        <h3 className="font-display text-base font-bold mb-4">Krav</h3>
        <div className="space-y-2">
          {["Engelskspråkig personal", "Internationella betallösningar", "Juridiska avtal anpassade för UK", "Samarbetspartners för medicinering"].map((k) => (
            <div key={k} className="flex items-center gap-3 bg-muted/60 rounded p-3">
              <div className="w-1.5 h-1.5 rounded-full bg-slide-blue" />
              <span className="font-body text-sm">{k}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default StorbritannienSlide;

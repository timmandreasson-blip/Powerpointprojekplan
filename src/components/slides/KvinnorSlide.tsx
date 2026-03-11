import SlideLayout from "./SlideLayout";

const KvinnorSlide = () => (
  <SlideLayout variant="navy">
    <h2 className="font-display text-3xl font-bold mb-2">Utredningar för kvinnor</h2>
    <p className="font-body text-sm opacity-60 mb-8">
      Psykiatrisk bedömning, utredning och uppföljning — helt digitalt format
    </p>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">Positionering</h3>
        <div className="space-y-3 font-body text-sm opacity-80">
          <p>• Tydligt positionerad som mottagning för kvinnor</p>
          <p>• Utredning utförs av kvinnliga behandlare</p>
          <p>• ADHD och Autism-fokus</p>
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-4 text-slide-gold">Mervärde</h3>
        <div className="space-y-3 font-body text-sm opacity-80">
          <p>• Medicinsk behandling exklusivt för egna patienter</p>
          <p>• Utbildningsmaterial kopplat till medicinering</p>
          <p>• Skapar tillhörighet och exklusivitet</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default KvinnorSlide;

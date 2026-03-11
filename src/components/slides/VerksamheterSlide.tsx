import SlideLayout from "./SlideLayout";

const VerksamheterSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-8">Verksamheter</h2>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        {
          title: "Digital föräldragrupp",
          desc: "Baserad på EES vård för föräldrar till barn med NPF-tillstånd",
          color: "bg-slide-navy",
        },
        {
          title: "Utredningar för kvinnor",
          desc: "Digital psykiatrisk bedömning och utredning av ADHD & Autism riktad till kvinnor",
          color: "bg-slide-gold",
        },
        {
          title: "Utredningar i Storbritannien",
          desc: "Digitala neuropsykiatriska utredningar riktade till vuxna i UK",
          color: "bg-slide-blue",
        },
      ].map((v) => (
        <div key={v.title} className="flex flex-col">
          <div className={`${v.color} h-2 rounded-t-lg`} />
          <div className="bg-card rounded-b-lg p-6 flex-1 shadow-sm border border-border">
            <h3 className="font-display text-lg font-bold mb-3">{v.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6">
      <h3 className="font-display text-lg font-bold mb-3">Övergripande fokusområden</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-body text-sm text-muted-foreground">
        <p>• Dokumentationsprocesser & journalstruktur</p>
        <p>• Betalningssystem med internationellt stöd</p>
        <p>• Digitalt sömlöst patientflöde</p>
        <p>• Videoplattform för gruppbehandling</p>
      </div>
    </div>
  </SlideLayout>
);

export default VerksamheterSlide;

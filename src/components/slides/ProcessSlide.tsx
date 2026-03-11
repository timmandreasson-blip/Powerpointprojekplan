import SlideLayout from "./SlideLayout";

const docs = [
  "Vårdprocess och kliniska riktlinjer",
  "Behandlingsmanual",
  "Journalmallar",
  "Professionsbaserade lathundar",
  "Patientinformation & avtal",
  "Behandlingsmaterial",
];

const ProcessSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-6">Process och struktur</h2>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Modulbaserad dokumentation</h3>
        <div className="space-y-3 font-body text-sm text-muted-foreground">
          <p>• Journalanteckningar struktureras modulbaserat</p>
          <p>• Varje behandlingsmoment kopplas till journalmall</p>
          <p>• Standardiserad dokumentation</p>
          <p>• Spårbar klinisk process</p>
          <p>• Minskad variation mellan behandlare</p>
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Rutindokument per verksamhet</h3>
        <div className="space-y-2">
          {docs.map((d) => (
            <div key={d} className="flex items-center gap-3 bg-muted/60 rounded p-3">
              <div className="w-1.5 h-1.5 rounded-full bg-slide-gold" />
              <span className="font-body text-sm">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProcessSlide;

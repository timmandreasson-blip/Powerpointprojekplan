import SlideLayout from "./SlideLayout";

const roles = [
  "Enhetschef", "Ekonomiansvarig", "Legitimerad psykolog",
  "Psykiater", "Sjuksköterska", "Administratör",
  "Projektledare", "Medicinskt ansvarig",
];

const RekryteringSlide = () => (
  <SlideLayout>
    <h2 className="font-display text-3xl font-bold mb-6">Rekrytering</h2>
    <p className="font-body text-muted-foreground mb-6">Rekrytering startar tidigt · 3–4 månader</p>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Process</h3>
        <div className="space-y-3">
          {["Definiera roller", "Definiera kompetenskrav", "Rekrytera behandlare", "Utbilda personal"].map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-slide-navy text-primary-foreground flex items-center justify-center font-body text-xs font-bold">
                {i + 1}
              </div>
              <span className="font-body text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Roller</h3>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <span key={r} className="bg-muted rounded-full px-3 py-1.5 font-body text-xs">{r}</span>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default RekryteringSlide;

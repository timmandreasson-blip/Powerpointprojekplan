import SlideLayout from "./SlideLayout";

const principles = [
  { title: "Standardisering", desc: "Alla verksamheter byggs enligt samma strukturella modell" },
  { title: "Digitalisering", desc: "Patientflöden ska vara digitala i så stor utsträckning som möjligt" },
  { title: "Modularisering", desc: "Behandlingar, journaler och processer byggs i moduler" },
  { title: "Reproducerbarhet", desc: "Nya verksamheter implementeras oberoende av behandlingsområde eller marknad" },
];

const ChecklistaSlide = () => (
  <SlideLayout variant="dark">
    <h2 className="font-display text-3xl font-bold mb-8">Centrala principer</h2>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {principles.map((p, i) => (
        <div key={p.title} className="border border-primary-foreground/20 rounded-lg p-6 flex flex-col gap-2">
          <span className="text-slide-gold font-display text-lg font-bold">
            0{i + 1}
          </span>
          <h3 className="font-display text-xl font-bold">{p.title}</h3>
          <p className="font-body text-sm opacity-70 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </SlideLayout>
);

export default ChecklistaSlide;

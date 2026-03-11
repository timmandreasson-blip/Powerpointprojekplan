import SlideLayout from "./SlideLayout";

const TitleSlide = () => (
  <SlideLayout variant="navy">
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
      <h1 className="font-display text-6xl font-bold tracking-tight">
        Nova
      </h1>
      <div className="w-24 h-0.5 bg-slide-gold" />
      <h2 className="font-display text-3xl font-normal opacity-90">
        Projektplan
      </h2>
      <p className="text-lg opacity-60 font-body max-w-xl mt-4">
        Etablering av digitala verksamheter inom neuropsykiatrisk vård
      </p>
    </div>
    <div className="text-center opacity-40 font-body text-sm">
      novapsykiatri.se
    </div>
  </SlideLayout>
);

export default TitleSlide;

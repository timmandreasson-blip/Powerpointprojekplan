import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import TitleSlide from "@/components/slides/TitleSlide";
import VerksamheterSlide from "@/components/slides/VerksamheterSlide";
import ProjektplanSlide from "@/components/slides/ProjektplanSlide";
import ChecklistaSlide from "@/components/slides/ChecklistaSlide";
import ProjektstrukturSlide from "@/components/slides/ProjektstrukturSlide";
import StyrmodellSlide from "@/components/slides/StyrmodellSlide";
import StrategiskSlide from "@/components/slides/StrategiskSlide";
import ProcessSlide from "@/components/slides/ProcessSlide";
import TekniskSlide from "@/components/slides/TekniskSlide";
import HemsidaSeoSlide from "@/components/slides/HemsidaSeoSlide";
import RekryteringSlide from "@/components/slides/RekryteringSlide";
import LanseringSlide from "@/components/slides/LanseringSlide";
import KpiSlide from "@/components/slides/KpiSlide";
import RiskanalysSlide from "@/components/slides/RiskanalysSlide";
import EkonomiSlide from "@/components/slides/EkonomiSlide";
import ForaldragruppSlide from "@/components/slides/ForaldragruppSlide";
import KvinnorSlide from "@/components/slides/KvinnorSlide";
import StorbritannienSlide from "@/components/slides/StorbritannienSlide";
import PatientflodeSlide from "@/components/slides/PatientflodeSlide";

const slides = [
  TitleSlide,
  VerksamheterSlide,
  ProjektplanSlide,
  ChecklistaSlide,
  ProjektstrukturSlide,
  StyrmodellSlide,
  StrategiskSlide,
  ProcessSlide,
  ForaldragruppSlide,
  KvinnorSlide,
  StorbritannienSlide,
  TekniskSlide,
  PatientflodeSlide,
  HemsidaSeoSlide,
  RekryteringSlide,
  LanseringSlide,
  KpiSlide,
  RiskanalysSlide,
  EkonomiSlide,
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (n: number) => {
      if (n >= 0 && n < slides.length) {
        setDirection(n > current ? 1 : -1);
        setCurrent(n);
      }
    },
    [current]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen?.();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, goTo, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  const SlideComponent = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-slide-dark flex flex-col">
      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-[1200px] aspect-[16/9] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/20 text-primary-foreground hover:bg-primary/40 disabled:opacity-20 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/20 text-primary-foreground hover:bg-primary/40 disabled:opacity-20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Fullscreen button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 text-primary-foreground hover:bg-primary/40 transition-all"
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Bottom bar */}
      <div className="bg-slide-navy py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-primary-foreground/60 font-body text-sm">
            Nova Psykiatri — Projektplan
          </span>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? "bg-slide-gold w-6"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
        <span className="text-primary-foreground/60 font-body text-sm">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default Index;

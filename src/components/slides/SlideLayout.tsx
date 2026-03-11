import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: "light" | "dark" | "navy";
}

const SlideLayout = ({ children, variant = "light" }: SlideLayoutProps) => {
  const bgClass = {
    light: "bg-slide-bg text-slide-dark",
    dark: "bg-slide-dark text-primary-foreground",
    navy: "bg-slide-navy text-primary-foreground",
  }[variant];

  return (
    <div className={`w-full h-full rounded-lg overflow-hidden ${bgClass} relative`}>
      <div className="absolute inset-0 p-12 flex flex-col">{children}</div>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slide-gold" />
    </div>
  );
};

export default SlideLayout;

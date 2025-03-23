
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "default" | "lg";
  arrow?: boolean;
}

const CTAButton = ({ 
  children, 
  className, 
  onClick, 
  size = "default", 
  arrow = true 
}: CTAButtonProps) => {
  return (
    <Button
      className={cn(
        "font-medium transition-all duration-300 relative overflow-hidden group bg-primary hover:bg-primary/90",
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        {children}
        {arrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
      <span className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 bg-white/10 group-hover:opacity-100" />
    </Button>
  );
};

export default CTAButton;

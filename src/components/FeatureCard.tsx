
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col p-6 glass rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300",
        `opacity-0 animate-fade-in animation-delay-${delay}00`,
        className
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;

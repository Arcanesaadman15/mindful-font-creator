
import { Check, Pen, Upload, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Pen,
    title: "Write",
    description: "Print and fill out our template with your handwriting style",
    delay: 0
  },
  {
    icon: Upload,
    title: "Upload",
    description: "Scan and upload your completed handwriting sheet",
    delay: 1
  },
  {
    icon: Download,
    title: "Generate",
    description: "Our AI processes your handwriting into a custom font",
    delay: 2
  },
  {
    icon: Check,
    title: "Use",
    description: "Download and install your personal font on any device",
    delay: 3
  }
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">How It Works</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            Create your personalized font in four simple steps
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex-1",
                "opacity-0 animate-fade-in relative",
                `animation-delay-${step.delay + 2}00`
              )}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/3 -right-3 items-center justify-center z-10">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="w-4 h-[2px] bg-primary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

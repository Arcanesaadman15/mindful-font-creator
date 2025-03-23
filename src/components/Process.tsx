
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100",
                "opacity-0 animate-fade-in",
                `animation-delay-${step.delay + 2}00`
              )}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-[2px] bg-gray-200">
                  <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 rounded-full bg-primary"></div>
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

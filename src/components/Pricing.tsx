
import { Check } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const features = [
    "Upload your handwriting",
    "AI font generation",
    "Commercial use license",
    "PDF template included",
    "Lifetime font access",
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Simple, Transparent Pricing</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            One payment, your handwriting preserved forever
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden opacity-0 animate-fade-in animation-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Personal Font</h3>
                  <p className="text-muted-foreground">Your handwriting, digitized forever</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$4</span>
                    <span className="text-muted-foreground mb-1">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">No subscription, yours forever</p>
                </div>
                
                <CTAButton className="w-full justify-center mt-auto">
                  Get Your Font
                </CTAButton>
              </div>
              
              <div className="bg-primary/5 p-8 md:p-10">
                <h4 className="font-medium mb-6">Everything included:</h4>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm font-medium">100% Satisfaction Guarantee</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Not happy with the result? We'll refund your purchase within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

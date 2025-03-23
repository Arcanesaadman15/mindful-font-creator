
import CTAButton from "./CTAButton";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full opacity-0 animate-fade-in">
            Transform your handwriting into a font
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 opacity-0 animate-fade-in animation-delay-100">
            Your Handwriting, <br />
            <span className="relative">
              Digitally Preserved
              <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-primary/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-200 text-balance">
            Upload your handwriting and we'll transform it into a beautiful, 
            personalized digital font that you can use anywhere, in just minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-300">
            <CTAButton size="lg">Create Your Font</CTAButton>
            <a 
              href="#how-it-works" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              See how it works
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto relative opacity-0 animate-fade-in animation-delay-400">
          <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50"></div>
              
              <div className="relative z-10 w-full px-8 py-12 flex flex-col items-center">
                <div className="w-full max-w-md mx-auto p-6 glass rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-medium">Hello!</div>
                    <div className="text-xs text-muted-foreground">Your handwriting</div>
                  </div>
                  
                  <div className="h-[2px] w-full bg-gray-100 mb-4"></div>
                  
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-100 rounded w-3/4 animate-pulse"></div>
                    <div className="h-8 bg-gray-100 rounded w-full animate-pulse"></div>
                    <div className="h-8 bg-gray-100 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="mt-8 w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                  <ArrowDown className="w-8 h-8" />
                </div>
                
                <div className="mt-8 w-full max-w-md mx-auto p-6 glass rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-serif font-medium">Hello!</div>
                    <div className="text-xs text-muted-foreground">Your font</div>
                  </div>
                  
                  <div className="h-[2px] w-full bg-gray-100 mb-4"></div>
                  
                  <div className="space-y-3">
                    <div className="h-8 font-serif bg-gray-50 rounded px-3 flex items-center w-3/4">Your custom font</div>
                    <div className="h-8 font-serif bg-gray-50 rounded px-3 flex items-center w-full">Digitally preserved forever</div>
                    <div className="h-8 font-serif bg-gray-50 rounded px-3 flex items-center w-5/6">Ready to use everywhere</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

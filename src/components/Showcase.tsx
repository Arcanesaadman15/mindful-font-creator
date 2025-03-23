// This component has been removed from the application
// It can be deleted or kept for future reference

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const showcaseItems = [
  {
    id: "casual",
    title: "Casual Script",
    beforeText: "My quick handwriting sample.",
    afterText: "My quick handwriting sample.",
    fontClass: "font-serif italic"
  },
  {
    id: "formal",
    title: "Formal Script",
    beforeText: "Professional handwriting style.",
    afterText: "Professional handwriting style.",
    fontClass: "font-serif"
  },
  {
    id: "artistic",
    title: "Artistic Style",
    beforeText: "Creative lettering example!",
    afterText: "Creative lettering example!",
    fontClass: "font-serif font-bold"
  }
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("casual");
  
  return (
    <section id="showcase" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">See The Transformation</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            From handwritten notes to digital perfection
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in animation-delay-200">
          <Tabs defaultValue="casual" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {showcaseItems.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className="text-sm">
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="relative overflow-hidden rounded-xl border border-gray-200">
              {showcaseItems.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id} 
                  className="relative overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium text-muted-foreground">Handwritten Sample</h3>
                          <div className="p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="space-y-2">
                              <div className="h-8 bg-gray-100 rounded w-full animate-pulse"></div>
                              <div className="h-8 bg-gray-100 rounded w-4/5 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-px w-full bg-gray-200"></div>
                        
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium">Hand-drawn characters</h4>
                          <div className="grid grid-cols-8 gap-2">
                            {Array.from({ length: 8 }, (_, i) => (
                              <div key={i} className="w-full aspect-square bg-gray-100 rounded flex items-center justify-center animate-pulse">
                                <span className="text-transparent">A</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium text-muted-foreground">Digital Font Result</h3>
                          <div className="p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="space-y-2">
                              <div className={cn(
                                "h-8 bg-gray-50 rounded w-full flex items-center px-3",
                                item.fontClass
                              )}>
                                {item.afterText}
                              </div>
                              <div className={cn(
                                "h-8 bg-gray-50 rounded w-4/5 flex items-center px-3",
                                item.fontClass
                              )}>
                                ABCDEFGH...
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-px w-full bg-gray-200"></div>
                        
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium">Digital characters</h4>
                          <div className="grid grid-cols-8 gap-2">
                            {Array.from({ length: 8 }, (_, i) => {
                              const char = String.fromCharCode(65 + i);
                              return (
                                <div 
                                  key={i} 
                                  className={cn(
                                    "w-full aspect-square bg-gray-50 rounded border border-gray-200 flex items-center justify-center",
                                    item.fontClass
                                  )}
                                >
                                  {char}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Showcase;


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How exactly does the handwriting-to-font process work?",
    answer: "You'll download and print our template sheet, fill it out with your handwriting, then scan and upload it. Our AI algorithm analyzes your characters, creates a digital font, and delivers it as a standard font file (.ttf or .otf) ready to install on any device."
  },
  {
    question: "How long does it take to create my font?",
    answer: "The font generation process typically takes just a few minutes after you've uploaded your template. Once complete, you'll receive an email with your font file ready to download and install."
  },
  {
    question: "What if I'm not satisfied with my font?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not happy with the results, contact our support team and we'll work with you to improve it or issue a full refund."
  },
  {
    question: "Can I use my font for commercial purposes?",
    answer: "Yes! Your purchase includes a commercial license, allowing you to use your font for both personal and business purposes, including in designs you sell or distribute."
  },
  {
    question: "What characters are included in my font?",
    answer: "Our standard template includes uppercase and lowercase letters, numbers, common punctuation, and special characters. The exact character set is visible on the template you'll download."
  },
  {
    question: "Can I create multiple fonts from different handwriting styles?",
    answer: "Absolutely! Each purchase allows you to create one font. If you want to create additional fonts (perhaps for different family members or different styles of your own handwriting), you can make additional purchases."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Frequently Asked Questions</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            Everything you need to know about our font creation service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in animation-delay-300">
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a 
            href="mailto:support@fontcraft.com" 
            className="text-primary hover:text-primary/80 font-medium"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

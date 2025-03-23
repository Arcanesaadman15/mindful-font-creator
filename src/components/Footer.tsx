
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: "Product", links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "Examples", href: "#showcase" },
      { name: "FAQ", href: "#faq" },
    ]},
    { title: "Company", links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
    ]},
    { title: "Legal", links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Licenses", href: "#" },
    ]},
  ];
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-display font-bold flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-display">
                F
              </div>
              <span>FontCraft</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your handwriting into a beautiful, personalized font with our 
              simple and intuitive service.
            </p>
          </div>
          
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} FontCraft. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

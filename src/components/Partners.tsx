import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "MARS-DRC",
      logo: "/logo.png",
      description: "Cabinet d'Expertise Principal",
    },
    {
      name: "Banque Centrale du Congo",
      logo: "/logo.png",
      description: "Partenaire institutionnel principal",
    },
    {
      name: "Ministère des Finances",
      logo: "/logo.png",
      description: "Collaboration sur les projets de réforme",
    },
    {
      name: "Entreprises Publiques",
      logo: "/logo.png",
      description: "SNEL, REGIDESO, SONAS, etc.",
    },
    {
      name: "ONG Internationales",
      logo: "/logo.png",
      description: "USAID, Banque Mondiale, FMI",
    },
    {
      name: "Entreprises Privées",
      logo: "/logo.png",
      description: "PME et grandes entreprises",
    },
  ];

  return (
    <section id="partenaires" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-foreground mb-4">
            Nos Partenaires
          </h2>
          <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
            Nous travaillons avec les principales institutions et entreprises du
            secteur public et privé en République Démocratique du Congo
          </p>
        </div>

        <div className="grid-responsive-3">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Découvrez comment nous collaborons avec nos partenaires pour
            <br className="hidden sm:block" />
            créer des solutions durables et impactantes
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 group"
          >
            En savoir plus
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;

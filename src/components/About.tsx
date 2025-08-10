"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section
      id="qui-sommes-nous"
      className="py-12 sm:py-16 lg:py-20 bg-background"
    >
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-lg font-bold text-foreground mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
              Un cabinet d'expertise créé pour apporter un appui significatif à
              la bonne gouvernance et au développement durable.
            </p>
          </div>

          {/* Company Description */}
          <div className="mb-12 sm:mb-16">
            <Card className="shadow-card border-0 bg-green-50">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed text-center">
                  MARS DRC, Sarl a été créé le <strong>8 mars 2020</strong> pour
                  fournir des services de qualité aux différentes entreprises en
                  vue de l'amélioration de la gestion managériale, commerciale,
                  financière, administrative, logistique et des opérations
                  techniques et programmatiques partant de la conception jusqu'à
                  l'évaluation des projets et des programmes avec
                  <strong>
                    {" "}
                    excellence, égalité, équité, efficacité et efficience
                  </strong>
                  .
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision, Mission, Objectives */}
          <div className="grid-responsive-3">
            {/* Vision */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Notre Vision
                </h3>
                <p className="text-gray-600">
                  Être le cabinet de référence en matière de prestations
                  intellectuelles et services techniques en République
                  Démocratique du Congo.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Notre Mission
                </h3>
                <p className="text-gray-600">
                  Accompagner les entreprises dans leur développement en
                  fournissant des solutions innovantes et adaptées à leurs
                  besoins spécifiques.
                </p>
              </CardContent>
            </Card>

            {/* Objectives */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nos Objectifs
                </h3>
                <p className="text-gray-600">
                  Alléger les tâches des entreprises, renforcer les capacités
                  managériales et créer de l'emploi pour les jeunes qualifiés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CalculatorIcon,
  CheckBadgeIcon,
  HeartIcon,
  BellAlertIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: CalculatorIcon,
    title: "Organize suas finanças",
    description:
      "Adicione salários, despesas, dívidas e investimentos em minutos. Tenha uma visão clara do seu dinheiro.",
  },
  {
    icon: HeartIcon,
    title: "Planeje seus sonhos",
    description:
      "Defina objetivos como comprar um carro ou viajar. Veja quanto poupar para alcançá-los.",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Visualize seu futuro",
    description:
      "Projeções de fluxo de caixa e patrimônio em gráficos fáceis de entender. Saiba como você estará daqui 1, 5, 10 anos.",
  },

  {
    icon: BellAlertIcon,
    title: "Controle seu orçamento",
    description:
      "Crie orçamentos mensais e receba alertas para evitar gastos excessivos.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Tudo que você precisa
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 text-left text-lg !text-gray-500"
          >
            Recursos simples e poderosos para organizar sua vida financeira.
          </Typography>
        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:gap-10 lg:grid-cols-4">
          {FEATURES.map(({ icon, title, description }) => (
            <FeatureCard key={title} icon={icon} title={title}>
              {description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;

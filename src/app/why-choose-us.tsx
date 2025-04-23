"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ChartPieIcon,
  ClockIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  KeyIcon,
  LockClosedIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          className="mb-2 md:w-10/12 font-normal !text-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="bg-gray-100">
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
        <Typography
          variant="h2"
          className="text-center mb-2"
          color="blue-gray"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Por que usar o FinText?
        </Typography>
        <Typography
          variant="lead"
          className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          A solução para quem quer sair do caos financeiro e construir um futuro
          seguro.
        </Typography>
        <div className="mt-8">
          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
            <BackgroundCard title="Seus problemas financeiros têm solução">
              <></>
            </BackgroundCard>
            <div className="space-y-8">
              <div className="my-4">
                <Option icon={MapIcon} title="Navegando às cegas">
                  Você tem ideia de como sua situação financeira estará em 5
                  anos? A maioria das pessoas não consegue enxergar além do
                  próximo mês.
                </Option>
              </div>
              <div className="mb-4 flex gap-4">
                <Option icon={LockClosedIcon} title="Preso no ciclo de dívidas">
                  Para muitos brasileiros, os juros consomem grande parte da
                  renda, criando um ciclo aparentemente impossível de escapar.
                </Option>
              </div>
              <Option
                icon={CalendarDaysIcon}
                title="Sempre adiando seus sonhos"
              >
                Casa própria, viagem internacional, aposentadoria tranquila...
                sempre para um futuro que nunca chega por falta de planejamento
                estruturado.
              </Option>

              <Option
                icon={BanknotesIcon}
                title="Estresse constante com dinheiro"
              >
                O peso da incerteza financeira afeta sua saúde mental,
                relacionamentos e capacidade de aproveitar o presente.
              </Option>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8">
              <div className="my-4">
                <Option
                  icon={ChartBarIcon}
                  title="Visualize sua jornada financeira"
                >
                  Dashboard personalizável que mostra exatamente onde você está
                  e para onde está indo financeiramente, em linguagem simples e
                  visual.
                </Option>
              </div>
              <div className="mb-4 flex gap-4">
                <Option icon={ClockIcon} title="Veja seu futuro financeiro">
                  Simulações realistas que mostram o impacto de suas decisões
                  financeiras ao longo do tempo, com múltiplos cenários
                  personalizáveis.
                </Option>
              </div>
              <Option icon={CreditCardIcon} title="Escape do ciclo de dívidas">
                Estratégias otimizadas para eliminação de dívidas, mostrando o
                caminho mais rápido para a liberdade financeira.
              </Option>

              <Option
                icon={CloudIcon}
                title="Realize seus sonhos com planejamento"
              >
                Transforme desejos em metas concretas com planos de ação
                detalhados e monitoramento automático de progresso.
              </Option>
            </div>
            <BackgroundCard title="Controle financeiro que faz sentido para você">
              <></>
            </BackgroundCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;

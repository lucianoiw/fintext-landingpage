"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Por que criamos o FinText: A história por trás da plataforma",
    desc: "Descubra como identificamos a necessidade de um sistema de projeções financeiras verdadeiramente útil para os brasileiros.",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "Desenvolvendo o MVP: Definindo as funcionalidades essenciais",
    desc: "Saiba como priorizamos as funcionalidades para entregar valor real desde a primeira versão.",
  },
  {
    img: "/image/blogs/blog3.svg",
    title:
      "Projeções financeiras: Por que a maioria dos apps falha nesse aspecto",
    desc: "Analisamos as limitações dos aplicativos financeiros atuais e como estamos resolvendo esses problemas.",
  },
  {
    img: "/image/blogs/blog4.svg",
    title: "Experiência do usuário em finanças: Simplificando o complexo",
    desc: "Como estamos transformando conceitos financeiros complexos em experiências intuitivas.",
  },
];

export function OtherCourses() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Acompanhe nossa jornada
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500"
        >
          Estamos construindo o FinText em público e compartilhando todo o
          processo.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;

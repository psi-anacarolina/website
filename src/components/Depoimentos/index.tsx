'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { GridContainer } from "../GridContainer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const testimonials = [
    {
      id: 1,
      content: "A Ana é uma ótima profissional, muito <strong>ética, empática e te faz sentir muito acolhido durante as sessões.</strong> Desde quando comecei a terapia, me olho com mais cuidado e percebi que isso gerou muitas mudanças na minha vida e na forma como eu interpreto as situações...",
      author: "Pedro",
      age: "26 anos - Contador",
    },
    {
      id: 2,
      content: "Iniciar psicoterapia foi uma decisão díficil, mas me trouxe muitos benefícios. Eu estava lutando contra a depressão e não sabia lidar sozinha. <strong>A Ana criou um espaço seguro</strong> para eu expressar meus sentimentos e me ajudou a enfrentar meus problemas.",
      author: "Isabela",
      age: "16 anos - Estudante",
    },
    {
      id: 3,
      content: "<strong>Profissional extremamente humana, sensível e sensata!</strong> Me ajudou a ter um estilo de vida mais saudável e a perceber coisas sobre mim que jamais imaginaria. Sou muito grata pelo incentivo e pelo cuidado ao me direcionar a novas descobertas",
      author: "Aline",
      age: "26 anos - Administradora",
    },
    {
      id: 4,
      content: "No início, estava apreensiva, mas logo percebi que ter um espaço seguro para expressar meus sentimentos sem julgamentos era o que precisava. <strong>A terapia tem me ajudado a lidar com a ansiedade e a construir relações mais saudáveis.</strong>",
      author: "Ana Paula",
      age: "25 anos - Arquiteta",
    },
    {
      id: 5,
      content: "Busquei terapia no último ano do ensino médio, enfrentando pressão acadêmica e me sentindo perdido quanto ao futuro. <strong>A Ana me ajudou a entender minhas necessidades e a criar um plano para meus objetivos.</strong> Sou grato por esse apoio durante essa transição.",
      author: "Marcos",
      age: "19 anos - Estudante",
    },
    {
      id: 6,
      content: "A Ana me ajudou a encontrar um caminho em um momento muito difícil da minha vida. <strong>Trabalho excelente da profissional</strong>, grato pelo apoio e pela compreensão que encontrei nas sessões.",
      author: "Lucas",
      age: "30 anos - Engenheiro",
    },
  ];

  const itemsPerPageMobile = 1; // 1 card por página no mobile
  const itemsPerPageDesktop = 3; // 3 cards por página nas outras resoluções

  useEffect(() => {
    // Update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize); // Add event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="my-28" id="depoimentos">
      <GridContainer>
        {/* Título */}
        <div className="flex flex-col text-center justify-center xl:mb-20">
          <h3 className="font-bold text-[22px] xl:text-2xl text-roxo mb-2">
            O que meus pacientes dizem sobre mim
          </h3>
          <p className="text-base xl:text-lg mb-16">
            Elas escolheram compartilhar suas experiências com você
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent>
            {currentTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="xl:basis-1/3 md:basis-1/1 lg:basis-1/2">
                <Card className="w-full max-w-[380px] h-[435px] flex flex-col justify-center items-center relative mb-10 xl:mb-0 border-roxo border-2 rounded-[18px]">
                  <CardHeader className="absolute -top-[-20px]">
                    <Image
                      src="/chat-icon.svg"
                      width={67}
                      height={52}
                      alt="icone de chat de conversa"
                    />
                  </CardHeader>
                  <CardContent className="text-center mt-28">
                    <p className="text-neutral-700 text-base" dangerouslySetInnerHTML={{ __html: testimonial.content }} />
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <p className="mb-3 font-bold text-xl">{testimonial.author}</p>
                    <p>{testimonial.age}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Botões de Navegação */}
        <div className="flex justify-between xl:mt-20 mt-4 w-full max-w-[380px] mx-auto">
          <button
            onClick={handlePrev}
            className="p-2 bg-[#9271CB] rounded hover:bg-[#4B4282] text-white"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-[#9271CB] rounded hover:bg-[#4B4282] text-white"
          >
            Próximo
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-[#424242]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </GridContainer>
    </section>
  );
}

import Image from "next/image";
import { GridContainer } from "../GridContainer";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"



export function Depoimentos(){
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
            loop: true,
          }}
        
        >
          <CarouselContent>
          <CarouselItem className="xl:basis-1/3 md:basis-1/1 lg:basis-1/2">
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
                <p className="text-neutral-700 text-base">A Ana é uma ótima profissional, muito <strong>ética, empática e te faz sentir muito acolhido durante as sessões.</strong> Desde quando comecei a terapia, me olho com mais cuidado e percebi que isso gerou muitas mudanças na minha vida e na forma como eu interpreto as situações...</p>

                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="mb-3 font-bold text-xl">Pedro</p>
                  <p>26 anos - Contador</p>
                </CardFooter>
              </Card>
          </CarouselItem>
          <CarouselItem className="xl:basis-1/3 md:basis-1/1 lg:basis-1/2"> 
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
                  <p className="text-neutral-700 text-base">Iniciar psicoterapia foi uma decisão díficil, mas me trouxe muitos benefícios. Eu estava lutando contra a depressão e não sabia lidar sozinha. <strong> A Ana criou um espaço seguro</strong> para eu expressar meus sentimentos e me ajudou a enfrenter meus problemas.</p>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="mb-3 font-bold text-xl">Isabela</p>
                  <p>16 anos - Estudante</p>
                </CardFooter>
              </Card>
          </CarouselItem>
          <CarouselItem className="xl:basis-1/3 md:basis-1/1 lg:basis-1/2">
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
                  <p className="text-neutral-700 text-base"><strong>Profissional extremamente humana, sensível e sensata!</strong>  Me ajudou a ter um estilo de vida mais saudável e a perceber coisas sobre mim que jamais imaginaria. Sou muito grata pelo incentivo e pelo cuidado ao me direcionar a novas descobertas</p>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="mb-3 font-bold text-xl">Aline</p>
                  <p>26 anos - Administradora</p>
                </CardFooter>
              </Card>
          </CarouselItem>
          <CarouselItem className="xl:basis-1/3 md:basis-1/1 lg:basis-1/2">
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
                  <p className="text-neutral-700 text-base">No início, estava apreensiva, mas logo percebi que ter um espaço seguro para expressar meus sentimentos sem julgamentos era o que precisava. <strong>A terapia tem me ajudado a lidar com a ansiedade e a construir relações mais saudáveis.</strong></p>

                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="mb-3 font-bold text-xl">Ana Paula </p>
                  <p>25 anos -n Arquiteta</p>
                </CardFooter>
              </Card>
          </CarouselItem>
          <CarouselItem className="xl:basis-1/3 md:basis-1/1 lg:basis-1/2">
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
                  <p className="text-neutral-700 text-base">Busquei terapia no últiumo ano do ensino médio, enfrentando pressão acadêmica e me sentindo perdido quanto ao futuro.<strong> A Ana me ajudou a entender minhas necessidades e a criar um plano para meus objetivos.</strong> Sou grato por esse apoio durante essa transição.</p>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="mb-3 font-bold text-xl">Marcos</p>
                  <p>19 anos - Estudante</p>
                </CardFooter>
              </Card>
          </CarouselItem>
          </CarouselContent>
        </Carousel>


     </GridContainer>
    </section>
  )

}






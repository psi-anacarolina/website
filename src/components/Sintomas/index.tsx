import Image from "next/image";
import { GridContainer } from "../GridContainer";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

export function Sintomas() {
  return (
    <section className="my-20 xl:my-56" id="sintomas">
      <GridContainer>
        <div className="flex flex-col text-center justify-center ">
          <h3 className="font-bold text-[22px] xl:text-2xl text-roxo mb-2 ">Ansiedade, depressão, baixa autoestima, desmotivação...</h3>
          <p className=" text-base xl:text-lg mb-16">Se essa é a sua realidade é bem provável que você:</p>
        </div>
        {/* Ajuste da grid para centralizar os cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-y-12 justify-items-center mx-auto">
          <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-15px]">
              <Image
                src="/time-icon.svg"
                width={95}
                height={95}
                alt="icone de um relogio indo rapido"
              />
            </CardHeader>
            <CardContent className="text-center mt-32">
              <p className="text-white text-base">
                Se <strong>preocupa com o futuro</strong> e tem dificuldade em relaxar até nos momentos de lazer.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-15px]">
              <Image
                src="/cloud-icon.svg"
                width={85}
                height={85}
                alt="icone de uma nuvem "
              />
            </CardHeader>
            <CardContent className="text-center mt-32">
              <p className="text-white text-base">
                Lide com uma <strong>culpa excessiva</strong> que causa sofrimento emocional significativo.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-15px]">
              <Image
                src="/no-talk.svg"
                width={84}
                height={84}
                alt="icone de um balão de chat com traço no meio"
              />
            </CardHeader>
            <CardContent className="text-center mt-32">
              <p className="text-white text-base">
                Tem <strong>dificuldade em se relacionar</strong>, preferindo se isolar e evitar o convívio social.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-28px]">
              <Image
                src="/batery-low-icon.svg"
                width={100}
                height={52}
                alt="icone da bateria com nivel baixo"
              />
            </CardHeader>
            <CardContent className="text-center mt-32">
              <p className="text-white text-base">
                Enfrente <strong>falta de motivação e desinteresse</strong> em atividades que antes eram prazerosas.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-15px]">
              <Image
                src="/heart-icon.svg"
                width={92}
                height={84}
                alt="icone de um relogio indo rapido"
              />
            </CardHeader>
            <CardContent className="text-center mt-32">
              <p className="text-white text-base">
                Sente-se incompreendido e tem <strong>dificuldade em expressar suas emoções.</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-15px]">
              <Image
                src="/sad-icon.svg"
                width={84}
                height={84}
                alt="icone de um relogio indo rapido"
              />
            </CardHeader>
            <CardContent className="text-center mt-32">
              <p className="text-white text-base">
                Sente uma <strong>tristeza constante e dificuldade em encontrar motivação</strong> para o dia a dia.
              </p>
            </CardContent>
          </Card>
        </div>
      </GridContainer>
    </section>
  );
}

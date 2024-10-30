import { GridContainer } from "../GridContainer";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Beneficios(){
  return(
    <section className="my-28">
      <GridContainer>
        <h3 className="font-bold text-[22px] xl:text-2xl text-roxo mb-20 text-center ">Benefícios da terapia online</h3>

        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-y-12 justify-items-center mx-auto">
        <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-40px] ">
              <CardTitle>
                <h4 className="text-xl text-verde font-bold">Privacidade e fácil acesso</h4>
              </CardTitle>
            
            </CardHeader>
            <CardContent className="text-center mt-20">
              <p className="text-white text-base">
              Nada de espera ou correria para chegar em uma sessão. O consultório é somente um espaço físico que pode ser reinventado por você.
              </p>
            </CardContent>
        </Card>
        <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-40px] ">
              <CardTitle>
                <h4 className="text-xl text-verde font-bold">Experiência eficaz</h4>
              </CardTitle>
            
            </CardHeader>
            <CardContent className="text-center mt-20">
              <p className="text-white text-base">
              O atendimento online é altamente eficiente e atualmente temos muitos estudos que atestam isso.  
              </p>
            </CardContent>
        </Card>
        <Card className="w-full max-w-[360px] h-[228px] flex justify-center items-center relative mb-10 xl:mb-0 bg-back-card rounded-[18px]">
            <CardHeader className="px-7 py-2 absolute -top-[-40px] ">
              <CardTitle>
                <h4 className="text-xl text-verde font-bold">100% de sigilo</h4>
              </CardTitle>
            
            </CardHeader>
            <CardContent className="text-center mt-20">
              <p className="text-white text-base">
              A consulta online conta com o sigilo e o anonimato, além de atender todas as regulamentações do Conselho Federal de Psicologia.
              </p>
            </CardContent>
        </Card>
        </div>
      </GridContainer>
    </section>
  )
}
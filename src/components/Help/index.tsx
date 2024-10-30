import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Button } from "../ui/button";
import Link from "next/link";

export function Help(){
  const phoneNumber = "+5518920017942";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return(
    <section id="funciona">
      <GridContainer>
      {/* Texto  */}
        <div className="flex flex-col text-center justify-center xl:mb-20">
          <h3 className="font-bold text-[22px] xl:text-2xl text-roxo mb-2">Como eu eu te ajudo?</h3>
          <p className=" text-base xl:text-lg mb-16">Veja como eu posso te ajudar!</p>
        </div>
      {/* Foto e bene */}
        <div className="flex xl:flex-row flex-col-reverse items-center justify-center gap-x-20">
          {/* Foto */}
          <div className="mt-8 xl:mt-0">
            <Image
              src='/foto3.png'
              width={557}
              height={718}
              alt="Foto da Psicóloga Ana carolina"
            />
          </div>
          {/* beneficios*/}
          <div className=" flex flex-col  items-center xl:items-start" >
            <div className="w-full max-w-[350px] xl:max-w-[430px] mb-10 text-center xl:text-left">
              <h4 className="text-roxo text-xl font-semibold mb-2">1. Avaliação</h4>
              <p>O paciente é avaliado para <strong>identificar problemas e sintomas</strong>, auxiliando na compreensão das situações e sentimentos que ele vem enfrentando.</p>
            </div>
            <div className="w-full max-w-[350px] xl:max-w-[442px] mb-10 text-center xl:text-left">
              <h4 className="text-roxo text-xl font-semibold mb-2">2. Plano de Tratamento com Protocolos</h4>
              <p>Com base na avaliação, é elaborado um <strong>plano de tratamento personalizado.</strong> Protocolos específicos são selecionados conforme as necessidades do paciente.</p>
            </div>
            <div className="w-full max-w-[350px] xl:max-w-[486px] mb-10 text-center xl:text-left">
              <h4 className="text-roxo text-xl font-semibold mb-2">3. Direcionamento com Ferramentas Práticas</h4>
              <p>Durante as sessões, o paciente é orientado na aplicação das técnicas da TCC, incluindo a <strong>identificação e modificação </strong>de pensamentos negativos e comportamentos disfuncionais.</p>
            </div>
            <div className="w-full max-w-[350px] xl:max-w-[495px] mb-10 text-center xl:text-left">
              <h4 className="text-roxo text-xl font-semibold mb-2">4. Alta do paciente</h4>
              <p className="text-base">Quando os objetivos terapêuticos são alcançados e o paciente demonstra melhora significativa, a  terapia é encerrada, permitindo que o paciente continue a<strong> aplicar as habilidades e ferramentas aprendidas de forma independente.</strong></p>
            </div>
          </div>
          
        </div>
         {/* Botão */}
         <div className="flex justify-center mt-20">
         <Link href={whatsappLink} passHref>
          <Button 
            className="bg-verde text-neutral-900 font-semibold text-base xl:text-lg px-5 py-6 rounded-lg mx-auto xl:mx-0 hover:bg-verde-2 transition-colors ease-in delay-100  shadow-md">
            Agendar atendimento
            </Button> 
        </Link>
         </div>
         


        
      </GridContainer>
    </section>
  )
}
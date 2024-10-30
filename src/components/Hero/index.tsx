import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Button } from "../ui/button";
import Link from "next/link";



export function Hero() {
  const phoneNumber = "+5518920017942";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-back bg-no-repeat pt-11" id="home">
      <GridContainer>
        

        <div className="flex flex-col xl:flex-row items-center justify-center mb-10">
          <div className="w-full xl:max-w-[742px] xl:mx-0 mx-auto flex flex-col items-center xl:items-start justify-center xl:justify-start xl:mb-0 mb-12">
            <h1 className="text-center xl:text-left font-bold text-3xl xl:text-[40px] text-white leading-tight mb-4">
              Você não precisa viver refém dos seus problemas emocionais
            </h1>
            <h3 className="text-center xl:text-left text-white font-medium text-base xl:text-xl mb-4">
              Existe um jeito de aliviar seus sofrimentos, encontrar estabilidade emocional e <strong>retomar o controle da sua vida.</strong>
            </h3>
            <h4 className="text-center xl:text-left text-white font-bold text-base xl:text-xl mb-8">
              Conheça mais sobre a terapia e agende o seu atendimento agora.
            </h4>
            <Link href={whatsappLink} passHref>
            <Button 
              className="bg-verde text-neutral-900 font-medium text-lg xl:text-xl px-5 py-6 rounded-lg mx-auto xl:mx-0 hover:bg-verde-2 transition-colors ease-in delay-100  shadow-md">
              Agendar Atendimento
              <Image
                src='/icon-wpp2.svg'
                width={20}
                height={20}
                alt="icone do whatsapp"
              
              />
            </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/foto2.png"
              width={399}
              height={540}
              alt="foto de perfil da psicóloga Ana Carolina"
              className="max"
            />
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-transparent">.</h1>
            
        </div>

      </GridContainer>
    </section>
  );
}

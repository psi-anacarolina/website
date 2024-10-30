import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Button } from "../ui/button";
import Link from "next/link";

export function Sobre() {
  const phoneNumber = "+5518920017942";
  const message = "Olá, Gostaria de saber mais sobre sua consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    
    <section className="bg-back py-24 " id="sobre">
      <GridContainer>
        <div className="flex xl:flex-row flex-col items-center justify-between relative">
          <Image
            src='/foto4.png'
            width={519}
            height={636}
            alt="Foto da Psicóloga Ana Carolina"
          />
          <div className="w-full xl:max-w-[567px] max-w-[400px] xl:text-left text-center">
            {/* A imagem do smile será escondida no mobile e visível na desktop */}
            <div className="absolute hidden xl:block xl:top-[-230px] xl:right-[-40px]">
              <Image
                src='/smile.png'
                width={200}
                height={200}
                alt="smile"
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-7">
              Ana Carolina <br />CRP/SP - 06/201160
            </h4>
            <p className="text-white mb-4">
              Olá, sou psicóloga clínica <strong>com especialização em Psicopatologia e formações em Terapia Cognitivo-Comportamental, Terapias Contextuais e Orientação Parental.</strong> Meu propósito é ajudar pessoas a encontrarem equilíbrio emocional e superarem adversidades.
            </p>
            <p className="text-white mb-4">
              Minha prática se concentra no autoconhecimento e no cuidado com a saúde mental, com um olhar atento para os desafios do dia a dia que podem causar sofrimento. <strong>Acredito na importância de criar um espaço acolhedor e seguro, onde você possa explorar suas emoções e pensamentos, respeitando o seu ritmo e individualidade.</strong>
            </p>
            <p className="text-white mb-4">
              Durante nossas sessões, busco tornar a terapia acessível, leve e até descontraída, mesmo ao tratar questões profundas e complexas. A terapia não apenas ajuda a resolver problemas, mas promove uma mudança duradoura na forma como você se relaciona com o mundo e consigo mesmo.
            </p>
            <p className="text-white font-bold">Vamos juntos transformar desafios em oportunidades?</p>
            <Link href={whatsappLink} passHref>
              <Button className="bg-verde text-neutral-900 font-semibold text-base xl:text-lg px-5 py-6 rounded-lg mx-auto xl:mx-0 mt-11 hover:bg-verde-2 transition-colors ease-in delay-100 shadow-md ">
                Fale com a Ana!
              </Button>
            </Link>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}

import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";

export function Footer(){
  return(
    <footer className="bg-back pt-12  flex flex-col bg-no-repeat" >
      <GridContainer> 
      <Image
          src='/logo2.svg'
          width={140}
          height={127}
          alt="Logo da Psicóloga Ana Carolina" 
          className="items-center justify-center xl:w-full xl:max-w-[198px] "
        />
      

        <div className="flex flex-col xl:flex-row justify-between items-start mt-8 ">

          <div className=" flex flex-col gap-y-3 xl:mb-0 mb-8 " >
            <h4 className="text-white font-semibold text-lg xl:text-xl">Psicóloga clínica - CRP 06/201160</h4>
            <Link href='https://wa.me/+5518920017942' className="hover:opacity-70" >
            <div className="flex flex-row items-center gap-x-2">
              <Image
                src='/icon-wpp.svg'
                width={29}
                height={27}
                alt="ícone do Whatspp"
              />
              <p className="text-white font-medium ">(18) 92001-7942</p>
            </div>
            </Link>

            <div className="flex flex-row items-center gap-x-2">
              <Image
                  src='/icon-email.svg'
                  width={30}
                  height={21}
                  alt="ícone do Email"
                />
              <p className="text-white font-medium " >carolinafe.psi@gmail.com</p>
            </div>
            <Link href='https://www.instagram.com/psicarolinaf?igsh=MTJkMXMwbDI0ZTZrZQ%3D%3D' className="hover:opacity-70" >
              <div className="flex flex-row items-center gap-x-2">
                  <Image
                  src='/icon-insta.svg'
                  width={30}
                  height={28}
                  alt="ícone do instagram"
                  />
                  <p className="text-white font-medium ">psicarolinaf</p>
              </div>
            </Link>
            
          </div>

          <div className="w-full max-w-[628px]">
            <p className="text-white mb-4 text-sm xl:text-base ">O atendimento online não é recomendado para pessoas em situação de violência, violação de direitos ou emergências. </p>
            <p className="text-white text-sm xl:text-base">Em caso de crise suicida ligue para <strong>188 (CVV)</strong> ou acesse o site <strong> www.cvv.org.br.</strong> E, em caso de emergência, procure atendimento em um hospital mais próximo.</p>
          </div>
        </div>

        <p className="text-center text-muted mt-12 mb-6 text-sm ">©Copyright 2024 – Ana Carolina Ferreira. Todos os direitos reservados.</p>

      </GridContainer>

    </footer>
  )
}
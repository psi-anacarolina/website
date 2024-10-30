
import { Hero } from "@/components/Hero";
import { Sintomas } from "@/components/Sintomas";
import { Help } from "@/components/Help";
import { Beneficios } from "@/components/Beneficios";
import { Sobre } from "@/components/Sobre";
import { Depoimentos } from "@/components/Depoimentos";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";




export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Sintomas/>
      <Help/>
      <Beneficios/>
      <Sobre/>
      <Depoimentos/>
      <Footer/>
    </>
    
   
  );
}

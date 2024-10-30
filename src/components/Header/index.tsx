'use client';
import { useState } from "react";
import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="xl:sticky top-0 w-full h-[120px] z-50 flex items-center bg-back pt-4">
      <GridContainer>
        <div className="flex items-center justify-between w-full px-4">
          <Image
            src="/logo.png"
            width={160}
            height={200}
            alt="Logo da Psicóloga Ana Carolina"
            className="xl:w-auto xl:max-w-[220]"
          />
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none"
          >
            {/* Ícone do menu hambúrguer */}
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block h-1 w-full bg-white"></span>
              <span className="block h-1 w-full bg-white"></span>
              <span className="block h-1 w-full bg-white"></span>
            </div>
          </button>
          {/* Menu mobile */}
          <nav className={`fixed right-0 top-0 h-full bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-[70vw] md:w-full z-50`}>
            <div className="flex flex-col items-start p-4">
              <button onClick={toggleMenu} className="self-end mb-4">
                <span className="block h-1 w-6 bg-neutral-900"></span>
                <span className="block h-1 w-6 bg-neutral-900"></span>
              </button>
              <ul className="flex flex-col gap-4">
                <Link href='#home'>
                  <li className="font-normal text-neutral-900 text-base hover:text-black" onClick={closeMenu}>Home</li>
                </Link>
                <Link href='#sintomas'>
                  <li className="font-normal text-neutral-900 text-base hover:text-black" onClick={closeMenu}>Sintomas</li>
                </Link>
                <Link href='#funciona'>
                  <li className="font-normal text-neutral-900 text-base hover:text-black" onClick={closeMenu}>Como funciona</li>
                </Link>
                <Link href='#sobre'>
                  <li className="font-normal text-neutral-900 text-base hover:text-black" onClick={closeMenu}>Sobre mim</li>
                </Link>
                <Link href='#depoimentos'>
                  <li className="font-normal text-neutral-900 text-base hover:text-black" onClick={closeMenu}>Depoimentos</li>
                </Link>
              </ul>
            </div>
          </nav>
          {/* Menu desktop */}
          <nav className="hidden md:flex">
            <ul className="flex flex-row gap-10">
              <Link href='#home'>
                <li className="font-normal text-white text-base hover:text-neutral-700 transition-all ease-in" onClick={closeMenu}>Home</li>
              </Link>
              <Link href='#sintomas'>
                <li className="font-normal text-white text-base hover:text-neutral-700 transition-all ease-in" onClick={closeMenu}>Sintomas</li>
              </Link>
              <Link href='#funciona'>
                <li className="font-normal text-white text-base hover:text-neutral-700 transition-all ease-in" onClick={closeMenu}>Como funciona</li>
              </Link>
              <Link href='#sobre'>
                <li className="font-normal text-white text-base hover:text-neutral-700 transition-all ease-in" onClick={closeMenu}>Sobre mim</li>
              </Link>
              <Link href='#depoimentos'>
                <li className="font-normal text-white text-base hover:text-neutral-700 transition-all ease-in" onClick={closeMenu}>Depoimentos</li>
              </Link>
            </ul>
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}

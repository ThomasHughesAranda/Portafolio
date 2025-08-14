
"use client";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import perfil from '@/app/images/perfil.jpeg';
import Proyectos from "@/app/proyectos";
import Contacto from "@/app/contacto";
import Education from "@/app/education";
import Cardtest from "@/app/cardtest";
import { File } from 'lucide-react';
export default function Home() {
  return (
    <div>
      <div className="lg:border w-full lg:w-4/5 mx-auto  ">
        <div id="home" className="mt-6 lg:mt-32 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
          <Image
              src={perfil}
              alt="Foto de perfil de Thomas Alonso Hughes Aranda"
              width={400}
              height={400}
              className="
                object-cover 
                mb-4 lg:mb-0 
                lg:mr-20 
                shadow-2xl shadow-gray-400 
                transform transition-transform duration-500 
                hover:scale-110 hover:rotate-3 
                rounded-3xl 
                w-3/4 max-w-xs 
                sm:w-2/3 sm:max-w-sm 
                lg:w-full lg:max-w-md 
                lg:ml-24"
                style={{ filter: "grayscale(30%)" }}
          />
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg sm:text-lg md:text-xl font-semibold ">
              Ingeniero de Ejecución en Informática
            </code>
            <h1 className="font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl mb-4 ">
              Thomas Alonso Hughes Aranda
            </h1>
            <p className="text-base sm:text-lg font-light text-foreground lg:mr-32 text-justify mt-2 lg:mt-0 lg:px-0">
              Ingeniero en Ejecución en Informática, con formación integral y fuerte orientación al trabajo en equipo. Profesional capacitado para abordar análisis de negocios, desarrollo de software y auditoría de sistemas. 
              <br />
              <br />
              Cuento con conocimientos en lenguajes de programación como JavaScript, TypeScript, Python, SQL, CSS, HTML y Git. Manejo herramientas de modelamiento y gestión de proyectos como Jira y Figma, además de plataformas de análisis de datos como Talend y Power BI. 
            </p>
            <div className="mt-8 flex justify-start">
              <a
                href="cv/CvThomasHughes.pdf"
                download="CvThomasHughes.pdf"
                className="ml-2 text-lg sm:text-xl lg:text-xl px-4 py-2 lg:px-8 lg:py-4 bg-black dark:bg-white text-white dark:text-black rounded text-left flex items-center gap-2"
              >
                <File className="w-5 h-5" /> {/* Tamaño del icono */}
                Accede a mi curriculum
              </a>
            </div>
          </div>

        
      </div>

      <h2 id="projects" className="md:mt-32 mt-8 ml-2 md:ml-32 mb-4 md:mb-8 scroll-m-20  pb-2 text-5xl font-semibold tracking-tight  ">
          Proyectos
      </h2>

      <div id="education" >
      <Proyectos/>
      </div>

      
      <h2 className="md:mt-32 mt-8 ml-2 md:ml-32 mb-4 md:mb-8 scroll-m-20  pb-2 text-5xl font-semibold tracking-tight  ">
          Educación
      </h2>
      <Education/>


        
      <div id="contact" >
        <Contacto/>
      </div>  
 
    </div>
  </div>
  );
}

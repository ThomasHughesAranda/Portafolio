
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import perfil from '@/app/images/perfil.jpeg';
import { Card, CardHeader, CardTitle, CardContent, CardFooter,CardDescription } from "@/components/ui/card";
import Proyectos from "@/app/proyectos";
import Contacto from "@/app/contacto"
export default function Home() {
  return (
    <div>
      <div className="lg:border w-full lg:w-4/5 mx-auto  ">
        <div className="mt-6 lg:mt-32 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
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
          />
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg sm:text-lg md:text-xl font-semibold ">
              Ingeniero de Ejecución en Informática
            </code>
            <h1 className="font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl mb-4 ">
              Thomas Alonso Hughes Aranda
            </h1>
            <p className="text-base sm:text-lg font-light text-foreground lg:mr-32 text-justify mt-2 lg:mt-0 lg:px-0">
              Ingeniero en Ejecución Informática con formación integral, proactivo y con una actitud positiva hacia el trabajo en equipo. Me destaco por mi honestidad,
              adaptabilidad y capacidad para liderar proyectos. Tengo una mentalidad orientada al aprendizaje continuo, lo que me
              permite adquirir rápidamente nuevas habilidades y enfrentar desafíos con creatividad y determinación.
              <br />
              <br />
              Soy un profesional con capacidad para abordar análisis de procesos, 
              diseño de sistemas de software, atomatizacion de proccesos y analisis de
              datos siempre con un enfoque en sustentabilidad, modernización, ética y competitividad.
            </p>
            <div className="mt-8 flex justify-start space-x-4 ">
              <Button variant="outline" className="ml-2 text-sm sm:text-xl lg:text-xl px-4 py-2 lg:px-8 lg:py-4">
                Github
              </Button>
              <Button className="ml-2 text-sm sm:text-xl lg:text-xl px-4 py-2 lg:px-8 lg:py-4">
                Linkedin
              </Button>
            </div>
          </div>

        
      </div>
      <div className="border mt-24 ">
      <h2 className="ml-24 mt-24 scroll-m-20  pb-2 text-5xl font-semibold tracking-tight first:mt-12 ">
          Proyectos
      </h2>
      <Contacto/>
      <Proyectos/>
      </div>
      
    </div>
  </div>
  );
}

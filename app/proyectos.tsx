import Image from 'next/image';
import chatbot from '@/app/images/chatbot.jpg';
import copec from '@/app/images/copec.jpg';
import mapler from '@/app/images/mapler.jpg';

import { Card, CardHeader, CardTitle, CardContent, CardFooter,CardDescription } from "@/components/ui/card";

export default function Proyectos() {
    return (
    <div>
      <div className="flex flex-wrap justify-center gap-12 items-center mt-8 ">
        <Card className="relative w-96 h-96 overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-110  shadow-2xl shadow-gray-700  ">
            <div className="card-background absolute inset-0 transition-transform duration-300 scale-100 group-hover:scale-115 ">
                <Image
                src={copec}
                alt="Foto de perfil"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 transition-opacity group-hover:opacity-40 "></div>
            <CardHeader className="absolute">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm sm:text-base md:text-lg font-semibold ">
                    Enero – Marzo 2023.
                </code>
                <CardTitle className="text-3xl font-extrabold text-white ">Copec</CardTitle>
                <CardDescription>
                <p className='scroll-m-20 text-xl  tracking-tight lg:text-xl text-white text-justify'>
                    Proyecto de automatización en procesos industriales de la Planta de Lubricantes de Copec
                </p>
                </CardDescription>
            </CardHeader>
            
        </Card>


        <Card className="relative w-96 h-96 overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-110">
            <div className="card-background absolute inset-0 transition-transform duration-300 scale-100 group-hover:scale-115">
                <Image
                src={mapler}
                alt="Foto mapler"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-90  transition-opacity group-hover:opacity-40"></div>
            <CardHeader className="absolute">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm sm:text-base md:text-lg font-semibold ">
                    Marzo - Diciembre 2023
                </code>
                <CardTitle className="text-3xl font-extrabold text-white">Mapler</CardTitle>
                <CardDescription>
                <p className='scroll-m-20 text-xl  tracking-tight lg:text-xl text-white text-justify'>
                    Proyecto de automatización en procesos industriales de la Planta de Lubricantes de Copec
                </p>
                </CardDescription>
            </CardHeader>
        </Card>

        <Card className="relative w-96 h-96 overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-110">
            <div className="card-background absolute inset-0 transition-transform duration-300 scale-100 group-hover:scale-115">
                <Image
                src={chatbot}
                alt="Foto de perfil"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-80  transition-opacity group-hover:opacity-40"></div>
            <CardHeader className="absolute">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm sm:text-base md:text-lg font-semibold ">
                    Febrero - Junio 2024.
                </code>
                <CardTitle className="text-3xl text-white">EleccionesBot</CardTitle>
                <CardDescription>
                <p className='scroll-m-20 text-xl  tracking-tight lg:text-xl text-white text-justify'>
                    Aplicación que utiliza modelos predictivos de lenguaje basados en inteligencia 
                    artificial para el análisis y comparación de documentos legales
                </p>
                </CardDescription>
            </CardHeader>   
            
        </Card>
      </div>
    </div>  
    );
  }
  
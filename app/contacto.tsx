"use client";
import { Phone, MapPin, Mail, Github, Linkedin } from 'lucide-react';


import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Contacto() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el usuario ha llegado al final de la página
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setIsSheetOpen(true); // Abre el Sheet
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
         <SheetTrigger asChild></SheetTrigger>
        <SheetContent side="bottom" className="lg:border w-full lg:w-4/5 mx-auto rounded-t-3xl  shadow-2xl shadow-gray-600 ">
        <div className="max-w-4xl mx-auto text-center p-4 ">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <h1 className=" font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl  mt-2 text-left ">Contacto</h1>
        <div></div>
        <div className="flex items-center mt-4">
            <Phone className="text-2xl mr-2" />
            <p className="text-lg">+56 975287098</p>
        </div>
         {/* LinkedIn */}
         <div className="flex items-center mt-4">
            <Linkedin className="text-2xl mr-2 " />
            <p className="text-lg">
                <a href="https://www.linkedin.com/in/thomas-hughes-b01652316" target="_blank" rel="noopener noreferrer" >
                    linkedin.com/in/thomas-hughes-b01652316
                </a>
            </p>
        </div>


        <div className="flex items-center mt-4">
            <Mail className="text-2xl mr-2" />
            <p className="text-lg">thughesaranda@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="flex items-center mt-4">
            <Github className="text-2xl mr-2 " />
            <p className="text-lg">
                <a href="https://github.com/ThomasHughesAranda" target="_blank" rel="noopener noreferrer" >
                    github.com/ThomasHughesAranda
                </a>
            </p>
        </div>
        <div className="flex items-center mt-4">
            <MapPin className="text-2xl mr-2" />
            <p className="text-lg">Villa alemana, Valparaíso</p>
        </div>
        </div>
    </div>
    </SheetContent>
    </Sheet>
    
  );
}

import { Home, Folder, Mail, Menu,Github, Linkedin } from "lucide-react"; // Importa los íconos
import { Button } from "@/components/ui/button"; // Importa el botón de ShadCN UI
import ModeToggle from "@/app/modeToggle"; // Asegúrate de tener el componente ModeToggle
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


// Define los elementos del menú
const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Proyectos",
    url: "/proyectos",
    icon: Folder,
  },
  {
    title: "Contacto",
    url: "/contacto",
    icon: Mail,
  },
];

export function AppNavbar() {
  return (
    <nav className="flex items-center gap-4 p-4 border lg:w-4/5 mx-auto sticky top-0 z-10 bg-white dark:bg-black">
      <div>
        {/* Sheet Trigger solo visible en móviles */}
        <div className="block md:hidden">
          <Sheet  >
            <SheetTrigger>
              <button variant="outline" size="icon">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left" >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="grid gap-4 py-4  ">
                {items.map((item, index) => (
                  <Button variant="ghost" asChild key={index} className="text-xl text-justify ">
                    <a href={item.url}>
                      <item.icon className="text-xl" /> {/* Icono */}
                      <span>{item.title}</span> {/* Título */}
                    </a>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Menú visible solo en pantallas de escritorio */}
        <div className="hidden md:block">
          {items.map((item, index) => (
            <Button variant="ghost" asChild key={index} className="gap-2 text-xl text-muted-foreground">
              <a href={item.url}>
                <item.icon className="text-xl text-muted-foreground" /> {/* Icono */}
                <span>{item.title}</span> {/* Título */}
              </a>
            </Button>
          ))}
        </div>
      </div>
  
      {/* Contenedor a la derecha */}
      <div className="ml-auto flex items-center gap-4">
        {/* ModeToggle */}
    

        {/* Botones de redes sociales */}
        <Button  variant="outline" asChild className="flex items-center gap-2"size="icon">
          <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4"/>
          </a>
        </Button>

        <Button  variant="outline" asChild className="flex items-center gap-2"size="icon">
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4"/>
          </a>
        </Button>
        <ModeToggle /> 
      </div>
    </nav>
    
  );
}

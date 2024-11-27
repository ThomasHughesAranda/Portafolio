
import { Card, CardHeader, CardTitle, CardDescription,CardContent } from "@/components/ui/card";
import Image from 'next/image';
import colegio from '@/app/images/colegio.png';
import pucv from '@/app/images/pucv.svg';

export default function Education() {
  return (
    <div  className="max-w-7xl mx-auto mt-10 mb-40">
      <Card className="overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-110 shadow-2xl shadow-gray-700">
        <CardContent>
          <div className="max-w-4xl mx-auto text-center p-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4  justify-items-center items-center">
            <Image
              src={pucv}
              alt="img pucv"
              className="rounded-lg w-32 h-auto"
            />
        
            <code className="  rounded bg-muted scroll-m-20 text-xl  tracking-tight lg:text-xl  text-justify ">
                    2019-2024.
                    <br />
                    Ingeniero de Ejecución en Informática. / Pontificia Universidad Católica de Valparaíso.
                </code>
        
              <Image
              src={colegio}
              alt="img colegio"
              className="rounded-lg w-32 h-auto "
            />
            <code className="rounded bg-muted scroll-m-20 text-xl  tracking-tight lg:text-xl  text-justify  ">
                  2018.
                    <br />
                    Enseñanza básica y media. / Colegio Champagnat de Villa alemana.
                </code>
          

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

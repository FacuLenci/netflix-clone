
import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";

export function SliderVideo() {
  return (
  <div className="relative w-full -[80vw] md:h-[56.25vw] lg:h-[45vw]">
    <video autoPlay loop muted 
    className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
    src="/videos/video-1.mp4"
    />
    <div className="flex flex-col justify-end absolute w-full md:w-[36%] px-4
    md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]
    ">
        <div className="pt-24 md:pt-0">
            <h2 className="text-2xl md:text-5xl lg:text-8xl font-bold drop-shadow-xl">
                Boca mi vida
            </h2>
            <p className="max-w-md mt-2 text-xs md:text-base">
                En esta pelicula nos adentraremos en la historia
                de Lenci, un chico que queria ver al equipo de
                su vida triunfar, aunque no todo sera color de 
                rosas...
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-5">
                <Button size="lg" variant="secondary">
                    <Play className="h-6 w-6 mr-2 fill-black" />
                    Reproducir
                </Button>
                <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40">
                    <Info className="h-6 w-6 mr-2" />
                    Mas informacion
                </Button>
            </div>
        </div>
    </div>
    <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw] 
    -bottom-16 absolute bg-gradient-video
    "/>
  </div>
  );
}

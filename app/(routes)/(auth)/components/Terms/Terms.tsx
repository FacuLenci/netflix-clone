"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Terms() {
    const [showExtraTerms, setShowExtraTerms] = useState(false);

  return (
    <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72">
        <div className="mb-5">
            <span>
                Esta pagina utiliza Google reCAPTCHA para verificar que no seas un bot
            </span>
            <Button variant="ghost" onClick={() => setShowExtraTerms(!showExtraTerms)} className="opacity-1 text-[#0071eb] hover:bg-transparent p-0 ml-1 h-fit">
                Mas informacion
            </Button>
        </div>

        <div className="h-28">
            {showExtraTerms &&
                <p>En este texto deberia estar mostrando algo relacionado con 
                    la politica de privacidad de Google, sin embargo me limito
                    a simplemente declararle mi amor a la mujer mas hermosa y 
                    perfecta que puede existir, Felicitas Belen Marin.</p>
            }
        </div>
    </div>
  )
}

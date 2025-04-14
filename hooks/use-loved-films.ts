import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Movie } from "@prisma/client";
import {toast} from "./use-toast";
import { useCurrentNetflixUser } from "./use-current-user";

interface UseAddFilmMyList{
    lovedFilmsByUser: {[userId:string]: Movie[]}
    addLovedFilm:(data:Movie) => void
    removeLovedItem:(id:string) => void
}

export const useLovedFilms = create(persist<UseAddFilmMyList>((set, get) =>({
    lovedFilmsByUser: {},
    addLovedFilm: (data:Movie) => {
        const {currentUser} = useCurrentNetflixUser.getState()

        if (!currentUser) {
            return toast({
                title:"Ningun usuario seleccionado"
            })
        }
        
        const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];
        const existingItem = currentLovedItems.find(
            (item) => item.id === data.id
        );

        if (existingItem) {
            return toast({
                title: "La pelicula ya esta en tu lista",
                variant: "destructive",
            });
        }

        set({lovedFilmsByUser: {
            ...get().lovedFilmsByUser,
            [currentUser.id]:[...currentLovedItems, data]
        }})

        toast ({
            title:"Pelicula añadida a tu lista",
        })
    },

    removeLovedItem: (id:string) => {
        const {currentUser} = useCurrentNetflixUser.getState();

        if (!currentUser) {
            return toast({
                title:"Ningun usuario seleccionado",
                variant:"destructive"
            })
        }

        const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];

        set({
            lovedFilmsByUser: {
                ...get().lovedFilmsByUser,
                [currentUser.id]: currentLovedItems.filter((item) => item.id != id), 
            },
        });

        toast ({
            title:"La pelicula ha sido eliminada de tu lista",
        });
        
    },
}),
{
    name: "add-loved-fils-by-user",
    storage: createJSONStorage(() => localStorage),
}
)
)
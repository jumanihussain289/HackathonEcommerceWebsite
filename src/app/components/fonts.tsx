// import fonts
import {Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat} from "next/font/google"
const Playfair = Playfair_Display({subsets:["latin"]})
const Ciznel = Cinzel({subsets:["latin"]})
const  Bodoni= Bodoni_Moda({subsets:["latin"]})
const Parata = Prata({subsets:["latin"],weight:"400"})
const Montserat = Montserrat({subsets:["latin"]})

export default function Fonts(){
    return(
        <div>
            <h1>VERSACE</h1>
            <h1>ZARA</h1>
            <h1>GUCCI</h1>
            <h1>PRADA</h1>
            <h1>CALVIN KLIEN</h1>
        </div>
    )
}
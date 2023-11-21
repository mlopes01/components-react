import { Imagem } from "../images";
import { Paragrafo } from "./paragrafo";
import { Titulo } from "./titulo";


export function Quadrado() {
    return (
        <div className="Quadrado">
            <Titulo></Titulo>
            <Paragrafo></Paragrafo>
            <Imagem></Imagem>
        </div>
    )
}
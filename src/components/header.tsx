import { Perfil, Sociais } from "./images";


export function Cabeçalho() {
    return (
        <header>
            <div className="perfil">
                <Perfil
                />
            </div>
            <p>
                <a href="">HEADER</a>
                <a href="">MENU</a>
                <a href="">FOOTER</a>
            </p>
            <Sociais></Sociais>
        </header>
    )
}
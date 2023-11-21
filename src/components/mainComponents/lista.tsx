
interface Iitemprop {
  id?: number;
  fruta?: string;
  cor?: string;
}

function ItemList({ id, fruta, cor }: Iitemprop) {

  return <li> Item:{id}<br></br>
    Fruta... {fruta}
    <br></br>
    Cor... {cor}</li>;
}
export function List() {
  return (
    <div className="itemlist">
      <h2>Lista de itens</h2>
      <ItemList id={1} fruta="Banana" cor="Amarela"></ItemList>
      <ItemList id={2} fruta="Maça" cor="Vermelha"></ItemList>
      <ItemList id={3} fruta="Melancia" cor="Verde"></ItemList>
    </div>


  )
}
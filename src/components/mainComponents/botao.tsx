const handleClick = () => {
  alert('clicou')
}
export function Botao() {
  return (
    <span onClick={handleClick} className="botao">
      Clicar
    </span>
  );
}

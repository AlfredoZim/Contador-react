const Contador = () => {
  const [contador, setContador] = React.useState(0);
  //Se le da un valor inicial de 0, setContador es el modificador del contador
  console.log(contador);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  class Homa {}
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
    /* onClick={aumentar} Se le pasa la funcion sin parentesis ya que no se está pasando ningun
      atributo para se ejecuten siempre*/
    /* "?" es un operador ternario, si se cumple toma un valor y si no se cumple toma otro
     */
  );
};

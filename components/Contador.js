const Contador = () => {
  const [contador, setContador] = React.useState(0);
  const sumar = () => {setContador(contador+1)}
  const restar = () => setContador(contador-1)

  console.log(contador);
  return (
    <div>
      <h1 className={contador < 0 ? 'menor':'mayor'} >Contador: {contador}</h1>
      <hr />
      <button className="operation op1" onClick={sumar}>+</button>
      <button className="operation op2" onClick={restar}>-</button>
    </div>
  );
};

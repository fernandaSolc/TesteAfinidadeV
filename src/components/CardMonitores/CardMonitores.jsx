import './CardMonitores.css';

const CardMonitores = props => {
  return (
    <div className='monitor'>
      <h2>{props.nome}</h2>
      <h3>{props.sobrenome}</h3>
    </div>
  );
};

export default CardMonitores;

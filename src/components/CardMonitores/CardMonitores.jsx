import './CardMonitores.css';

const CardMonitores = props => {
  return (
    <div className='monitor'>
      <h3>{props.nome}</h3>
      <h4>{props.sobrenome}</h4>
    </div>
  );
};

export default CardMonitores;

import './FormTelaPrincipal.css';

const FormTelaPrincipal = ({ name, setName, pdx, setPdx, turno, setTurno }) => {
  return (
    <div className='form'> 
      <div className='input-field'>
        <input
          type='text'
          placeholder='Nome'
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className='input-field'>
        <input
          type='text'
          placeholder='PDX'
          required
          value={pdx}
          onChange={e => setPdx(e.target.value)}
        />
      </div>
      <div className='input-field'>
        <select
          name='turno'
          value={turno}
          onChange={e => setTurno(e.target.value)}
        >
          <option value=''>Selecione o turno</option>
          <option value='turno-manha'>De 09:00 às 15:00</option>
          <option value='turno-noite'>De 15:00 às 21:00</option>
        </select>
      </div>
    </div>
  );
};

export default FormTelaPrincipal;

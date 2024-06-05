import './Button.css'; // Importar o CSS para o botão

const CircularButton = ({ onClick, clicked }) => {
  // Adicionando preventDefault para impedir o recarregamento da página
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

    return (
      <button
        className={`circle-button ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >

      </button>
    );
  };

export default CircularButton;
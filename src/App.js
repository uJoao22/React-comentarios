import React from 'react'; //Importando o React

import Image from './img/people.svg'; //Importando a imagem e renomeando-a

import './App.css';

function App() { //Aqui é onde escrevemos os codigos HTML e JS
  //State => variavel, que toda vez que ela sofre alteração o react recarrega a página
  //STATE => Variavel, só que, essa variavel vai permitir que eu atualize os itens na tela

  const [coment, setComent] = React.useState(); //coment é uma variavel que recebe todos os dados da função setComent, usando React.useState()
  const [allComents, setAllComents] = React.useState([]); //allComents é uma array que recebe todos os dados da função setAllComents, usando o React.useState([])

  function cliqueiNoBotao(){
    const allComentsBefore = [...allComents, coment]; //A variavel allComentsBefore guarda todos os comentarios que já foram digitados e estão no allComents e sempre adiciona um novo pelo coment, quando houver

    setAllComents(allComentsBefore); //setAllComents passa todos os dados de allComentsBefore para allComents que é mapeada e impresso na tela dentro do <li>
  }

  function digiteiNoTextArea(event){
    setComent(event.target.value); //Pegando tudo que for digitado no TextArea e salvando na função setComent para ser passada para a variavel coment
  }

  return ( //Aqui é onde retorna os codigos HTML
    <div>
      <img src={Image} alt="imagem-pessoas"/>

      <textarea onChange={digiteiNoTextArea} placeholder="Seu comentário aqui"></textarea>

      <button onClick={cliqueiNoBotao}>Comentar</button>

      <ul>
        {allComents.map((coment) => ( //map mapeia o array, ele pega item por item, e renomeia cada item dentro do map
          <li key={coment}>{coment}</li> //Cada item do array allComents é mapeado pelo map e jogado dentro de um <li>
        ))}
      </ul>
    </div>
  );
}

export default App;
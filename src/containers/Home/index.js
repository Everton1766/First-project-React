import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import logo from "../../assets/logo.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/button'


import {
  Container,  
  Image,
  InputLabel,
  Input,
} from "./styles.js";

const App = () => {
  const [users, setUsers] = useState([]);      //REACT HOOKS
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,

    });


    setUsers([...users, newUsers]);

    history.push('/usuarios')

  }
  // REACT HOOK => useEffect (Efeito Colateral)
  // A minha pagina inicia ( A pagina recarregou, o useEffect é chamado)
  // Qunado um estado que está no array de dependencia do useEffect é alterado

  return (
    <Container>
      <Image alt="logo-imagem" src={logo} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>     

      </ContainerItens>
    </Container>
  );
}

export default App








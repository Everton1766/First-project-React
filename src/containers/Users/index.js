import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logo1 from '../../assets/logo1.svg'
import Arrow from "../../assets/arrow.svg";
import Trash from '../../assets/trash.svg'
import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/button";

import {
  Container,
  Image,  
  User
} from "./styles.js";

const Users = () => {
  const [users, setUsers] = useState([]);      //REACT HOOKS
  
  const history = useHistory()

  
  

  useEffect(() => {
    async function fatchUser(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
    setUsers(newUsers)
    } 

    fatchUser();
  }, [])

  // REACT HOOK => useEffect (Efeito Colateral)
  // A minha pagina inicia ( A pagina recarregou, o useEffect é chamado)
  // Qunado um estado que está no array de dependencia do useEffect é alterado


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push("/")
  }


  return (
    <Container>
      <Image alt="logo-imagem" src={logo1} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>      

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button  onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar 
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users








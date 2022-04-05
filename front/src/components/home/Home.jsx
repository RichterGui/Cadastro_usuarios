import React from "react";
import Main from "../templates/Main";

export default props => {
    return(
        <Main icon="home" title="Início" subtitle="Cadastro de Usuário">
        <div className='display-4'>Bien Venido!</div>
        <hr />
        <p className="mb-0">Sistema Exemplificador para exibir as exibições</p>
      </Main>
    )
}
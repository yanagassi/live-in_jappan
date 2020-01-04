import React from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../services/auth";


class PaginaInicial extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        const json =JSON.parse(localStorage.getItem("dadosUsuario"));
        this.setState({
            load:true,
            nome: json.nome
        })
    }
    render(){
        if(this.state.load)
        return(
            <div>
                <h1>Bem vindo - { this.state.nome}</h1>
                <a onClick={()=>{logout(); window.location.replace("http://localhost:3000/")}} >SAIR</a>
            </div>
        )
        else
        return(null)
    }
}

export default withRouter(PaginaInicial); 
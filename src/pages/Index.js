import React from "react";
import { withRouter } from "react-router-dom";
import api from "../services/api";
import { Container, Segment } from "semantic-ui-react";
import { login } from "../services/auth";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    enviarForm(e){
        e.preventDefault();
        const {email, password} = this.state;
        api.post("/login", {email,password})
        .then(( {data}  ) => {
            if(data.status === "sucess" ){
                login(data.token)
                localStorage.setItem("dadosUsuario", JSON.stringify(data.dados))
                window.location.replace("http://localhost:3000/home")
            }
            else
                alert("Erro ao logar....")
        })
    }   


    render() {

        return (
            <div>
                <Container style={{ marginTop: 250 }}>
                    <center>
                        <Segment style={{ width: "50%" }}>
                            <form class="ui form" onSubmit={(e)=> this.enviarForm(e)}>
                                <div class="field">
                                    <input 
                                        type="email" 
                                        placeholder="E-mail" 
                                        value={this.state.email} 
                                        onChange={(e)=> this.setState({email: e.target.value})} 
                                    />
                                </div>
                                <div class="field">
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.password} 
                                        onChange={(e)=> this.setState({password: e.target.value})} 
                                    />
                                </div>
                                <button type="submit" class="ui green button">Entrar</button>
                            </form>
                        </Segment>
                    </center>
                </Container>
            </div>
        )
    }
}

export default withRouter(Index); 
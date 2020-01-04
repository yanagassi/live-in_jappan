import React from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {} //todo {} é um objeto.
    }


    componentDidMount() { // quando o componente nasce.
        const obj = {
            a:1,
            b:2,
            c:3
        }

        const { a } = obj; // Selecionando somente o item que voce quer dentro de um OBJ
        
       //  alert(c)
    }



    minhaPrimeiraFuncao() {
        const URL = "https://viacep.com.br/ws/" + this.state.cep  + "/json/";
        
        /// faz uma requisição GET.
        Axios.get(URL) // Função assicrona (como se fosse a url do AJAX)
        .then( // recebe uma funcao como parametro (como se fosse o sucess do Ajax)
            ({data}) => {

                //const respostaFinal =  respostaDoServidor.data; /// peguei somente a responta do servidor sem os "lixos" e transformei em uma variavel.

                this.setState({
                    rua: data.logradouro, 
                    bairro: data.bairro,
                    cidade: data.localidade, 
                    complmento: data.complemento
                }); 
            }
        );
    }


    componentDidUpdate() { // quando o componente é atualizado.

    }

    componentWillUnmount() { // quando o component é desmontado. (more)

    }

    render() {

        // deixar sempre todo o codigo dentro de div ou container...
        // O css react é um obejeto (não contem tracos).
        // ()=> É um tipo de função (arrow function)
        // O this.setState() grava um estado no react.
        // onChange -> this.setState() -> adicionando valor a ela ( o valor é o do evento )

        const { rua, bairro, cidade } =  this.state; // BOA PRATICA

        return (
            <div>
                <center>
                    <div class="ui input" style={{ marginTop: "50px" }}>
                        <input type="text" placeholder="CEP ..." onChange={(evento) => this.setState({ cep: evento.target.value })} />
                        <button onClick={() => this.minhaPrimeiraFuncao()} class="ui button">Click Here</button>
                    </div>
                    <p>Rua: {rua}</p>
                    <p>Bairro: {bairro}</p>
                    <p>Cidade: {cidade}</p>
                </center>
            </div>
        )
    }
}

export default withRouter(Index); 
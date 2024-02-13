//componentes basados en clases (en versiones antiguas o dependiendo de la arquitectura de la app)
//para extraer funciones o refactorizar
import React , { useState } from "react";

const ContadorClase = () =>{ //componente basado en una función

    //un hook -> import React , { useState } from "react";
    //[propiedades] = useState(0)
    const [conteo, setConteno] = useState(0);

    const incrementar = () => {
        setConteno((prevConteo) => prevConteo +1);
    };
    
    const reducir = () => {
        setConteno((prevConteo) => prevConteo -1);
    };

    return(
        <div>
            <h1>Contador de clicks</h1>
            <p>conteo:{conteo}</p>
            <button onClick={incrementar}>Sumar click</button>
            <button onClick={reducir}>Restar click</button>
        </div>
    );

}

{/*
class ContadorClase extends Component{ //componente clase ->  import React , { Components } from "react";
    
    constructor(props){
        //para utilizar el estado
        super(props);
        this.state = {
            conteo: 0, //llamada al estado
        };
    }

    incrementar = () => {
        this.setState((prevState) => ({conteo: prevState.conteo + 1}));
    };
    
    reducir = () => {
        this.setState((prevState) => ({conteo: prevState.conteo - 1}));
    };

    //desplegar/mostrar los elementos que apareceran en pantalla
    render(){

        //agregar el estado para que funcione el conteo
        const {conteo} = this.state; 

        return(
            <div>
                <h1>Contador de clicks</h1>
                <p>conteo:{conteo}</p>
                <button onClick={this.incrementar}>Sumar click</button>
                <button onClick={this.reducir}>Restar click</button>
            </div>
        );
    }
}
*/}
export default ContadorClase
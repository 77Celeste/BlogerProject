import React, {Component} from 'react';

class MiComponente extends Component{


    render(){
        let receta={
            
            calor:'35 centigarod',
            nombre:['queso','pizza'],
            peso:15
        };

        return(
            <div className="mi-componet">
                <h1> {'calorias: '+receta.calor}</h1>
                <h2> {'peso: '+receta.peso}</h2>
                <ol>
                    {
                        receta.nombre.map((ingre, i)=>{
                            console.log(ingre); 
                            return(
                                <li key={i}>
                                    {ingre}
                                </li>
                            );                         
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}

export default MiComponente;
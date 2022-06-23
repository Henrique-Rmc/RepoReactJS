//Não se fecha a função dentrop do onClick pois ao fechar a função
//voce esta definindo que quer que ela seja executada durante a execução
//nessa situação desejamos executar apenas quando a ação OnClick foi realizada
//""e" é um argumento especial usando para eventos

//É possivel insertir ações dentro do ONClick a partir de Js mas n é recomendado
const Events = () =>{

    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou Evento")
        
    }

    const renderSomething = (x) => {
        if(x){
            return <h1> Renderizando True</h1>
        }
        else{
            return <h1> Renderizando False</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick ={handleMyEvent} >Clique Aqui!</button>
            </div>
            <div onClick ={() => console.log("clicou")}>Clique aqui para outro Evento</div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>


    )
}

export default Events
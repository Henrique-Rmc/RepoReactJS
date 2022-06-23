//Dentro de { } podemos executar JavaScript para refletir no codigo
const TemplateExpressions = () => {


    const name = 'Matheus'
    const data = {
        age : 31,
        job : 'Programador'
    }
return(
    <div>
        <h1>Ola {name}</h1>
        <p>Voce atua como : {data.job}</p>
        <p>{4 +4}</p>
    </div>
)

}

export default TemplateExpressions
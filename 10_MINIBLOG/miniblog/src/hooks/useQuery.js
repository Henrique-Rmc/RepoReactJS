import { useLocation } from "react-router-dom";

//ajuda em performace para que o retorno fique salvo
//possibilita referenciar um objeto e saber se ele foi modificado
import { useMemo } from "react";

export function useQuery() {
    //a partir do useLocation conseguimos acessar os parametros da URL
    const {search} = useLocation()

    //o segundo array é um array de dependencia, sempre que o array muda, o usememo é chamado
    return useMemo(()=> new URLSearchParams(search), [search])
}
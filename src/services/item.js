//casos de uso dos item
//criar item com subtotal certo
async function createItem(name, price, quantity) {
    //objeto item, com as propriedades name, price, quantity e subtotal
    return {
        name,
        price,
        quantity,
        //subtotal é uma função que retorna o valor total do item
        subtotal: ()=> price * quantity,
    };
}
// exportar a função para ser usada em outros arquivos, por padrão, o nome do arquivo é o mesmo da função
export default createItem;
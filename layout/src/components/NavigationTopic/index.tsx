import { NavigationTopics } from './style'

export const NavigationTopic = () => {
    return (
        <>
            <NavigationTopics>
                <ul className="topic">
                    <p>Informações</p>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Prazo de Envio</a></li>
                    <li><a href="#">Trocas e Devoluções</a></li>
                    <li><a href="#">Promoções e Cupons</a></li>
                </ul>
                <ul className="topic">
                    <p>Minha Conta</p>
                    <li><a href="#">Minha Conta</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Cadastre-se</a></li>
                </ul>
                <ul className="topic">
                    <p>Onde nos Encontrar</p>
                    <li><a href="#">Lojas</a></li>
                    <li><a href="#">Endereço</a></li>
                </ul>
            </NavigationTopics>
        </>
    )
}
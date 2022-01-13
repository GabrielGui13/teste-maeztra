import {Nav} from './style'
import { FiUser } from 'react-icons/fi'
import { BiHeart } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export const Navbar = () => {
    return (
        <Nav>
            <div className="divMsg"><a href="">Acompanhe as melhores promoções disponíveis aqui na Maeztra.</a></div>
            <div className="contentWrapper">
                <div className="logo">
                    <img src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png" alt="Logo Maeztra" />
                </div>
                <div className="searchWrapper">
                    <input type="text" placeholder="O Que Você Busca?" />
                    <button>Buscar</button>
                </div>
                <div className="accountAndCartWrapper">
                    <div className="accountContent">
                        <FiUser/>
                        <span>Minha Conta</span>
                    </div>
                    <div className="accountLikeContent">
                        <BiHeart/>
                        <span>Minha Conta</span>
                    </div>
                    <div className="cartContent">
                        <HiOutlineShoppingBag/>
                        <span>Meu Carrinho</span>
                    </div>
                </div>
            </div>
            <div className="listWrapper">
                <ul>
                    <li><a href="" style={{color: '#FAA500', fontWeight: 'bold'}}>Novidades</a></li>
                    <li><a href="">Vestidos</a></li>
                    <li><a href="">Roupas</a></li>
                    <li><a href="">Sapatos</a></li>
                    <li><a href="">Lingerie</a></li>
                    <li><a href="">Acessorios</a></li>
                    <li><a href="">OUTLET</a></li>
                </ul>
            </div>
        </Nav>
    )
}
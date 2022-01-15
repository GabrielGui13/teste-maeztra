import './style.scss'
import Shoes from '../../assets/TieShoes.png'
import { AiOutlineMail } from 'react-icons/ai'
import { GrSend } from 'react-icons/gr'
import { EventHandler } from 'react';

interface ModalProps {
    closeModal(element: any): void;
    showModal: Boolean;
}

export const Modal = ({showModal, closeModal}: ModalProps) => {
    return (
        <div data-close-modal-handler className={`custom-modal ${showModal ? '' : 'disabledModal'}`} onClick={e => closeModal(e.target)}>
            <button data-close-modal-handler onClick={e => closeModal(e.target)}>FECHAR</button>
            <div className='modal-content'>
                <div className="modal-image">
                    <img src={Shoes} alt="Homem amarrando o tenis" />
                </div>
                <div className="modal-body">
                    <AiOutlineMail/>
                    <p>BEM VINDO À MAEZTRA</p>
                    <p id="modalMsg">Receba em Primeira mão <span>desconto e ofertas exclusivas</span></p>
                    <input type="text" name="email" id="emailInput" placeholder="Digite seu e-mail" />
                    <button>
                        ENVIAR
                        <GrSend/>
                    </button>
                </div>
            </div>
        </div>
    )
}
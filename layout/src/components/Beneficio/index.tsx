import { Beneficios } from './style'
import { BiWorld } from 'react-icons/bi'
import { FaWarehouse, FaTruck } from 'react-icons/fa'
import { MdPublishedWithChanges } from 'react-icons/md'
import { IoIosPricetags } from 'react-icons/io'

export const Beneficio = () => {
    const benefits = [
        {
            name: 'Produtos importados',
            desc: 'Produto de Alta Qualidade',
            icon() {
                return <BiWorld/>
            }
        },
        {
            name: 'Estoque no Brasil',
            desc: 'Produtos mais perto de você!',
            icon() {
                return <FaWarehouse/>
            }
        },
        {
            name: 'Trocas Garantidas',
            desc: 'Trocas em até 48 horas, vejas as regras',
            icon() {
                return <MdPublishedWithChanges/>
            }
        },
        {
            name: 'Ganhe 5% off',
            desc: 'Pagando à vista no Cartão',
            icon() {
                return <IoIosPricetags/>
            }
        },
        {
            name: 'Frete Grátis',
            desc: 'Em compras acima de R$ 499,00',
            icon() {
                return <FaTruck/>
            }
        }
    ]

    return (
        <Beneficios>
            <p>Por que comprar na Maeztra?</p>
            <div className="benefitWrapper">
                {benefits.map((item, i) => {
                    return (
                        <div className="benefitContent" key={i}>
                            <div className="benefitIcon">
                                {item.icon()}
                            </div>
                            <div className="benefitText">
                                <p className="benefitName">{item.name}</p>
                                <p className="benefitDesc">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Beneficios>
    )
}
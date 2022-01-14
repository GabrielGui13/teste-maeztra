import { FooterElement } from "./style"
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaCcMastercard, FaCcVisa, FaLinkedinIn } from 'react-icons/fa'
import VTEXLogo from '../../assets/VTEXLogo.svg.png'
import MaeztraLogo from '../../assets/MaeztraLogo.png'

export const Footer = () => {
    return (
        <>
            <FooterElement>
                <div>
                    <AiFillFacebook/>
                    <FaLinkedinIn/>
                    <AiOutlineInstagram/>
                    <AiFillYoutube/>
                </div>
                <div>
                    <FaCcVisa/>
                    <FaCcMastercard/>
                    <FaCcVisa/>
                    <FaCcMastercard/>
                </div>
                <div className="footerBrandIconWrapper">
                    <div className="vtexFooter">
                        <p>Powered by</p>
                        <div className="footerFormatImage">
                            <img src={VTEXLogo} alt="Logo VTEX" />
                        </div>
                    </div>
                    <div className="maeztraFooter">
                        <p>Developed by</p>
                        <div className="footerFormatImage">
                            <img src={MaeztraLogo} alt="Logo Maeztra" />
                        </div>
                    </div>
                </div>
            </FooterElement>
        </>
    )
}
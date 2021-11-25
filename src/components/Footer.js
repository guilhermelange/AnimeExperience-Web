/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/components/footer.css'

import letter from '../assets/letter-logo.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'


const Footer = (props) => {
    const today = new Date();
    return (
        <div className="footer">
            <div className="headFooter">
                <div className="letterFooter">
                    <img src={letter} alt="letter" />
                    <p>@{today.getUTCFullYear()} Todos os direitos reservados.</p>
                </div>
                <div className="navFooter">
                    <a className="footerAnchor" href="#">Feedback</a>
                    <a className="footerAnchor" href="#"> Suporte</a>
                    <a className="footerAnchor" href="#">FAQ</a>
                </div>

                <div className="followFooter">
                    <div>
                        <span className="footerSpan" >SIGA-NOS</span></div>
                    <a href="#"><img src={facebook} alt="facebook" /></a>
                    <a href="#"><img src={instagram} alt="instagram" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
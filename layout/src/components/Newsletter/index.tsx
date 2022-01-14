import { NewsletterForm } from "./style"

export const Newsletter = () => {
    return (
        <>
            <NewsletterForm>
                <h4>Recebe Nossa Newsletter</h4>
                <div className="newsletterInput">
                    <input type="text" name="newsletter" id="newsletter" placeholder="Digite seu e-mail" />
                    <button>Enviar</button>
                </div>
            </NewsletterForm>
            <hr/>
        </>
    )
}
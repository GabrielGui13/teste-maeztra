import { Carousel } from 'react-bootstrap'
import './style.scss'

export const ImageCarousel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/ftECh3G.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Promoções de Outono</h1>
                        <p> Confira os melhores looks para combinar com você nesse Outono</p>
                        <button>Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/ftECh3G.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Promoções de Outono</h1>
                        <p> Confira os melhores looks para combinar com você nesse Outono</p>
                        <button>Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/ftECh3G.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Promoções de Outono</h1>
                        <p> Confira os melhores looks para combinar com você nesse Outono</p>
                        <button>Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/ftECh3G.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Promoções de Outono</h1>
                        <p> Confira os melhores looks para combinar com você nesse Outono</p>
                        <button>Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/ftECh3G.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Promoções de Outono</h1>
                        <p> Confira os melhores looks para combinar com você nesse Outono</p>
                        <button>Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="carouselInfo">

            </div>
        </>
    )
}
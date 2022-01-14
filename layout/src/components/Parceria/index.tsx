import { Parcerias } from './style'

export const Parceria = () => {
    const images = [
        'https://i.imgur.com/Qoc0YF7.png',
        'https://i.imgur.com/cHLLxR4.png',
        'https://i.imgur.com/JOTNQgl.png',
        'https://i.imgur.com/PN0nOAY.png',
        'https://i.imgur.com/qZ1WvYA.png'
    ]
    
    return (
        <Parcerias>
            <h3>Marcas Parceiras</h3>
            <div className="brandImagesWrapper">
                {images.map((image, index) => {
                    return (
                        <div className="brandImageContent" key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} />
                        </div>
                    )
                })}
            </div>
        </Parcerias>
    )
}
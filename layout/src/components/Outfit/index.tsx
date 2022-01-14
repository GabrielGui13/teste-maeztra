import C1 from '../../assets/roupa1.png'
import C2 from '../../assets/roupa2.png'
import { Outfits } from './style'

export const Outfit = () => {
    const clothes = [
        {
            name: 'Faux Suede Mini Skirt',
            desc: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            price: `R$ ${500},00`,
            image: C2,
            colors: [
                '#DEAC71',
                '#D37164',
                '#6497D3',
                '#3C3B79'
            ]
        },
        {
            name: 'Ruched Rose Print Mini Skirt',
            desc: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper.',
            price: `R$ ${320},00`,
            image: C1,
            colors: [
                '#1C1A19',
                '#D84E4B',
                '#CFC9B0',
                '#EAE9E5'
            ]
        },
        {
            name: 'Faux Suede Mini Skirt',
            desc: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            price: `R$ ${500},00`,
            image: C2,
            colors: [
                '#DEAC71',
                '#D37164',
                '#6497D3',
                '#3C3B79'
            ]
        },
        {
            name: 'Ruched Rose Print Mini Skirt',
            desc: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper.',
            price: `R$ ${320},00`,
            image: C1,
            colors: [
                '#1C1A19',
                '#D84E4B',
                '#CFC9B0',
                '#EAE9E5'
            ]
        },
        {
            name: 'Faux Suede Mini Skirt',
            desc: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            price: `R$ ${500},00`,
            image: C2,
            colors: [
                '#DEAC71',
                '#D37164',
                '#6497D3',
                '#3C3B79'
            ]
        },
    ]
    
    return (
        <Outfits>
            <h3>As Mais Pedidas</h3>
            <div className="overflowHelper">
                <div className="outfitImagesWrapper">
                    {clothes.map((item, index) => {
                        return (
                            <div className="outfitImageCard" key={index}>
                                <div className="outfitImage">
                                    <img src={item.image} alt={`Image ${index + 1}`} />
                                </div>
                                <div className="outfitImageContent">
                                    <div className="outfitColorPickerWrapper">
                                        {item.colors.map((color, index) => {
                                            return (
                                                <span key={index} className="outfitColorPickerSquare" style={{backgroundColor: color}}></span>
                                            )
                                        })}
                                    </div>
                                    <h4 className="outfitPrice">{item.price}</h4>
                                    <p className="outfitTitle">{item.name}</p>
                                    <small className="outfitDesc">{item.desc}</small> 
                                    <br/>
                                    <button>Adicionar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Outfits>
    )
}
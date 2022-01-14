import React from 'react';
import { Navbar } from '../../components/Navbar'
import { ImageCarousel } from '../../components/ImageCarousel'
import { Beneficio } from '../../components/Beneficio'
import { Parceria } from '../../components/Parceria'
import { Outfit } from '../../components/Outfit'
import { Colecao } from '../../components/Colecao'
import { Newsletter } from '../../components/Newsletter'
import { NavigationTopic } from '../../components/NavigationTopic'
import { Footer } from '../../components/Footer'

export const Main = () => {
    return (
        <>
            <Navbar/>
            <ImageCarousel/>
            <Beneficio/>
            <Parceria/>
            <Outfit/>
            <Colecao/>
            <Newsletter/>
            <NavigationTopic/>
            <Footer/>
        </>
    )
}
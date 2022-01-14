import React from 'react';
import { Navbar } from '../../components/Navbar'
import { ImageCarousel } from '../../components/ImageCarousel'
import { Beneficio } from '../../components/Beneficio'
import { Parceria } from '../../components/Parceria'

export const Main = () => {
    return (
        <>
            <Navbar/>
            <ImageCarousel/>
            <Beneficio/>
            <Parceria/>
        </>
    )
}
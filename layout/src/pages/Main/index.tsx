import React from 'react';
import { Navbar } from '../../components/Navbar'
import { ImageCarousel } from '../../components/ImageCarousel'
import { Beneficio } from '../../components/Beneficio'

export const Main = () => {
    return (
        <>
            <Navbar/>
            <ImageCarousel/>
            <Beneficio/>
        </>
    )
}
import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import useInicio from '../hooks/useInicio'
import Banner from '../components/banner'
import ListadoPropiedades from '../components/listadoPropiedades'

const ImagenBackground = styled(BackgroundImage)`
    width: 100%;
    padding-top: 47%;
    background-size: cover;
`

const TextoInicio = styled.div`
    color: #FFF;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    h1 {
        position: absolute;
        top: 40%;
        font-size: 2rem;
        margin: 0;
        max-width: 800px;
    }

    @media (min-width: 992px) {
        h1 {
            font-size: 4rem;
        }
    }
`

const Index = () => {
    const {nombre, contenido, imagen} = useInicio()
    const image = imagen.localFile.childImageSharp.fluid
    
    return ( 
        <Layout>
            <ImagenBackground 
                Tag='section'
                fluid={image}
                fadeIn='soft'
            >
                <TextoInicio>
                    <h1>Venta de casas y departamentos exclusivos</h1>
                </TextoInicio>
            </ImagenBackground>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p
                        css={css`
                            text-align: center;
                        `}
                    >{contenido}</p>
                </div>
            </main>
            
            <Banner />

            <ListadoPropiedades />
        </Layout>
    )
}
 
export default Index;

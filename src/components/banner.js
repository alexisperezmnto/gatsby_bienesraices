import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImagenBackground = styled(BackgroundImage)`
    width: 100%;
    padding-top: 35%;
    background-size: cover;
`

const TextoInicio = styled.div`
    color: #FFF;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        position: absolute;
        top: 40%;
        font-size: 1.5rem;
        margin-bottom: 50px;
        max-width: 800px;
    }

    p {
        position: absolute;
        top: 45%;
    }

    @media (min-width: 992px) {
        h3 {
            font-size: 3rem;
        }
    }
    
`

const Banner = () => {
    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: {eq: "encuentra.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    
    return (
        <ImagenBackground 
            Tag='section'
            fluid={imagen.childImageSharp.fluid}
            fadeIn='soft'
        >
            <TextoInicio>
                <h3>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </TextoInicio>
        </ImagenBackground>
    )
}
 
export default Banner
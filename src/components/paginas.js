import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import Layout from './layout'
import ListadoPropiedades from './listadoPropiedades'

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`

export const query = graphql`
    query ($id: String!) {
        allStrapiPagina(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                contenido
                imagen {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`        

const Paginas = ({data: {allStrapiPagina: {nodes}}}) => {
    
    const {
        nombre,
        contenido,
        imagen: {localFile: {childImageSharp: {gatsbyImageData}}}, 
    } = nodes[0]

    return (
        <Layout>
            <main className='contenedor'>
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <GatsbyImage 
                        image={gatsbyImageData}
                        alt={`Imagen ${nombre}`}
                    />
                    <p>{contenido}</p>
                </ContenidoPagina>
            </main>

            {nombre === 'Propiedades' && (
                <ListadoPropiedades />
            )}
        </Layout>
    )
}

export default Paginas
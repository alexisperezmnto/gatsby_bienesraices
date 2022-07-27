import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Iconos from './iconos'
import styled from '@emotion/styled'
import Layout from './layout'

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`

const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }

    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color:  #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        .agente {
            margin-bottom: 50px;
        }       
    }
`

export const query = graphql`
query($id: String!) {
    allStrapiPropiedad(filter: {id: {eq: $id}}) {
      nodes {
        estacionamiento
        habitaciones
        nombre
        precio
        wc
        agentes {
          email
          nombre
          telefono
        }
        descripcion {
          data {
            descripcion
          }
        }
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`        

const Propiedades = ({data: {allStrapiPropiedad: {nodes}}}) => {
    
    const {
        nombre,
        descripcion: {data: {descripcion}}, 
        imagen: {localFile: {childImageSharp: {gatsbyImageData}}}, 
        wc, 
        estacionamiento, 
        habitaciones, 
        precio, 
        agentes
    } = nodes[0]

    return (
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <GatsbyImage 
                        image={gatsbyImageData}
                        alt={`Imagen ${nombre}`}
                    />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className='precio'>${precio}</p>
                    <Iconos 
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className='agente'>
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>{agentes.telefono}</p>
                        <p>{agentes.email}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
    )
}

export default Propiedades
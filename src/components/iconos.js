import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`

const Iconos = ({wc, estacionamiento, habitaciones}) => {
    const {iconos: {imagen}} = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
                imagen: nodes {
                    id
                    publicURL
                }
            }
        }
    `)
    
    return (
        <ListadoIconos>
            <li>
                <img src={imagen[2].publicURL} alt='Icono WC' />
                <p>{wc}</p>
            </li>
            <li>
                <img src={imagen[1].publicURL} alt='Icono estacionamiento' />
                <p>{estacionamiento}</p>
            </li>
            <li>
                <img src={imagen[0].publicURL} alt='Icono habitaciones' />
                <p>{habitaciones}</p>
            </li>
        </ListadoIconos>
    )
}

export default Iconos
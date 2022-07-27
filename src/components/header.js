import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import Navegacion from './navegacion'

const Header = () => {

    const {logo} = useStaticQuery(graphql `
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `)
    
    return (
        <header
            css={css`
                background-color: #0D283B;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to={'/'}>
                    <img src={logo.publicURL} alt='Logo Bienes Raíces' />
                </Link>

                <Navegacion />
            </div>
        </header>
    )
}
 
export default Header
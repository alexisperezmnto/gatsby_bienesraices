import { graphql, useStaticQuery } from 'gatsby'

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        {
            allStrapiPropiedad {
                nodes {
                    id
                    nombre
                    descripcion {
                        data {
                            descripcion
                        }
                    }
                    precio
                    habitaciones
                    estacionamiento
                    wc
                    categoria {
                        nombre
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }   
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
    `)
    
    return datos.allStrapiPropiedad.nodes
}

export default usePropiedades
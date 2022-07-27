import { graphql, useStaticQuery } from 'gatsby'

const useInicio = () => {

    const data = useStaticQuery(graphql`
    query {
        allStrapiPagina(filter: {nombre: {eq: "Inicio"}}) {
          edges {
            node {
                id
                nombre
                contenido
                imagen {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth:1200 duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            }) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
          }
        }
      }
    `)

    return data.allStrapiPagina.edges[0].node
}
 
export default useInicio
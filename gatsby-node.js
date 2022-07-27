const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {

    const resultado = await graphql(`
        query {
            allStrapiPagina {
                nodes {
                    id
                    nombre
                }
            }
            allStrapiPropiedad {
                nodes {
                    id
                    nombre
                }
            }
        } 
    `)
    
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors)
    }

    const paginas = resultado.data.allStrapiPagina.nodes
    const propiedades = resultado.data.allStrapiPropiedad.nodes

    paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug(pagina.nombre),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id 
            }
        })
    })

    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id 
            }
        })
    })

}

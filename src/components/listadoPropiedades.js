import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview'
import * as listadoPropiedadesCss from '../css/listadoPropiedadesCss.module.css'
import useFiltro from '../hooks/useFiltro'

const ListadoPropiedades = () => {
    
    const resultado = usePropiedades()
    const [propiedades] = useState(resultado)
    const [filtradas, setFiltradas] = useState([])

    //Filtrar propiedades
    const { categoria, FiltroUI } = useFiltro()

    useEffect(() => {
        if(categoria) {
            const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria)
            setFiltradas(filtro)
        } else {
            setFiltradas(propiedades)
        }
    }, [categoria])

    return (
        <>
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Nuestras propiedades</h2>

            {FiltroUI()}

            <ul className={listadoPropiedadesCss.propiedades}>
                {filtradas.map(propiedad => (
                    <PropiedadPreview 
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    )
}
 
export default ListadoPropiedades;

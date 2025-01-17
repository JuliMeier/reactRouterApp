import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { buscar } from '../api/api'
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import { SubCategorias } from './SubCategories'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'

const Categoria = () => {
    
    const [subCategorias, setSubCategorias] = useState([])
    const { id } = useParams()

    const url = useResolvedPath('').pathname

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubCategorias(response[0].subcategorias)
        }) 
    }, [id]) 


    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex' >
            {
                subCategorias.map(subCategoria => (
                    <li className={`category-list__category category-list__category--${id}`} key={subCategoria}>
                        <Link to={`${url}/${subCategoria}`} > {subCategoria} </Link>
                    </li>
                ))
            }
            </ul>
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
                <Route path=':subCategoria' element={<SubCategorias />} />
            </Routes>
        </>
    )
}

export default Categoria
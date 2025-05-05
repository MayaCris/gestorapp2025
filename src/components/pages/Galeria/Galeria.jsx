import { useState, useEffect } from 'react';
import { getImages, fetchByUrl, goToPage  } from '../../../services/serviceGallery';

export function Galeria() {

    const [datosAPI, setDatosAPI] = useState(null)
    const [upload, setUpload] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [prevPageUrl, setPrevPageUrl] = useState(null)
    const [activeSearch, setActiveSearch] = useState('')
    const itemsPerPage = 30 

    const performSearch = (searchTerm) => {
        let search =  searchTerm

        if (!search) {
            setActiveSearch('nature')
            search = 'nature'
        }else {
            setActiveSearch(search)
        }

        setUpload(false) // Show loading state
        getImages(search, itemsPerPage)
            .then((datos) => {
                handleSearchResults(datos)

            })
            .catch((datos) => {
                setUpload(false)
                console.log(datos)
            })
    }

    const handleNextPage = () => {
        if (!nextPageUrl) return

        setUpload(false)
        const nextPageNumber = currentPage + 1
        setCurrentPage(nextPageNumber)
        
        fetchByUrl(nextPageUrl)
            .then((datos) => {
                handleSearchResults(datos, nextPageNumber)
            })
            .catch((error) => {
                setUpload(false)
                console.log(error)
            })
    }

    const handlePrevPage = () => {
        if (currentPage <= 1) return

        setUpload(false)
        const newPage = currentPage - 1
        setCurrentPage(newPage)

        goToPage(activeSearch, itemsPerPage, newPage)
            .then((datos) => {
                handleSearchResults(datos, newPage)
            })
            .catch((error) => {
                setUpload(false)
                console.log(error)
            })
    }

    const handleSearchResults = (datos, pageNumber = currentPage) => {
        setDatosAPI(datos)
        
        if(datos && datos.total_results) {
            const totalResults = Math.ceil(datos.total_results / itemsPerPage)
            setTotalPages(totalResults)
            setNextPageUrl(datos.next_page || null)

            if (pageNumber <= 1) {
                setPrevPageUrl(null)
            } else {
                setPrevPageUrl('Exists')
            }
        }
        setUpload(true) // Hide loading state
    }

    useEffect(() => {
        performSearch('nature')
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            performSearch(inputValue)
        }
    }

    if (upload) {
        return (
            <>
                <div className="container mb-5 mt-5" style={{ minHeight: "calc(100vh - 360px)" }}>
                    <br />
                    <div className='hstack gap-3 mb-3'>
                        <h1 className="p-2 text-primary fw-bold">Galeria</h1>
                        <div className='hstack p-2 ms-auto'>
                            <div className="form-floating mb-3" style={{ width: "500px" }}>
                                <input 
                                    type="search" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="search"
                                    value = {inputValue}
                                    onChange= {(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}/>
                                <label to="floatingInput">Buscar + Enter</label>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {datosAPI && datosAPI.photos && datosAPI.photos.map((image, index) => {
                            return (
                                <div className='col' key={index}>
                                    <div className='card h-100 shadow p-5'>
                                        <img src={image.src.landscape} alt="" />
                                        <p>{image.alt}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {totalPages > 0 && (
                        <div className="d-flex justify-content-center mt-4">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className={`page-item ${!prevPageUrl ? 'disabled' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={handlePrevPage} 
                                            disabled={!prevPageUrl}>
                                            &laquo; Anterior
                                        </button>
                                    </li>
                                    
                                    <li className="page-item active">
                                        <span className="page-link">
                                            Página {currentPage} de {totalPages}
                                        </span>
                                    </li>
                                    
                                    <li className={`page-item ${!nextPageUrl ? 'disabled' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={handleNextPage} 
                                            disabled={!nextPageUrl}>
                                            Siguiente &raquo;
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>

            </>

        )
    } else {
        return (
            <>
                <div className="container d-flex flex-column align-items-center justify-content-center" style={{
                    minHeight: "calc(100vh - 200px)", // Adjust 200px based on header+footer height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"}}>
                <img 
                    src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" 
                    alt="Loading..." 
                    style={{width: "150px"}}
                />
                <h2 className="mt-3">Cargando imágenes...</h2>
            </div>
            </>
        )
    }
}

//Tarea agregar un input de consulta y que me traiga las imagenes que coincidan con la busqueda
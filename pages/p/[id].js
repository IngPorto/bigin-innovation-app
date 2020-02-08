import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ReactHtmlParser from 'react-html-parser';

const Post = props => {
    const router = useRouter();
    return (
        <Layout>
            <div className="container mt-5 mb-5">
                <div className="row mb-3 justify-content-center">
                    <div className="col" style={{ maxWidth: '210px'}}>
                        <div className="row">
                            <img src={ props.show.image.medium} />
                        </div>
                        <div className="row justify-content-end">
                            <Link href={`${ props.show.officialSite }`} prefetch={false}>
                                <a className="col-1 m-2"><i className="fas fa-external-link-alt"></i></a>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <p className="h3">{ props.show.name}</p>
                        <p className="mb-0"><span className="text-muted"><small>Type:</small></span> { props.show.type}</p>
                        <p className="mb-0"><span className="text-muted"><small>Lang:</small></span> { props.show.language}</p>
                        <p className="mb-0"><span className="text-muted"><small>Runtime:</small></span> { props.show.runtime} min</p>
                        <p className="mb-0"><span className="text-muted"><small>Rating:</small></span> { props.show.rating.average }</p>
                        <p className="mb-0 text-muted"><small>Genre:</small></p>
                        <p className="ml-3">
                        { 
                            props.show.genres.map( (genre, index) => (
                            <small key={index} className="mb-0">{ genre }{ index+1 < props.show.genres.length && ', '}</small>
                            ))
                        }
                        </p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="section">
                        <div className="col card">
                            <div className="card-body">
                                <div className="small" >{ ReactHtmlParser(props.show.summary) }</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    {
                        props.show.id > 1 &&
                        <div className="col-auto p-0">
                            <Link href={`${ props.show.id - 1 }`}>
                                <a type="button" className="btn btn-outline-info"><i className="fas fa-arrow-left"></i></a>
                            </Link>
                        </div>
                    }
                    <div className="col-auto p-0 ml-3">
                        <Link href={`${ props.show.id + 1 }`}>
                            <a type="button" className="btn btn-outline-info"><i className="fas fa-arrow-right"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .font-proxima-nova {
                    font-family: Proxima Nova Regular,sans-serif;
                }
            `}</style>
        </Layout>
    )
}

Post.getInitialProps = async function( context ) {
    const id = context.query.id;
    
    const res = await fetch('http://api.tvmaze.com/shows/' + id);
    const show = await res.json();
    console.log ( show )

    return ({
        show
    })
}

export default Post
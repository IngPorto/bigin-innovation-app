import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li key={props.show.id} >
        <Link href={`/p/[id]`} as={`/p/${ props.show.id }`}>
            <a>{ props.show.name }</a>
        </Link>
    </li>
)

const Blog = props => {
    return (
        <Layout>
            <p className="h2 mt-2">Shows</p>
            <ul>
                {
                    props.shows.map( show =>(
                        <PostLink key={show.id} show={show} />
                    ))
                }
            </ul>
        </Layout>
    )
}

Blog.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/shows');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    };
};

export default Blog
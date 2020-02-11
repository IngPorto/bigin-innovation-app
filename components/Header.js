import Link from 'next/link'
import Head from 'next/head'

const linkStiles = {
    marginRight: '15px'
}

const Header = () => {
    return (
        <div className="col" style={{position:'fixed',top:0,left:0, background:'white', zIndex: 1000}}>
            <Head>
                <title>MyShows</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div className="row justify-content-center">
                <Link href="/">
                    <a className="btn" style={linkStiles}><strong>Home</strong></a>
                </Link>
                <Link href="/about">
                    <a className="btn" style={linkStiles}><strong>About</strong></a>
                </Link>
                <Link href="/blog">
                    <a className="btn" style={linkStiles}><strong>Blog</strong></a>
                </Link>
            </div>
            <hr className="m-0"/>
        </div>
    )
}

export default Header;
import Header from '../components/Header'
import $ from 'jquery'

const layoutStyles = {

}

const Layout = props => (
    <div style={layoutStyles}>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"></link>
        
        <div className="container">
            <Header />
            <div className="container mt-5 mb-5">
                { props.children }
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" ></script>
    </div>
)

export default Layout
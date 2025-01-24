import Footer from "./Footer"
import Header from "./Header"
import PropTypes from "prop-types"; 

function Layout({children}) {
  return (
    <>
        <Header />
        <div> {children} </div>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children' as a React node
};

export default Layout

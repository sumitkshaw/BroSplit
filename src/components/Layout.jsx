import PropTypes from 'prop-types';

export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">BroSplit</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://github.com/sumitkshaw" target="_blank">Sumit Shaw</a></p>
        </footer>
    )

    //https://www,YOUR_USERNAME.netlify.app

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,  // Ensures 'children' is validated
};
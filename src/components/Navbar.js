

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Womens</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={() => window.localStorage.path = 'hsgp'}>Hsgp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={() => window.localStorage.path = 'kor'}>Kor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Disabled</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
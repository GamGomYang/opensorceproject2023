import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import arlam from './images/icon/arlam.png';
import mypage from './images/icon/mypage.png';
import './Menubar.css';

function Navigation() {
    return (
        <div className="Menubar">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand navbar" href="/">
                        <strong>Edit X</strong>
                    </a>
                    <img src={arlam} alt="Icon" className="arlam-icon" />
                    <img src={mypage} alt="Icon" className="mypage-icon" />
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='App'>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/myfavorite">나의상품</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/shoes">슈즈</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/tops">의류</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/megazine">Megazine</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/newopen">출시일정</a>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;
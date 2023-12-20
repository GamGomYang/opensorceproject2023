import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import Menubar from './Menubar';
import Guide from './Guide';
import LowBanner from './Lowbanner';
import ItemPage from './ItemPage';
import guideData from'./MagazinePage';
import MyFavorit from './MyFavorit';
import MidBanner from './MidBanner';
import Magazine from './MagazinePage';
import ShoesPage from './ShoesPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import OuterPage from './OuterPage';
import NewPage from './NewPage';
import LogIn from './Login';
import PlusPage from './PlusPage';
import SignUp from './Signup';
import ModalData from './modal';


function Routing() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/home' element={<MainPage />} />
                    <Route path='/Myfavorite' element={<ItemPage/>} />
                    <Route path='/Shoes' element={<ShoesPage/>} />
                    <Route path='/tops' element={<OuterPage/>} />
                    <Route path='/magazine' element={<Magazine />} />
                    <Route path='/newopen' element={<NewPage />} />
                    <Route path='/arlam' element={<ItemPage/>}/>
                    <Route path='/mypage' element={<SignUp/>}/>
                    <Route path='/pluspage' element={<PlusPage/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
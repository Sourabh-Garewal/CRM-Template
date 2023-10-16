import './Navbar.scss'
import creysto_logo from '../../Images/Logo/creysto_logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineTranslate} from 'react-icons/hi'
import {BsSun} from 'react-icons/bs'
import {RxDashboard} from 'react-icons/rx'
import {IoMdNotificationsOutline} from 'react-icons/io'

function Navbar() {


    return (
        <><nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">

                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>


                <div class="collapse navbar-collapse ml-2" id="navbarSupportedContent">

                    <a class="navbar-brand ms-2 mt-2 mt-lg-0" href="#">
                        <img
                            src={creysto_logo}
                            height="25"
                            alt="creysto logo"
                            loading="lazy"
                        />
                    </a>

                    <ul class="navbar-nav mb-2 mb-lg-0 navbar-logo-search">

                        <li className='nav-items d-flex align-items-center justify-content-center'>

                            <span><AiOutlineSearch size={20}/></span>
                            <input type="text" placeholder='Search (Ctrl+/)' className=' ps-2 nav-search-box navbar-light bg-light '/>
                        </li>

                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li> */}
                    </ul>

                </div>

                <div class="d-flex align-items-center nav-icons">

                    <a class="text-reset me-3" href="#">
                        <HiOutlineTranslate size={22}/>
                    </a>

                    <a class="text-reset me-3" href="#">
                        <BsSun size={22}/>
                    </a>

                    <a class="text-reset me-3" href="#">
                        <RxDashboard size={22}/>
                    </a>

                    <a class="text-reset me-3" href="#">
                        <IoMdNotificationsOutline size={22}/>
                    </a>

                    {/* <div class="dropdown">
                        <a
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div> */}

                    <div class="dropdown">
                        <a
                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                class="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li>
                                <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>

    );
}

export default Navbar;

import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { BsCheck2Square } from 'react-icons/bs'
import { BiLink, BiUserPlus } from 'react-icons/bi'
import { GrAnalytics } from 'react-icons/gr'
import { LuSettings } from 'react-icons/lu'
import { NavLink } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5"

import './Sidebar.css'

function Sidebar() {

    return (
        <>


            <main className='sidebar'>
                <div className="flex-shrink-0 p-3 bg-light vh-100">

                    <ul className="list-unstyled ps-0">


                        <li className="mb-1">
                            <NavLink to={'/'} className="sidebar-item d-flex align-items-center gap-3 justify-contant-center btn btn-toggle align-items-center ">
                                <AiOutlineHome size={18} />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li className="mb-1 ">
                            <button className="block sidebar-item d-flex align-items-center gap-3 justify-contant-center btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                data-bs-target="#ticket-collapse" aria-expanded="false">
                                <BsCheck2Square size={18} />
                                Tickets
                            </button>
                            <div className="collapse ps-3 " id="ticket-collapse">
                                <ul className=" mt-2 mb-2 d-flex flex-column gap-2 btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <NavLink to={"/createticket"} className={"sidebar-item d-flex align-items-center gap-3 btn"}>
                                            <IoAddCircleOutline size={18} />
                                            Create Tickets
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"ticketlist"} className={"sidebar-item d-flex align-items-center gap-3 btn"} >
                                            <AiOutlineMenu size={18} />
                                            Ticket List
                                        </NavLink></li>

                                </ul>
                            </div>
                        </li>




                        <li className="mb-1">
                            <button className="block sidebar-item d-flex align-items-center gap-3 justify-contant-center btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                data-bs-target="#allocations-collapse" aria-expanded="false">
                                <BiLink size={18} />
                                Allocations
                            </button>
                            <div className="collapse ps-3" id="allocations-collapse">
                                <ul className="mt-2 mb-2 d-flex flex-column gap-2 btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><NavLink to={"teamallocation"} className={"sidebar-item d-flex align-items-center gap-3 btn"}><BiUserPlus size={18} />Team Allocations </NavLink></li>
                                    <li><NavLink to={"userallocation"} className={"sidebar-item d-flex align-items-center gap-3 btn"}><BiUserPlus size={18} />User Allocations</NavLink></li>
                                    <li><NavLink to={"teamreallocation"} className={"sidebar-item d-flex align-items-center gap-3 btn"}><BiUserPlus size={18} />Team Reallocations</NavLink></li>
                                    <li><NavLink to={"userreallocation"} className={"sidebar-item d-flex align-items-center gap-3 btn"}><BiUserPlus size={18} />User Reallocations</NavLink></li>
                                    <li><NavLink to={"removeallocation"} className={"sidebar-item d-flex align-items-center gap-3 btn"}><BiUserPlus size={18} />Remove Allocations</NavLink></li>
                                </ul>
                            </div>
                        </li>





                        <li className="mb-1">
                            <NavLink to={"/analytics"} className="sidebar-item d-flex align-items-center gap-3 justify-contant-center btn btn-toggle align-items-center rounded collapsed">

                                <GrAnalytics size={18} />
                                Analytics

                            </NavLink>
                        </li>
                            <li className="mb-1">
                        <NavLink to={"/settings"} className="sidebar-item d-flex align-items-center gap-3 justify-contant-center btn btn-toggle align-items-center rounded collapsed">
                                
                                    <LuSettings size={18} />
                                    Settings
                           
                        </NavLink>
                            </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Sidebar;
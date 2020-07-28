 import React from 'react';
 import {
     FaChevronDown,
     FaInbox,
     FaRegCalendarAlt,
     FaRegCalendar,
 } from 'react-icons/fa';


 export const Sidebar = () => (
 
    <div className="Sidebar" data-testid="sidebar">
       <ul className="sidebar__generic">
           <li>
               <span><FaInbox />
               </span>
               <span>Inbox</span>
            </li>

           < li > < span > < FaRegCalendar />
               </span>
               <span>Today</span>
            </li>

           <li><span><FaRegCalendarAlt />
               </span>
               <span>Next 7 days</span>
            </li>

       </ul>

       <div className="sidebar_middle">
           <span><FaChevronDown /></span>
           <h2>Project</h2>
       </div>



       <ul className="sidebar__projects">Projects will be Here</ul>

       Add Project Component Here!
    </div>
 );
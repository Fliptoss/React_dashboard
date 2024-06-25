import React from 'react';
import DashboardIcon from './../assets/Shapes.png';
import EcommerceIcon from './../assets/box.png';
import AuthenticationIcon from './../assets/box.png';
import OnboardingIcon from './../assets/box.png';
import ComponentsIcon from './../assets/box.png';
import CommunityIcon from './../assets/community.png';
import FinanceIcon from './../assets/icon3.png';
import JobboardIcon from './../assets/icon2.png';
import TaskIcon from './../assets/tick.png';
import MessagesIcon from './../assets/messageIcon.png';
import InboxIcon from './../assets/icon1.png';
import CalenderIcon from './../assets/icon4.png';
import CampaignIcon from './../assets/icon5.png';
import SettingsIcon from './../assets/icon6.png';
import UtilityIcon from './../assets/utility.png';

import SearchIcon from './../assets/1.png'; 
import Message2Icon from './../assets/2.png';
import ExclamationIcon from './../assets/2.png';
import MoonIcon from './../assets/icon4.png';
import ArrowsideIcon from './../assets/arrowIcon1.png';
import Logo from './../assets/Logo.png'; 

import ArrowDown from './../assets/Path.png'; 
import ArrowUp from './../assets/Path2.png'; 

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 shadow-black	">

      <div className="logo-div flex space-x-3 items-center pb-10">
        <img src={Logo}/>
        <span>Logo</span>
      </div>
      <nav className="space-y-4">
        <Section title="PAGES">
          <div className="bg-gray-900">
          <NavItem imgSrc={DashboardIcon} label="Dashboard" arrow={ArrowUp}>
            <SubNavItem label="Main" />
            <SubNavItem label="Analytics" />
            <SubNavItem label="Fintech" />
          </NavItem>
          </div>
          <NavItem imgSrc={EcommerceIcon} label="E-Commerce" arrow={ArrowDown}>
            <SubNavItem imgSrc={CommunityIcon} label="Community" />
            <SubNavItem imgSrc={FinanceIcon} label="Finance" />
            <SubNavItem imgSrc={JobboardIcon} label="Job Board" />
            <SubNavItem imgSrc={TaskIcon} label="Tasks" />
            <SubNavItem imgSrc={MessagesIcon} label="Messages" />
            <SubNavItem imgSrc={InboxIcon} label="Inboxs" />
            <SubNavItem imgSrc={CalenderIcon} label="Calender" />
            <SubNavItem imgSrc={CampaignIcon} label="Campaign" />
            <SubNavItem imgSrc={SettingsIcon} label="Settings" />
            <SubNavItem imgSrc={UtilityIcon} label="Utility" />
          </NavItem>
        </Section>
        <Section title="MORE">
          <NavItem imgSrc={AuthenticationIcon} label="Authentication" arrow={ArrowDown} />
          <NavItem imgSrc={OnboardingIcon} label="Onboarding" arrow={ArrowDown} />
          <NavItem imgSrc={ComponentsIcon} label="Components" arrow={ArrowDown} />
        </Section>
      </nav>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <div className="text-gray-400 text-sm font-semibold mb-2">{title}</div>
    <div className="space-y-1">{children}</div>
  </div>
);

const NavItem = ({ imgSrc, label, arrow, children }) => (
  <div>
    <div className="flex items-center space-x-2 pl-4 py-2 hover:bg-gray-700 rounded">
      {imgSrc && <img src={imgSrc} alt={`${label} icon`} className="w-5 h-5" />}
      <span>{label}</span>
      {arrow && <img src={arrow} alt="Arrow icon" className="w-3 h-3 ml-auto" />}
    </div>
    {children && <div className="pl-6 mt-1 space-y-1">{children}</div>}
  </div>
);

const SubNavItem = ({ imgSrc, label }) => (
  <div className="flex items-center space-x-2 pl-4 py-2 hover:bg-gray-700 rounded">
    {imgSrc && <img src={imgSrc} alt={`${label} icon`} className="w-5 h-5" />}
    <span>{label}</span>
  </div>
);

export default Sidebar;




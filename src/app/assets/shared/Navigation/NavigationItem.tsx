'use client'
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { FC, Fragment, useState, useRef } from "react";
import { NavLink } from "@/app/assets/components/NavLink";

import CardCategory3 from "@/app/assets/components/CardCategories/CardCategory3";

// styles (.isNew) are applied to isNew:true route
// href: "/#", links that go nowhere but are hovers and clicks [search better ui elem] 

export interface NavItemType {
  exact?: boolean; 
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
  to?: any;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);
  const aRef = React.useRef<HTMLAnchorElement>(null)


  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);
    if (!menu.children) {
      return null;
    }
    return (
      <Popover
        as="li"
        key={menu.id}
        className="menu-item menu-megamenu menu-megamenu--large"
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menu)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute top-full inset-x-0 transform z-50"
              >         
                <div className="bg-white dark:bg-neutral-900 shadow-lg">
                <div className="container">
                  <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
                    <div className="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
                      {menu.children.map((item, index) => (
                        <div key={index}>
                          <p className="font-medium text-slate-900 dark:text-neutral-200">
                            {item.name}
                          </p>
                          <ul className="grid space-y-4 mt-4">
                            {item.children?.map(renderMegaMenuNavlink)}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="w-[40%] xl:w-[35%]">
                      <CardCategory3 alt='nav img' />
                    </div>
                  </div>
                </div>
                </div>
              </Popover.Panel>
            </Transition>
            </>
      </Popover>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id} className={`${item.isNew ? "menuIsNew" : ""}`}>
        <NavLink
          exact
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
          href={item.href}
        >
          {item.name}
        </NavLink>
      </li>
    );
  };

  // ===================== MENU DROPDOWN =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute transform z-10 w-56 top-full left-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {menuDropdown.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  //done
  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="menu-item menu-dropdown relative px-2"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <Popover.Button as={'div'}>
              {renderDropdownMenuNavlink(item)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute z-10 w-56 right-full pl-2 top-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  //good
  const renderDropdownMenuNavlink = (item: NavItemType) => {
      return (
        <NavLink
          exact
          // ref={aRef}
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center font-normal text-neutral-6000 dark:text-neutral-400 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          href={item.href}
          activeclassname="!font-medium !text-neutral-900 dark:!text-neutral-100"
        >
          {item.name}
          {item.type && (
            <ChevronDownIcon
              className="ml-2 h-4 w-4 text-neutral-500"
              aria-hidden="true"
            />
          )}
        </NavLink>
      );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <div className="h-20 flex-shrink-0 flex items-center [&>*]:">
        <NavLink
          exact
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          href={item.href}
        >
          {item.name}
          {item.type && (
            <ChevronDownIcon
              className="ml-1 -mr-1 h-4 w-4 text-slate-400"
              aria-hidden="true"
            />
          )}
        </NavLink>
      </div>
    );
  };

  switch (menuItem.type) {
    case "dropdown":
      return renderDropdownMenu(menuItem);
    case "megaMenu":
      return renderMegaMenu(menuItem);
    default:
      return (
        <li className="menu-item flex-shrink-0">{renderMainItem(menuItem)}</li>
      );
  }
};

export default NavigationItem;

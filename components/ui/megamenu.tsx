"use client";
import React, { use } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { Syringe, Scissors, EyeClosed } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { link } from "fs";

const navListMenuItems = [
  {
    title: "Non-Surgical",
    description: "No need for surgery? We have you covered.",
    icon: Syringe,
    link: "/procedures/non-surgical",
  },
  {
    title: "Reconstructive",
    description: "Reconstructive surgery for all your needs.",
    icon: Scissors,
    link: "/procedures/reconstructive",
  },
  {
    title: "Aesthetic",
    description: "Aesthetic procedures to enhance your beauty.",
    icon: EyeClosed,
    link: "/procedures/aesthetic",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ icon, title, link }, key) => (
    <a href={link} key={key}>
      <MenuItem
        className="flex items-center gap-2 rounded-lg px-8"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 py-4 px-0">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
          {/* <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {description}
            </Typography> */}
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Procedures
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      {isMobileMenuOpen ? (
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      ) : (
        <div className="hidden lg:hidden">
          <Collapse open={false}>{renderItems}</Collapse>
        </div>
      )}
    </React.Fragment>
  );
}

const NavList = (
  <List
    className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
    placeholder={undefined}
    onResize={undefined}
    onResizeCapture={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
  >
    <Typography
      as="a"
      href="/about"
      variant="small"
      color="blue-gray"
      className="font-medium"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <ListItem
        className="flex items-center gap-2 py-2 pr-4"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        About PAPRAS
      </ListItem>
    </Typography>

    <NavListMenu />

    <Typography
      as="a"
      href="#"
      variant="small"
      color="blue-gray"
      className="font-medium"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <ListItem
        className="flex items-center gap-2 py-2 pr-4"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Articles
      </ListItem>
    </Typography>

    <Typography
      as="a"
      href="#"
      variant="small"
      color="blue-gray"
      className="font-medium"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <ListItem
        className="flex items-center gap-2 py-2 pr-4"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Events
      </ListItem>
    </Typography>

    <Typography
      as="a"
      href="/becomeamember"
      variant="small"
      color="blue-gray"
      className="font-medium"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <ListItem
        className="flex items-center gap-2 py-2 pr-4"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Become a Member
      </ListItem>
    </Typography>
  </List>
);

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen px-4 py-2 bg-amber-50 relative border-0 rounded-none"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex items-center justify-between lg:px-16 lg:py-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Papras Logo"
            width={337}
            height={88}
            className="max-w-40"
          />
        </Link>

        <div className="flex items-center gap-8 lg:gap-16">
          <div className="hidden lg:block">{NavList}</div>

          <div className="hidden lg:block  items-center">
            <Button
              variant="text"
              size="sm"
              className="hidden lg:inline-block bg-amber-300 rounded-full hover:bg-black hover:text-amber-400"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span>Find a Doctor</span>
            </Button>
          </div>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      {openNav ? (
        <Collapse open={openNav}>
          {NavList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="filled"
              size="sm"
              className=" bg-amber-500 rounded-full"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span>Find A Doctor</span>
            </Button>
          </div>
        </Collapse>
      ) : null}
    </Navbar>
  );
}

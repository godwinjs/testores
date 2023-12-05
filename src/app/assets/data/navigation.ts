import { NavItemType } from "../shared/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoid";
// isNew=true in MEGAMENU_TEMPLATES[0] 
// href: "/#", links that go nowhere but are hovers and clicks

const MEGAMENU_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/gameconsoles",  
    name: "Games & Consoles",
    children: [
      { id: ncNanoId(), href: "/gameconsoles/xbox", name: "XBOX" },
      { id: ncNanoId(), href: "/_clothing/ps", name: "PlayStations" },
      { id: ncNanoId(), href: "/_clothing/gameboy", name: "Game Boy" },
      { id: ncNanoId(), href: "/_clothing/psp", name: "PSP" },
      { id: ncNanoId(), href: "/_clothing/gamingpcs", name: "Gaming PCs" },
      { id: ncNanoId(), href: "/_clothing/simulators", name: "Simulators" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/accessories",
    name: "Accessories",
    children: [
      { id: ncNanoId(), href: "/accessories/km", name: "Keybords & mouse" },
      { id: ncNanoId(), href: "/accessories/conntrolers", name: "Controllers" },
      { id: ncNanoId(), href: "/accessories/vr", name: "VR Headset" },
      { id: ncNanoId(), href: "/accessories/headphones", name: "Headphones" },
      { id: ncNanoId(), href: "/accessories/clamps", name: "Clamps" },
      { id: ncNanoId(), href: "/accessories/gcards", name: "graphics Cards" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Stores",
    children: [
      { id: ncNanoId(), href: "#", name: "Monitors" },
      { id: ncNanoId(), href: "#", name: "Desks & Chairs" },
      { id: ncNanoId(), href: "#", name: "8k TVs" },
      { id: ncNanoId(), href: "#", name: "Internet & Routers" },
      { id: ncNanoId(), href: "#", name: "CDs" },
      { id: ncNanoId(), href: "#", name: "Sneakers" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Brands",
    children: [
      { id: ncNanoId(), href: "#", name: "Full Nelson" },
      { id: ncNanoId(), href: "#", name: "Jaysneakers" },
      { id: ncNanoId(), href: "#", name: "My Way" },
      { id: ncNanoId(), href: "#", name: "Huulo" },
      { id: ncNanoId(), href: "#", name: "Re-Arranged" },
      { id: ncNanoId(), href: "#", name: "Counterfeit" },
    ],
  },
];

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/page-collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/page-collection-2", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/product-detail-2", name: "Product Page 2" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/page-search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-my-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/signin", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

const OTHER_PAGE_CHILD: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Page",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Category Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/page-collection",
        name: "Category page 1",
      }
    ],
  },
  {
    id: ncNanoId(),
    href: "/product-detail",
    name: "Product Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/product-detail",
        name: "Product detail 1",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/cart",
    name: "Cart Page",
  },
  {
    id: ncNanoId(),
    href: "/checkout",
    name: "Checkout Page",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Search Page",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account Page",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Explore",
    type: "megaMenu",
    children: MEGAMENU_DEMO,
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Repairs",
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "SuperDeals",
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop",
  },
  // {
  //   id: ncNanoId(),
  //   href: "/#",
  //   name: "Pages",
  //   type: "megaMenu",
  //   children: MEGAMENU_TEMPLATES,
  // },
  {
    id: ncNanoId(),
    href: "#",
    name: "pages",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
];

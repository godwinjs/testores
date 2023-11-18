import { NavItemType } from "../shared/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoid";
// isNew=true in MEGAMENU_TEMPLATES[0] 
// href: "/#", links that go nowhere but are hovers and clicks

const MEGAMENU_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/_clothing",  
    name: "Clothing",
    children: [
      { id: ncNanoId(), href: "/_clothing/activeware", name: "Activewear" },
      { id: ncNanoId(), href: "/_clothing/coatsJackets", name: "Coats & Jackets" },
      { id: ncNanoId(), href: "/_clothing/sleepLounge", name: "Sleep & Lounge" },
      { id: ncNanoId(), href: "/_clothing/sweatshirts", name: "Sweatshirts" },
      { id: ncNanoId(), href: "/_clothing/hoodies", name: "Hoodies" },
      { id: ncNanoId(), href: "/_clothing/underware", name: "Underwear" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/_accessories",
    name: "Accessories",
    children: [
      { id: ncNanoId(), href: "/_accessories/sg", name: "Sunglasses" },
      { id: ncNanoId(), href: "/_accessories/g", name: "Gloves" },
      { id: ncNanoId(), href: "/__accessories/scrfs", name: "Scarves" },
      { id: ncNanoId(), href: "/_accessories/wal", name: "Wallets" },
      { id: ncNanoId(), href: "/__accessories/watc", name: "Watches" },
      { id: ncNanoId(), href: "/__accessories/blts", name: "Belts" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shoes",
    children: [
      { id: ncNanoId(), href: "#", name: "Boots" },
      { id: ncNanoId(), href: "#", name: "Loafers " },
      { id: ncNanoId(), href: "#", name: "Slip-Ons" },
      { id: ncNanoId(), href: "#", name: "Slippers" },
      { id: ncNanoId(), href: "#", name: "Sneakers" },
      { id: ncNanoId(), href: "#", name: "Counterfeit" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Brands",
    children: [
      { id: ncNanoId(), href: "#", name: "Full Nelson" },
      { id: ncNanoId(), href: "#", name: "Backpacks" },
      { id: ncNanoId(), href: "#", name: "My Way" },
      { id: ncNanoId(), href: "#", name: "Significant Other" },
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
    name: "Home Demo 1",
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Home Demo 2",
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
      },
      {
        id: ncNanoId(),
        href: "/page-collection-2",
        name: "Category page 2",
      },
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
      {
        id: ncNanoId(),
        href: "/product-detail-2",
        name: "Product detail 2",
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
    name: "Men",
    type: "megaMenu",
    children: MEGAMENU_DEMO,
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Women",
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Beauty",
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Sport",
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Pages",
    type: "megaMenu",
    children: MEGAMENU_TEMPLATES,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Explore",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
];

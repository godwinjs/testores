import { productImgs } from "@/app/assets/contains/fakedata";
import productVariantImg2 from "@/images/products/variants/v2.jpg";
import productVariantImg3 from "@/images/products/variants/v3.jpg";
import productVariantImg4 from "@/images/products/variants/v4.jpg";
import productVariantImg5 from "@/images/products/variants/v5.jpg";
import productVariantImg6 from "@/images/products/variants/v6.jpg";
//
import productSport1 from "@/images/products/sport/sport-1.png";
import productSport2 from "@/images/products/sport/sport-2.png";
import productSport3 from "@/images/products/sport/sport-3.png";
import productSport4 from "@/images/products/sport/sport-4.png";
import productSport5 from "@/images/products/sport/sport-5.png";
import productSport6 from "@/images/products/sport/sport-6.png";
import productSport7 from "@/images/products/sport/sport-7.png";
import productSport8 from "@/images/products/sport/sport-8.png";

//

export interface ProductVariant {
  _id: number;
  name?: string;
  thumbnail?: string | {
    url: string,
    public_id: string
  };
  color?: string;
  featuredImage: string | {
    url: string,
    public_id: string
  };
}
export interface ProductCart {
  _id?: String;
  title: string;
  price: number;
  image: string;
  description: string;
  variants?: ProductVariant;
  variantType?: "color" | "image";
  size?: string;
  allOfSizes?: string[];
  status?: string; //"New in" | "limited edition" | "Sold Out" | "50% Discount"
}
export interface Thumbnail {
  url: string;
  public_id: string;
}

export interface Product {
  _id: String;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  gallery: Thumbnail[];
  price: number;
  tags: string[];
  variantType?: "color" | "image";
  variants?: ProductVariant[];
  sizes: string[];
  allOfSizes: string[];
  status?: string;
  category: {_id: string, title: string};
  subcategory: {_id: string, title: string};
  brand: {_id: string, title: string};
  store: {_id: string, title: string};
}

export const PRODUCTS: Product[] = [
  {
    _id: 'fakeprd65808ab22bbbbb97daa4bdd5',
    title: "Ps5 Slim V2",
    description: "Version 2 PS5 slim",
    thumbnail: {
      url: "https://res.cloudinary.com/dra6cw2ff/image/upload/v1702829683/b727874d5ee360ff-1702829683698-ps5slimsmall2-removebg-preview.png.png",
      public_id: "b727874d5ee360ff-1702829683698-ps5slimsmall2-removebg-preview.png"
    },
    gallery: [
      { 
        url: "https://res.cloudinary.com/dra6cw2ff/image/upload/v1702829691/bce45c7474a9d618-1702829690946-ps5slim1-removebg-preview.png.png",
        public_id: "bce45c7474a9d618-1702829690946-ps5slim1-removebg-preview.png"
      },
      { 
        url: "https://res.cloudinary.com/dra6cw2ff/image/upload/v1702829691/01f23ab67eb659e1-1702829690950-ps5slimsmall2-removebg-preview.png.png",
        public_id: "01f23ab67eb659e1-1702829690950-ps5slimsmall2-removebg-preview.png"
      },
      { 
        url: "https://res.cloudinary.com/dra6cw2ff/image/upload/v1702829691/efb042b0c5d83848-1702829690950-ps5slim-nobg.png.png",
        public_id: "efb042b0c5d83848-1702829690950-ps5slim-nobg.png"
      }
    ],
    price: 600,
    tags: ["vr", "controller"],
    variantType: undefined,
    variants: undefined,
    sizes: ["S", "M", "L"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "25% Discount",
    category: {_id: '658085772bbbbb97daa4bdad', title: 'Electronics'},
    subcategory: {_id: '65808a042bbbbb97daa4bdc2', title: 'Games'},
    brand: {_id: '6580851c2bbbbb97daa4bda5', title: 'HUULO GAMES'},
    store: {_id: '658083722bbbbb97daa4bd9e', title: 'Huulo'}
  }
]

// const DEMO_VARIANTS: ProductVariant[] = [
//   {
//     id: 1,
//     name: "Black",
//     thumbnail: productVariantImg6,
//     featuredImage: productImgs[0],
//   },
//   {
//     id: 2,
//     name: "White",
//     thumbnail: productVariantImg2,
//     featuredImage: productImgs[1],
//   },
//   {
//     id: 3,
//     name: "Orange",
//     thumbnail: productVariantImg3,
//     featuredImage: productImgs[2],
//   },
//   {
//     id: 4,
//     name: "Sky Blue",
//     thumbnail: productVariantImg4,
//     featuredImage: productImgs[3],
//   },
//   {
//     id: 5,
//     name: "Natural",
//     thumbnail: productVariantImg5,
//     featuredImage: productImgs[4],
//   },
// ];
// const DEMO_VARIANT_COLORS: ProductVariant[] = [
//   {
//     id: 1,
//     name: "Violet",
//     color: "bg-violet-400",
//     featuredImage: productImgs[0],
//   },
//   {
//     id: 2,
//     name: "Yellow",
//     color: "bg-yellow-400",
//     featuredImage: productImgs[1],
//   },
//   {
//     id: 3,
//     name: "Orange",
//     color: "bg-orange-400",
//     featuredImage: productImgs[2],
//   },
//   {
//     id: 4,
//     name: "Sky Blue",
//     color: "bg-sky-400",
//     featuredImage: productImgs[3],
//   },
//   {
//     id: 5,
//     name: "Green",
//     color: "bg-green-400",
//     featuredImage: productImgs[4],
//   },
// ];

// export const PRODUCTS: Product[] = () => {
//   const { data: productData, refetch } = useDisplayProductsQuery({
//     page: 0,
//     limit: 0,
//   });
//   const productsAdmin = productData?.data || [];

//   return productsAdmin
// };

export const ProductImgs: any = {
  'productImgs[16]': productImgs[16],
  'productImgs[1]': productImgs[1],
  'productImgs[15]': productImgs[15],
  'productImgs[3]': productImgs[3],
  'productImgs[4]': productImgs[4],
  'productImgs[5]': productImgs[5],
  'productImgs[8]': productImgs[8],
  'productImgs[7]': productImgs[7],
  'productImgs[2]': productImgs[2]
}
// export const ProductVarThumb: any = {
//   'productVariantImg2': productVariantImg2,
//   'productVariantImg3': productVariantImg3,
//   'productVariantImg4': productVariantImg4,
//   'productVariantImg5': productVariantImg5,
//   'productVariantImg6': productVariantImg6,
// }

// export const SPORT_PRODUCTS: Product[] = [
//   {
//     id: 1,
//     name: "Mastermind Toys",
//     title: '',
//     description: "Brown cockroach wings",
//     price: 74,
//     image: productSport1,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     link: "/product-detail/",
//     variants: DEMO_VARIANT_COLORS,
//     variantType: "color",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//     status: "New in",
//   },
//   {
//     id: 2,
//     name: "Jump Rope Kids",
//     title: '',
//     description: "Classic green",
//     price: 68,
//     image: productSport2,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     link: "/product-detail/",
//     variants: DEMO_VARIANT_COLORS,
//     variantType: "color",
//     status: "50% Discount",
//   },
//   {
//     id: 3,
//     name: "Tee Ball Beanie",
//     title: '',
//     description: "New blue aqua",
//     price: 132,
//     image: productSport3,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     link: "/product-detail/",
//     variants: DEMO_VARIANTS,
//     variantType: "image",
//     sizes: ["S", "M", "L", "XL"],
//     allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
//   },
//   {
//     id: 4,
//     name: "Rubber Table Tennis",
//     title: '',
//     description: "Dark pink 2023",
//     price: 28,
//     image: productSport4,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     variants: DEMO_VARIANT_COLORS,
//     variantType: "color",
//     link: "/product-detail/",
//     status: "Sold Out",
//   },
//   {
//     id: 5,
//     name: "Classic Blue Rugby",
//     title: '',
//     description: "Perfect mint green",
//     price: 42,
//     image: productSport5,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     variants: DEMO_VARIANTS,
//     variantType: "image",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//     link: "/product-detail/",
//   },
//   {
//     id: 6,
//     name: "Manhattan Toy WRT",
//     title: '',
//     description: "New design 2023",
//     price: 30,
//     image: productSport6,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     variantType: "color",
//     variants: DEMO_VARIANT_COLORS,
//     link: "/product-detail/",
//   },
//   {
//     id: 7,
//     name: "Tabletop Football ",
//     title: '',
//     description: "Matte black",
//     price: 12,
//     image: productSport7,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     variants: DEMO_VARIANTS,
//     variantType: "image",
//     link: "/product-detail/",
//     status: "New in",
//   },
//   {
//     id: 8,
//     name: "Pvc Catching Toy",
//     title: '',
//     description: "Cream pink",
//     price: 145,
//     image: productSport8,
//     category: "Category 1",
//     tags: ["tag1", "tag2"],
//     variants: DEMO_VARIANT_COLORS,
//     variantType: "color",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//     link: "/product-detail/",
//     status: "limited edition",
//   },
// ];

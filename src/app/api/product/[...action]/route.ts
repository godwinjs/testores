import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server';

import { saveProducts, getProducts } from "@/app/db/services/products.service";

export const GET = async (req: NextRequest, { params }: { params: { action: [string] }}) => {
    // const data = await req.json();
    const route = params.action[0];
    const DEMO_VARIANTS = [
        {
          id: 1,
          name: "Black",
          thumbnail: 'productVariantImg6',
          featuredImage: 'productImgs[0]',
        },
        {
          id: 2,
          name: "White",
          thumbnail: 'productVariantImg2',
          featuredImage: 'productImgs[1]',
        },
        {
          id: 3,
          name: "Orange",
          thumbnail: 'productVariantImg3',
          featuredImage: 'productImgs[2]',
        },
        {
          id: 4,
          name: "Sky Blue",
          thumbnail: 'productVariantImg4',
          featuredImage: 'productImgs[3]',
        },
        {
          id: 5,
          name: "Natural",
          thumbnail: 'productVariantImg5',
          featuredImage: 'productImgs[4]',
        },
      ];
    const DEMO_VARIANT_COLORS = [
    {
        id: 1,
        name: "Violet",
        color: "bg-violet-400",
        featuredImage: 'productImgs[0]',
    },
    {
        id: 2,
        name: "Yellow",
        color: "bg-yellow-400",
        featuredImage: 'productImgs[1]',
    },
    {
        id: 3,
        name: "Orange",
        color: "bg-orange-400",
        featuredImage: 'productImgs[2]',
    },
    {
        id: 4,
        name: "Sky Blue",
        color: "bg-sky-400",
        featuredImage: 'productImgs[3]',
    },
    {
        id: 5,
        name: "Green",
        color: "bg-green-400",
        featuredImage: 'productImgs[4]',
    },
    ];

    const data = [
        {
            id: 1,
            name: "Rey Nylon Backpack Yo!",
            description: "Brown cockroach wings",
            price: 74,
            image: 'productImgs[16]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            link: "/product-detail/",
            variants: DEMO_VARIANTS,
            variantType: "image",
            sizes: ["XS", "S", "M", "L", "XL"],
            allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
            status: "New in",
          },
          {
            id: 2,
            name: 'Round Buckle 1" Belt',
            description: "Classic green",
            price: 68,
            image: 'productImgs[1]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            link: "/product-detail/",
            variants: DEMO_VARIANT_COLORS,
            variantType: "color",
            status: "50% Discount",
          },
          {
            id: 3,
            name: "Waffle Knit Beanie",
            description: "New blue aqua",
            price: 132,
            image: 'productImgs[15]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            link: "/product-detail/",
            variants: DEMO_VARIANTS,
            variantType: "image",
            sizes: ["S", "M", "L", "XL"],
            allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          },
          {
            id: 4,
            name: "Travel Pet Carrier",
            description: "Dark pink 2023",
            price: 28,
            image: 'productImgs[3]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            variants: DEMO_VARIANT_COLORS,
            variantType: "color",
            link: "/product-detail/",
            status: "Sold Out",
          },
          {
            id: 5,
            name: "Leather Gloves",
            description: "Perfect mint green",
            price: 42,
            image: 'productImgs[4]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            variants: DEMO_VARIANTS,
            variantType: "image",
            sizes: ["XS", "S", "M", "L", "XL"],
            allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
            link: "/product-detail/",
          },
          {
            id: 6,
            name: "Hoodie Sweatshirt",
            description: "New design 2023",
            price: 30,
            image: 'productImgs[5]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            variantType: "color",
            variants: DEMO_VARIANT_COLORS,
            link: "/product-detail/",
          },
          {
            id: 7,
            name: "Wool Cashmere Jacket",
            description: "Matte black",
            price: 12,
            image: 'productImgs[8]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            variants: DEMO_VARIANTS,
            variantType: "image",
            link: "/product-detail/",
            status: "New in",
          },
          {
            id: 8,
            name: "Ella Leather Tote",
            description: "Cream pink",
            price: 145,
            image: 'productImgs[7]',
            category: "Category 1",
            tags: ["tag1", "tag2"],
            variants: DEMO_VARIANTS,
            variantType: "image",
            sizes: ["XS", "S", "M", "L", "XL"],
            allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
            link: "/product-detail/",
            status: "limited edition",
          }
    ];

    // await saveProducts(data);
    const products = await getProducts();

    return NextResponse.json({message: "Done", data: products}, { status: 200})
}
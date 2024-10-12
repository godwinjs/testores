// pages/api/products.ts
import { NextResponse } from "next/server";

import Products from '@/app/db/models/Products';
import connect from '@/app/db/utils/connect';

export const POST = async (req: any) => {
  
  const { query, filters } = await req.json();
  // console.log({query, filters})

  let queryObj = {
    $and: [
      {}
    ] as any
  }

  let queryRegex: any = {
    $or: [
      { title: { $regex: query, $options: 'i' } },        // Case-insensitive search by name
      { description: { $regex: query, $options: 'i' } }, // Case-insensitive search by description
    ],
  }
  
  let priceRegex = {
    price: {
      $gte: filters?.price[0],  // Greater than or equal to 10
      $lte: filters?.price[1], // Less than or equal to 150
    }
  }

  if(query.length > 0){
    queryObj.$and = []
    queryObj.$and.push(queryRegex)
  }
  if(filters){
    if(filters?.price) { 
      if(filters?.price && query.length > 0) {
        queryObj.$and = []
        queryObj.$and.push(queryRegex)
        queryObj.$and.push(priceRegex)
      }else{
        queryObj.$and = [{}]
        queryObj.$and.push(priceRegex) 
      }

    }
  }

  try {
    await connect();
    console.log(queryObj)

    const products = await Products.find(queryObj);
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error) {
      return NextResponse.json({ success: false, message: (error as Error).message }, { status: 400});
  }
}

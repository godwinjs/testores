'use client'
// import { RootState } from "@/app/redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, increamentByAmount } from "@/app/redux/features/counter/counterSlice";
import ProductDetailPage2 from "@/app/assets/containers/ProductDetailPage/ProductDetailPage2";
import { PRODUCTS } from "@/app/assets/data/data";


export default function Product_detail({params} : {params: { id: string}}) {
    // const count = useSelector((state: RootState) => state.counter.value);
    // const dispatch = useDispatch();

    return(
        <ProductDetailPage2 pid={params.id} data={PRODUCTS[0]} />
    )
}

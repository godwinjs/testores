'use client'
import { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";

import PageSearch from "@/app/assets/containers/PageSearch/PageSearch";

export default function Search_page({params} : { params: { page: string} }) {
    let page = params.page;


    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <PageSearch page={+page} />
        </div>
    )
}

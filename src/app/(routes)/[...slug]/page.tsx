
import { notFound } from "next/navigation";
import PageXbox from "@/app/assets/containers/Explore/xbox/xbox";

interface PageProps {
    params: {
        slug: string[]
    }
}

async function fetchContent(slug?: string[]): Promise<any | null> {
    // fetch() dynamic page content from DB, CMS, 
    const content = {
        path: "gameconsoles/xbox",
        page: 1,
        title: "Xbox game consoles"
    }

    if(!content){
        return null;
    }

    if(content.path !== slug?.join('/')){
        return null
    }
    return content;
}

export async function generateStaticParams() {
    const content = await fetchContent(["gameconsoles", "xbox"]);

    const paths = [
        // { slug: content?.path.split('/') },
        { route: ["gameconsoles", "xbox"]}
    ]

    return paths;
}

// export const revalidate = 10;

export default async function CatchAllDynamicRoutes(props: PageProps ){
    const { slug } = props.params;

    const content = await fetchContent(slug);

    if(!content) {
        notFound(); //show 404 if content is not found
    }

    if(slug[0] === 'gameconsoles' && slug[1] === 'xbox'){
        return <PageXbox />;
    }
}


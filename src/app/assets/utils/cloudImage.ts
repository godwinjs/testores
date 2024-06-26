import {Cloudinary, CloudinaryImage} from "@cloudinary/url-gen";
import { Thumbnail } from "../data/data";

  // 
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    }
  });

  export function cloudImage(arr: Thumbnail[]){
    let url: CloudinaryImage[] = arr.map((i) => cld.image(i.public_id + '.png'))
    // console.log(url)
    return url;
  }
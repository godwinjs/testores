
import React, { FC, useId } from "react";
import Glide from "@glidejs/glide";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import Image from "next/image";

import Heading from "@/app/assets/components/Heading/Heading";
import clientSayMain from "@/images/avatars/clientSayMain.png";
import clientSay1 from "@/images/avatars/image-1.png";
import clientSay2 from "@/images/avatars/image-2.png";
import clientSay3 from "@/images/avatars/image-3.png";
import clientSay4 from "@/images/avatars/image-4.png";
import clientSay5 from "@/images/avatars/image-5.png";
import clientSay6 from "@/images/avatars/image-6.png";
// import quotationImg from "@/images/quotation.png";
// import quotationImg2 from "@/images/quotation2.png";

export interface SectionClientSayProps {
  className?: string;
}

const DEMO_DATA = [
  {
    id: 1,
    clientName: "Tiana Abie",
    content:
      "Great quality products, affordable prices, fast and friendly delivery. I very recommend.",
  },
  {
    id: 2,
    clientName: "Lennie Swiffan",
    content:
      "Great quality products, affordable prices, fast and friendly delivery. I very recommend.",
  },
  {
    id: 3,
    clientName: "Berta Emili",
    content:
      "Great quality products, affordable prices, fast and friendly delivery. I very recommend.",
  },
];

const SectionClientSay: FC<SectionClientSayProps> = ({ className = "" }) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");
  //@ts-ignore
  useEffect(() => {
    //@ts-ignore
    const OPTIONS: Glide.Options = {
      perView: 1,
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [UNIQUE_CLASS]);

  const renderBg = () => {
    return (
      <div className="hidden md:block">
        <Image className="absolute top-9 -left-20" src={clientSay1} alt="" />
        <Image
          className="absolute scale-[0.1] bottom-[100px] right-full mr-40"
          src={clientSay2}
          alt=""
        />
        <Image
          className="scale-[0.1] absolute top-full left-[140px]"
          src={clientSay3}
          alt=""
        />
        <Image
          className="scale-[0.1] absolute -bottom-10 right-[140px]"
          src={clientSay4}
          alt=""
        />
        <Image
          className="scale-[0.1] absolute left-full ml-32 bottom-[80px]"
          src={clientSay5}
          alt=""
        />
        <Image className="scale-[0.1] absolute -right-10 top-10 " src={clientSay6} alt="" />
      </div>
    );
  };

  return (
    <div
      className={`nc-SectionClientSay relative flow-root ${className} `}
      data-nc-id="SectionClientSay"
    >
      <Heading desc="Let's see what people think of Ciseco" isCenter>
        Good news from far away 🥇
      </Heading>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        {renderBg()}

        <Image className="scale-[0.1] mx-auto" src={clientSayMain} alt="" />
        <div className={`mt-12 lg:mt-16 relative ${UNIQUE_CLASS}`}>
          <Image
            className="scale-[0.1] opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAtCAYAAADhoUi4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANvSURBVHgB3ZkxbxMxFMefn313SduobRIBDUECCYFEByTExMIGn6D5EBULI0xZYCwLDHyF9kvwAbohGCpVDFRCNFQ0TZMj57ON70oChTa1c+drxW+LYr1//n7P9rNDIC9WViisLFPY6VII5im8+xDCxoYAl4w0O+Cnn7UmgWlIAj1enq922WxU8uYYxIEiSP8c0q0P30OrHUFeGGoysOFNe66i/AYiqYD+qaIMQEGCAgRnWGqaGRoFJTrodDm1R2suytINSZRvoznZkE5z+dH9JZ/Ly4UZ0Zqlh3ebAaF1SRXYcrqhdtuvVv2bgssyFIXWXKyVbktUPkwJmxRY0OkDWzMyk1HzxJWVZEYWaUaXWR5mEv7J0MzbF0tCkOLKTLPw4N61vCbwuCGddk9gAwqk8vplTSHUICeOGao0/OsQgzUxkthTqhsDG7AfLGJRJGDV7FBlChvJqTKtphCqR3lZjDR/G9L7Psb6nLEMWuak061vfoWWfZuTZMd2R0s0MZY7/dVneyd9Pza0EAV1FYAxgshhv8q3+lnaG1+XmkVFCIWDfjXcntRSHRnSa0ebMa7jxMxhjW9l6tW0pk1FpJr14fZZmum2Xan7VqVGBPmStfF0pZkaotxupnpPnu9BVnyLilDxwFQzNUSYhSHO9iEHKFczpmOJorumYxHW16nNoTYbQheysrZW/vsuM4nepc7AdCxC56NVV/Btc9M4+GksEGKxn2par0LToajvOcbBiZIij2t1XIqNKwIFsdp8UHjm5UYkzeWNQDBprMmRW/UuqJAZ13JeKMKNNfWGYDWJaBM8LzyJdmvIAgwGvt1DyQUHZSkuPEMucfj+dD4wjnIYADXqFBQKqlv+WyZjKY9295+2M3cVlKgZU019AH+2Wj/J6Y4EjMwLz8/e71lq1j9dYedScklVgCPQ9iS+6CBK3+0/BCeJOpxEJIIXb8jhJGLyYgIF43IScf9qN/N1wJZeVHKmqXe5O4VnCJoH7jIErZZI3gmgSPRjR3q3csCvRxLP+EaYF/qV1ckkpoaisio2Q5o44E7WUWqIDUXhGWI8cKKZGnK565xG8qgPDjjq5ZrNwtsfV8fFkaH/aKcbd9v6z5YeFIwSXu6aY0OuFukkhEdyNzS+4B2GtFeZ47kJBN9pdFaw0oEMh4v5VYYXhuInU+Z6KpBH2WgAAAAASUVORK5CYII='}
            alt=""
          />
          <Image
            className="scale-[0.1] opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAtCAYAAADhoUi4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANISURBVHgB3ZrLbtNAFIbPXGzXUUNbepFaWqmsWHTDmjWv0L4DAhYsUBErLwBRsWABqOIV6EvwAF0gVWyQKpCQioQa1cEhqS8zgydqohKl6Yw9M5X6bRw5Y//5fc6c47GDIIp8WAQfJIuQwVaUgW0GmmmbweoMM6mJGh9fLnsMr5zfyRBPEUMZ80TSLfIEHkYdMMhYTYG7SDAmiBd3+N9uVU06bicROAAMAWaoOYPKj+9eZ6IQSdxOj8qrayWCBPEGIAQgilqaYyM08YAUWnWN2dTEoIkIYH5ufupO8/2reXCEjqa2IQknwscYrcsrDY5Q1axkaIBMG5emVDRrGVIRsIHUnN6NlsZ9V9vQQGBhZ6cJDiEiWFuOosbofiOGJKwh1mFzk4BDOgv+6ug+3J3LW16Cv6F06jAn/IhTkUAF5KRt3L+7pDLWlGZZJJqjlQ+NHfkp8mdbwYoQoFWakeAs/vzlAPb2GOhSUbNs/tnJ42cHw98wabB0L0slaIDS9DB+EsVQkendN0tEFGs6x8hoH29v96M8cQ4lj563OBc/QAPm+UppdxGdB09/M0R/6hxT3ODDqF5aFPqmNHJc5nXd4iBNac0rzmeH+irjgxPyCzSYvbdRu4TraAqEyaBtKBmS+SmXFKBISsJpqInUlEVGdfzpjV4ot8p9iFGqPNEpZg0wwGkgTlTHUgj6msqGaMp6qmMJEkYM0TxQ1kQFUk85CclD5fDLnDZx14BYrqwpG7vcKhuK/XYBOmxu1DaUoEx53vYpm7Oxe7lRFr6HAVwB1gwVfs/pjapEXkRrhso7BueGJNYMXRXXzhC9+eHFWi5weNlAAaRMIQ4msKlJcw+H+KwpTUbvxCTPLuwhtjQl1lKOZqH+Is8A12oOHd/updYMyZODa/a+MnsRcvFaZpTyWYYVQzrrGFPIhyX9LVigAO483YqzBagVQ4SC83QjxGKEstR3HqEM24yQ13MeIb+b91e3VgxN/QmVl86miG+17UXoeH+/C67ZemsnQv3HXVWebdfRFMXwAho3hM76gUvOV1XzEfKqvRqppcnZUNO4oUZMjf5JQ4XzRci4oasoCINXKRJaINKl1MwcJnL+KBQEk5pewv9rEf8AuGp/IzglZnAAAAAASUVORK5CYII='}
            alt=""
          />
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides ">
              {DEMO_DATA.map((item) => (
                <li
                  key={item.id}
                  className="glide__slide flex flex-col items-center text-center"
                >
                  <span className="block text-2xl">{item.content}</span>
                  <span className="block mt-8 text-2xl font-semibold">
                    {item.clientName}
                  </span>
                  <div className="flex items-center space-x-0.5 mt-3.5 text-yellow-500">
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="mt-10 glide__bullets flex items-center justify-center"
            data-glide-el="controls[nav]"
          >
            {DEMO_DATA.map((item, index) => (
              <button
                key={item.id}
                className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;

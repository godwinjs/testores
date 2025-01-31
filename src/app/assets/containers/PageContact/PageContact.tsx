import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import SocialsList from "@/app/assets/shared/SocialsList/SocialsList";
import Label from "@/app/assets/components/Label/Label";
import Input from "@/app/assets/shared/Input/Input";
import Textarea from "@/app/assets/shared/TextArea/TextArea";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import BackgroundSection from "@/app/assets/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/app/assets/components/SectionPromo1";
import {useForm} from "@/app/assets/hooks/useForm";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Alaba Int market ojo Lagos, Nigeria",
  },
  {
    title: "💌 EMAIL",
    desc: "rachealonyi.dev@gmail.com",
  },
  {
    title: "☎ PHONE",
    desc: "+23481-0302-3419",
  },
];


const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  const [ form, setForm ] = useForm({email:"", message:"", name:"" })
  const [ sendingMail, setSendingMail ] = useState(false);

  const sendMail = (e: any) => {
    e.preventDefault();
    // console.log(form)
    setSendingMail((prevValue) => !prevValue);

    axios.post("/api/mail", { 
        ...form, 
        to: 'rachealonyi.dev@gmail.com, truthempirestores@gmail.com, contact@truthstores.com',
        subject: 'New Message from TruthStore Contact Form',
      }).then((response) => {
        console.log(response)
        setSendingMail(false);
    }).catch(err => {
      console.log("there was an error sending email", err)
      setSendingMail(false);
    })

    // try {
      
    // } catch (err) {
    //   console.log("Api call Error: ", err)
    // } finally {
    //   setSendingMail(false);
    // }

  }

  // React.useEffect(() => {
  //   console.log(sendingMail)
  // }, [sendingMail])



  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contact || Truth Stores </title>
      </Helmet>
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" onSubmit={(e) => sendMail(e)} method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    displayName="FnameInput"
                    placeholder="Example Doe"
                    name="name"
                    type="text"
                    className="mt-1"
                    value={form.name}
                    onChange={setForm}
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    displayName="EmailInput"
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    value={form.email}
                    onChange={setForm}
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea name="message" value={form.message} onChange={setForm}className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit" loading={sendingMail}>Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <div className="relative my-24 lg:my-32 py-24 lg:py-32">
          <BackgroundSection />
          <SectionPromo1 />
        </div>
      </div>
    </div>
  );
};

export default PageContact;

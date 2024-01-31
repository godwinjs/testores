'use client';

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const DEMO_DATA = [
  {
    name: "Description",
    content:
      "Gaming is playing an electronic video game, which is often done on a dedicated gaming console, PC or smartphone. People who often play video games are called gamers.",
  },
  {
    name: "Box Includes",
    content: `<ul class="list-disc list-inside leading-7">
      <li>Xbox Series X console.</li>
      <li>Wireless controller.</li>
      <li>Two AA batteries.</li>
      <li>Ultra High Speed HDMI cable.</li>
      <li>Power cord.</li>
      <li>Quick-start guide.</li>
  </ul>`,
  },

  {
    name: "Setting up the console",
    content:  `<ul class="list-disc list-inside leading-7">
    <li>Connect the power cable into the power cable port on the console (marked by a single raised dot).</li>
    <li>Plug the power cable into a power outlet.</li>
    <li>Connect the HDMI cable into the HDMI port on the console (marked by a single raised dash).</li>
    <li>Connect the other end of the HDMI cable into your TV.</li>
    <li>Press the Xbox button  on the front of the console to power up the system.</li>
  </ul>`
  },
  {
    name: "FAQ",
    content: `
    <ul class="leading-7">
    <li>
      <h3 class="font-bold">Can I play Xbox 360 games on other Xbox consoles?</h3>
      <p>Yes, the Xbox One family of consoles and the Xbox Series X|S are backward compatible with Xbox 360 games. You can even send game invites and start parties the way you would on Xbox 360.</p>
    </li>
    <li>
      <h3 class="font-bold">What's required to get Insider previews?</h3>
      <p>Every preview in the Xbox Insider Program has its own requirements. To view those requirements:
      Launch the Xbox Insider Hub. Go to Previews, and then select the preview that you want. Read the eligibility requirements on the Info tab of the Insider content details page.</p>
    </li>
    <li>
      <h3 class="font-bold">How do I find my Xbox product manual?</h3>
      <p>If you’re looking for your Xbox product manual and can’t find a physical copy, select Learn more to find manuals for all major Xbox products in the languages of every country and region in which we sell Xbox products.</p>
    </li>
    <li>
      <h3 class="font-bold">What happens when an account or device has been banned?</h3>
      <p>If your account or device has received an Xbox enforcement action, what you can do on the Xbox network depends on the type of enforcement action that you’ve received.</p>
    </li>
  </ul>
    `,
  },
];

interface Props {
  panelClassName?: string;
  data?: typeof DEMO_DATA;
  data2?: any
}


function parseArrayToData(arr: {name: string, content: string[]}[]) {
  let DATA = [];
  let cnt = 0;
  for (let i = 0; i < arr.length; i++){
    let item = arr[i];

    if(item.content.length === 1){
      DATA.push({name: item.name, content: item.content[0]})
    }
    if(item.content.length > 1 && item.name !== "FAQ"){
      let list: string[] = [];
      item.content.map(li => list.push('<li>' + li + '</li>'))
      DATA.push({name: item.name, content: list.join("") })
    }

    if(item.name === "FAQ"){
      let list: string[] = [];

      item.content.map((ques, idx) => {
        if(ques.includes("?")){
          return list.push(`<li><h3 class="font-bold">${ques}</h3><p>${item.content[idx+1]}</p></li>`)
        }
      } );

      let faqs = `<ul class="leading-7">
                    ${list.join("")}
                  </ul>`;
      console.log(faqs)
      DATA.push({name: item.name, content: faqs})
    }
  }
  return DATA;
}

const AccordionInfo: FC<Props> = ({
  panelClassName = "p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6",
  data = DEMO_DATA,
  data2
}) => {

  // add text data into readable array list
  let Real_Data: any = [], obj: {name: string, content: string[]} = { name: '', content: []}, cnt = 0;

  data2 && data2.split("#").length > 2 && data2.split("\n").map((item: string, i: number) => {
    if(item !== ""){
      if(item.includes("#")){
        // push = true
        obj.name =  item.split("#")[1];
        Real_Data[cnt] = { name: item.split("#")[1], content: []}
        cnt= cnt+1;
        // only run at loop end
        if(cnt === (data2.split("#").length - 1)/2){
          // console.log(Real_Data)
        }
      }else {
        Real_Data[cnt-1] = { ...Real_Data[cnt-1], content: [ ...Real_Data[cnt-1].content, item] }
      }

    }
  })

  return (
    <div className="w-full rounded-2xl space-y-2.5">
      {/* ============ */}
      {data2 && data2.split("#").length > 2 ? parseArrayToData(Real_Data).map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      }) : null}

      {/* ============ */}
    </div>
  );
};

export default AccordionInfo;

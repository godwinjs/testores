import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "@/app/assets/data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_DEMO_2.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;

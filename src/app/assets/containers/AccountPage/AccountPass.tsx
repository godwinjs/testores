import Label from "@/app/assets/components/Label/Label";
// import React from "react";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Input from "@/app/assets/shared/Input/Input";
import CommonLayout from "./CommonLayout";

const AccountPass = () => {
  return (
    <div>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Update your password
          </h2>
          <div className=" max-w-xl space-y-6">
            <div>
              <Label>Current password</Label>
              <Input type="password" className="mt-1.5" displayName="CurrPass input" />
            </div>
            <div>
              <Label>New password</Label>
              <Input type="password" className="mt-1.5" displayName="NewPass input" />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type="password" className="mt-1.5" displayName="ConfirmPass input" />
            </div>
            <div className="pt-2">
              <ButtonPrimary>Update password</ButtonPrimary>
            </div>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountPass;

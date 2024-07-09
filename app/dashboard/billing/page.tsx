"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useContext } from "react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";

function Billing() {
  const { setTotalUsage } = useContext(TotalUsageContext);
  const setUnlimited = ()=>{
    setTotalUsage(0);
    localStorage.setItem("unlimitedAccess", "true");
  }
  return (
    <div>
      <div className="items-center p-7 my-20 ">
        <center>
          <h1 className="text-9xl font-bold flex justify-center mb-3">
            It's <span className="text-primary"> Free</span>
          </h1>
        </center>
        <center>
          <Button className="p-8  items-center" onClick={setUnlimited}>
            <Link href={"/dashboard"} className="text-xl">
              Unlimited Access
            </Link>
          </Button>
        </center>
      </div>
    </div>
  );
}

export default Billing;

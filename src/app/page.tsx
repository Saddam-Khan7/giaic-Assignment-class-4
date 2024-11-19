'use client'
import { useRouter } from "next/navigation";
import Card from "./component/Card";

export default function Home() {


  return (

    <div className="justify-center items-center pt-20">

      <h1 className="absolute top-5 left-5 text-2xl text-black">saddam khan</h1>
      
      <div className="flex gap-10 ">
      <Card name="Saddam khan" rollNo={64672} age={19} studentClass={"1st year"} />
      <Card name="Osama khan" rollNo={76346} age={20} studentClass={"2nd year"} />
      <Card name="Farhan khan" rollNo={72998} age={12} studentClass={"10th"} />
      </div>
    </div>
  );
}

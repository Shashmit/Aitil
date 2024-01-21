import {Shapes}  from "@/components/landing-animation";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function LandingPage() {

    return (
        <div className="h-full">
            <LandingNavbar/>
            <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
                <Shapes/>
                <div className="col-start-1 md:row-start-1 max-md:mt-[-150px]" >
                    <LandingHero/>
                </div>
            </div>

            
        </div>
    )
}
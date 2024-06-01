"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center text-center">
        <Button>
          <Link href="/Signup">Signup</Link>
        </Button>
      </div>
    </>
  );
}

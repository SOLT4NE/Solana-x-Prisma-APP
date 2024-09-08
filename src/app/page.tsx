import Link from "next/link";

import Header from "~/components/nav/Header";
import { Button } from "~/components/ui/button";
import {  HydrateClient } from "~/trpc/server";

export default async function Home() {


  return (
    <HydrateClient>
<div className="bg-[url('/images/BG.PNG')] bg-cover bg-center min-h-screen">
      <Header />
  <div>

    <Button>Hy</Button>
  </div></div>
    </HydrateClient>
  );
}

"use client";

import { Wallet } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function SignInWeb3() {
  return (
    <Button variant={"outline"} className="w-full" radius={"lg"} type="button">
      <Wallet className="w-5 h-5" />
      <span className="font-medium">Connect Wallet</span>
    </Button>
  );
}

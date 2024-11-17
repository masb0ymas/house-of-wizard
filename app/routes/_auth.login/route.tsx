import { MetaFunction } from "@remix-run/node";
import { Mail, Wallet } from "lucide-react";
import { GoogleIcon } from "~/components/icon/google";
import { BorderBeam } from "~/components/ui/border-beam";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign to House of Wizard" },
    { name: "description", content: "You can sign to House of Wizard" },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="relative rounded-xl">
        <BorderBeam borderWidth={2} />

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              House of Wizard
            </h1>
            <p className="mt-2 text-gray-500">
              To become a great wizard, you need to login with your account
              first.
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-row gap-2">
            <Button variant={"outline"} className="w-full" radius={"lg"}>
              <GoogleIcon />
              <span className="font-medium">Google</span>
            </Button>

            <Button variant={"outline"} className="w-full" radius={"lg"}>
              <Wallet className="w-5 h-5" />
              <span className="font-medium">Connect Wallet</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <Button variant={"secondary"} className="w-full" radius={"lg"}>
              Continue with Email
            </Button>
          </form>

          {/* Terms */}
          <p className="text-center text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <a
              href="/term-of-service"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

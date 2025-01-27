"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "../Featuers/Auth/Components/Login";
import MaxWidthRaper from "../components/MaxWidthRaper";
import SignForm from "../Featuers/Auth/Components/Signup";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { LoginSelector } from "../Featuers/Auth/AuthSlice";

export default function TabsDemos() {
  const router = useRouter();

  const user: UserMessage = useSelector(LoginSelector);

  console.log(user, "Userrxlkc");

  if (user && user.Success) {
    router.push("/");
  }
  return (
    <MaxWidthRaper className="items-center flex justify-center pt-12">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="Login">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when youre done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <LoginForm />
            </CardContent>
            <CardFooter>Fill it freely</CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Please fill your form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SignForm />
            </CardContent>
            <CardFooter>Fill it freely</CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </MaxWidthRaper>
  );
}

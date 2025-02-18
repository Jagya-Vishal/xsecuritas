import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, type InsertUser } from "@shared/schema";
import { Redirect, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const registerForm = useForm({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      businessName: "",
      phoneNumber: "+91",
      address: "",
      isWholesaler: true,
    },
  });

  if (user) return <Redirect to="/" />;

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="p-8">
        <Link href="/">
          <span className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </span>
        </Link>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>Login or register to access wholesale textile printing services</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={loginForm.handleSubmit(loginMutation.mutate)}>
                    <div className="space-y-4">
                      <InputField label="Email" name="email" form={loginForm} type="email" />
                      <InputField label="Password" name="password" form={loginForm} type="password" />
                      <Button type="submit" className="w-full" disabled={loginMutation.isPending}>Login</Button>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <form onSubmit={registerForm.handleSubmit(registerMutation.mutate)}>
                    <div className="space-y-4">
                      <InputField label="Business Name" name="businessName" form={registerForm} />
                      <InputField label="Username" name="username" form={registerForm} />
                      <InputField label="Email" name="email" form={registerForm} type="email" />
                      <InputField label="Password" name="password" form={registerForm} type="password" />
                      <InputField label="Phone Number" name="phoneNumber" form={registerForm} />
                      <InputField label="Business Address" name="address" form={registerForm} />
                      <Button type="submit" className="w-full" disabled={registerMutation.isPending}>Register</Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      <SidePanel />
    </div>
  );
}

function InputField({ label, name, form, type = "text" }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} {...form.register(name)} />
      {form.formState.errors[name] && (
        <p className="text-sm text-destructive mt-1">{form.formState.errors[name]?.message}</p>
      )}
    </div>
  );
}

function SidePanel() {
  return (
    <div className="hidden md:block bg-accent/10 p-12">
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Shree Ganpati Handprint</h1>
        <p className="text-lg text-gray-600 mb-8">Join India's premier B2B textile printing marketplace. Get access to:</p>
        <ul className="space-y-4 text-gray-600">
          <li>✓ Premium quality printing services</li>
          <li>✓ Wholesale pricing</li>
          <li>✓ Custom order management</li>
          <li>✓ Sample requests</li>
          <li>✓ Direct communication with artisans</li>
        </ul>
      </div>
    </div>
  );
}

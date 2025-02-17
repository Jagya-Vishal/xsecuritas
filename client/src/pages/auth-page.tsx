import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
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
import { Redirect } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Update the login schema to include email
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<InsertUser>({
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

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="p-8">
        <Link href="/">
          <span className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </span>
        </Link>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Login or register to access wholesale textile printing services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={loginForm.handleSubmit((data) => loginMutation.mutate(data))}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          type="email" 
                          {...loginForm.register("email")} 
                        />
                        {loginForm.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {loginForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          {...loginForm.register("password")}
                        />
                        {loginForm.formState.errors.password && (
                          <p className="text-sm text-destructive mt-1">
                            {loginForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loginMutation.isPending}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={registerForm.handleSubmit((data) => registerMutation.mutate(data))}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input {...registerForm.register("businessName")} />
                        {registerForm.formState.errors.businessName && (
                          <p className="text-sm text-destructive mt-1">
                            {registerForm.formState.errors.businessName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input {...registerForm.register("username")} />
                        {registerForm.formState.errors.username && (
                          <p className="text-sm text-destructive mt-1">
                            {registerForm.formState.errors.username.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          type="email"
                          {...registerForm.register("email")} 
                        />
                        {registerForm.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {registerForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          {...registerForm.register("password")}
                        />
                        {registerForm.formState.errors.password && (
                          <p className="text-sm text-destructive mt-1">
                            {registerForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input 
                          {...registerForm.register("phoneNumber")}
                          defaultValue="+91"
                        />
                        {registerForm.formState.errors.phoneNumber && (
                          <p className="text-sm text-destructive mt-1">
                            {registerForm.formState.errors.phoneNumber.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="address">Business Address</Label>
                        <Input {...registerForm.register("address")} />
                        {registerForm.formState.errors.address && (
                          <p className="text-sm text-destructive mt-1">
                            {registerForm.formState.errors.address.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={registerMutation.isPending}
                      >
                        Register
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="hidden md:block bg-accent/10 p-12">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">
            Shree Ganpati Handprint
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join India's premier B2B textile printing marketplace. Get access to:
          </p>
          <ul className="space-y-4 text-gray-600">
            <li>✓ Premium quality printing services</li>
            <li>✓ Wholesale pricing</li>
            <li>✓ Custom order management</li>
            <li>✓ Sample requests</li>
            <li>✓ Direct communication with artisans</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
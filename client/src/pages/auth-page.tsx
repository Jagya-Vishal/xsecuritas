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
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, type InsertUser } from "@shared/schema";
import { Redirect } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  const { toast } = useToast();

  const loginForm = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const registerForm = useForm({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      username: "",
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
        <Link href="/" className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
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
                  <Form
                    form={loginForm}
                    onSubmit={(data) => loginMutation.mutate(data)}
                  >
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input {...loginForm.register("username")} />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          {...loginForm.register("password")}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loginMutation.isPending}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </TabsContent>

                <TabsContent value="register">
                  <Form
                    form={registerForm}
                    onSubmit={(data: InsertUser) =>
                      registerMutation.mutate(data)
                    }
                  >
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input {...registerForm.register("businessName")} />
                      </div>
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input {...registerForm.register("username")} />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          {...registerForm.register("password")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input {...registerForm.register("phoneNumber")} />
                      </div>
                      <div>
                        <Label htmlFor="address">Business Address</Label>
                        <Input {...registerForm.register("address")} />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={registerMutation.isPending}
                      >
                        Register
                      </Button>
                    </div>
                  </Form>
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
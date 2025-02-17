import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./whatsapp-button";
import { ThemeToggle } from "./theme-toggle";
import { Footer } from "./footer";
import { Link } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, logoutMutation } = useAuth();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-primary cursor-pointer">
              Shree Ganpati Handprint
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.businessName}
                </span>
                <Button
                  variant="outline"
                  onClick={() => logoutMutation.mutate()}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/auth">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
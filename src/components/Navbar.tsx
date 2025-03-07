"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Login form schema
const loginFormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Initialize form
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Handle login form submission
  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    setError("");
    
    // Simple authentication - in a real app, this would use a secure API
    if (values.username === "admin" && values.password === "password") {
      // Success - navigate to dashboard
      setShowLoginModal(false);
      router.push("/dashboard");
    } else {
      // Display error message
      setError("Invalid username or password");
    }
  };

  return (
    <nav className="py-5 px-6 bg-[rgba(20,20,20,0.7)] backdrop-blur-md text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
          <img src="/pendant-logo.webp" alt="Forever Fragrance Logo" className="h-8 w-8" />
          <span className="text-white">Forever Fragrance</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/order">
            <Button className="bg-white text-gray-900 hover:bg-gray-200 shadow-md transition-all">
              Order Now
            </Button>
          </Link>
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-200 shadow-md transition-all"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[rgba(20,20,20,0.9)] backdrop-blur-md shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/about" className="hover:text-gray-300 transition-all duration-300">
              About
            </Link>
            <Link href="/order">
              <Button className="bg-white text-gray-900 hover:bg-gray-200 shadow-md transition-all">
                Order Now
              </Button>
            </Link>
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-200 shadow-md transition-all"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </Button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your dashboard.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                  {error}
                </div>
              )}
              
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="admin" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Login
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Demo credentials: username "admin", password "password"
              </p>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
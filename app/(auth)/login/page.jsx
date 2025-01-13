"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/app/context/AuthContext";

export default function page() {
    const { login , user  } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  
  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // try {

    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });


    // await login(data.email , data.password)
    // toast.success("Login Successfully")

    localStorage.setItem("user", JSON.stringify(data)); // Store the user in localStorage for persistence
    
    router.push("/admin")

    //   if (response.ok) {
    //     const result = await response.json();
    //     toast.success("Login Successful!");
    //     router.push("/admin"); // Redirect to dashboard or any protected page
    //   } else {
    //     const error = await response.json();
    //     throw new Error(error.message || "Login failed");
    //   }
    // } catch (error) {
    //   toast.error(error.message || "Something went wrong");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <main className="w-full flex justify-center items-center bg-gray-100 p-10 min-h-screen">
      <section className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img className="h-12 mx-auto" src="/logo.png" alt="Logo" />
          <h1 className="font-bold text-2xl mt-4">Welcome Back</h1>
          <p className="text-sm text-gray-500">Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button
            isLoading={isLoading}
            isDisabled={isLoading}
            type="submit"
            className="w-full"
          >
            Login
          </Button>
        </form>

      </section>
    </main>
  );
}

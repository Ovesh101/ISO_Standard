"use client";



import { CircularProgress } from "@nextui-org/react";
import Link from "next/link";

import AuthContextProvider , {useAuth} from "../context/AuthContext";



export default function Layout({ children }) {
  return (
    <main>

      {/* Wrapping the app in the AuthContextProvider */}
      <AuthContextProvider>
        <UserChecking>
          <section className="min-h-screen">{children}</section>
        </UserChecking>
      </AuthContextProvider>

    </main>
  );
}

function UserChecking({ children }) {
  const { user, isLoading } = useAuth();

  console.log("user data in layout" , user);


  

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="text-sm text-gray-600">You are not logged in!</h1>
        <Link href="/login">
          <button className="text-white bg-blue-500 px-4 py-2 text-sm rounded-xl">
            Login
          </button>
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}

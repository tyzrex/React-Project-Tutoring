import LoginForm from "@/components/forms/login-form";
import { ArrowLeft, DollarSign } from "lucide-react";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-8">
              <div className="bg-purple-100 p-3 rounded-full">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center mb-2">
              Welcome back
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Sign in to your SplitSmart account
            </p>

            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

import { LoginSchemaType } from "@/schema/login-schema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { Checkbox } from "../ui/checkbox";
import { loginSchema } from "@/schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function submitForm(data: LoginSchemaType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(submitForm)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="test@test.com" {...field} />
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
                <Input placeholder="test@test.com" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-purple-600"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            )}
          />

          <Link
            to="/forgot-password"
            className="text-sm text-purple-600 hover:text-purple-700"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          className="bg-purple-600 hover:bg-purple-800 cursor-pointer py-5 w-full"
          type="submit"
        >
          Sign In
        </Button>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}

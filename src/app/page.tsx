import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Project One</CardTitle>
          <CardDescription>
            A brief description of my first project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This card is built with ShadCN/UI! It's clean, themeable, and ready
            for production.
          </p>
        </CardContent>
        <CardFooter>
          <Button>View Project</Button>
        </CardFooter>
      </Card>
    </main>
  );
}

import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to HANOUT</h1>
      <div className="max-w-md w-full space-y-4">
        <Input placeholder="Enter your name" />
        <Textarea placeholder="Type your message here..." />
        <Checkbox id="subscribe"/>
        <Button className="w-full">Submit</Button>
        <Progress value={50} className="mt-4" />
      </div>
      <Image
        src="/images/hero-image.png"
        alt="Hero Image"
        width={500}
        height={300}
        className="mt-8 rounded-lg shadow-lg"
      />
    </div>
  );
}

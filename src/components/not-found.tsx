import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-border"
        viewBox="0 0 513 262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 261.155V0.5H74.9727V37.7364H112.209V74.9727H149.445V37.7364H186.682V0.5H261.155V261.155H186.682V113.373H149.445V185.518H112.209V113.373H74.9727V261.155H0.5Z"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M289.082 0.5V37.7364H363.555V261.155H438.027V37.7364H512.5V0.5H289.082Z"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Button variant="default" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link";

export default function CarsPage() {
  return (
    <section className="container mx-auto px-4 py-24">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="default">
            <Avatar className="size-12">
              <AvatarImage
                src="https://github.com/kunj-pandya.png"
                className="grayscale"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </EmptyMedia>
          <EmptyTitle>Developer Offline</EmptyTitle>
          <EmptyDescription>
            This developer is currently working on localhost.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link href="/">
            <Button size="sm">Back to Home</Button>
          </Link>
        </EmptyContent>
      </Empty>
    </section >
  );
}

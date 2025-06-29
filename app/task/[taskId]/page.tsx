import { notFound } from "next/navigation";
import { tasks } from "../../database";
import { ArrowLeftIcon, LockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

export default async function Page({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    notFound();
  }

  const needsJail = task.needsJail;
  // TODO: How can we check if the user is jailed?
  const isJailed = false;

  if (needsJail && !isJailed) {
    return (
      <main className="max-w-xl mx-auto mt-16">
        <h1 className="text-4xl font-bold">Uppgift {task.title}</h1>
        <p className="text-sm text-gray-500">
          <div className="text-red-500 flex items-center">
            <LockIcon className="w-4 h-4 mr-2" />
            Kräver låst läge
          </div>
        </p>
        <Button variant="outline" className="w-full my-6">
          <LockIcon className="w-4 h-4 mr-2" />
          Öppna i låst läge
        </Button>
        <div className="flex">
          <Link href="/">
            <Button variant="outline" className="w-full my-6">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Tillbaka
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto mt-16">
      <h1 className="text-4xl font-bold">Uppgift {task.title}</h1>
      <Textarea
        placeholder="Skriv svaren här..."
        className="w-full my-6"
        rows={10}
      />
      <div className="flex justify-between">
        <Link href="/">
          <Button variant="outline" className="mr-2">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Tillbaka
          </Button>
        </Link>
        <Button>Lämna in</Button>
      </div>
    </main>
  );
}

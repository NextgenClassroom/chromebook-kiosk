import { tasks } from "./database";
import Link from "next/link";
import { LockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto mt-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Mina uppgifter</h1>
        <div className="flex flex-col gap-4 w-full">
          {tasks.map((task, i) => (
            <div key={task.id}>
              <h2 className="text-2xl font-bold">{task.title}</h2>
              <Link href={`/task/${task.id}`}>
                <Button variant="outline" className="w-full">
                  Starta
                </Button>
              </Link>
              <p className="text-sm text-gray-500">
                {task.needsJail ? (
                  <div className="text-red-500 flex items-center">
                    <LockIcon className="w-4 h-4 mr-2" />
                    Kräver låst läge
                  </div>
                ) : null}
              </p>
              {i !== tasks.length - 1 && <Separator className="w-full my-4" />}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

export default function ContactList() {
  return (
    <div className="flex w-72 flex-col gap-4">
      <h1 className="text-2xl font-semibold px-2">All Contacts</h1>
      
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="rounded-2xl border-none bg-white/50 pl-10" placeholder="New contact" />
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-1">
          {/* Active Contact Example */}
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm border-r-4 border-slate-900">
            <div className="h-10 w-10 rounded-full bg-yellow-200" />
            <div className="flex-1">
              <p className="text-sm font-medium">Gregory Clark</p>
              <p className="text-xs text-muted-foreground">Manager</p>
            </div>
          </div>
          {/* Add more mapping here */}
        </div>
      </ScrollArea>
    </div>
  );
}
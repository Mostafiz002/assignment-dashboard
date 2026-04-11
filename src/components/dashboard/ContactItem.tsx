import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Contact } from "@/data/contacts";

export default function ContactItem({
  contact,
  isActive,
  onSelect,
}: {
  contact: Contact;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "flex items-center hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] justify-between p-2 rounded-[22px] transition-all cursor-pointer group",
        isActive ? "" : "hover:bg-white/30",
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-12 rounded-[14px] overflow-hidden border border-transparent">
          <AvatarImage
            src={contact.avatar}
            className="object-cover rounded-[14px]"
          />
          <AvatarFallback
            className={cn(
              "text-xs font-bold rounded-[14px]",
              isActive ? "bg-[#F9E066]" : "bg-slate-200",
            )}
          >
            {contact.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-slate-800 leading-tight">
            {contact.name}
          </span>
        </div>
      </div>

      {/* Right  */}
      <div className="flex items-center gap-3">
        <span className="text-[12px] font-medium text-gray-400  tracking-wider">
          {contact.role}
        </span>
        <div className="w-1 flex justify-end mr-1">
          {isActive && (
            <div className="h-5 w-0.75 bg-slate-800 rounded-full animate-in fade-in slide-in-from-right-1" />
          )}
        </div>
      </div>
    </div>
  );
}

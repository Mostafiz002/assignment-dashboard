"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOCK_CONTACTS } from "@/data/contacts";
import { SectionHeader } from "./ContactSectionHeader";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const [openSections, setOpenSections] = useState({ new: true, fav: true });
  const [selectedId, setSelectedId] = useState<number>(1);

  const newContacts = MOCK_CONTACTS.filter((c) => c.category === "new");
  const favContacts = MOCK_CONTACTS.filter((c) => c.category === "favorites");

  return (
    <div className="flex w-75 flex-col h-full overflow-hidden select-none">
      {/* Title Header */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          All Contacts
        </h1>
      </div>

      <ScrollArea className="flex-1 bg-[#f0f0eb] p-2 rounded-[18]">
        <div className="flex flex-col gap-4 ">
          {/* Section: New Contact */}
          <section>
            <SectionHeader
              title="New contact"
              count={newContacts.length}
              isOpen={openSections.new}
              onToggle={() => setOpenSections((p) => ({ ...p, new: !p.new }))}
            />
            {openSections.new && (
              <div className="flex flex-col gap-1">
                {newContacts.map((contact) => (
                  <ContactItem
                    key={contact.id}
                    contact={contact}
                    isActive={selectedId === contact.id}
                    onSelect={() => setSelectedId(contact.id)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Section: Favorites */}
          <section>
            <SectionHeader
              title="Favorites contact"
              count={favContacts.length}
              isOpen={openSections.fav}
              onToggle={() => setOpenSections((p) => ({ ...p, fav: !p.fav }))}
            />
            {openSections.fav && (
              <div className="flex flex-col gap-1">
                {favContacts.map((contact) => (
                  <ContactItem
                    key={contact.id}
                    contact={contact}
                    isActive={selectedId === contact.id}
                    onSelect={() => setSelectedId(contact.id)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}

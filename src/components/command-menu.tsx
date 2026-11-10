"use client";

import { useEffect, useState } from "react";
import { CommandIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import type { Locale } from "@/lib/dates";
import { uiText } from "@/lib/messages";

export function CommandMenu({ locale, links }: { locale: Locale; links: { url: string; title: string }[] }) {
  const [open, setOpen] = useState(false);
  const labels = uiText[locale];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (event.key.toLowerCase() !== "k" || !(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey || event.repeat || event.defaultPrevented || open || target?.closest("input, textarea, select, [contenteditable='true'], [role='textbox']")) return;
      event.preventDefault();
      setOpen(true);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return <>
    <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
      {labels.menuBefore}{" "}<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">{labels.menuKey}</kbd>{" "}{labels.menuAfter}
    </p>
    <Button type="button" onClick={() => setOpen(true)} variant="outline" size="icon" aria-label={labels.menuTitle} aria-keyshortcuts="Control+K Meta+K" className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden">
      <CommandIcon className="my-6 size-6" aria-hidden="true" />
    </Button>
    <CommandDialog open={open} onOpenChange={setOpen} title={labels.menuTitle} description={labels.menuDescription} closeLabel={labels.close}>
      <CommandInput placeholder={labels.search} aria-label={labels.search} />
      <CommandList>
        <CommandEmpty>{labels.empty}</CommandEmpty>
        <CommandGroup heading={labels.actions}>
          <CommandItem onSelect={() => { setOpen(false); window.print(); }}>{labels.print}</CommandItem>
        </CommandGroup>
        <CommandGroup heading={labels.links}>
          {links.map(({ url, title }) => <CommandItem key={url} onSelect={() => { setOpen(false); window.open(url, "_blank", "noopener,noreferrer"); }}>{title}</CommandItem>)}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </CommandDialog>
  </>;
}

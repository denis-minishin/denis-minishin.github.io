"use client";

import { useState } from "react";
import { Languages, Printer, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Locale } from "@/lib/dates";
import { uiText } from "@/lib/messages";

const actionClass = "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-500 text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function ResumeActions({ locale, title }: { locale: Locale; title: string }) {
  const labels = uiText[locale];
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  function showShare() {
    const current = new URL(window.location.href);
    current.hash = "";
    current.search = "";
    setUrl(current.href);
    setStatus("");
    setOpen(true);
  }

  async function copyLink() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(url);
      setStatus(labels.copied);
    } catch {
      setStatus(labels.copyError);
    }
  }

  const text = `${title}\n${url}`;
  const links = [
    { label: "E-mail", href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}` },
    { label: "Telegram", href: `https://t.me/share/url?${new URLSearchParams({ url, text: title })}` },
    { label: "WhatsApp", href: `https://api.whatsapp.com/send?${new URLSearchParams({ text })}` },
    { label: "Viber", href: `viber://forward?text=${encodeURIComponent(text)}` },
    { label: locale === "ru" ? "ВКонтакте" : "VK", href: `https://vk.com/share.php?${new URLSearchParams({ url, title })}` },
    { label: locale === "ru" ? "Яндекс Мессенджер" : "Yandex Messenger", href: `https://yandex.ru/chat?text=${encodeURIComponent(text)}#/forward` },
  ];

  return <>
    <a href={locale === "ru" ? "/en/" : "/"} hrefLang={locale === "ru" ? "en" : "ru"} className={actionClass} aria-label={labels.language} title={labels.language}>
      <Languages className="h-5 w-5" aria-hidden="true" />
    </a>
    <button type="button" onClick={() => window.print()} className={actionClass} aria-label={labels.print} title={labels.print}>
      <Printer className="h-5 w-5" aria-hidden="true" />
    </button>
    <button type="button" onClick={showShare} className={actionClass} aria-label={labels.share} title={labels.share}>
      <Share2 className="h-5 w-5" aria-hidden="true" />
    </button>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent closeLabel={labels.close}>
        <DialogTitle>{labels.share}</DialogTitle>
        <DialogDescription>{labels.shareDescription}</DialogDescription>
        <div className="grid grid-cols-2 gap-2">
          {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded border px-3 py-2 text-sm hover:bg-muted">{link.label}</a>)}
        </div>
        <button type="button" onClick={copyLink} className="rounded border px-3 py-2 text-left text-sm hover:bg-muted">{labels.copy}</button>
        <p role="status" className="text-sm text-muted-foreground">{status}</p>
      </DialogContent>
    </Dialog>
  </>;
}

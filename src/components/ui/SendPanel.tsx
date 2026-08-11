"use client";

import { Paperclip, Send, Upload, X } from "lucide-react";
import type { ReactNode} from "react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Submitter } from "@/types/report.type";

interface SendPanelProps {
  sendTo: string[];
  ccTo: string[];
  recipients: Submitter[];
  ccOptions?: string[];
  attachments?: File[];
  onToggleSendTo: (email: string) => void;
  onToggleCcTo: (email: string) => void;
  onAddAttachment?: (file: File) => void;
  onRemoveAttachment?: (index: number) => void;
  submitLabel: string;
  onSubmit: () => void;
  disabled?: boolean;
  footer?: ReactNode;
}

export function SendPanel({
  sendTo,
  ccTo,
  recipients,
  ccOptions,
  attachments,
  onToggleSendTo,
  onToggleCcTo,
  onAddAttachment,
  onRemoveAttachment,
  submitLabel,
  onSubmit,
  disabled = false,
  footer,
}: SendPanelProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <CardContent className="space-y-4">
        <Separator />
        {attachments !== undefined && onAddAttachment && onRemoveAttachment && (
          <div>
            <p className="mb-2 text-sm font-medium">Attachments</p>
            <div
              className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 p-4 transition-colors hover:border-primary/50"
              onClick={() => fileRef.current?.click()}
            >
              <Upload className="size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Drop files here or click to browse
              </span>
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onAddAttachment(file);
                }}
              />
            </div>
            {attachments.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {attachments.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs"
                  >
                    <Paperclip className="size-3 text-muted-foreground" />
                    {file.name}
                    <button onClick={() => onRemoveAttachment(i)}>
                      <X className="size-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <TagSelect
          label="Send To"
          items={recipients}
          selected={sendTo}
          onToggle={onToggleSendTo}
          showAvatar
        />

        <TagSelect
          label="CC"
          items={
            ccOptions
              ? ccOptions.map((email) => ({
                  id: email,
                  name: email,
                  email,
                  avatar: "",
                  department: "",
                }))
              : recipients
          }
          selected={ccTo}
          onToggle={onToggleCcTo}
          showAvatar={!ccOptions}
        />
      </CardContent>
      <CardFooter className="justify-end gap-2">
        {footer}
        <Button onClick={onSubmit} disabled={disabled} className="gap-2">
          <Send className="size-4" />
          {submitLabel}
        </Button>
      </CardFooter>
    </>
  );
}

function TagSelect({
  label,
  items,
  selected,
  onToggle,
  showAvatar,
}: {
  label: string;
  items: Submitter[];
  selected: string[];
  onToggle: (email: string) => void;
  showAvatar: boolean;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => {
          const isSelected = selected.includes(item.email);
          return (
            <button
              key={item.email}
              onClick={() => onToggle(item.email)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs transition-colors",
                isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50",
              )}
            >
              {showAvatar && (
                <span className="flex size-4 items-center justify-center rounded-full bg-primary/20 text-[10px] font-medium">
                  {item.avatar}
                </span>
              )}
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

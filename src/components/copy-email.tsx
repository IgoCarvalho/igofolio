"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";

export function CopyEmailField() {
  const [copyToClipboard, isCopied] = useCopyToClipboard();

  return (
    <InputGroup className="h-12 rounded-full w-auto">
      <InputGroupAddon className="pr-1 size-12 p-0">
        <MailIcon className="text-foreground " />
      </InputGroupAddon>

      <InputGroupInput
        className="w-auto pl-0!"
        placeholder="igocarvalho00@gmail.com"
        readOnly
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Copy"
          title="Copy"
          size="icon-sm"
          onClick={() => {
            copyToClipboard("igocarvalho00@gmail.com");
          }}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

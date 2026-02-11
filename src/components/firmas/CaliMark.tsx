"use client";

import { useEffect } from "react";

const SIGNATURE = String.raw`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  ██████╗  █████╗ ██╗     ██╗
 ██╔════╝ ██╔══██╗██║     ██║
 ██║      ███████║██║     ██║
 ██║      ██╔══██║██║     ██║
 ╚██████╗ ██║  ██║███████╗██║
  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

export default function CaliMark() {
  useEffect(() => {
    // Evita duplicados si React re-renderiza
    if (document.getElementById("cali-mark-anchor")) return;

    const anchor = document.createElement("span");
    anchor.id = "cali-mark-anchor";
    anchor.style.display = "none";

    const comment = document.createComment(`\n${SIGNATURE}\n`);

    // Lo metemos al principio del <body> para que sea fácil de ver en F12
    document.body.prepend(comment);
    document.body.prepend(anchor);
  }, []);

  return null;
}

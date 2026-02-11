"use client";

import { useEffect } from "react";

const SIGNATURE = String.raw`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  LSLC Software
  DermaCore System
  
  Architects & Lead Developers:
    - LuiG
    - Senkupai Joelox
    - LautAp
    - Calisinho
  
  © 2026 LSLC Software

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

export default function GlobalSignature() {
  useEffect(() => {
    if (document.getElementById("lsc-global-signature")) return;

    const anchor = document.createElement("span");
    anchor.id = "lsc-global-signature";
    anchor.style.display = "none";

    const comment = document.createComment(SIGNATURE);

    document.documentElement.prepend(comment);
    document.documentElement.prepend(anchor);
  }, []);

  return null;
}

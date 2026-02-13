"use client";

import { ShieldCheck } from "lucide-react";

export function CredShieldsBadge() {
    return (
        <a
            href="https://credshields.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B2030] border border-primary/20 hover:border-primary/50 transition-colors group"
        >
            <ShieldCheck className="h-4 w-4 text-primary group-hover:text-primary/80 transition-colors" />
            <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                Audited by <span className="text-white font-bold">CredShields</span>
            </span>
        </a>
    );
}

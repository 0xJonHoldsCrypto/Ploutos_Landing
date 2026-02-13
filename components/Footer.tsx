import Link from "next/link";
import Image from "next/image";
import { Twitter, Github } from "lucide-react";
import { AuditModal } from "@/components/AuditModal";
import { CredShieldsBadge } from "@/components/CredShieldsBadge";

export function Footer() {
    return (
        <footer className="bg-[#151925] py-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Ploutos Logo"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <span className="text-xl font-bold tracking-tight text-white">Ploutos</span>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-gray-400">
                        <Link href="https://app.ploutos.money" className="hover:text-white transition-colors">
                            App
                        </Link>
                        <Link href="https://docs.ploutos.money" className="hover:text-white transition-colors">
                            Docs
                        </Link>
                        <AuditModal />
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://twitter.com/ploutos_money" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="https://github.com/ploutos-finance" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                        {/* Discord placeholder/link if known */}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div>© {new Date().getFullYear()} Ploutos Finance. All rights reserved.</div>
                    <CredShieldsBadge />
                </div>
            </div>
        </footer>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1B2030]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Ploutos Logo"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <span className="text-xl font-bold tracking-tight text-white">Ploutos</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="https://app.ploutos.money/markets/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Markets
                    </Link>
                    <Link href="https://docs.ploutos.money" target="_blank" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Docs
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="https://app.ploutos.money"
                        className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                    >
                        Launch App
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-[#1B2030]"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                                Features
                            </Link>
                            <Link href="https://app.ploutos.money/markets/" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                                Markets
                            </Link>
                            <Link href="https://docs.ploutos.money" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                                Docs
                            </Link>
                            <Link
                                href="https://app.ploutos.money"
                                className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90"
                            >
                                Launch App
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

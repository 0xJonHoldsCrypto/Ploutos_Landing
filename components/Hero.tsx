"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Layers, Lock, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePloutosStats, formatCurrency } from "@/hooks/use-ploutos-stats";
import { useState, useEffect } from "react";

const chains = [
    { name: "Hemi", color: "text-orange-500" },
    { name: "Ethereum", color: "text-purple-500" },
    { name: "Plasma", color: "text-gray-500" },
];

export function Hero() {
    const { tvl, isLoading } = usePloutosStats();
    const [currentChainIndex, setCurrentChainIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentChainIndex((prev) => (prev + 1) % chains.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-12 lg:pt-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Live on Hemi Network
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        The Future of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            On-Chain Lending
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto min-h-[60px]"
                    >
                        Ploutos is the premier non-custodial liquidity market protocol on{" "}
                        <span className="inline-block min-w-[100px] text-left">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentChainIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className={`font-bold ${chains[currentChainIndex].color}`}
                                >
                                    {chains[currentChainIndex].name}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        Earn interest on deposits and borrow assets with industry-leading efficiency.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                    >
                        <Link
                            href="https://app.ploutos.money"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        >
                            Launch App <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://docs.ploutos.money"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            Read Docs <ChevronRight className="h-5 w-5" />
                        </Link>
                    </motion.div>

                    {/* Key Metrics / Trust Signals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 md:pt-16 w-full max-w-3xl"
                    >
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <Lock className="h-6 w-6 text-primary mb-2" />
                            <span className="text-gray-400 text-sm font-medium">Total Value Locked</span>
                            <span className="text-2xl font-bold text-white">{isLoading ? "Loading..." : formatCurrency(tvl)}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <Layers className="h-6 w-6 text-primary mb-2" />
                            <span className="text-gray-400 text-sm font-medium">Markets</span>
                            <span className="text-2xl font-bold text-white">3 Chains</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <Zap className="h-6 w-6 text-primary mb-2" />
                            <span className="text-gray-400 text-sm font-medium">Efficiency</span>
                            <span className="text-2xl font-bold text-white">High LTV</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

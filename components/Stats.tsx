"use client";

import { motion } from "framer-motion";
import { usePloutosStats, formatCurrency } from "@/hooks/use-ploutos-stats";

export function Stats() {
    const { tvl, borrowed, marketSize, isLoading } = usePloutosStats();

    const stats = [
        { label: "Total Market Size", value: isLoading ? <Skeleton /> : formatCurrency(marketSize) },
        { label: "Total Available", value: isLoading ? <Skeleton /> : formatCurrency(tvl) },
        { label: "Total Borrows", value: isLoading ? <Skeleton /> : formatCurrency(borrowed) },
    ];

    return (
        <section className="py-20 bg-[#1B2030] relative border-y border-white/5">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="px-4 py-8 md:py-0"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Skeleton() {
    return (
        <div className="h-10 w-32 mx-auto bg-white/10 rounded animate-pulse" />
    );
}

"use client";

import { Shield, TrendingUp, Globe, Coins, Repeat, Activity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Shield,
        title: "Battle-Tested Security",
        description: "Built on the AAVE V3 codebase, audited and proven. Your assets are secured by industry-standard protocols.",
    },
    {
        icon: TrendingUp,
        title: "High Efficiency Mode",
        description: "Borrow up to 97% LTV value for correlated assets, maximizing your capital efficiency like never before.",
    },
    {
        icon: Globe,
        title: "Multi-Chain Support",
        description: "Seamlessly allowing lending and borrowing across Hemi, Ethereum, and Plasma networks.",
    },
    {
        icon: Repeat,
        title: "Looping & Leverage",
        description: "One-click leverage strategies to amplify your yields. Farm rewards with multiplied exposure.",
    },
    {
        icon: Coins,
        title: "Isolated Markets",
        description: "New assets can be listed in isolated mode, protecting the main protocol from systemic risks.",
    },
    {
        icon: Activity,
        title: "Instant Liquidity",
        description: "Deep liquidity pools ensure you can enter and exit positions with minimal slippage at any time.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-[#1B2030] relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why Choose Ploutos?
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Experience the next generation of decentralized lending with features designed for both casual savers and power users.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

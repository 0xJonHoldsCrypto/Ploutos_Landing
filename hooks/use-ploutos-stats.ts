"use client";

import { useState, useEffect } from "react";

interface PloutosStats {
    tvl: number;
    borrowed: number;
    marketSize: number;
    isLoading: boolean;
    error: Error | null;
}

export function usePloutosStats() {
    const [stats, setStats] = useState<PloutosStats>({
        tvl: 0,
        borrowed: 0,
        marketSize: 0,
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch("https://api.llama.fi/protocol/ploutos-money");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                // currentChainTvls contains the latest TVL data
                // "borrowed" key in currentChainTvls is total borrowed
                // TVL usually refers to Total Value Locked (Deposits - Borrows) or just Deposits depending on definition. 
                // DefiLlama "tvl" usually means (Deposits - Borrows) for lending protocols, but let's check the data structure again mentally.
                // Actually for lending protocols on DefiLlama: 
                // tvl = liquidity available (deposits - borrows)
                // borrowed = total borrowed
                // So Market Size (Total Deposits) = tvl + borrowed

                const tvl = data.currentChainTvls?.["Hemi"] || 0;
                const borrowed = data.currentChainTvls?.["Hemi-borrowed"] || 0;

                // Use total across all chains if available, otherwise just Hemi as it's the main one?
                // The API returns `tvl` (all chains) and `currentChainTvls`.
                // Let's use the aggregated values from `tvl` and `currentChainTvls` if we want total protocol stats.

                // Actually, looking at the previous curl output:
                // currentChainTvls: { "Hemi": 734503.79, "Hemi-borrowed": 167397.94, ... "borrowed": 517979.07 }
                // The `tvl` field at the root (not shown in snippet but usually there) or sum of chain TVLs.

                // Let's sum up relevant chains for "Total" if we want, or primarily display Hemi if that's the focus.
                // The landing page mentions "Live on Hemi", but also "4+ Chains".
                // Let's use the total protocol values.

                // DefiLlama response usually accepts `tvl` as the aggregated liquidity.
                // But let's calculate from `currentChainTvls` to be safe if root is missing or complex.

                // Actually, let's just use the `tvl` array last item or similar, but `currentChainTvls` is easiest.
                // Let's iterate `currentChainTvls` to sum up TVL and Borrowed if "borrowed" key is aggregate.
                // Wait, `currentChainTvls.borrowed` IS the aggregate borrowed (517k).
                // Is there a `currentChainTvls.tvl`? No, usually `currentChainTvls` has keys like `Hemi`, `Ethereum`, etc. which are the TVLs.

                // Let's try to find the total TVL. 
                // In the `chainTvls` object usually. 
                // Simple approach: Fetch returns `tvl` property at root?
                // Let's just sum the known chains from the response or use the `tvl` property if it exists.
                // The previous curl output didn't show the root `tvl` property clearly because it was truncated, but standard DefiLlama API has it.

                // Let's rely on summing the values from `currentChainTvls` excluding the "-borrowed" keys for TVL, 
                // and using `currentChainTvls.borrowed` for total borrows.

                let totalTvl = 0;
                let totalBorrowed = data.currentChainTvls?.borrowed || 0;

                Object.keys(data.currentChainTvls || {}).forEach(key => {
                    if (!key.includes("-") && key !== "borrowed" && key !== "staking") {
                        totalTvl += data.currentChainTvls[key];
                    }
                });

                // Total Market Size = TVL (Available) + Borrowed
                const totalMarketSize = totalTvl + totalBorrowed;

                setStats({
                    tvl: totalTvl,
                    borrowed: totalBorrowed,
                    marketSize: totalMarketSize,
                    isLoading: false,
                    error: null,
                });

            } catch (err) {
                console.error("Error fetching Ploutos stats:", err);
                setStats(prev => ({ ...prev, isLoading: false, error: err as Error }));
            }
        };

        fetchStats();
    }, []);

    return stats;
}

export function formatCurrency(value: number): string {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(2)}M`;
    }
    if (value >= 1_000) {
        return `$${(value / 1_000).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
}

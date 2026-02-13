"use client";

import { useState } from "react";
import { X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AuditModal() {
    const [isOpen, setIsOpen] = useState(false);
    const pdfUrl = "https://raw.githubusercontent.com/Credshields/audit-reports/master/Ploutos_Final_Audit_Report.pdf";

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hover:text-white transition-colors"
            >
                Audits
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl h-[80vh] bg-[#1B2030] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#151925]">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <FileText className="h-5 w-5 text-primary" />
                                    Security Audit Report
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex-1 bg-white relative">
                                <iframe
                                    src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}
                                    className="w-full h-full border-0"
                                    title="Audit Report"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

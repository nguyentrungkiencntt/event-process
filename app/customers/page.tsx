"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, XCircle, Mail } from "lucide-react";

interface Attendee {
    id: number;
    name: string;
    email: string;
    status: "confirmed" | "pending";
}

const attendeesData: Attendee[] = [
    { id: 1, name: "Nguyễn Văn A", email: "vana@gmail.com", status: "confirmed" },
    { id: 2, name: "Trần Thị B", email: "thib@gmail.com", status: "pending" },
    { id: 3, name: "Phạm Đức C", email: "ducc@gmail.com", status: "confirmed" },
    { id: 4, name: "Lê Hồng D", email: "hongd@gmail.com", status: "confirmed" },
    { id: 5, name: "Hoàng Minh E", email: "minhe@gmail.com", status: "pending" },
];

export default function AttendeeListPage() {
    const [search, setSearch] = useState("");

    const filtered = attendeesData.filter(
        (a) =>
            a.name.toLowerCase().includes(search.toLowerCase()) ||
            a.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center py-16 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-sky-400 to-indigo-400"
            >
                Danh Sách Người Đăng Ký Sự Kiện
            </motion.h1>

            {/* Search */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative w-full max-w-md mb-10"
            >
                <Search className="absolute left-3 top-3 text-white/40" size={20} />
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc email..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </motion.div>

            {/* Table */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-2xl w-full max-w-4xl"
            >
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/10 text-white/70 text-sm">
                        <tr>
                            <th className="py-3 px-6">#</th>
                            <th className="py-3 px-6">Người tham dự</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6 text-center">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length > 0 ? (
                            filtered.map((a, index) => (
                                <motion.tr
                                    key={a.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border-t border-white/10 hover:bg-white/10 transition-all"
                                >
                                    <td className="py-3 px-6 text-white/70">{index + 1}</td>
                                    <td className="py-3 px-6 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-400 to-sky-400 flex items-center justify-center font-semibold text-sm">
                                            {a.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium">{a.name}</p>
                                            <p className="text-xs text-white/50 flex items-center gap-1">
                                                <Mail size={12} /> {a.email}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 hidden md:table-cell">{a.email}</td>
                                    <td className="py-3 px-6 text-center">
                                        {a.status === "confirmed" ? (
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300">
                                                <CheckCircle size={14} /> Đã xác nhận
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300">
                                                <XCircle size={14} /> Chờ xác nhận
                                            </span>
                                        )}
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-10 text-white/50">
                                    Không tìm thấy người tham dự nào.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </motion.div>
        </main>
    );
}

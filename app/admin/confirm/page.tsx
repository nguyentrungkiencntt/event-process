"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Mail, Search, Loader2 } from "lucide-react";

interface Attendee {
  id: number;
  name: string;
  email: string;
  status: "pending" | "confirmed" | "rejected";
}

const initialData: Attendee[] = [
  { id: 1, name: "Nguyễn Văn A", email: "vana@example.com", status: "pending" },
  { id: 2, name: "Trần Thị B", email: "thib@example.com", status: "confirmed" },
  { id: 3, name: "Phạm Minh C", email: "minhc@example.com", status: "pending" },
  { id: 4, name: "Hoàng Đức D", email: "duchd@example.com", status: "rejected" },
  { id: 5, name: "Lê Hồng E", email: "hongle@example.com", status: "pending" },
];

export default function AdminAttendeesPage() {
  const [attendees, setAttendees] = useState<Attendee[]>(initialData);
  const [search, setSearch] = useState("");
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const filtered = attendees.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase())
  );

  const updateStatus = (id: number, status: Attendee["status"]) => {
    setLoadingId(id);
    setTimeout(() => {
      setAttendees((prev) =>
        prev.map((a) => (a.id === id ? { ...a, status } : a))
      );
      setLoadingId(null);
    }, 800); 
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#0a0f1c] via-[#141b2d] to-[#1e293b] text-white flex flex-col items-center py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-sky-400 to-indigo-400"
      >
        Xác Nhận Người Tham Dự
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative w-full max-w-md mb-10"
      >
        <Search className="absolute left-3 top-3 text-white/40" size={20} />
        <input
          type="text"
          placeholder="Tìm kiếm tên hoặc email..."
          className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-2xl w-full max-w-5xl"
      >
        <table className="w-full text-left border-collapse">
          <thead className="bg-white/10 text-white/70 text-sm">
            <tr>
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Thông tin</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6 text-center">Trạng thái</th>
              <th className="py-3 px-6 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((a, i) => (
                <motion.tr
                  key={a.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-t border-white/10 hover:bg-white/10 transition-all"
                >
                  <td className="py-3 px-6 text-white/60">{i + 1}</td>
                  <td className="py-3 px-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-sky-400 to-teal-400 flex items-center justify-center font-semibold text-sm">
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
                    {a.status === "confirmed" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300">
                        <CheckCircle size={14} /> Đã xác nhận
                      </span>
                    )}
                    {a.status === "pending" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300">
                        <Loader2 size={14} className="animate-spin" /> Chờ duyệt
                      </span>
                    )}
                    {a.status === "rejected" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/20 text-rose-300">
                        <XCircle size={14} /> Từ chối
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-6 text-center space-x-2">
                    {loadingId === a.id ? (
                      <Loader2 className="animate-spin text-white/60 inline-block" size={20} />
                    ) : (
                      <>
                        <button
                          onClick={() => updateStatus(a.id, "confirmed")}
                          className="px-3 py-1 text-xs rounded-md bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all"
                        >
                          Xác nhận
                        </button>
                        <button
                          onClick={() => updateStatus(a.id, "rejected")}
                          className="px-3 py-1 text-xs rounded-md bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition-all"
                        >
                          Từ chối
                        </button>
                      </>
                    )}
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-10 text-white/50">
                  Không có người đăng ký nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </main>
  );
}

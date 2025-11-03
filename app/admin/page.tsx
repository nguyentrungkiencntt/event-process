"use client";

import { motion } from "framer-motion";
import {
//   BarChart,
//   Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const stats = {
    total: 150,
    confirmed: 90,
    pending: 45,
    rejected: 15,
  };

  useEffect(()=>{
     redirect("/admin/confirm")
  },[])

  const COLORS = ["#22c55e", "#eab308", "#ef4444"];

  const pieData = [
    { name: "Đã xác nhận", value: stats.confirmed },
    { name: "Chờ duyệt", value: stats.pending },
    { name: "Từ chối", value: stats.rejected },
  ];

  const dailyData = [
    { date: "01/11", total: 5 },
    { date: "02/11", total: 12 },
    { date: "03/11", total: 18 },
    { date: "04/11", total: 9 },
    { date: "05/11", total: 22 },
    { date: "06/11", total: 17 },
    { date: "07/11", total: 25 },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a0f1c] via-[#141b2d] to-[#1e293b] text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-linear-to-r from-sky-400 via-teal-400 to-indigo-400"
      >
        Bảng Thống Kê Sự Kiện
      </motion.h1>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          icon={<Users size={28} />}
          title="Tổng đăng ký"
          value={stats.total}
          color="from-sky-500 to-indigo-500"
        />
        <StatCard
          icon={<CheckCircle size={28} />}
          title="Đã xác nhận"
          value={stats.confirmed}
          color="from-emerald-500 to-teal-500"
        />
        <StatCard
          icon={<Loader2 size={28} />}
          title="Chờ duyệt"
          value={stats.pending}
          color="from-yellow-500 to-orange-500"
        />
        <StatCard
          icon={<XCircle size={28} />}
          title="Từ chối"
          value={stats.rejected}
          color="from-rose-500 to-pink-500"
        />
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            Tỉ lệ xác nhận
          </h2>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            Số người đăng ký theo ngày
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyData}>
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={{ fill: "#22d3ee" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function StatCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-linear-to-br ${color} rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-white`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle, CalendarDays, MapPin, QrCode, Ticket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ConfirmPage() {
  const attendee = {
    name: "Nguyễn Văn A",
    email: "nkien9450@gmail.com",
    ticketId: "TS2026-8472",
  };

  const event = {
    title: "Tech Spark 2026",
    date: "12 Tháng 3, 2026 — 09:00",
    location: "Hội trường A, Hà Nội",
  };

  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#090b1a] via-[#10142a] to-[#1a1e3c] text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden"
      >
    
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
          className="mx-auto w-16 h-16 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg mb-6"
        >
          <CheckCircle size={36} className="text-white" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-300">
          Đăng ký thành công!
        </h1>
        <p className="text-white/70 text-sm mb-6">
          Xin chúc mừng <span className="text-white font-semibold">{attendee.name}</span>!  
          Thông tin vé của bạn đã được gửi tới <span className="font-medium">{attendee.email}</span>.
        </p>

     
        <div className="bg-black/30 border border-white/10 rounded-xl p-4 text-left space-y-2">
          <div className="flex items-center gap-3">
            <Ticket className="text-pink-400" size={20} />
            <div>
              <p className="text-xs text-white/60">Sự kiện</p>
              <p className="font-semibold">{event.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="text-yellow-400" size={20} />
            <div>
              <p className="text-xs text-white/60">Thời gian</p>
              <p className="font-semibold">{event.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-purple-400" size={20} />
            <div>
              <p className="text-xs text-white/60">Địa điểm</p>
              <p className="font-semibold">{event.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <QrCode className="text-emerald-400" size={20} />
            <div>
              <p className="text-xs text-white/60">Mã vé</p>
              <p className="font-semibold">{attendee.ticketId}</p>
            </div>
          </div>
        </div>

     
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="bg-white p-3 rounded-lg">
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=TechSpark2026Ticket"
              alt="QR Ticket"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
          <p className="text-xs text-white/60 mt-2">
            Quét mã QR này tại cổng check-in để nhận vé
          </p>
        </motion.div>

        <div
        onClick={()=>router.push("/")}
          className="inline-block mt-8 px-6 hover:cursor-pointer py-3 rounded-lg bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-md"
        >
          Quay lại trang chủ
        </div>

      </motion.div>
    </main>
  );
}

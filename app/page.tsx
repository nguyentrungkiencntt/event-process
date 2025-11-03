"use client"
import Button from "@/app/components/Button";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EventDetailPage() {

  const router = useRouter();

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0b0c1d] via-[#101429] to-[#1a1e3c] text-white overflow-hidden">
      <section className="relative flex flex-col items-center text-center py-20 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400"
        >
          Tech Spark 2026
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mt-4"
        >
          Kết nối – Trải nghiệm – Khám phá xu hướng công nghệ mới cùng hàng trăm chuyên gia, startup và developer trên toàn quốc.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* <video
            className="w-full h-auto"
            src="/videos/techspark.mp4"
            autoPlay
            loop
            muted
            playsInline
          /> */}
          <motion.img
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/images/gioithieu.jpg"
            alt="Sân khấu sự kiện"
            className="rounded-2xl shadow-lg border border-white/10"
          />
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-black/30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-pink-500">
              Giới thiệu chương trình
            </h2>
            <p className="text-white/80 leading-relaxed">
              Tech Spark là sự kiện thường niên quy tụ cộng đồng lập trình viên, startup và nhà đầu tư trong lĩnh vực công nghệ.
              Chương trình năm nay sẽ mang đến hơn 10 workshop, 5 phiên talkshow và nhiều hoạt động kết nối doanh nghiệp.
            </p>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>💡 Workshop thực hành công nghệ mới nhất</li>
              <li>🎤 Gặp gỡ và giao lưu cùng chuyên gia đầu ngành</li>
              <li>🚀 Cơ hội tuyển dụng trực tiếp & networking</li>
              <li>🎁 Quà tặng hấp dẫn dành cho người tham dự</li>
            </ul>
          </motion.div>

          <motion.img
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/images/anh.jpg"
            alt="Sân khấu sự kiện"
            className="rounded-2xl shadow-lg border border-white/10"
          />
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Lịch trình sự kiện</h2>
          <p className="text-white/70">Các hoạt động nổi bật trong ngày hội Tech Spark</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 border-l border-white/20 pl-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-linear-to-r from-pink-400 to-purple-500"></div>
              <h3 className="font-semibold text-lg ml-3">{item.time} — {item.title}</h3>
              <p className="text-white/70 text-sm mt-1 ml-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 bg-black/40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Diễn giả & Khách mời</h2>
          <p className="text-white/70">Gặp gỡ các chuyên gia hàng đầu trong ngành công nghệ</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((sp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center shadow-lg"
            >
              <Image
                src={sp.image}
                alt={sp.name}
                width={100}
                height={100}
                className="w-28 h-28 object-cover rounded-full mb-4 border border-white/20"
              />
              <h3 className="font-semibold">{sp.name}</h3>
              <p className="text-sm text-white/70">{sp.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center bg-[#0b0c1d] border-t border-white/10 text-white/60">
        <div className="flex items-center justify-center gap-3 mb-2 text-white/80">
          <CalendarDays size={18} /> <span>2/1/2025</span>
          <MapPin size={18} /> <span>Đà Nẵng, Việt Nam</span>
        </div>
        <p className="text-sm">
          © 2026 Tech Spark. Thiết kế bởi <span className="text-white">Nguyễn Trung Kiên</span>.
        </p>
      </footer>
      <div onClick={() => router.push("/events")} className="fixed bottom-4 right-4">
        <Button>
          Đăng ký sự kiện
        </Button>
      </div>
    </main>
  );
}

const timeline = [
  { time: "08:00", title: "Đón khách & Check-in", desc: "Nhận vé, quà tặng và chụp ảnh lưu niệm" },
  { time: "09:00", title: "Khai mạc & Giới thiệu sự kiện", desc: "Tổng quan chương trình, phát biểu từ ban tổ chức" },
  { time: "10:00", title: "Talkshow: Xu hướng AI 2026", desc: "Khám phá cách AI đang thay đổi thế giới lập trình" },
  { time: "13:30", title: "Workshop Frontend hiện đại", desc: "Trải nghiệm Next.js 15 và công nghệ web mới" },
  { time: "15:30", title: "Networking & Bế mạc", desc: "Kết nối, tuyển dụng, và chia sẻ cuối sự kiện" },
];

const speakers = [
  { name: "Nguyễn Trung Kiên", title: "Fullstack - Mobile Developer", image: "/images/avatar.jpg" },
  { name: "Ngô Lê Trường An", title: "Fullstack Devloper", image: "/images/fullstack.jpeg" },
  { name: "Nguyễn Hữu Mạnh", title: "Fullstack Developer", image: "/images/fullstack.jpeg" },
];


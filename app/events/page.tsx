"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Feature from "@/app/components/Feature";
import Button from "@/app/components/Button";

type FormData = {
  name: string;
  email: string;
};

export default function EventLandingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: { name: "", email: "" },
  });

  const [success, setSuccess] = useState<null | { name: string; email: string }>(null);

  async function onSubmit(data: FormData) {
    try {

      await new Promise((r) => setTimeout(r, 900));

      setSuccess(data);
      reset();
    } catch (err) {
      console.error(err);
      alert("Đăng ký thất bại. Vui lòng thử lại");
    }
  }

  return (
    <div className="">
      <div className="bg-linear-to-b min-h-screen from-[#050816] via-[#0b1022] to-[#06132a] text-white flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/80">Sự kiện đặc biệt</p>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tech Spark 2026 — Kết nối & Trải nghiệm</h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 leading-relaxed"
            >
              Tham gia một ngày hội công nghệ nơi các chuyên gia, nhà sáng lập và developer gặp gỡ, học hỏi
              và trải nghiệm các xu hướng mới nhất trong frontend, AI và sản phẩm. Workshops, talkshow, quà tặng
              và cơ hội tuyển dụng trực tiếp.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <Feature title="Workshop chuyên sâu" desc="Hands-on với công nghệ mới" />
              <Feature title="Talkshow & Panel" desc="Kết nối cùng lãnh đạo ngành" />
              <Feature title="Career corner" desc="Phỏng vấn nhanh & tuyển dụng" />
              <Feature title="Quà tặng giá trị" desc="Hàng trăm phần quà may mắn" />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button>Đặt chỗ miễn phí</Button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                className="text-sm text-white/80 underline cursor-pointer"
                href="/"
              >
                Xem chi tiết chương trình →
              </motion.a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span>Chỗ ngồi có số lượng giới hạn</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Ưu đãi cho sinh viên</span>
              </div>
            </div>
          </div>

          <div id="register" className="relative flex flex-col justify-center">
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-white/5 to-white/3 p-6 rounded-xl border border-white/5 shadow-xl"
            >
              <h2 className="text-xl font-bold">Đăng ký tham gia</h2>
              <p className="text-sm text-white/70 mt-1">Nhập tên và email để nhận vé & thông tin sự kiện qua email.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                <div>
                  <label className="text-xs text-white/70">Họ và tên</label>
                  <input
                    {...register("name", { required: "Vui lòng nhập tên" })}
                    placeholder="Nhập họ và tên ..."
                    className={`mt-1 w-full rounded-lg px-4 py-3 bg-black/20 placeholder-white/40 border ${errors.name ? "border-red-400" : "border-white/6"
                      } focus:outline-none focus:ring-2 focus:ring-pink-500`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="text-xs text-white/70">Email</label>
                  <input
                    {...register("email", {
                      required: "Vui lòng nhập email",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email không hợp lệ" },
                    })}
                    placeholder="Vui lòng nhập email của bạn ..."
                    className={`mt-1 w-full rounded-lg px-4 py-3 bg-black/20 placeholder-white/40 border ${errors.email ? "border-red-400" : "border-white/6"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 cursor-pointer rounded-lg px-5 py-3 bg-linear-to-r from-pink-500 to-indigo-500 hover:scale-[1.01] active:scale-95 transition-transform font-semibold shadow-md"
                  >
                    {isSubmitting ? "Đang gửi..." : "Đăng ký ngay"}
                  </button>
                </div>

                <div id="sparkle" className="pointer-events-none absolute right-8 top-6 w-8 h-8 rounded-full bg-linear-to-tr from-yellow-300 to-pink-400 blur-sm opacity-60" />

                <div className="text-xs text-white/60">Chúng tôi rất vui khi được chi sẻ thông tin đến với bạn.</div>
              </form>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 bg-linear-to-r from-emerald-800/30 to-emerald-700/20 border border-emerald-500/20 p-4 rounded-lg flex items-center gap-3"
                >
                  <div className="p-2 bg-emerald-600/20 rounded-md">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <div className="font-semibold">Đăng ký thành công</div>
                    <div className="text-sm text-white/70">Cám ơn {success.name}. Chúng tôi đã gửi thông tin tới {success.email}.</div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-4 rounded-2xl border border-white/6 bg-black/20 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/70">Ngày & giờ</div>
                  <div className="font-semibold">12 Tháng 3, 2026 — 09:00</div>
                </div>
                <div className="text-sm text-white/60">Đà Nẵng • Hội trường số 4</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

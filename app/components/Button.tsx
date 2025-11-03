import { motion } from "framer-motion";
export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <motion.button
            initial={{ color: ["#0099FF","#000"] }}
            whileInView={{ color: ["#6699FF", "blue","#000"] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.03 }} className="px-4 py-2 cursor-pointer rounded-lg bg-linear-to-r from-yellow-400 to-pink-400 text-black font-semibold shadow">
            {children}
        </motion.button>
    );
}
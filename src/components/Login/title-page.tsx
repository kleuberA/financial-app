"use client"
import { motion } from "framer-motion";

interface TitlePageAuthProps {
    title: string;
}
export default function TitlePageAuth(props: TitlePageAuthProps) {
    return (
        <motion.h1
            className="text-white text-4xl font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            {props.title}
        </motion.h1>
    )
}

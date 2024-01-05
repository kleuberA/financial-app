"use client"
import { motion } from "framer-motion";

interface TitlePageLoginProps {
    title: string;
}
export default function TitlePageLogin(props: TitlePageLoginProps) {
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

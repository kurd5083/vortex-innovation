import style from './Header.module.scss'
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className={style.header}>
      <motion.h1
        className={style.header_title}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Топ 10 игр 2018
      </motion.h1>
      <motion.p
        className={style.header_desc}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Лучшие игры по версии киберсообщества
      </motion.p>
    </header>
  )
}
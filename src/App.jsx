import style from './App.module.scss'

import { Modal } from './components/Modal/Modal';
import { Header } from './components/Header/Header';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { GameCard } from './components/GameCard/GameCard';
import { Footer } from './components/Footer/Footer';

import { motion } from "framer-motion";

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from './store/slices/modalSlice';


function App() {
  const gamesData = useSelector((state) => state.gamesData.games);
  const sortType = useSelector((state) => state.gamesData.sortType);
  const filterType = useSelector((state) => state.gamesData.filterType);
  const stateModal = useSelector((state) => state.modal.stateModal);
  const dispatch = useDispatch();

  return (
    <>
      {stateModal && <Modal />}
      <div className={style.particles}></div>
      <Header />
      <ControlPanel />
      <motion.section
        className={style.game_cards}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {gamesData.map((item) => (
         
          <motion.div
            key={`${item.id}-${filterType}-${sortType}`}
            className={style.game_card} 
            onClick={() => dispatch(openModal(item.id))}
            variants={{
              hidden: { y: 30, opacity: 0, scale: 0.95 },
              visible: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 120 },
              },
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
          > 
            <GameCard
              title={item.title}
              cover={item.cover}
              genre={item.genre}
              description={item.description}
              platforms={item.platforms}
              rating={item.rating}
            />
          </motion.div>
        ))}
      </motion.section>
      <Footer />
    </>
  )
}

export default App

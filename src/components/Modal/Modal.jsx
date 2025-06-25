import style from './Modal.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/slices/modalSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from "framer-motion";

export const Modal = () => {
	const dispatch = useDispatch();
	const gamesData = useSelector((state) => state.gamesData.games);
	const idProduct = useSelector((state) => state.modal.idProduct);
	const gameCard = gamesData.find((item) => item.id == idProduct)

	return (
		<section
			className={style.modal_overlay}
			onClick={() => dispatch(closeModal())}
		>
			<motion.div
				className={style.modal}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3 }}
				onClick={(e) => e.stopPropagation()}
			>
				<span
					className={style.close_btn}
					onClick={() => dispatch(closeModal())}
				>&times;</span>
				<div className={style.modal_header}>
					<h2 className={style.modal_header_title}>{gameCard.title}</h2>
					<p className={style.modal_header_rating}>
						<span className={style.modal_header_rating_value}>{gameCard.rating} </span>/10
					</p>
				</div>
				<div className={style.modal_contant}>
					<Swiper
						spaceBetween={40}
						slidesPerView="auto"
					>
						{gameCard.screenshots.map((item, index) => (
							<SwiperSlide key={index}>
								<img className={style.modal_img} src={item} alt="" />
							</SwiperSlide>
						))}
					</Swiper>
					<div className={style.modal_info}>
						<div className={style.info_row}>
							<p className={style.info_label}>Дата выхода:</p>
							<p className={style.info_value}>{gameCard.releaseDate}</p>
						</div>
						<div className={style.info_row}>
							<p className={style.info_label}>Издатель:</p>
							<p className={style.info_value}>{gameCard.publisher}</p>
						</div>
						<div className={style.info_row}>
							<p className={style.info_label}>Жанры:</p>
							<p className={style.info_value}>{gameCard.genre}</p>
						</div>
						<div className={style.info_row}>
							<p className={style.info_label}>Платформы:</p>
							<p className={style.info_value}>{gameCard.publisher}</p>
						</div>
						<div className={style.info_row}>
							<p className={style.info_label}>Описание:</p>
							<p className={style.info_value}>{gameCard.description}</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}
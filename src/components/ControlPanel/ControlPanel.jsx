import style from './ControlPanel.module.scss'
import { filterGamesData, sortGamesData } from '../../store/slices/gamesDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const sortType = useSelector((state) => state.gamesData.sortType);
	const filterType = useSelector((state) => state.gamesData.filterType);

	return (
		<motion.section
			className={style.control_panel_container}
			initial={{ x: -200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className={style.control_panel}>
				<div className={style.control_panel_filters}>
					<h2 className={style.control_panel_title}>Фильтры</h2>
					<ul className={style.control_panel_list}>
						{['PC', 'PS4', 'Xbox One', 'Switch'].map(platform => (
							<li
								key={platform}
								onClick={() => dispatch(filterGamesData(platform))}
								className={`${style.control_panel_list_item} ${filterType == platform ? style.control_panel_list_item_active : ''}`}
							>
								{platform}
							</li>
						))}
					</ul>
				</div>
				<div className={style.control_panel_sorting}>
					<h2 className={style.control_panel_title}>Сортировка</h2>
					<ul className={style.control_panel_list}>
						<li
							onClick={() => dispatch(sortGamesData('desc'))}
							className={`${style.control_panel_list_item} ${sortType == 'desc' ? style.control_panel_list_item_active : ''}`}
						>
							По убыванию
						</li>
						<li
							onClick={() => dispatch(sortGamesData('asc'))}
							className={`${style.control_panel_list_item} ${sortType == 'asc' ? style.control_panel_list_item_active : ''}`}
						>
							По возрастанию
						</li>
					</ul>
				</div>
			</div>
		</motion.section>
	)
}


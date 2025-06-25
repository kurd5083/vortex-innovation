import style from './GameCard.module.scss'

export const GameCard = ({ id, title, cover, genre, description, platforms, rating }) => {
	return (
		<>
			<img className={style.game_img} src={cover} alt="" />
			<div className={style.game_info}>
				<h3 className={style.game_title}>{title}</h3>
				<p className={style.game_genre}>{genre}</p>
				<p className={style.game_description}>{description}</p>
				<ul className={style.game_platforms}>
					{platforms.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<div className={style.game_rating}>{rating}</div>
			</div>
		</>
	)
}


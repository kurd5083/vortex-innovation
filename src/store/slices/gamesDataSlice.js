import { createSlice } from "@reduxjs/toolkit";

const initialGames = [
	{
		id: 1,
		title: "Red Dead Redemption 2",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/ar3qms.webp",
		genre: "Action, Adventure",
		description: "Легендарный бандит Артур Морган и его банда вынуждены пуститься в бега после неудачного ограбления. Им предстоит скрываться, грабить и сражаться, чтобы выжить в жестоком мире, который стремительно меняется.",
		platforms: ["PS4", "Xbox One"],
		rating: 9.7,
		releaseDate: "26 октября 2018",
		publisher: "Rockstar Games",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/xegpfnsvlyeld0zkjnrc.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/c9xalka7stjkx4mes7kp.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/dhw6ucx9laj5esv6rngn.webp"
		]
	},
	{
		id: 2,
		title: "God of War",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/m8vl75f1aunebleaa0zj.webp",
		genre: "Action, Adventure",
		description: "Кратос, бывший бог войны, пытается начать новую жизнь в царстве скандинавских богов и чудовищ. Его решение помочь сыну исполнить последнюю волю умершей жены обернётся неожиданным путешествием.",
		platforms: ["PS4"],
		rating: 9.5,
		releaseDate: "20 апреля 2018",
		publisher: "Sony Interactive Entertainment",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/rm35ytrytuka9qkylqyk.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/ywrkjcrbeemmb51flsfj.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/qseegzssgetrybgbplrv.webp"
		]
	},
	{
		id: 3,
		title: "Monster Hunter: World",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/qthzj4fqhky8gk8ajlcb.webp",
		genre: "Action, RPG",
		description: "Охотьтесь на монстров в захватывающих дух пейзажах! Погрузитесь в экосистему, где каждая тварь играет свою роль, и станьте лучшим охотником в этом новом мире.",
		platforms: ["PC", "PS4", "Xbox One"],
		rating: 8.9,
		releaseDate: "26 января 2018",
		publisher: "Capcom",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/ghcjheumz1norh0rwaxk.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/nqmwzj4azjunajjlniy8.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/nlkhosogz2ymgk9nypyq.webp"
		]
	},
	{
		id: 4,
		title: "Celeste",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/ar7u5.webp",
		genre: "Platformer",
		description: "Помогите Мадлин преодолеть её внутренние демоны на пути к вершине горы Селеста в этой сверхсложной, но честной платформенной игре о преодолении себя.",
		platforms: ["PC", "PS4", "Xbox One", "Switch"],
		rating: 9.0,
		releaseDate: "25 января 2018",
		publisher: "Matt Makes Games",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/vqkql8qivpvzyzj2ciy3.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/e9lk3alqutkrciksfque.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/scjsrc.webp"
		]
	},
	{
		id: 5,
		title: "Marvel's Spider-Man",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/xyrkou2h4zxjnmitk8gi.webp",
		genre: "Action, Adventure",
		description: "Опытный Питер Паркер борется с преступностью и могущественными злодеями в Нью-Йорке, одновременно пытаясь сохранить свою личную жизнь и карьеру.",
		platforms: ["PS4"],
		rating: 9.2,
		releaseDate: "7 сентября 2018",
		publisher: "Sony Interactive Entertainment",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/bjoksdiwvkatzql3gi95.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/fozp4i9v0b1w0uucoii8.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/ytkccnptotyzm9xuorks.webp"
		]
	},
	{
		id: 6,
		title: "Super Smash Bros. Ultimate",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/ar3p88.webp",
		genre: "Fighting",
		description: "Самая масштабная игра в серии Super Smash Bros. с более чем 70 персонажами, включая новых бойцов, таких как Саймон Белмонт и Кинг К. Рул.",
		platforms: ["Switch"],
		rating: 9.3,
		releaseDate: "7 декабря 2018",
		publisher: "Nintendo",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/sc5rl5.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/sc5rl6.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/sc5rl8.webp"
		]
	},
	{
		id: 7,
		title: "Forza Horizon 4",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/ar5kg.webp",
		genre: "Racing",
		description: "Динамичные гонки в открытом мире Великобритании, где сезоны меняются, влияя на игровой процесс. Собирайте, модифицируйте и гоняйте на более чем 450 автомобилях.",
		platforms: ["PC", "Xbox One"],
		rating: 9.1,
		releaseDate: "2 октября 2018",
		publisher: "Microsoft Studios",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/scu219.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/sc8fvi.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/scu218.webp"
		]
	},
	{
		id: 8,
		title: "Assassin's Creed Odyssey",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/c6i5jb9ucyec1fak1kni.webp",
		genre: "Action, RPG",
		description: "Отправьтесь в эпическое путешествие по Древней Греции в роли спартанского наёмника. Ваши решения формируют мир вокруг вас в этой масштабной RPG.",
		platforms: ["PC", "PS4", "Xbox One"],
		rating: 8.7,
		releaseDate: "5 октября 2018",
		publisher: "Ubisoft",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/gapzclh3mulnucw0ytti.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/wmrvnumhfxku1hvpq7m6.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/tri64r5ppxjjwbc0jny9.webp"
		]
	},
	{
		id: 9,
		title: "Return of the Obra Dinn",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/arbl3.webp",
		genre: "Adventure, Puzzle",
		description: "Страховой оценщик должен выяснить судьбу экипажа пропавшего корабля с помощью магического устройства, позволяющего видеть моменты смерти людей.",
		platforms: ["PC", "PS4", "Xbox One", "Switch"],
		rating: 9.0,
		releaseDate: "18 октября 2018",
		publisher: "3909 LLC",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/qkewuti06rk7hyi56apj.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/sc5itr.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/ja7iz3sn9empf5ws3n0y.webp"
		]
	},
	{
		id: 10,
		title: "Hitman 2",
		cover: "https://images.igdb.com/igdb/image/upload/t_720p/argh4.webp",
		genre: "Stealth",
		description: "Агент 47 возвращается в серию, предлагающую ещё больше свободы и возможностей для творческих убийств в различных локациях по всему миру.",
		platforms: ["PC", "PS4", "Xbox One"],
		rating: 8.5,
		releaseDate: "13 ноября 2018",
		publisher: "Warner Bros. Interactive Entertainment",
		screenshots: [
			"https://images.igdb.com/igdb/image/upload/t_720p/sctl8g.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/sctl8f.webp",
			"https://images.igdb.com/igdb/image/upload/t_720p/lkkcpqgprrdpq6qjnlfq.webp"
		]
	}
];

const initialState = {
	games: [...initialGames],
	originalOrder: [...initialGames],
	sortType: null,
	filterType: null,
};

const gamesDataSlice = createSlice({
	name: "gamesData",
	initialState,
	reducers: {
		filterGamesData: (state, action) => {
			state.filterType = state.filterType === action.payload ? null : action.payload;
			applyFiltersAndSort(state);
		},
		sortGamesData: (state, action) => {
			state.sortType = state.sortType === action.payload ? null : action.payload;
			applyFiltersAndSort(state);
		},
	},
});

function applyFiltersAndSort(state) {
	let filteredGames = [...state.originalOrder];
	if (state.filterType) {
		filteredGames = filteredGames.filter(game =>
			game.platforms.includes(state.filterType)
		);
	}

	if (state.sortType) {
		filteredGames = [...filteredGames].sort((a, b) =>
			state.sortType === 'asc' ? a.rating - b.rating : b.rating - a.rating
		);
	}

	state.games = filteredGames;
}

export const { filterGamesData, sortGamesData } = gamesDataSlice.actions;
export default gamesDataSlice.reducer;
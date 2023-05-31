import html from '../img/icons/html.svg';
import css from '../img/icons/css.svg';
import js from '../img/icons/js.svg';
import react from '../img/icons/react.svg';
import redux from '../img/icons/redux.svg';
import npm from '../img/icons/npm.svg';
import ts from '../img/icons/ts.svg';
import git from '../img/icons/git.svg';
import vsc from '../img/icons/vsc.svg';
import figma from '../img/icons/figma.svg';
import node from '../img/icons/node.svg';
import phone from '../img/icons/contacts/phone.svg';
import telegram from '../img/icons/contacts/telegram.svg';
import email from '../img/icons/contacts/email.svg';
import skype from '../img/icons/contacts/skype.svg';
import certificate from '../img/certificate.png';

export const education = [
	{
		icon: html,
		title: 'HTML',
		text: 'При вивчені HTML, дізнався що це не мова програмування, а просто розмітка гіперпосилання. Також що є різні типи тегів, а саме строкові та блокові. Знайомство з сімейством input та посиланнями, і різновидностями типів. Звісно з семантикою та навіщо воно все це потрібно. Canvas потрібно ще підтягнути, але вже розумію що за допомогою цієї технології можна робить круті анімації.',
	},
	{
		icon: css,
		title: 'CSS/SCSS',
		text: 'Крок до чарівного. Так можна назвати технологію css. Та його препроцесор sass та less. Препроцесори значно спрощують роботу з цією технологією. Сам я використовую scss/sass що є майже тим самим, за винятком деяких деталей. Також знайомий з: animation, transforms, transitions, position, @media запитами. Та ще багато чого цікавого.',
	},
	{
		icon: js,
		title: 'JS',
		text: "Js неможливо описати декількома словами, це насправді нервова система додатків. Працює з DOM елементами та є справжньою мовою програмування. Мало знати базові речі цієї технології, потрібні справжні навички та розуміння алгоритмів. Взагалі вивчав самостійно всі технології, але для саморозуміння пройшов курс Лущенка Олександра js 2.0 де отримав сертифікат та підтвердження того що володію базовими навичками. Перевірити сертифікат можливо за посиланням https://itgid.info/ru/certificate та номер сертифіката: 99ucj1uwrhd4. В цьому курсі є декілька міні проєктів пов'язані з ajax запитами, подіями мишки та клавіатури. Я їх додам до свого портфоліо",
	},
	{
		icon: react,
		title: 'REACT',
		text: "React, як на мене це логічне продовження навчання та підвищення рівня навичок, є розуміння що це об'єднання html та js технологій. До речі цей сайт я написав за допомогою react технології",
	},
	{
		icon: redux,
		title: 'REDUX Toolkit',
		text: 'Стейт менеджер який відповів мені на деякі мої питання, але ще потрібно його дослідить.',
	},
	{
		icon: ts,
		title: 'TS',
		text: 'Розумію що ця штука заздалегідь знає про мої помилки, але не розумію як їй це вдається. Про те вже переконався на власному досвіді що це дійсно прикольна штука.',
	},
	{
		icon: npm,
		title: 'NPM',
		text: 'Пакет менеджер, дозволяє за декілька кліків завантажити залежності, створити проєкт та багато різних технологій.',
	},
	{
		icon: git,
		title: 'Git/GitHub-page',
		text: 'Технологія яка дозволяє контролювати версії додатків, оновлень та просто ділитись навичками, дослідженнями та своїми наробітками. До речі цей сайт теж розташований на цьому ресурсі.',
	},
	{
		icon: vsc,
		title: 'VSCode',
		text: 'Мені цей додаток більш пасує чим Sublime Text 3. Також використовую плагіни Pretter, live server, ecsstractor, auto close teg, та ін.',
	},
	{
		icon: figma,
		title: 'Figma',
		text: 'Мабуть, працюю з цим редактором, бо він безплатний та є макети для практики.',
	},
	{
		icon: node,
		title: 'Node js',
		text: 'Node js, база для використання більшості ресурсів які я використовую. До того є ще мовою Backend, альтернатива для PHP.',
	},
];

export const experience = [
	{
		title: 'Практичний досвід',
		text: 'Мій досвід полягає в, тому що я створюю власні проєкти, щоб набути досвіду. Я впевнений що це повністю замінить досвід комерційний. Але погоджуюсь з тим що це не замінить навичок роботи в команді. Як для початківця це вже не погано, правда!? В мене вже є декілька цікавих проєктів. Я в них використовував технології такі як: ReactJS, Redux-Toolkit, Ts, ajax, Json-server, не враховуючи базові технології, можеш їх переглянути в моєму репозиторії.',
	},
];

export const contacts = [
	{
		icon: phone,
		title: 'Телефон',
		text: '+38 097 836 36 34',
		link: 'tel:+380978363634',
	},
	{
		icon: telegram,
		title: 'Телеграм',
		text: 't.me/+380978363634',
		link: 'https://t.me/+380978363634',
	},
	{
		icon: skype,
		title: 'Skype',
		text: 'join.skype.com/invite/KHSqeiGfNVJj',
		link: 'https://join.skype.com/invite/KHSqeiGfNVJj',
	},
	{
		icon: email,
		title: 'E-mail',
		text: 'Kondrativ41@gmail.com',
		link: 'mailto:kondrativ41@gmail.com',
	},
];

export const myList = [
	{ page: 'Про мене', class: 'icon-about_icon', active: 'active icon-about_icon' },
	{ page: 'Освіта', class: 'icon-home_icon', active: 'active icon-home_icon' },
	{ page: 'Портфоліо', class: 'icon-portfolio_icon', active: 'active icon-portfolio_icon' },
	{ page: 'Контакти', class: 'icon-address_icon', active: 'active icon-address_icon' },
];
export const myData = [
	{
		name: 'День народження:',
		text: '09 серпня 1991р.',
	},
	{
		name: 'Місто:',
		text: 'Кривий Ріг',
	},
	{
		type: 'Freelance',
		name: 'Freelancehunt',
		link: 'https://freelancehunt.com/freelancer/KondratievArtem.html',
	},
	{
		name: 'Вік:',
		text: '31',
	},
	{
		type: 'E-mail:',
		name: 'kondrativ41@gmail.com',
		link: 'mailto:kondrativ41@gmail.com',
	},
	{
		id: 'phone',
		type: 'Телефон',
		name: '+380978363634',
		link: 'tel:+380978363634',
	},
	{
		type: 'img',
		name: 'certificate',
		img: certificate,
	},
];

export const startTimeData = new Date(2022, 1, 24).getTime() / (1000 * 60);

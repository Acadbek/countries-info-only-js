const container = document.querySelector('.container')
const imageLINK = 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs';
const card = document.createElement('div');

// 1 img create qilish kerak
// 2 imgga attribute qoshish kerak (src)
// 3 imgni append qilish kerak

// function setImage(link) {
// 	let img = document.createElement('img');
// 	img.setAttribute('src', link)
// 	return card.appendChild(img)
// }
// setImage(imageLINK);

// 1 class yaratish kerak u class card bolsin va xar chaqirganda manga rasm, title, descni chiqarib bersin
// 2 apidan kelgan malumotni map qilib classga return qilib yuborsin yani nechi martta iteratsiya bolsa
//   shuncha class chiqsin
// 3 classni display qilish

const URL = 'https://restcountries.com/v2/all'

async function getData(api = '', arr = []) {
	try {
		const res = await fetch(api);
		const data = await res.json();
		console.log(data, 'array');
		showData(data)
	} catch (err) {
		console.log(err);
	}
}

function showData(mata) {
	let tab = `<tr>
							<th>Name</th>
							<th>Office</th>
							<th>Position</th>
							<th>Salary</th>
						</tr>`

	for (let item of mata) {
		tab += `<tr> 
							<td>${item.name} </td>
							<td>${item.capital}</td>
							<td>${item.region}</td> 
							<td>${item.subRegion}</td>          
					</tr>`
	}

	document.querySelector('.container').innerHTML = tab
	console.log(tab);
}



getData(URL, this.array)

class Card {
	constructor(img, title, desc) {
		this.img = img,
			this.title = title,
			this.desc = desc
	}
	setImage(link) {
		let img = document.createElement('img');
		img.setAttribute('src', link)
		return card.appendChild(img)
	}
}
// for (let i = 0; i < 10; i++) {
// 	newCard = new Card(imageLINK, 'goodbye world', 'im here')
// 	card.innerHTML = `<img src='${imageLINK}'/> <h1>${newCard.title}</h1> <p>${newCard.desc}</p>`
// }

let styles = {
	padding: '20px',
	border: '1px red solid'
}


for (i in styles) {
	card.style[i] = styles[i]
}


container.appendChild(card);
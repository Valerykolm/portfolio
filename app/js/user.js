class User {
  constructor (name, id) {
		this.name = name;
		this.id = id;
		this.avatar = 'Photo';
	}
	deleteAvatar() {
		this.avatar = null;
	}
}

class Admin extends User {
	constructor (name, id) {
		super(name, id);
		this.name = name;
		this.id = id;
		this.avatar = 'Photo';
	}
	changeMyId() {
		this.id = 1;
		console.log('I am the boss');
	}
}

const adm = new Admin('admin', 2);
const lera = new User('Lera', 25);
console.log(lera);
console.log(adm);
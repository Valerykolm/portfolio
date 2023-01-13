const App = {
	data() {
		return {
			counter: 5000,
			title: 'Salary',
			income: 'Add another income',
			spend: 'Add your spending',
			inputValueIncome: '',
			inputValueSpend: '',
			price: '',
			notes: [],
			costs: ['Rent: 1250']
		}
	},
	methods: {
		inputChangeHandler(event) {
			//event.target.value получаем динамически
			this.inputValueIncome = event.target.value;
		},
		addNewNote() {
			if(this.inputValueIncome !== '') {
				this.notes.push(this.inputValueIncome);
				this.inputValueIncome = '';
			}
		},
		deleteNote() {
			this.notes.pop(this.inputValueIncome);
		},
		inputChangeHandlerSpend(event) {
			//event.target.value получаем динамически
			this.inputValueSpend = event.target.value;
		},
		addNewCost() {
			if(this.inputValueSpend !== '') {
				this.costs.push(this.inputValueSpend);
				this.inputValueSpend = '';
			}
		},
		deleteCost() {
			this.costs.pop(this.inputValueSpend);
		},
		doubleCount() {
			return this.notes.length * 2;
		},
		/*totalNotes() {
			let sum = 0;
			for (let i = 0; this.notes.length > 0; i++) {
				sum += Number(notes[i]);
			}
			return sum;
		}*/
	}
}

Vue.createApp(App).mount('#app');

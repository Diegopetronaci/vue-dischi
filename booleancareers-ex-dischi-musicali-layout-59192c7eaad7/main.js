//Attraverso una chiamata ajax all’Api di boolean avremo a 
//disposizione una decina di dischi musicali.
//Servendoci di Vue JS stampiamo tutto a schermo.
//In questo momento non è importante la parte grafica.
//Bonus: Creare una select con i seguenti generi:
//pop, rock, metal e jazz.In base a cosa scegliamo 
//nella select vedremo i corrispondenti cd.
//Chiamata: https://flynn.boolean.careers/exercises/api/array/music


$(document).ready(function() {

	let app = new Vue ({

		el: ".cds-container",
		data: {
			dischi: {
				immaginiDisco: [],
				titoloDisco: [],
				autoreDisco: [],
				annoDisco: [],
			}
		},
		methods: {
			
		},
		mounted() {
			for (let i = 0; i < 10; i++) {
				
				axios
				.get('https://flynn.boolean.careers/exercises/api/array/music')
				.then(resp => {
					const immagini = resp.data.response[i].poster;
					this.dischi.immaginiDisco.push(immagini);
					const titoli = resp.data.response[i].title;
					this.dischi.titoloDisco.push(titoli);
					const autore = resp.data.response[i].author;
					this.dischi.autoreDisco.push(autore);
					const anno = resp.data.response[i].year;
					this.dischi.annoDisco.push(anno);
					console.log(resp.data);
				})	
			}
		}
	})
});
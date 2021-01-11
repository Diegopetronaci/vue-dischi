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

		el: ".cd",
		data: {
			titoloDisco: [],
			autoreDisco: [],
			annoDisco: [],
		},
		methods: {
			
		},
		mounted() {
			for (let i = 0; i < 11; i++) {
				
				axios
				.get('https://flynn.boolean.careers/exercises/api/array/music')
				.then(resp => {
					console.log(resp.data.response.title);
				})	
			}
		}
	})
});
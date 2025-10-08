let all = document.querySelectorAll('.square')
all.forEach.((box)=>{
	box.addEventListener("mouseover", function handler() {
		let box1 = document.getElementById('square1')
		let box1 = document.getElementById('square2')
		let box1 = document.getElementById('square3')

		for(let box of all){
			if(box.id != this.id){
				box.style.backgroundcolor = "#6F4E37";
			}
		}
		
	});

		box.addEventListener("mouseout", function handler(){
		all.forEach(box=>{
			box.style.backgroundcolor = '#E6E6FA'
			
		})
		
	});
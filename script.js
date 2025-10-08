let all = document.querySelectorAll('.square');
all.forEach((box) => {
    box.addEventListener("mouseover", function handler() {
        all.forEach(b => {
            if (b.id !== this.id) {
                b.style.backgroundColor = "#6F4E37";
            }
        });
    });

    box.addEventListener("mouseout", function handler() {
        all.forEach(b => {
            b.style.backgroundColor = "#E6E6FA";
        });
    });
});
	
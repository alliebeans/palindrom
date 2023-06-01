String.prototype.palindrome = function(){
	var word = [];
	let palindrome = [];

	word = this.split(``);

	word.deDelimiter = function() {
	const delimiters = [' ', '.', ',', '?', '!'];
	for (let i = word.length - 1; i >= 0; i--) {
		if (delimiters.includes(word[i])) {
		word.splice(i, 1);
		}
	}
	};
	word.deDelimiter();

	word = word.join(``).toLowerCase();
	palindrome = word.split(``).reverse().join(``);
	
	return (palindrome === word);
};

window.onload = function(){
	const input = document.getElementById("input");
	const search = document.getElementById("search");
	const beskr = document.getElementById("beskr");
	
	let grid = [];

	for (let i = 0; i < 5; i++) {
		grid.push([]);
		for (let j = 0; j < 5; j++) {
			grid[i].push(document.getElementById(String.fromCharCode(97 + i) + String.fromCharCode(97 + j)));
		}
	}

	input.onkeydown = handleKeyPress;

	function handleKeyPress(e) {
		if (e.keyCode === 13) {
			search.click();
			return false;
		}
	}

	const allTd = document.querySelectorAll("td");

	function markLetter(ev) {
  ev.preventDefault();

  for (i = 0;i < grid.length;i++){
		for (j = 0;j < grid.length;j++){
			if (ev.target == grid[j][i]){
				if (j == 2 || i == 2) {
					printVertical(grid, 2);
					printHorizontal(grid, 2);
				}
				else if (j == 0 && i != 0 && i != 4) {
						printVertical(grid, i);
						printHorizontal(grid, j+1);
				}
				else if (j == 4 && i != 0 && i != 4) {
						printVertical(grid, i);
						printHorizontal(grid, j-1);
				}
				else if (i == 0 && j != 0 && j != 4) {
						printVertical(grid, i+1);
						printHorizontal(grid, j);
				}
				else if (i == 4 && j != 0 && j != 4) {
						printVertical(grid, i-1);
						printHorizontal(grid, j);
				}
				else {
					printVertical(grid, i);
					printHorizontal(grid, j);
				}
			}
		}
	}
}

function printVertical(grid, i) {
	for (k = 0;k < grid.length;k++) {
		grid[k][i].setAttribute("class", "marked");
	}

}

function printHorizontal(grid, j) {
	for (k = 0;k < grid.length;k++) {
		grid[j][k].setAttribute("class", "marked");
	}
}

	function unMarkLetter(){
		allTd.forEach((td)=>{
			td.setAttribute("class", "default");
		})
	}

	function markHandler(){
		allTd.forEach((td)=>{
			td.addEventListener("mouseenter", markLetter);
			td.addEventListener("mouseleave", unMarkLetter);
		})
	}
	
	markHandler();

	search.onclick = function() {
		var searchQuery = input.value;
		if(searchQuery.palindrome()){
			var searchQuery = "<b>" + input.value + "</b>";
			beskr.innerHTML = "Ja, " + searchQuery + " är en palindrom."
			input.value = "";
		} else {
			var searchQuery = "<b>" + input.value + "</b>";
			beskr.innerHTML = "Nej, " + searchQuery + " är inte en palindrom."
			input.value = "";
		}
	}
}
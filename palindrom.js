String.prototype.palindrome = function(){
				var word = [];
				let palindrome = [];

				word = this.split(``);

				word.deDelimiter = function() {
					let space = ` `;
					let dot = `.`;
					let comma = `,`;
					let quest = `?`;
					let excl = `!`;

					for (i = 0; i < word.length;i++){
						if (word[i] === space) {
							word.splice(i, 1);
						}
					}

					for (i = 0; i < word.length;i++){
						if (word[i] === dot) {
						word.splice(i, 1);
						}
					}

					for (i = 0; i < word.length;i++){
						if (word[i] === comma) {
							word.splice(i, 1);
						}
					}

					for (i = 0; i < word.length;i++){
						if (word[i] === quest) {
							word.splice(i, 1);
						}
					}

					for (i = 0; i < word.length;i++){
						if (word[i] === excl) {
							word.splice(i, 1);
						}
					}
				}
				word.deDelimiter();

				word = word.join(``).toLowerCase();
				palindrome = word.split(``).reverse().join(``);
				
				return (palindrome === word);
			};

			window.onload = function(){
				const input = document.getElementById("input");
				const search = document.getElementById("search");
				var beskr = document.getElementById("beskr");

				input.onkeypress = handleKeyPress;

				function handleKeyPress(e) {
					if (e.keyCode === 13) {
						search.click();
						return false;
					}
				}

				const allTd = document.querySelectorAll("td");
				markHandler();

				function markHandler(){
					allTd.forEach((td)=>{
						td.addEventListener("mouseenter", markLetter);
						td.addEventListener("mouseleave", unMarkLetter);
					})
				}

				function markLetter (ev) {
					ev.preventDefault();

					const aa = document.getElementById("aa");
					const ab = document.getElementById("ab");
					const ac = document.getElementById("ac");
					const ad = document.getElementById("ad");
					const ae = document.getElementById("ae");

					const ba = document.getElementById("ba");
					const bb = document.getElementById("bb");
					const bc = document.getElementById("bc");
					const bd = document.getElementById("bd");
					const be = document.getElementById("be");

					const ca = document.getElementById("ca");
					const cb = document.getElementById("cb");
					const cc = document.getElementById("cc");
					const cd = document.getElementById("cd");
					const ce = document.getElementById("ce");

					const da = document.getElementById("da");
					const db = document.getElementById("db");
					const dc = document.getElementById("dc");
					const dd = document.getElementById("dd");
					const de = document.getElementById("de");

					const ea = document.getElementById("ea");
					const eb = document.getElementById("eb");
					const ec = document.getElementById("ec");
					const ed = document.getElementById("ed");
					const ee = document.getElementById("ee");
					
					let grid = 
					[
						[aa, ab, ac, ad, ae],
						[ba, bb, bc, bd, be],
						[ca, cb, cc, cd, ce],
						[da, db, dc, dd, de],
						[ea, eb, ec, ed, ee],
					];
					
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
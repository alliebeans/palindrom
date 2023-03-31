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

				function markLetter (ev){
					const aa = document.querySelector("#aa");
					const ab = document.querySelector("#ab");
					const ac = document.querySelector("#ac");
					const ad = document.querySelector("#ad");
					const ae = document.querySelector("#ae");

					const ba = document.querySelector("#ba");
					const bb = document.querySelector("#bb");
					const bc = document.querySelector("#bc");
					const bd = document.querySelector("#bd");
					const be = document.querySelector("#be");

					const ca = document.querySelector("#ca");
					const cb = document.querySelector("#cb");
					const cc = document.querySelector("#cc");
					const cd = document.querySelector("#cd");
					const ce = document.querySelector("#ce");

					const da = document.querySelector("#da");
					const db = document.querySelector("#db");
					const dc = document.querySelector("#dc");
					const dd = document.querySelector("#dd");
					const de = document.querySelector("#de");

					const ea = document.querySelector("#ea");
					const eb = document.querySelector("#eb");
					const ec = document.querySelector("#ec");
					const ed = document.querySelector("#ed");
					const ee = document.querySelector("#ee");

					console.log(ev.target);
					allTd.forEach((td)=>{
						td.setAttribute("class", "default");
					})
					ev.target.setAttribute("class", "marked");
					switch (ev.target.getAttribute("id")){
						case "aa":
						ev.target.setAttribute("class", "begin");
						ab.setAttribute("class", "marked");
						ac.setAttribute("class", "marked");
						ad.setAttribute("class", "marked");
						ae.setAttribute("class", "marked");
						ba.setAttribute("class", "marked");
						ca.setAttribute("class", "marked");
						da.setAttribute("class", "marked");
						ea.setAttribute("class", "marked");
						break;
						case "ab":
						ev.target.setAttribute("class", "begin");
						bb.setAttribute("class", "marked");
						bc.setAttribute("class", "marked");
						bd.setAttribute("class", "marked");
						be.setAttribute("class", "marked");
						ba.setAttribute("class", "begin");
						db.setAttribute("class", "marked");
						eb.setAttribute("class", "marked");
						cb.setAttribute("class", "marked");
						break;
						case "ba":
						ev.target.setAttribute("class", "begin");
						bb.setAttribute("class", "marked");
						bc.setAttribute("class", "marked");
						bd.setAttribute("class", "marked");
						be.setAttribute("class", "marked");
						ab.setAttribute("class", "begin");
						db.setAttribute("class", "marked");
						eb.setAttribute("class", "marked");
						cb.setAttribute("class", "marked");
						break;
						case "ac":
						ev.target.setAttribute("class", "begin");
						bc.setAttribute("class", "marked");
						cc.setAttribute("class", "marked");
						dc.setAttribute("class", "marked");
						ec.setAttribute("class", "begin");
						ca.setAttribute("class", "begin");
						cb.setAttribute("class", "marked");
						cd.setAttribute("class", "marked");
						ce.setAttribute("class", "begin");
						break;
						case "ca":
						bc.setAttribute("class", "marked");
						cc.setAttribute("class", "marked");
						dc.setAttribute("class", "marked");
						ec.setAttribute("class", "marked");
						ac.setAttribute("class", "marked");
						cb.setAttribute("class", "marked");
						cd.setAttribute("class", "marked");
						ce.setAttribute("class", "marked");
						break;
						case "ad":
						ev.target.setAttribute("class", "begin");
						bd.setAttribute("class", "marked");
						cd.setAttribute("class", "marked");
						dd.setAttribute("class", "marked");
						ed.setAttribute("class", "marked");
						da.setAttribute("class", "begin");
						db.setAttribute("class", "marked");
						dc.setAttribute("class", "marked");
						de.setAttribute("class", "marked");
						break;
						case "da":
						bd.setAttribute("class", "marked");
						cd.setAttribute("class", "marked");
						dd.setAttribute("class", "marked");
						ed.setAttribute("class", "marked");
						ad.setAttribute("class", "marked");
						db.setAttribute("class", "marked");
						dc.setAttribute("class", "marked");
						de.setAttribute("class", "marked");
						break;
						case "ae":
						be.setAttribute("class", "marked");
						ce.setAttribute("class", "marked");
						de.setAttribute("class", "marked");
						ee.setAttribute("class", "marked");
						ea.setAttribute("class", "marked");
						eb.setAttribute("class", "marked");
						ec.setAttribute("class", "marked");
						ed.setAttribute("class", "marked");
						break;
						case "ea":
						be.setAttribute("class", "marked");
						ce.setAttribute("class", "marked");
						de.setAttribute("class", "marked");
						ee.setAttribute("class", "marked");
						ae.setAttribute("class", "marked");
						eb.setAttribute("class", "marked");
						ec.setAttribute("class", "marked");
						ed.setAttribute("class", "marked");
						break;
						case "ee":
						ed.setAttribute("class", "marked");
						ec.setAttribute("class", "marked");
						eb.setAttribute("class", "marked");
						ea.setAttribute("class", "marked");
						de.setAttribute("class", "marked");
						ce.setAttribute("class", "marked");
						be.setAttribute("class", "marked");
						ae.setAttribute("class", "marked");
						break;
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
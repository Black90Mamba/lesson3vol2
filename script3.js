console.log("hello world")
const hodinovka = 300
const pocetHodin = Number(prompt("zadej pocet hodin zamestnance", "160")) //number je nutné použít abych věděla že se jedná o čísla ne o text
const premie = Number(prompt("zadej mimoradnou odmenu v Kc"))
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"



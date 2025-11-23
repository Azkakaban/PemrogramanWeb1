const judul = document.getElementById("judul");

const p1 = document.getElementsByClassName("p1")[0];

const p = document.getElementsByTagName("p");

const desc = document.querySelector("#deskripsi");

p1.style.backgroundColor = "Lightblue";
p1.style.padding = "30px";

desc.classList.add("active");
desc.classList.remove("active");

const pBaru = document.createElement("p");

const teksBaru = document.createTextNode("Paragraf Baru");

pBaru.appendChild(teksBaru);

const sectionA = document.querySelector("#a");

sectionA.appendChild(pBaru);

const p3 = document.querySelector(".p3");
sectionA.insertBefore(pBaru,p3);

const p2 = document.querySelector(".p2");
p2.remove();

const p4 = document.querySelector("section#b p");
p1.replaceWith(p4);
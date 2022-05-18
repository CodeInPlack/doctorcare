window.addEventListener('scroll', onScroll)
/*
aqui está sendo adicionado um evento scroll a toda a janela de exibição
a função EventListener adiciona um evento e executa uma função deste evento
neste caso, a função onscroll de scroll está sendo executada em window
*/

onScroll()
//o onscroll precisa ser chamado no ínicio do carregamento para que não haja bugs com o mesmo 
function onScroll() {
	//a função onscroll está sendo responsável por executar as demais funções
	showNavOnScroll()
	showButtonBackToTopOnScroll()
	activateMenuSection(home)
	activateMenuSection(services)
	activateMenuSection(about)
	activateMenuSection(contact)
}

function activateMenuSection(section){
	//aqui se encontra a animação de seleção das sessões na aba menu quando a dado o scroll na página
	const targetLine = scrollY + innerHeight / 2
	//esta constante guarda a soma da posição da barrinha de rolagem e da altura visível da viewport
	const sectionTop = section.offsetTop
	const sectionHeigth = section.offsetHeight
	//estas duas contantes anteriores guardam o top da caixa da sessão e a sua altura
	const sectionVerify = targetLine >= sectionTop
	const sectionEnd = sectionTop + sectionHeight
	//aqui é guardada a soma de sectioTop com sectionHeight para descobrir o fim da caixa da sessão
	const sectionEndVerify = sectionEnd <= targetLine
	const sectionBoundaries = sectionTop && !sectionEnd
	//aqui está sendo verificado se o sectionTop e o sectionEnd são true. O "&&" é o operador "and" em js
	const sectionId = section.getAttribute('id')
	/*
	${} serve para fazer interpolações (trocas). Nesse caso está sendo colocado o atributo id...
	em todo href de todo a de .menu
	*/
	const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)
	/*
	aqui o querySelector está pegando em .menu todo href de todo a que tenha
	em js *= significa que contenha tal coisa
	o acento grave "`" serve para colocar variaáveis dentro de strings
	*/
	menuElement.classList.remove('active')
	if (sectionBoundaries){
		menuElement.classList.add('active')
	}
}

function showNavOnScroll() {
		//está função será resposável por mostrar o nav quando a página for rolada
	if (scrollY > 0) {
		//aqui a classe scroll está sendo adicionada a id navigation toda vez que scrollY for maior que 0
		navigation.classList.add('scroll')
		//navigation é um objeto onde classList é uma de suas propriedades e o add é uma de suas funcionalidades
	} else {
		navigation.classList.remove('scroll')
		//aqui a classe scroll está sendo removida toda vez que scrollY não for maior que 0
	}
}

function showButtonBackToTopOnScroll() {
	//esta função será responsável por mostrar o botão de volta quando a página for rolada até certo ponto
	if (scrollY > 550) {
		buttonBackToTop.classList.add('show')
	} else {
		buttonBackToTop.classList.remove('show')
	}
}

//estas funcs tornarão possível a alteração entre o menu e a página inicial
function openMenu(){
	document.body.classList.add('menu_expanded')
	//aqui está sendo pego o body do documento e sendo adicionado uma classe a ele
}

function closeMenu(){
	document.body.classList.remove('menu_expanded')
	//aqui está sendo pego o body do documento e sendo removida a classe menu_expanded
}

ScrollReveal({
	//aqui a animação é feita de baixo para cima
	origin: 'top'
	distance: '30px'
	//o distance serve para que tudo seja puxada 30px na direção oposta à definida em origin
	duration: 700
	//aqui é o tempo que a animação irá levar para ser completa
}).reveal(
	//aqui é a instância que faz o scroll reveal acontecer
	`#home,
	#home img,
	#home .stats,
	#services,
	#services header,
	#services .card,
	#about,
	#about header,
	#about .content`);
	//aqui é a ordem na qual os elementos irão aparecer

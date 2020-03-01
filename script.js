const sec = document.querySelector('section');

const commands = {
	clear: {
		text: 'clear',
		function: function() {
			var allLabels = document.querySelectorAll('label');
			var allContent = document.querySelectorAll('.content');

			for (var i = 0; i < allLabels.length; i++) {
				allLabels[i].parentElement.removeChild(allLabels[i]);
			}

			for (var i = 0; i < allContent.length; i++) {
				allContent[i].parentElement.removeChild(allContent[i]);
			}

			createInput();
		}
	},

	help: {
		text: 'help',
		function: function() {
			var divContent = document.createElement('div');
			var content = document.createElement('p');
			var list = document.createElement('ul');

			content.innerHTML =
				'<strong>This personal site was made inspired in computer terminal style. Also you need insert some commands to make things. Some commands is: </strong>';
			divContent.setAttribute('class', 'content');

			list.innerHTML =
				'<li><b>Igor</b></li><p>Introduction myself.</p> <li><b>Github</b></li><p>Show my profile on GitHub.</p> <li><b>Contact</b></li><p>Get in touch.</p> <li><b>Exp</b></li><p>About my experience.</p> <li><b>Help</b></li><p>Brief description to help you.</p> <li><b>Clear</b></li><p>Clear body of site.</p>';
			list.setAttribute('class', 'list-help');

			sec.appendChild(divContent);
			divContent.appendChild(content);
			divContent.appendChild(list);

			createInput();
		}
	},

	igor: {
		text: 'igor',
		function: function() {
			var divContent = document.createElement('div');
			var content = document.createElement('p');
			var list = document.createElement('ul');

			content.innerHTML =
				"<b>Hello! I'm Igor Theodoro Oliveira, a student on Pontifical Catholic University of Minas Gerais. I live in Betim, MG and enjoy building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</br> Here are a few technologies I've been working with recently:</b>";
			divContent.setAttribute('class', 'd-block content');

			list.innerHTML =
				'<li>React</li> <li>JavaScript (ES6+)</li> <li>Node.js</li> <li>Express</li> <li>MongoDB</li>';
			list.setAttribute('class', 'd-block list-star py-2 content');

			sec.appendChild(divContent);
			divContent.appendChild(content);
			divContent.appendChild(list);

			createInput();
		}
	},

	github: {
		text: 'github',
		function() {
			window.open('https://github.com/igortheodoro', '_blank');

			var divContent = document.createElement('div');
			var content = document.createElement('ul');

			content.innerHTML = '<li>My github profile has just opened.</li>';
			content.setAttribute('class', 'd-flex list-folder content');

			divContent.setAttribute('class', 'd-flex');

			sec.appendChild(divContent);
			divContent.appendChild(content);

			createInput();
		}
	},

	contact: {
		text: 'contact',
		function: function() {
			var divContent = document.createElement('div');
			var listMail = document.createElement('ul');
			var listCase = document.createElement('ul');

			listMail.innerHTML = '<li> <a href="mailto:igortheodoro12@gmail.com">igortheodoro12@gmail.com</a> </li>';
			listMail.setAttribute('class', 'd-flex list-mail content');

			listCase.innerHTML =
				'<li> <a target="_blank" href="https://www.linkedin.com/in/igortheod/">LinkedIn</a> </li>';
			listCase.setAttribute('class', 'd-flex list-case content');

			divContent.setAttribute('class', 'd-flex');

			sec.appendChild(divContent);
			divContent.appendChild(listMail);
			divContent.appendChild(listCase);

			createInput();
		}
	},

	exp: {
		text: 'exp',
		function: function() {
			var divContent = document.createElement('div');
			var content = document.createElement('p');
			var list = document.createElement('ul');

			content.innerHTML =
				"<b>I'm looking for my first professional opportunity and all my experience you found on my github. You can read more about my personal projects using: </b>";

			list.innerHTML = '<li>exp arpeggio</li> <li>exp ediph</li> <li>exp blog</li>';
			list.setAttribute('class', 'list-exp');

			divContent.setAttribute('class', 'content');

			sec.appendChild(divContent);
			divContent.appendChild(content);
			divContent.appendChild(list);

			createInput();
		}
	},

	personalExp: {
		textArpeggio: 'exp arpeggio',
		textEdiph: 'exp ediph',
		textBlog: 'exp blog',

		fncArpeggio: function() {
			setExp(
				'<b>Arpeggio Musical</b>',
				'<li>Write modern, performant, maintainable code for a musical group.</li> <li>Work with JavaScript, Node.js, Jquery and Bootstrap.</li> <li>This website was an initiative of the university with the extension project. In which, it is necessary to help some group to have more results.</li>',
				'https://github.com/igortheodoro/personal-site/blob/master/images/arpeggio-icon.png?raw=true'
			);

			createInput();
		},

		fncEdiph: function() {
			setExp(
				'<b>Ediph</b>',
				'<li>Write a code for an image editing platform, that the images would be hosted and saved in the database as links, so that professional editors can handle them. </li> <li>Work with a JavaScript, Ejs, Node.js, MongoDB, Mongoose.</li> <li>I made all this personal project for train my skills with databases and back end servers.</li>',
				'https://github.com/igortheodoro/personal-site/blob/master/images/ediph-icon.png?raw=true'
			);

			createInput();
		},

		fncBlog: function() {
			setExp(
				'<b>Blog</b>',
				'<li>Write a code for simulate all functions of a blog.</li> <li>Work with JavaScript, Node.js, Bootstrap, MongoDB.</li> <li>I made all this personal project for train my skills with databases and back end servers.</li>',
				'https://github.com/igortheodoro/personal-site/blob/master/images/pencil-icon.png?raw=true'
			);

			createInput();
		}
	}
};

// Quando apertar enter

window.addEventListener('keypress', function(e) {
	var input = document.querySelector('input');
	var getInput = input.value.toLowerCase();

	if (e.keyCode == 13) {
		// Remove todos os inputs
		removeInput();

		// Testes de input
		if (getInput == commands.clear.text) commands.clear.function();
		else if (getInput == commands.help.text) commands.help.function();
		else if (getInput == commands.igor.text) commands.igor.function();
		else if (getInput == commands.github.text) commands.github.function();
		else if (getInput == commands.contact.text) commands.contact.function();
		else if (getInput == commands.exp.text) commands.exp.function();
		else if (getInput == commands.personalExp.textArpeggio) commands.personalExp.fncArpeggio();
		else if (getInput == commands.personalExp.textEdiph) commands.personalExp.fncEdiph();
		else if (getInput == commands.personalExp.textBlog) commands.personalExp.fncBlog();
		else createInput();
	}
});

// Sempre focar no input ao clicar na window

window.addEventListener('click', function() {
	const input = document.querySelector('input');
	input.focus();
});

// Remover todos inputs

function removeInput() {
	const allInputs = document.querySelectorAll('input');
	const allLabel = document.querySelectorAll('label');

	// A última label recebe o valor do último input e após isso todos inputs são removidos
	for (var i = 0; i < allInputs.length; i++) {
		allLabel[allLabel.length - 1].textContent = 'C:\\Igor\\terminal> ' + allInputs[allInputs.length - 1].value;
		allInputs[i].parentElement.removeChild(allInputs[i]);
	}
}

// Criar div e inputs ao apertar enter

function createInput() {
	const newDiv = document.createElement('div');
	const newLabel = document.createElement('label');
	const newInput = document.createElement('input');

	newLabel.textContent = 'C:\\Igor\\terminal> ';
	newDiv.classList.add('d-flex');

	sec.appendChild(newDiv);
	newDiv.appendChild(newLabel);
	newDiv.appendChild(newInput);

	newInput.focus();
}

// Função para criar as experiências de trabalho nos parâmetros

function setExp(title, allLi, url) {
	var divContent = document.createElement('div');
	var list = document.createElement('ul');
	var paragraph = document.createElement('p');
	var image = document.createElement('img');

	var divImg = document.createElement('div');
	divImg.setAttribute('class', 'd-flex align-items-start');

	paragraph.innerHTML = title;
	paragraph.setAttribute('class', 'content');

	list.innerHTML = allLi;
	list.setAttribute('class', 'content');

	divContent.setAttribute('class', 'content');

	image.setAttribute('src', url);
	image.setAttribute('class', 'px-2');

	sec.appendChild(divContent);
	divContent.appendChild(divImg);
	divImg.appendChild(image);
	divImg.appendChild(paragraph);
	divContent.appendChild(list);
}

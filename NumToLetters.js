var unites = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'];
var dizaines = ['','dix','vingt','trente','quarante','cinquante','soixante','soixante-dix', 'quatre-vingt','quatre-vingt-dix'];
var dix = ['','onze','douze', 'treize','quatorze','quinze','seize']
var cent = 'cent'

var nbr = parseInt(prompt("Entrez un nombre entre 1 et 999"), 10);

var result = (nbr < 0)? 'moins ' : '';

function splitNbr(nombre)
{
	var finalTab =[];
	var unite = nombre % 10;
	nombre -= unite;
	nombre /= 10;
	finalTab.unshift(unite);
	var dizaine = nombre % 10;
	nombre -= dizaine;
	nombre /= 10;
	finalTab.unshift(dizaine);
	var centaine = nombre % 10;
	nombre -= centaine;
	nombre /= 10;
	finalTab.unshift(centaine);
	return finalTab;
};

function convert(tab)
{
	if(	tab[1] == '1' && tab[2] >= '1' && tab[2] <= '6')
	{
		tab[1] = dix[tab[2]];
		tab.pop();
	}
	else if (tab[1] == '7' && tab[2] >= '1' && tab[2] <= '6') {
		tab[1] = dizaines[6] + '-' + dix[tab[2]];
		tab.pop();
	}
	else if (tab[1] == '9' && tab[2] >= '1' && tab[2] <= '6') {
		tab[1] = dizaines[8] + '-' + dix[tab[2]];
		tab.pop();
	}
	else {
		tab[1] = dizaines[tab[1]];
		tab[2] = unites[tab[2]];
	}
	if (tab[0] == '1') {
		tab[0] = cent;
	}
	else if (tab[0] == '0') {
		tab.shift();
	}
	else {
		tab[0] = unites[tab[0]] + '-' + cent;
	}
	return tab;
}

var tab = splitNbr(nbr);
console.log(tab);
tab = convert(tab);
console.log(tab);

result = tab.join('-');

alert(result);

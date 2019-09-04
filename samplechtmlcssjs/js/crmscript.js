
function displayMessage(){


	//commentaires: afficher les logs
	console.info("Call displayMessage function")

	var prenom ="souleymane";
	var isMale=true;
	var age = 40;
	//length est attribut de l'objet.
	var nbCracprenom= prenom.length;
	// substring est une fonction de l'objet
	var extractprenom= prenom.substring(0,2);
	//un objet
	var contactsanogo= {nom:"Koffi",prenom:"Gombo" ,age:40}; 

	//log debug
	console.debug("Le nom du contact est : " +contactsanogo.nom)
	
	document.write("Ton prénon est " + prenom + " et l'age est "+age);
	document.write("<br />");
	document.write("Le nombre de caractere est " + nbCracprenom);
	document.write("<br />");
	document.write("Substring 0,2  =" + extractprenom);
	document.write("<br />");
	document.write("Afficher un objet contact  avec nom =" + contactsanogo.nom);
}


function displayArray(){

	//  var monTableau = new Array("koffi","Gombo",35,true,"Abidjan");
	// ou var monTableau = ["koffi","Gombo",35,true,"Abidjan"];
	var monTableau = new Array(5);
	monTableau[0]="Koffi";
	monTableau[1]="Gombo";
	monTableau[2]=35;
	monTableau[3]=true;
	monTableau[4]="Abidjan";

	if(monTableau[1] =="Gombo"){
		alert("Hey Gombo ! ");
	}

	for (var i = monTableau.length - 1; i >= 0; i--) {
		document.write(monTableau[i]);

		document.write("<br />");
	}

	//ou
	document.write("<br />");

	for (var i = 0; i <monTableau.length; i++) {
		document.write(monTableau[i]);
		document.write("<br />");
	}


}

/*Fonction qui permet de faire disparaitre le logo et de le réafficher dans 700ms après avec le settimeout*/ 
function clignoter()
{
    document.getElementsByTagName('img')[0].style.display = 'none';
    setTimeout(block,700);
}

/*Fonction qui permet d'afficher le logo et de le disparaitre dans 700ms après avec le settimeout*/ 
function block()
{
    document.getElementsByTagName('img')[0].style.display = 'block';
    setTimeout(clignoter,700);
}

/*Fonction qui permet de changer le thème de la calculatrice selon l'option séléctionner
dans la liste déroulante*/
function changerTheme()
{
    var elementSelect = document.getElementsByTagName("select")[0];
    var optionSelectionner = elementSelect.options[elementSelect.selectedIndex].value;
    if (optionSelectionner == "JauneCyan Rose")
    {
        document.getElementsByTagName('select')[0].style.backgroundImage = "linear-gradient(to bottom right,cyan, yellow,pink)";
        document.getElementById('centre').style.backgroundImage = "linear-gradient(to bottom right,cyan, yellow, pink)";
    }else if(optionSelectionner == "BleueCyan Mauve")
    {
        document.getElementsByTagName('select')[0].style.backgroundImage = "linear-gradient(to bottom right,cyan, blue, violet)";
        document.getElementById('centre').style.backgroundImage = "linear-gradient(to bottom right,cyan, blue, violet)";
    }else
    {
        document.getElementsByTagName('select')[0].style.backgroundImage = "linear-gradient(to bottom right,cyan, green, gray)";
        document.getElementById('centre').style.backgroundImage = "linear-gradient(to bottom right,cyan, green, gray)";
    }
}
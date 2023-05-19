class Calculator {
    constructor() {
        this.nombreEcran = "0";
    }
    
    presser(boutton)
    {
        if (boutton == "C")
        {
            this.nombreEcran = "0";
            document.getElementById('ecran').value = this.nombreEcran;
        }else if(boutton == "0" || boutton == "1" || boutton == "2" ||
                boutton == "3" || boutton == "4" || boutton == "5" ||
                boutton == "6" || boutton == "7" || boutton == "8" ||
                boutton == "9")
        {
            if(this.nombreEcran == "0")
            {
                this.nombreEcran = boutton;
                document.getElementById('ecran').value = this.nombreEcran;
            }else
            {
                this.nombreEcran += boutton;
                document.getElementById('ecran').value = this.nombreEcran;
            }
        }else if(boutton == "←")
        {
            if(this.nombreEcran.length == 1)
            {
                this.nombreEcran = "0";
                document.getElementById('ecran').value = this.nombreEcran;
            }else
            {
                this.nombreEcran = this.nombreEcran.substring(0,(this.nombreEcran.length-1));
                document.getElementById('ecran').value = this.nombreEcran;
            }
        }
    }

    toucher(event)
    {
        var boutton =event.key;
        if(boutton == "0" || boutton == "1" || boutton == "2" ||
        boutton == "3" || boutton == "4" || boutton == "5" ||
        boutton == "6" || boutton == "7" || boutton == "8" ||
        boutton == "9" || boutton == "C" || boutton == "Backspace" ||
        boutton == "%" || boutton == "/" || boutton == "x" ||
        boutton == "-" || boutton == "+" || boutton == "=" ||
        boutton == ",")
        {
            alert("Good");
        }else
        {
            alert("Le boutton "+boutton+" ne s'applique pas sur la calculatrice.");
        }
    }
}
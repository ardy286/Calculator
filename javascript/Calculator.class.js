class Calculator {
    constructor() {
        this.nombreEcran = "0";
        this.operation = null;
        this.dernierNombre = null;
    }

    presser(bouton) {
        const ecran = document.getElementById('ecran');

        if (bouton === "C") {
            this.nombreEcran = "0";
            this.operation = null;
            this.dernierNombre = null;
        } else if ("0123456789.".includes(bouton)) {
            if (this.nombreEcran === "0") {
                this.nombreEcran = bouton;
            } else {
                this.nombreEcran += bouton;
            }
        } else if ("+-*/".includes(bouton)) {
            this.dernierNombre = parseFloat(this.nombreEcran);
            this.operation = bouton;
            this.nombreEcran = "0";
        } else if (bouton === "=") {
            if (this.operation && this.dernierNombre !== null) {
                const actuel = parseFloat(this.nombreEcran);
                switch (this.operation) {
                    case "+":
                        this.nombreEcran = (this.dernierNombre + actuel).toString();
                        break;
                    case "-":
                        this.nombreEcran = (this.dernierNombre - actuel).toString();
                        break;
                    case "*":
                        this.nombreEcran = (this.dernierNombre * actuel).toString();
                        break;
                    case "/":
                        this.nombreEcran = (this.dernierNombre / actuel).toString();
                        break;
                }
                this.operation = null;
                this.dernierNombre = null;
            }
        } else if (bouton === "←") {
            this.nombreEcran = this.nombreEcran.slice(0, -1) || "0";
        }

        ecran.value = this.nombreEcran;
    }

    toucher(event) {
        const bouton = event.key;
        if ("0123456789.+-*/=Backspace".includes(bouton)) {
            if (bouton === "Backspace") {
                this.presser("←");
            } else if (bouton === "Enter") {
                this.presser("=");
            } else {
                this.presser(bouton);
            }
        } else {
            alert(`Le bouton "${bouton}" n'est pas valide.`);
        }
    }
}

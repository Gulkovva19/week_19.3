class Calc {

    static pl(a, b) {
        console.log(Number(a) + Number(b));
        document.getElementById('sumAB').innerHTML = Number(a) + Number(b);
        return Number(a) + Number(b);
    }

    static minus(a, b) {
        console.log(Number(a) - Number(b));
        document.getElementById('sumAB').innerHTML = Number(a) - Number(b);
        return Number(a) - Number(b);
    }

    static multi(a, b) {
        console.log(Number(a) * Number(b));
        document.getElementById('sumAB').innerHTML = Number(a) * Number(b);
        return Number(a) * Number(b);
    }

    static del(a, b) {
        if (b == 0) {
            document.getElementById('sumAB').innerHTML = 'На ноль делить нельзя';
        }
        else {
            document.getElementById('sumAB').innerHTML = Number(a) / Number(b);
        }
        console.log(Number(a) / Number(b));
    }
}
const btnPl = document.getElementById('plus');
const btnMn = document.getElementById('minus');
const btnMulti = document.getElementById('multi');
const btnDel = document.getElementById('del');

btnPl.addEventListener('click', () => { Calc.pl(document.getElementById('one').value, document.getElementById('two').value) });
btnMn.addEventListener('click', () => { Calc.minus(document.getElementById('one').value, document.getElementById('two').value) });
btnMulti.addEventListener('click', () => { Calc.multi(document.getElementById('one').value, document.getElementById('two').value) });
btnDel.addEventListener('click', () => { Calc.del(document.getElementById('one').value, document.getElementById('two').value) });

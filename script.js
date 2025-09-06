const price = document.getElementById('price');
const final = document.getElementById('final');
const discountAmount = document.getElementById('discountAmount');
const discountRate = document.getElementById('discountRate');
const clear = document.getElementById('clear');
const body = document.getElementById('body');
const warning = document.getElementById('warning');


function calculate() {
    const p = parseFloat(price.value);
    const f = parseFloat(final.value);
    if (isNaN(p) || isNaN(f) || f > p) {
        discountAmount.textContent = '—';
        discountRate.textContent = '—';
        body.classList.remove('red-bg');
        warning.classList.add('hidden');
        return;
    }
    const disc = p - f;
    const rate = (disc / p) * 100;
    discountAmount.textContent = disc.toFixed(2) + ' ﷼';
    discountRate.textContent = rate.toFixed(2) + '%';


    if (rate > 34.99) {
        body.classList.add('red-bg');
        warning.classList.remove('hidden');
    } else {
        body.classList.remove('red-bg');
        warning.classList.add('hidden');
    }
}


price.addEventListener('input', calculate);
final.addEventListener('input', calculate);


clear.addEventListener('click', () => {
    price.value = '';
    final.value = '';
    discountAmount.textContent = '—';
    discountRate.textContent = '—';
    body.classList.remove('red-bg');
    warning.classList.add('hidden');
});
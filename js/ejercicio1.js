const flujoDeCaja = [
    { mes: "enero", ingreso: 1500, egreso: 1500 },
    { mes: "febrero", ingreso: 2500, egreso: 2500 },
    { mes: "marzo", ingreso: 84683, egreso: 1155 },
    { mes: "abril", ingreso: 135353, egreso: 1533 },
    { mes: "mayo", ingreso: 1535, egreso: 5434 },
    { mes: "junio", ingreso: 4343354, egreso: 5434543 },
    { mes: "julio", ingreso: 435453, egreso: 4543 },
    { mes: "agosto", ingreso: 78351, egreso: 7816 },
    { mes: "septiembre", ingreso: 1878, egreso: 95634 },
    { mes: "octubre", ingreso: 48483, egreso: 9433 },
    { mes: "noviembre", ingreso: 35483, egreso: 53133 },
    { mes: "diciembre", ingreso: 3843, egreso: 348133 }
];

function tienePerdidas(flujoDeCaja) {
    let saldoTotal = 0;

    for (const mes of flujoDeCaja) {
        const saldo = mes.ingreso - mes.egreso;
        saldoTotal += saldo;
    }

    return saldoTotal < 0;
}

const tabla = document.querySelector("table");
for (const mes of flujoDeCaja) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${mes.mes}</td>
        <td><input type="number" value="${mes.ingreso}" class="ingreso"></td>
        <td><input type="number" value="${mes.egreso}" class="egreso"></td>
    `;
    tabla.appendChild(fila);
}

const ingresosInputs = document.querySelectorAll(".ingreso");
const egresosInputs = document.querySelectorAll(".egreso");

ingresosInputs.forEach((input, index) => {
    input.addEventListener("change", () => {
        flujoDeCaja[index].ingreso = parseFloat(input.value);
        actualizarResultado();
    });
});

egresosInputs.forEach((input, index) => {
    input.addEventListener("change", () => {
        flujoDeCaja[index].egreso = parseFloat(input.value);
        actualizarResultado();
    });
});

function actualizarResultado() {
    const resultadoElemento = document.getElementById("resultado");
    if (tienePerdidas(flujoDeCaja)) {
        resultadoElemento.textContent = "El flujo de caja genera pérdidas.";
    } else {
        resultadoElemento.textContent = "El flujo de caja no genera pérdidas.";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    actualizarResultado();
});
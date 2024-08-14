function convertFromDecimal() {
    const decimal = parseInt(document.getElementById("decimalInput").value);
    if (!isNaN(decimal)) {
        document.getElementById("binaryInput").value = decimal.toString(2);
        document.getElementById("hexInput").value = decimal.toString(16).toUpperCase();
    } else {
        clearInputs();
    }
}

function convertFromBinary() {
    const binary = document.getElementById("binaryInput").value;
    if (/^[01]+$/.test(binary)) {
        const decimal = parseInt(binary, 2);
        document.getElementById("decimalInput").value = decimal;
        document.getElementById("hexInput").value = decimal.toString(16).toUpperCase();
    } else {
        clearInputs();
    }
}

function convertFromHex() {
    const hex = document.getElementById("hexInput").value;
    if (/^[0-9A-Fa-f]+$/.test(hex)) {
        const decimal = parseInt(hex, 16);
        document.getElementById("decimalInput").value = decimal;
        document.getElementById("binaryInput").value = decimal.toString(2);
    } else {
        clearInputs();
    }
}

function clearInputs() {
    document.getElementById("binaryInput").value = '';
    document.getElementById("hexInput").value = '';
}

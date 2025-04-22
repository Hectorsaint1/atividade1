function mostrarTipo(valor: string | number): void {
    if (typeof valor === 'string') {
        console.log(`O valor "${valor}" é uma string.`);
    } else if (typeof valor === 'number') {
        console.log(`O valor ${valor} é um número.`);
    }
}

mostrarTipo('Hector');
mostrarTipo(42);

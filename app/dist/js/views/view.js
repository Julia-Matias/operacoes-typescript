export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}

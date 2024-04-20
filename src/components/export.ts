
export enum CardCart {
  'imag'='imag',
  'text'= 'text',
}

class CatCard extends HTMLElement {
  text?: string;
  imag?: string;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }
    
    static get observedAttributes(){
        const attrs: Record<CardCart, null> = {
            text: null,
            imag: null
        }

        return Object.keys(attrs);
    
    }
    attributeChangedCallback(propName: CardCart, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
               
                this[propName] = newValue;
                break;
        }
    
       
        this.render();
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);

        const boton = this.ownerDocument.createElement('boton')
        boton.textContent = 'Enviar';
    }
}

export default (CatCard)
customElements.define('cat-card', CatCard)
import "./components/export"
import {getDataCat} from './types/dataFetch'
import {getDataC} from './types/dataFact'

class AppContainer extends HTMLElement {
  
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const dataCates = await getDataC();
        this.render(dataCates);

    }

    render(dataCatos: any) {

        if(this.shadowRoot)(
            this.shadowRoot.innerHTML = ``
        )

    
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)
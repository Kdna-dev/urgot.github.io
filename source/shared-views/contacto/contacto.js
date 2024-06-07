class ContactoComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        const template = document.createElement('template');
        this.loadHTML('./source/shared-views/contacto/contacto.html').then(html => {
            template.innerHTML = html;

            const commonStyles = document.createElement('link')
            commonStyles.setAttribute('rel', 'stylesheet')
            commonStyles.setAttribute('href', './css/common-styles.css')
            this.shadowRoot.appendChild(commonStyles)

            const customInputs = document.createElement('link')
            customInputs.setAttribute('rel', 'stylesheet')
            customInputs.setAttribute('href', './css/custom-inputs.css')
            this.shadowRoot.appendChild(customInputs)

            const linkElement = document.createElement('link')
            linkElement.setAttribute('rel', 'stylesheet')
            linkElement.setAttribute('href', './source/shared-views/contacto/contacto.css')
            this.shadowRoot.appendChild(linkElement)

            const bootstrapLink = document.createElement('link');
            bootstrapLink.rel = 'stylesheet';
            bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
            this.shadowRoot.appendChild(bootstrapLink);

            this.shadowRoot.appendChild(template.content.cloneNode(true))
        });
    }

    async loadHTML(url){
        const response = await fetch(url);
        return await response.text();
    }
}

customElements.define('contacto-component', ContactoComponent);
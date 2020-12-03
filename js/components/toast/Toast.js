class Toast {
    constructor () {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null;    //represents the newly generated element.
        this.textDOM = null;    //the element which will contain the message. 
    }

    show (type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText = message;

            if (type === "success") {
                this.DOM.classList.remove("error");
            }
            if (type === 'error') {
                this.DOM.classList.add("error");
            }
    }

    hide() {
        this.DOM.classList.remove("visible");
    }

    render () {
        const HTML = `<div class="toast">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-shield"></i>
                        <p>Your message here...</p>
                        <i class="fa fa-times"></i>
                    </div>`;

        this.renderIntoParentDOM.insertAdjacentHTML("beforeend", HTML);
        this.DOM = this.renderIntoParentDOM.querySelector(".toast");
        this.textDOM = this.DOM.querySelector("p");
    }

}

export { Toast }
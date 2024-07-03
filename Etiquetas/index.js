class UserCard extends HTMLElement{
    constructor(){
        super();
        const name = this.getAttribute("name");
        const html = /*html*/'<div class="card">
            <img src="https://avatars.githubusercontent.com/Juanlix?size=128" alt=" Juan Diego Gomez">
        <span>Juanlix</span>
        </div>';
    this.insertAdjacentHTML("beforeend",html);
        
    }
}
customElements.define("user-card,UserCard");
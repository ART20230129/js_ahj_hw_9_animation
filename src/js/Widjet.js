export default class Widjet {
  constructor() {
    this.container = document.querySelector('.container');
    this.collapseBtn = this.container.querySelector('.button');
  }

  init() {
    const collapseContainer = document.createElement('div');
    collapseContainer.classList.add('collapse-container');

    collapseContainer.innerHTML = `
                <div class="text-container">       
                        <div class="text-collapse">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                        </div>
                </div>
                `;

    this.container.insertAdjacentElement('beforeend', collapseContainer);

    const copyWord = document.createElement('div');
    copyWord.classList.add('copy');
    copyWord.textContent = 'Copy';
    this.container.appendChild(copyWord);

    const textContainer = this.container.querySelector('.text-container');

    let clickBtn;
    this.collapseBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (clickBtn === true) {
        textContainer.classList.remove('show');
        clickBtn = false;
      } else {
        textContainer.classList.add('show');
        clickBtn = true;
      }
    });
  }
}

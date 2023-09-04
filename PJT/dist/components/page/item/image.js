import { BaseComponent } from '../../component.js';
export class ImageComponet extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
            <div class="image_holder"><img class='image_thumbnail'></div>
            <p class="image_title"></p>
          </section>`);
        const imageElement = this.element.querySelector('.image_thumbnail');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image_title');
        titleElement.textContent = title;
    }
}

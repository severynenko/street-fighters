import { showModal } from './modal'
import { createElement } from '../helpers/domHelper';

export function showWinnerModal(fighter) {
  const title = 'Winner';
  const getFighterDetails = (fighter) => {
    const {name, source} = fighter;
    const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
    const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
    const attributes = { src: source };
    const imageElement = createElement({ tagName: 'img', className: 'fighter-image-model' , attributes});

    imageElement.innerText = "Image";
    nameElement.innerText = "\nName: " + name + "\n";

    fighterDetails.append(imageElement, nameElement);
    return fighterDetails;
  }
  const bodyElement = getFighterDetails(fighter);
  showModal({title, bodyElement});
  // show winner name and image
}
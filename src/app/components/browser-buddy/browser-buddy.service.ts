import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BrowserBuddyService {
  public appContainer: HTMLElement | null = document.getElementById('app');

  public hoveredElement: HTMLElement | null = null;

  public isSelecting: boolean = true;
  public selectedElement: HTMLElement | null = null;
  public selectedElements: Array<HTMLElement> | null = [];
  public selectionSaved: boolean = false;

  public predictedElements: Array<HTMLElement> | null = [];
  public predictedCount: number = 0;

  public buttonActionActive: boolean = false;
  public selectedButton: HTMLElement | null = null;
  public selectedButtonChildIndex: number | null = null;
  public predictedButtons: Array<HTMLElement> | null = [];

  public inputTextActionActive: boolean = false;
  public inputTextFormControl: FormControl<string> = new FormControl();
  public selectedInput: HTMLElement | null = null;
  public selectedInputIndex: number | null = null;
  public predictedInputs: Array<HTMLElement> | null = [];

  public activeStep: number = 1;

  markHoveredElements() {
    this.appContainer?.addEventListener('mouseover', this.handleMouseOver);
    this.appContainer?.addEventListener('mouseout', this.handleMouseOut);
  }

  handleMouseOver = (event: MouseEvent) => {
    if (this.hoveredElement) {
      this.unMarkElement(this.hoveredElement, 'yellow-outline');
    }
    this.hoveredElement = event.target as HTMLElement;
    this.markElement(this.hoveredElement, 'yellow-outline');
  }

  handleMouseOut = () => {
    if (this.hoveredElement) {
      this.unMarkElement(this.hoveredElement, 'yellow-outline');
    }
  }

  handleElementSelection() {
    this.appContainer?.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      const target = event.target as HTMLElement;

      if (this.buttonActionActive) {
        this.setSelectedButton(target);
      } else if (this.inputTextActionActive) {
        this.setSelectedInput(target);
      } else {
        this.selectElement(target);
      }
    });
  }

  setSelectedButton(target: HTMLElement) {
    this.selectedButton = target;
    this.selectedButtonChildIndex = this.findChildElemIndex(target);
    this.predictedButtons = this.getChildrenAtIndex(this.predictedElements!, this.selectedButtonChildIndex!);
  }

  setSelectedInput(target: HTMLElement) {
    this.selectedInput = target;
    this.selectedInput.blur();
    this.selectedInputIndex = this.findChildElemIndex(target);
    this.predictedInputs = this.getChildrenAtIndex(this.predictedElements!, this.selectedInputIndex!);
  }

  selectElement(target: HTMLElement) {
    this.selectedElement = target;
    this.markElement(this.selectedElement, 'green-outline');
    this.selectedElement.blur();
    this.selectedElements?.push(this.selectedElement);

    if (this.selectedElements?.length === 2) {
      this.selectPredicted();
    }
  }

  findChildElemIndex(element: HTMLElement) {
    const parent = element.parentElement;
    if (!parent) {
      return null;
    }
    const childElements = parent.children;
    const childArray = Array.from(childElements);

    return childArray.indexOf(element);
  }


  onReset() {
    this.clearMarkedElements(this.selectedElements, 'green-outline');
    this.clearMarkedElements(this.predictedElements, 'blue-outline');

    this.selectedElement = null;
    this.selectionSaved = false;
    this.activeStep = 1;
  }

  clearMarkedElements(elements: HTMLElement[] | null, className: string) {
    if (elements) {
      for (let element of elements) {
        this.unMarkElement(element, className);
      }
      elements.length = 0;
    }
  }


  onSave() {
    this.activeStep += 1;
    this.isSelecting = false;
    this.selectionSaved = true;
  }

  selectPredicted() {
    if (this.selectedElements?.length !== 2) {
      return;
    }
    const [elemOne, elemTwo] = this.selectedElements;

    let predictedByTag = this.appContainer?.getElementsByTagName(elemTwo.tagName);
    let predictedByParent = [];

    if (predictedByTag) {
      for (let i = 0; i < predictedByTag.length; i++) {
        let elem = predictedByTag[i] as HTMLElement;
        if (elem.parentElement?.isSameNode(elemOne.parentElement) || elem.parentElement?.parentElement?.isSameNode(elemOne.parentElement?.parentElement!)) {
          predictedByParent.push(elem);
          if (!elem.isSameNode(elemOne) && !elem.isSameNode(elemTwo)) {
            this.markElement(elem, 'blue-outline')
          }
        }
      }
    }
    this.predictedElements = predictedByParent;

    this.predictedCount = predictedByParent?.length || 0;
  }

  runBot() {
    if (this.inputTextActionActive) {
      this.onInputTextAction();
    }
    if (this.buttonActionActive) {
      this.onButtonClickAction();
    }
  }

  onButtonClickAction() {
    this.predictedButtons?.forEach((elem) => {
      if (this.selectedElements) {
        elem.click();
      }
    })
  }

  onInputTextAction() {
    this.predictedInputs?.forEach((elem) => {
      if (elem instanceof HTMLInputElement) {
        elem.value = this.inputTextFormControl.value;
      }
    })
  }

  getChildrenAtIndex(parents: HTMLElement[], index: number): HTMLElement[] {
    const childrenAtIndex: HTMLElement[] = [];

    for (const parent of parents) {
      const children = parent.children;

      if (index >= 0 && index < children.length) {
        const childAtIndex: HTMLElement = children[index] as HTMLElement;
        if (childAtIndex.isSameNode(this.selectedButton) || childAtIndex.isSameNode(this.selectedInput)) {
          this.markElement(childAtIndex, 'green-outline')

        } else {
          this.markElement(childAtIndex, 'blue-outline')
        }
        childrenAtIndex.push(childAtIndex);
      }
    }

    return childrenAtIndex;
  }

  markElement(element: HTMLElement, colorClass: string) {
    element.classList.add(colorClass);
  }

  unMarkElement(element: HTMLElement, colorClass: string) {
    element.classList.remove(colorClass);
  }
}

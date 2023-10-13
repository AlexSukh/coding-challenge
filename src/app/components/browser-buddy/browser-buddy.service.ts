import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BrowserBuddyService {
  public activeStep: number = 1;
  public selectedElements: Array<HTMLElement> | null = [];
  public predictedCount: number = 0;

  public buttonActionActive: boolean = false;
  public inputTextActionActive: boolean = false;
  public inputTextFormControl: FormControl<string> = new FormControl();

  protected appContainer: HTMLElement | null = document.getElementById('app');

  private hoveredElement: HTMLElement | null = null;
  private selectedElement: HTMLElement | null = null;
  private predictedElements: Array<HTMLElement> | null = [];

  private selectedButton: HTMLElement | null = null;
  private selectedButtonChildIndex: number | null = null;
  private predictedButtons: Array<HTMLElement> | null = [];

  private selectedInput: HTMLElement | null = null;
  private selectedInputIndex: number | null = null;
  private predictedInputs: Array<HTMLElement> | null = [];


  public markHoveredElements(): void {
    this.appContainer?.addEventListener('mouseover', this.handleMouseOver);
    this.appContainer?.addEventListener('mouseout', this.handleMouseOut);
  }
  public handleElementSelection(): void {
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

  public onReset(): void {
    this.clearMarkedElements(this.selectedElements, 'green-outline');
    this.clearMarkedElements(this.predictedElements, 'blue-outline');

    this.selectedElement = null;
    this.activeStep = 1;
  }
  public onSave(): void {
    this.activeStep += 1;
  }
  public runBot(): void {
    if (this.inputTextActionActive) {
      this.onInputTextAction();
    }
    if (this.buttonActionActive) {
      this.onButtonClickAction();
    }
  }
  private handleMouseOver = (event: MouseEvent): void => {
    if (this.hoveredElement) {
      this.unMarkElement(this.hoveredElement, 'yellow-outline');
    }
    this.hoveredElement = event.target as HTMLElement;
    this.markElement(this.hoveredElement, 'yellow-outline');
  }

  private handleMouseOut = (): void => {
    if (this.hoveredElement) {
      this.unMarkElement(this.hoveredElement, 'yellow-outline');
    }
  }

  private setSelectedButton(target: HTMLElement): void {
    this.selectedButton = target;
    this.selectedButtonChildIndex = this.findChildElemIndex(target);
    this.predictedButtons = this.getChildrenAtIndex(this.predictedElements!, this.selectedButtonChildIndex!);
  }

  private setSelectedInput(target: HTMLElement): void {
    this.selectedInput = target;
    this.selectedInput.blur();
    this.selectedInputIndex = this.findChildElemIndex(target);
    this.predictedInputs = this.getChildrenAtIndex(this.predictedElements!, this.selectedInputIndex!);
  }

  private selectElement(target: HTMLElement): void {
    this.selectedElement = target;
    this.markElement(this.selectedElement, 'green-outline');
    this.selectedElement.blur();
    this.selectedElements?.push(this.selectedElement);

    if (this.selectedElements?.length === 2) {
      this.selectPredicted();
    }
  }

  private findChildElemIndex(element: HTMLElement): number | null {
    const parent = element.parentElement;
    if (!parent) {
      return null;
    }
    const childElements = parent.children;
    const childArray = Array.from(childElements);

    return childArray.indexOf(element);
  }



  private clearMarkedElements(elements: HTMLElement[] | null, className: string): void {
    if (elements) {
      for (let element of elements) {
        this.unMarkElement(element, className);
      }
      elements.length = 0;
    }
  }


  private selectPredicted(): void {
    if (this.selectedElements?.length !== 2) {
      return;
    }
    const [elemOne, elemTwo] = this.selectedElements;
    // heuristic: when tags don't match, selected elements are less likely to be part of a list
    if(elemOne.tagName !== elemTwo.tagName) {
      return;
    }
    // heuristic: check if selected elements have same parent or grandparent (for cases when elements are wrapped in container element)
    if(!elemOne.parentElement!.isSameNode(elemTwo.parentElement) &&
        !elemOne.parentElement!.parentElement!.isSameNode(elemTwo.parentElement!.parentElement)) {
      return;
    }

    // heuristic: choosing grandparent element as root element to constrain search space
    let rootElem = elemTwo.parentElement!.parentElement!;
    let predictedElements: HTMLElement[] = [];


    let predictedByTag: HTMLCollectionOf<Element> | undefined = rootElem.getElementsByTagName(elemTwo.tagName);

    if (predictedByTag) {
      for (let i = 0; i < predictedByTag.length; i++) {
        let elem: HTMLElement = predictedByTag[i] as HTMLElement;
        predictedElements.push(elem);
          // We keep selection color for already selected elements
          if (!elem.isSameNode(elemOne) && !elem.isSameNode(elemTwo)) {
            this.markElement(elem, 'blue-outline');
        }
      }
    }
    this.predictedElements = predictedElements;

    this.predictedCount = predictedElements?.length || 0;
  }



  private onButtonClickAction(): void {
    this.predictedButtons?.forEach((elem) => {
      if (this.selectedElements) {
        elem.click();
      }
    })
  }

  private onInputTextAction(): void {
    this.predictedInputs?.forEach((elem) => {
      if (elem instanceof HTMLInputElement) {
        elem.value = this.inputTextFormControl.value;
      }
    })
  }

  private getChildrenAtIndex(parents: HTMLElement[], index: number): HTMLElement[] {
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

  private markElement(element: HTMLElement, colorClass: string): void {
    element.classList.add(colorClass);
  }

  private unMarkElement(element: HTMLElement, colorClass: string): void {
    element.classList.remove(colorClass);
  }
}

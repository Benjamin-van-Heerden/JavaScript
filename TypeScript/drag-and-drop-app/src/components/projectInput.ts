import { Component } from "./baseComponent";
import { validate, Validatable } from "../util/validation";
import { Autobind } from "../decorators/autobind"
import { projectState } from "../state/projectState";

// Project Input Class

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInput: HTMLInputElement;
    descriptionInput: HTMLTextAreaElement;
    peopleInput: HTMLInputElement;

    constructor() {
        super("project-input", "app", true, "user-input");

        this.titleInput = this.element.querySelector("#title")! as HTMLInputElement;
        this.descriptionInput = this.element.querySelector("#description")! as HTMLTextAreaElement;
        this.peopleInput = this.element.querySelector("#people")! as HTMLInputElement;

        this.configure();
    }

    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInput.value;
        const enteredDescription = this.descriptionInput.value;
        const enteredPeople = this.peopleInput.value;

        const titleValidate: Validatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidate: Validatable = {
            value: enteredDescription,
            required: true,
        };
        const peopleValidate: Validatable = {
            value: +enteredPeople,
            required: true,
        };

        if (!validate(titleValidate) || !validate(descriptionValidate) || !validate(peopleValidate)) {
            alert("Invalid input, please try again!");
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInput(): void {
        this.titleInput.value = "";
        this.descriptionInput.value = "";
        this.peopleInput.value = "";
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInput();
        }
    }
}

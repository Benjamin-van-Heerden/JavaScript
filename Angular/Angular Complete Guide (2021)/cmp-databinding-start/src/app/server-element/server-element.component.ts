import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
} from "@angular/core";

@Component({
	selector: "app-server-element",
	templateUrl: "./server-element.component.html",
	styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
    OnDestroy
{
	@Input("srvElement") element: {
		type: string;
		name: string;
		content: string;
	};

	constructor() {
		console.log("constructor called");
	}

	ngOnInit(): void {
		console.log("ngOnInit called");
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log("ngOnChanges called");
		console.log(changes);
	}

	ngDoCheck() {
		console.log("ngDoCheck called");
	}

  ngOnDestroy(): void {

  }

	ngAfterContentInit() {
		console.log("ngAfterContentInit called");
	}

	ngAfterContentChecked() {
		console.log("ngAfterContentChecked called");
	}

	ngAfterViewInit() {
		console.log("ngAfterViewInit called");
	}

	ngOnDestroy(): void {
		console.log("ngOnDestroy called");
	}
}

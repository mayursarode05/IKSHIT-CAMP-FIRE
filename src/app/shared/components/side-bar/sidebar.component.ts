import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  fa = { faGripfire, faCommentDots }

  @ViewChild('toggleBtn') toggleBtn!: ElementRef;

  ngAfterViewInit() {
    this.toggleBtn.nativeElement.addEventListener("click", () => {
      document.querySelector("#sidebar")?.classList.toggle("expand");
    });
  }
}
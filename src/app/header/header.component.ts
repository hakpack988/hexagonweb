import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbDropdownModule, NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu]
})
export class HeaderComponent {
  isMenuCollapsed = true;

  constructor(private router: Router) { }
  BuyTokens() {
    this.router.navigate(['/buytokens']);
    }
  }


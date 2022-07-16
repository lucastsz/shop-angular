import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component(
  {
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(
    public carrinhoService: CarrinhoService,
    
    ) { }

  ngOnInit(): void {
    
  }
}

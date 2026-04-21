import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="addProduct()">Adicionar produto</button>

    <ul>
      <li *ngFor="let p of products()">
        {{ p }}
      </li>
    </ul>

    <p>Total: {{ total() }}</p>
  `,
})
export class ProductsComponent implements OnInit {
  products = signal<string[]>([]);

  total = computed(() => this.products().length);

  ngOnInit(): void {
    console.log('ProductsComponent initialized');
    this.products.update((product) => {
      console.log(product);
      return [...product, `Produto ${product.length + 1}`];
    });
  }

  addProduct() {
    this.products.update((product) => {
      console.log(product);
      return [...product, `Produto ${product.length + 1}`];
    });
  }
}

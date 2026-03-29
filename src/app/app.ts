import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { Home } from "./features/home/home";
import { Experience } from "./features/experience/experience";
import { Projects } from "./features/projects/projects";
import { Skill } from "./features/skill/skill";
import { Contact } from "./features/contact/contact";
import { About } from "./features/about/about";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Experience, Projects, Skill, Contact, About, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}

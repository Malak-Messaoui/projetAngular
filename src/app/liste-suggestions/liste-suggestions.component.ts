import { Component } from '@angular/core';
import { Suggestion } from '../model/suggestion';

@Component({
  selector: 'app-liste-suggestions',
  templateUrl: './liste-suggestions.component.html',
  styleUrls: ['./liste-suggestions.component.css']
})
export class ListeSuggestionsComponent {

  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 0,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 0,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 0,
      isFavorite: false
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      likes: 0,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      likes: 0,
      isFavorite: false
    }
  ];

  like(s: Suggestion) {
    s.likes++;
  }

  toggleFavorite(s: Suggestion) {
    s.isFavorite = !s.isFavorite;

    if (s.isFavorite) {
      this.favorites.push(s);
    } else {
      this.favorites = this.favorites.filter(f => f.id !== s.id);
    }
  }

  removeFromFavorites(s: Suggestion) {
    s.isFavorite = false;
    this.favorites = this.favorites.filter(f => f.id !== s.id);
  }

  search:string="";
}

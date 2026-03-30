import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeTab = 'about-melbourne';

  tabs = [
    { id: 'about-melbourne', label: 'About Melbourne' },
    { id: 'nearby-places', label: 'Nearby Places to Visit' },
    { id: 'best-restaurants', label: 'Best Restaurants' },
    { id: 'images', label: 'Images' },
    { id: 'about', label: 'About' }
  ];

  nearbyPlaces = [
    {
      icon: '🏔️',
      name: 'Dandenong Ranges',
      distance: '40 km from CBD',
      description: 'Lush mountain ash forests, fern gullies, and the famous Puffing Billy steam train. A perfect day trip from the city.'
    },
    {
      icon: '🌊',
      name: 'Great Ocean Road',
      distance: '90 km from CBD',
      description: 'One of the world\'s most scenic coastal drives, featuring the iconic Twelve Apostles limestone stacks.'
    },
    {
      icon: '🍷',
      name: 'Yarra Valley',
      distance: '50 km from CBD',
      description: 'World-class wineries, berry farms, and beautiful countryside. Try the local pinot noir and fresh produce.'
    },
    {
      icon: '🐧',
      name: 'Phillip Island',
      distance: '140 km from CBD',
      description: 'Home to the famous Penguin Parade where hundreds of little penguins return to shore at dusk every evening.'
    },
    {
      icon: '🏖️',
      name: 'Mornington Peninsula',
      distance: '80 km from CBD',
      description: 'Stunning ocean beaches, hot springs, wineries, and charming bayside towns. A local favourite year-round.'
    },
    {
      icon: '🌿',
      name: 'Healesville Sanctuary',
      distance: '65 km from CBD',
      description: 'Get up close with Australian wildlife including kangaroos, koalas, wombats, and the iconic platypus.'
    }
  ];

  restaurants = [
    {
      icon: '🍛',
      name: 'Bharat Emporium & Café',
      suburb: 'Dandenong',
      cuisine: 'North Indian',
      description: 'Authentic North Indian flavours — butter chicken, dal makhani, and freshly baked naan that reminds you of home.',
      bestItem: 'Dal Makhani & Garlic Naan'
    },
    {
      icon: '🥘',
      name: 'Tiffin\'s',
      suburb: 'CBD',
      cuisine: 'South Indian',
      description: 'Classic South Indian tiffin meals — idli, vada, sambar, and chutneys served the traditional way.',
      bestItem: 'Masala Dosa'
    },
    {
      icon: '🫕',
      name: 'Aangan',
      suburb: 'Glen Waverley',
      cuisine: 'Indian',
      description: 'A family favourite for special occasions. Excellent biryani, kebabs, and an extensive vegetarian menu.',
      bestItem: 'Dum Biryani'
    },
    {
      icon: '🍜',
      name: 'Chin Chin',
      suburb: 'Flinders Lane',
      cuisine: 'Thai',
      description: 'Melbourne\'s iconic Thai-inspired restaurant. Bold, vibrant flavours with an incredible cocktail menu.',
      bestItem: 'Crying Tiger Beef'
    },
    {
      icon: '🥩',
      name: 'Cumulus Inc.',
      suburb: 'Flinders Lane',
      cuisine: 'Modern Australian',
      description: 'Relaxed all-day dining showcasing the best of Victorian produce. Legendary charcuterie and natural wines.',
      bestItem: 'Roasted Whole Chicken'
    },
    {
      icon: '🍕',
      name: 'Ladro',
      suburb: 'Fitzroy',
      cuisine: 'Italian',
      description: 'Rustic wood-fired Neapolitan pizzas in a cosy Fitzroy setting. Perfect for a casual dinner out.',
      bestItem: 'Margherita Pizza'
    },
    {
      icon: '🍣',
      name: 'Kisumé',
      suburb: 'Flinders Lane',
      cuisine: 'Japanese',
      description: 'A stunning multi-level Japanese dining experience. Impeccable sushi, sashimi, and a mesmerising omakase counter.',
      bestItem: 'Omakase Tasting Menu'
    },
    {
      icon: '🥙',
      name: 'Shawarma Republic',
      suburb: 'Melbourne CBD',
      cuisine: 'Lebanese',
      description: 'Generous, flavour-packed shawarmas and mezze platters. Some of the best Middle Eastern street food in the city.',
      bestItem: 'Chicken Shawarma Wrap'
    },
    {
      icon: '🥢',
      name: 'Hutong Dumpling Bar',
      suburb: 'Melbourne CBD',
      cuisine: 'Chinese',
      description: 'Famous for their handcrafted xiao long bao and an extensive menu of classic Shanghainese and Sichuan dishes.',
      bestItem: 'Xiao Long Bao (Soup Dumplings)'
    },
    {
      icon: '🌮',
      name: 'Mamasita',
      suburb: 'Collins Street',
      cuisine: 'Mexican',
      description: 'Vibrant, modern Mexican food in a buzzing Collins Street setting. Exceptional tacos and the best margaritas in town.',
      bestItem: 'Carne Asada Tacos'
    },
    {
      icon: '🫔',
      name: 'Tipo 00',
      suburb: 'Little Bourke Street',
      cuisine: 'Italian',
      description: 'A neighbourhood pasta bar celebrating handmade pasta. Simple, seasonal, and absolutely delicious.',
      bestItem: 'Cacio e Pepe'
    },
    {
      icon: '🍔',
      name: 'Rockwell & Sons',
      suburb: 'Collingwood',
      cuisine: 'American',
      description: 'A legendary Collingwood diner serving bold, no-fuss American comfort food. Legendary burgers and loaded sides.',
      bestItem: 'Double Smash Burger'
    }
  ];

  images = [
    {
      alt: 'Flinders Street Station',
      caption: 'Flinders Street Station — the heart of Melbourne',
      placeholder: '🏛️'
    },
    {
      alt: 'Melbourne Laneways',
      caption: 'Hosier Lane street art',
      placeholder: '🎨'
    },
    {
      alt: 'Yarra River',
      caption: 'Yarra River at golden hour',
      placeholder: '🌅'
    },
    {
      alt: 'Queen Victoria Market',
      caption: 'Queen Victoria Market on a Sunday morning',
      placeholder: '🛒'
    },
    {
      alt: 'Royal Botanic Gardens',
      caption: 'Royal Botanic Gardens in autumn',
      placeholder: '🌳'
    },
    {
      alt: 'Coffee culture',
      caption: 'Melbourne\'s famous café culture',
      placeholder: '☕'
    }
  ];

  uploadedImages: { url: string; caption: string }[] = [];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    Array.from(input.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImages.push({
          url: e.target?.result as string,
          caption: file.name
        });
      };
      reader.readAsDataURL(file);
    });
    input.value = '';
  }

  removeUploadedImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }
}

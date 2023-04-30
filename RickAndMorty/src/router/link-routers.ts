export interface RouterLink  {
    name: string;
    title: string;
    path: string;
}

export const routeLinks = [
    { path: '/', name: 'home', title: 'Inicio'},
    { path: '/about', name: 'about', title: 'Sobre'},
    { path: '/characters', name: 'characters', title: 'Personajes'},
];
document.addEventListener('DOMContentLoaded', function() {
    const innovations = [
        { title: 'Github Page', description: 'A breakthrough in neural networks.' },
        // { title: 'Project Beta', description: 'Revolutionizing AI with quantum computing.' },
        // { title: 'Project Gamma', description: 'AI-driven solutions for climate change.' }
    ];

    const container = document.getElementById('innovations');
    innovations.forEach(innovation => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h3>${innovation.title}</h3><p>${innovation.description}</p>`;
        container.appendChild(card);
    });
});

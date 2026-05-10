// Global variables
let allPublications = [];
let showingSelected = true;

const LINK_LABELS = {
  pdf: 'PDF',
  arxiv: 'arXiv',
  code: 'Code',
  project: 'Project Page',
  poster: 'Poster',
  slides: 'Slides',
  video: 'Video',
  bibtex: 'BibTeX'
};

const HIGHLIGHT_AUTHOR = 'Yallup';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadPublications();

  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
  });

  const toggleButton = document.getElementById('toggle-publications');
  if (toggleButton) {
    toggleButton.addEventListener('click', togglePublications);
  }
});

// Load publications from JSON file
function loadPublications() {
  fetch('publications.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      allPublications = data.publications;
      renderPublications(true);
    })
    .catch(error => {
      console.error('Error loading publications:', error);
      const container = document.getElementById('publications-container');
      container.innerHTML = `Error loading publications.`;
    });
}

// Toggle between showing all or selected publications
function togglePublications() {
  showingSelected = !showingSelected;
  renderPublications(showingSelected);

  const toggleButton = document.getElementById('toggle-publications');
  toggleButton.textContent = showingSelected ? 'Extend' : 'Collapse';
  const toggleHeader = document.getElementById('toggle-header');
  toggleHeader.textContent = showingSelected ? 'Recent Publications' : 'Highlights';
}

// Render publications based on selection state
function renderPublications(selectedOnly) {
  const publicationsContainer = document.getElementById('publications-container');
  publicationsContainer.innerHTML = '';

  const pubsToShow = selectedOnly ?
    allPublications.filter(pub => pub.selected === 1) :
    allPublications;

  pubsToShow.forEach(publication => {
    const pubElement = createPublicationElement(publication);
    publicationsContainer.appendChild(pubElement);
  });

  const note = document.getElementById('pub-note');
  if (note) note.style.display = selectedOnly ? 'none' : 'block';
}

// Create HTML element for a publication
function createPublicationElement(publication) {
  const pubItem = document.createElement('div');
  pubItem.className = 'publication-item';

  if (publication.thumbnail) {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'pub-thumbnail';
    thumbnail.onclick = () => openModal(publication.thumbnail);

    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = publication.thumbnail;
    thumbnailImg.alt = `${publication.title} thumbnail`;
    thumbnail.appendChild(thumbnailImg);
    pubItem.appendChild(thumbnail);
  }

  const content = document.createElement('div');
  content.className = 'pub-content';

  const title = document.createElement('div');
  title.className = 'pub-title';
  title.textContent = publication.title;
  content.appendChild(title);

  const authors = document.createElement('div');
  authors.className = 'pub-authors';
  authors.innerHTML = publication.authors.map(author =>
    author.includes(HIGHLIGHT_AUTHOR)
      ? `<span class="highlight-name">${author}</span>`
      : author
  ).join(', ');
  content.appendChild(authors);

  const venueContainer = document.createElement('div');
  venueContainer.className = 'pub-venue-container';

  const venue = document.createElement('div');
  venue.className = 'pub-venue';
  venue.textContent = publication.venue;
  venueContainer.appendChild(venue);

  if (publication.award && publication.award.length > 0) {
    const award = document.createElement('div');
    award.className = 'pub-award';
    award.textContent = publication.award;
    venueContainer.appendChild(award);
  }

  content.appendChild(venueContainer);

  if (publication.links) {
    const links = document.createElement('div');
    links.className = 'pub-links';

    Object.entries(publication.links).forEach(([key, href]) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = `[${LINK_LABELS[key] || key}]`;
      links.appendChild(a);
    });

    content.appendChild(links);
  }

  pubItem.appendChild(content);
  return pubItem;
}

// Modal functionality for viewing original images
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  setTimeout(() => modal.classList.add('show'), 10);
  modalImg.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = "none", 300);
}

window.onclick = function(event) {
  const modal = document.getElementById('imageModal');
  if (event.target == modal) {
    closeModal();
  }
};

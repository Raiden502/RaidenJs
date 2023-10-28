export default function Footer() {
    const footerElement = document.createElement('div');
    footerElement.className = 'footer';
    footerElement.innerHTML = '<h2>Foter</h2><p>This is the Footer content.</p>';
    return footerElement
}

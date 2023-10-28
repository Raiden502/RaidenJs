export default function Header() {
    const headerElement = document.createElement('div');
    headerElement.className = 'header';
    headerElement.innerHTML = '<h2>Header</h2><p>This is the Header content.</p>';
    return headerElement
}


import Footer from "../sections/dashboard/footer.js";
import Header from "../sections/dashboard/header.js";
import Cards from "../sections/dashboard/cards.js";

export default function Dashboard(){
    const dashboardElement = document.createElement('div');
    dashboardElement.className='Dashboard'
    dashboardElement.appendChild(Header())
    dashboardElement.appendChild(Cards())
    dashboardElement.appendChild(Footer())
    return dashboardElement
}

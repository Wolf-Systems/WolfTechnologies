import { Card } from "../../components/card/card";
import { servicesData } from "../../data/servicios";
import './servicios.css';

const cardServicios = document.getElementById('card-services');


const rowCards = () => {
    let services = '';

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper-cards');

    servicesData.forEach(
        service => services += Card(service.title, service.description)
    );

    wrapper.innerHTML = services;

    cardServicios.appendChild(wrapper);
}

rowCards();
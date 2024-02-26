export default function scrollToSection(section_id) {
    document.getElementById(section_id).scrollIntoView({ behavior: 'smooth' });
}


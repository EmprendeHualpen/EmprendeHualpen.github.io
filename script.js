// script.js
document.getElementById('fundRecommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value;
    const businessPhase = document.getElementById('businessPhase').value;
    const businessType = document.getElementById('businessType').value;
    const vulnerability = document.getElementById('vulnerability').value;

    let recommendation = '';

    if (vulnerability === 'yes') {
        if (businessPhase === 'idea') {
            recommendation = 'Te recomendamos postular al Programa Yo Emprendo Semilla de FOSIS, que apoya a personas en situación de vulnerabilidad para que puedan iniciar un negocio.';
        } else if (businessPhase === 'initial') {
            recommendation = 'Te recomendamos postular al Programa Yo Emprendo Semilla de FOSIS, o al Programa Yo Emprendo Básico de FOSIS si ya tienes un negocio en funcionamiento.';
        } else if (businessPhase === 'growth') {
            recommendation = 'Te recomendamos postular al Programa Yo Emprendo Avanzado de FOSIS, que apoya a microemprendedores en situación de vulnerabilidad para mejorar y crecer sus negocios.';
        }
    } else {
        if (businessPhase === 'idea') {
            recommendation = 'Te recomendamos postular al Capital Semilla Emprende de SERCOTEC o al Capital Semilla Inicia de CORFO, ambos fondos están diseñados para apoyar proyectos innovadores en sus etapas iniciales.';
        } else if (businessPhase === 'initial') {
            if (gender === 'female') {
                recommendation = 'Te recomendamos postular al Capital Abeja Emprende de SERCOTEC, que está enfocado en apoyar a mujeres emprendedoras.';
            } else {
                recommendation = 'Te recomendamos postular al Capital Semilla Emprende de SERCOTEC, que apoya a emprendedores con una idea de negocio o empresas en fase inicial.';
            }
        } else if (businessPhase === 'growth') {
            if (age < 3) {
                recommendation = 'Te recomendamos postular a Semilla Expande de CORFO, que apoya a startups en proceso de expansión y crecimiento.';
            } else {
                recommendation = 'Te recomendamos postular a Crece de SERCOTEC, que apoya a pequeñas empresas en el crecimiento, consolidación y acceso a nuevos mercados.';
            }
        }
    }

    // Detalle adicional basado en el tipo de negocio
    if (businessType === 'technology') {
        recommendation += ' Dado que tu negocio es de tecnología, considera también explorar fondos y programas específicos para startups tecnológicas, como Start-Up Chile de CORFO.';
    } else if (businessType === 'commerce') {
        recommendation += ' Dado que tu negocio es de comercio, podrías beneficiarte de programas como Digitaliza tu Almacén de SERCOTEC.';
    }

    // Mostrar la recomendación en el HTML
    document.getElementById('recommendationResult').innerText = `${name}, basado en la información proporcionada, ${recommendation}`;
});

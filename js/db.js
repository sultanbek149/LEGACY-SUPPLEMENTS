const langEl = document.querySelector('.langWrap');
const links = document.querySelectorAll('.langWrap a');


const navLinks = document.querySelectorAll('.navbar-nav a')
const slogan = document.querySelector('h6.slogan')
const title = document.querySelector('h1')
const learn = document.querySelector('#learn')
const featureh2 = document.querySelector('#feature h2')
const featureh6 = document.querySelector('#feature h6')
const becomePartner = document.querySelector('.becomePartner')
const workingHours = document.querySelector('.about-working-hours h2')
const workingDays = document.querySelectorAll('.about-working-hours strong')
const aboutSection = document.querySelector('.about')
const brandsSection = document.querySelector('.brands')
const modalDialog = document.querySelector('.modal-dialog')
const contact = document.querySelector('.contact')

links.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        const lang = data[attr]

        navLinks.forEach((el, i) => el.textContent = lang.navLinks[i])
        slogan.textContent = lang.slogan
        title.textContent = lang.title
        learn.textContent = lang.learn
        featureh2.textContent = lang.featureh2
        featureh6.textContent = lang.featureh6
        becomePartner.textContent = lang.becomePartner

        workingHours.textContent = lang.workingHours
        workingDays.forEach((el, i) => el.textContent = lang.workingDays[i])

        aboutSection.querySelector('h2').textContent = lang.aboutSection.h2
        aboutSection.querySelector('.p1').textContent = lang.aboutSection.p1
        aboutSection.querySelector('.p2').textContent = lang.aboutSection.p2
        brandsSection.querySelector('h2').textContent = lang.brandsSection.h2
        brandsSection.querySelectorAll('.txt').forEach((el, i) => el.innerHTML = lang.brandsSection.teamtexts[i])
        modalDialog.querySelector('h2').textContent = lang.modal.h2
        modalDialog.querySelector('textarea').placeholder = lang.modal.message
        modalDialog.querySelector('button[type="submit"]').textContent = lang.modal.button
        modalDialog.querySelector('label').innerHTML = lang.modal.label
        contact.querySelector('.title').textContent = lang.contact.title
        contact.querySelector('#contact-name').placeholder = lang.contact.name
        contact.querySelector('#contact-email').placeholder = lang.contact.email
        contact.querySelector('#contact-message').placeholder = lang.contact.message
        contact.querySelector('#submit-button').textContent = lang.contact.button
        contact.querySelector('.where').innerHTML = lang.contact.where
    });
});

const data = {
    "english":
    {
        navLinks: [
            'home',
            'about us',
            'brands',
            'contact us'
        ],
        slogan: 'The new way to build a healthy lifestyle!',
        title: 'Legacy Supplements Boosting Our Partners, Delivery by Delivery – Your Triumph, Our Goal',
        learn: 'learn more',
        featureh2: 'New to the LEGACY?',
        featureh6: 'LEGACY SUPPLEMENTS, a distributor in the fitness industry. Join us in empowering health and wellness journeys.',
        becomePartner: 'Become a partner today',
        workingHours: 'Working hours',
        workingDays: [
            'Sunday : Closed',
            'Monday - Friday',
            'Saturday'
        ],
        aboutSection: {
            h2: "ABOUT US",
            p1: "Welcome to Legacy Supplements, your ultimate source for premium nutritional products from top brands.With over seven years of wholesale distribution experience across South and Central America, Legacy Supplements has become a trusted partner in the fitness industry.",
            p2: "Offering competitive wholesale prices, we empower businesses to thrive in the sports supplements market.Explore our diverse range of brands today and discover the Legacy Supplements advantage."
        },
        brandsSection: {
            h2: 'BRANDS',
            teamtexts: [
                "<strong>MuscleTech®</strong> is a leading brand in the sports nutrition industry, recognized for its relentless pursuit of scientific innovation and excellence.With a strong commitment to research and development, MuscleTech continually pushes the boundaries of human potential by introducing cutting - edge products backed by high - quality ingredients.As America's #1 selling sports supplement company, MuscleTech has gained global recognition and distribution in over 140 countries.Renowned for redefining performance, MuscleTech's extensive product line caters to athletes and fitness enthusiasts of all levels, offering solutions for muscle building, performance enhancement, weight management, and overall health and wellness.<br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>learn more</a>",
                "<strong>Nutrex Research</strong>, a fitness and nutrition leader for over two decades, introduced the FIRST clinically - dosed pre - workout formula, OUTLIFT, revolutionizing the industry.LIPO - 6 fat burners, utilizing liquid - cap technology, set new standards.Continuing to innovate, Nutrex evolves to meet customer needs, offering cutting - edge products from fat burners to pre - workouts and protein.With a focus on science, Nutrex supports athletes of all backgrounds to achieve greatness, whether they're weathered Spartans or modern fitness enthusiasts, helping them become UNSTOPPABLE.<br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>learn more</a>",
                "<strong>JNX Sports</strong> is a prominent name in the sports supplement industry, renowned for its dedication to providing high - quality products tailored to the needs of gamers and athletes alike.With a focus on innovation, JNX Sports offers a diverse range of supplements designed to enhance focus, energy, and overall performance.Their products are formulated using cutting - edge ingredients to support mental clarity, endurance, and recovery, catering to the unique demands of competitive gaming and intense physical activity.Backed by a commitment to excellence and customer satisfaction, JNX Sports continues to solidify its position as a trusted brand in the realm of sports nutrition. <br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>learn more</a>",
                " <strong>Insane Labz</strong> is a dynamic company at the forefront of the sports nutrition industry, known for its innovative and powerful supplements.With a commitment to pushing boundaries, Insane Labz offers a wide range of products designed to optimize performance and support fitness goals.From pre- workouts to fat burners, their formulations are engineered to deliver results.With a focus on quality and effectiveness, Insane Labz has garnered a strong following among athletes and fitness enthusiasts alike, establishing itself as a leading brand in the competitive world of sports nutrition. <br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>learn more</a>"
            ],
        },
        modal: {
            h2: "JOIN US TODAY!",
            message: "Additional Message",
            button: "Send Message",
            label: `I agree to the <a href="#">Terms &amp;Conditions</a>`
        },
        contact: {
            title: "Feel free to ask anything",
            name: "Name",
            email: "Email",
            message: "Message",
            button: "Send Message",
            where: "Where you can <span>find us</span>"
        }
    },
    "spanish": {
        navLinks: [
            'inicio',
            'quienes somos',
            'marcas',
            'contáctenos'
        ],
        slogan: '¡La nueva forma de construir un estilo de vida saludable!',
        title: 'Eleva tu negocio con Legacy Supplements: Calidad que inspira, éxito asegurado.',
        learn: 'aprender más',
        featureh2: '¿Nuevo en LEGACY?',
        featureh6: '¡Únete a la familia Legacy Supplements y forma parte de nuestro éxito! Como distribuidor en la vanguardia del fitness, te ofrecemos la oportunidad de crecer junto a nosotros. Descubre cómo podemos impulsar juntos tus metas comerciales y alcanzar nuevos niveles de prosperidad en el mercado de bienestar.',
        becomePartner: 'CONVIERTETE EN MAYORISTA',
        workingHours: 'Horario laboral',
        workingDays: [
            'Domingo: Cerrado',
            'Lunes - Viernes',
            'Sábado'
        ],
        aboutSection: {
            h2: "¿QUIENES SOMOS?",
            p1: "¡Bienvenido a Legacy Supplements, tu fuente confiable de productos nutricionales premium de las marcas más destacadas! Con más de siete años de experiencia en la distribución mayorista en América del Sur y Central, nos hemos establecido como un socio confiable en la industria del fitness.",
            p2: "Ofrecemos precios competitivos al por mayor y capacitamos a las empresas para triunfar en el mercado de los suplementos deportivos. ¡Explora nuestra amplia selección de marcas hoy mismo y descubre la ventaja de asociarte con Legacy Supplements!"
        },
        brandsSection: {
            h2: "MARCAS",
            teamtexts: [
                "<strong>MuscleTech®</strong> es una marca líder en la industria de la nutrición deportiva, reconocida por su incansable búsqueda de innovación científica y excelencia. Con un fuerte compromiso con la investigación y el desarrollo, MuscleTech continúa empujando los límites del potencial humano al presentar productos de vanguardia respaldados por ingredientes de alta calidad. Como la compañía de suplementos deportivos más vendida de Estados Unidos, MuscleTech ha obtenido reconocimiento global y distribución en más de 140 países. Renombrada por redefinir el rendimiento, la extensa línea de productos de MuscleTech atiende a atletas y entusiastas del fitness de todos los niveles, ofreciendo soluciones para construcción muscular, mejora del rendimiento, control de peso y salud y bienestar en general.<br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>más información</a>",
                "<strong>Nutrex Research</strong>, líder en fitness y nutrición durante más de dos décadas, presentó la PRIMERA fórmula pre-entrenamiento clínicamente dosificada, OUTLIFT, revolucionando la industria. Los quemadores de grasa LIPO-6, que utilizan tecnología de cápsula líquida, establecieron nuevos estándares. Continuando con la innovación, Nutrex evoluciona para satisfacer las necesidades de los clientes, ofreciendo productos de vanguardia desde quemadores de grasa hasta pre-entrenamientos y proteínas. Con un enfoque en la ciencia, Nutrex apoya a atletas de todos los ámbitos para lograr la grandeza, ya sean espartanos curtidos o entusiastas modernos del fitness, ayudándolos a convertirse en INDETENIBLES.<br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>más información</a>",
                "<strong>JNX Sports</strong> es un nombre prominente en la industria de los suplementos deportivos, reconocido por su dedicación a proporcionar productos de alta calidad adaptados a las necesidades de jugadores y atletas por igual. Con un enfoque en la innovación, JNX Sports ofrece una amplia gama de suplementos diseñados para mejorar el enfoque, la energía y el rendimiento general. Sus productos están formulados utilizando ingredientes de vanguardia para respaldar la claridad mental, la resistencia y la recuperación, atendiendo a las demandas únicas de los juegos competitivos y la intensa actividad física. Respaldado por un compromiso con la excelencia y la satisfacción del cliente, JNX Sports continúa solidificando su posición como una marca confiable en el ámbito de la nutrición deportiva.<br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>más información</a>",
                "<strong>Insane Labz</strong> es una empresa dinámica en la vanguardia de la industria de la nutrición deportiva, conocida por sus suplementos innovadores y potentes. Con un compromiso de empujar los límites, Insane Labz ofrece una amplia gama de productos diseñados para optimizar el rendimiento y apoyar los objetivos de fitness. Desde pre-entrenamientos hasta quemadores de grasa, sus formulaciones están diseñadas para ofrecer resultados. Con un enfoque en calidad y efectividad, Insane Labz ha obtenido una sólida base de seguidores entre atletas y entusiastas del fitness por igual, estableciéndose como una marca líder en el competitivo mundo de la nutrición deportiva.<br><a href='#contact' class='btn custom-btn bordered mt-3 aos-init aos-animate' data-aos='fade-up' data-aos-anchor-placement='bottom'>más información</a>"
            ],
        },
        modal: {
            h2: "¡ÚNETE HOY!",
            message: "Mensaje adicional",
            button: "Enviar mensaje",
            label: `Acepto los <a href="#">Términos y Condiciones</a>`
        },
        contact: {
            title: "Centro de Ayuda, Déjanos un mensaje",
            name: "Nombre",
            email: "Correo electrónico",
            message: "Mensaje",
            button: "Enviar mensaje",
            where: "Donde puedes <span>encontrarnos</span>"
        }
    }
}
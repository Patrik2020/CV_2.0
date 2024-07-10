document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('header h1').textContent = data.name;
            document.querySelector('header p').textContent = data.profession;
            document.querySelector('#about p').textContent = data.about;

            const experienceSection = document.querySelector('#experience ul');
            experienceSection.innerHTML = '';
            data.experience.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${item.company}</h3>
                    <p>Beosztás: ${item.position}</p>
                    <p>Időszak: ${item.period}</p>
                    <p>Feladatok: ${item.tasks}</p>
                `;
                experienceSection.appendChild(li);
            });

            const educationSection = document.querySelector('#education ul');
            educationSection.innerHTML = '';
            data.education.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${item.institution}</h3>
                    <p>Szakterület: ${item.field}</p>
                    <p>Időszak: ${item.period}</p>
                `;
                educationSection.appendChild(li);
            });

            const skillsSection = document.querySelector('#skills ul');
            skillsSection.innerHTML = '';
            data.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsSection.appendChild(li);
            });

            document.querySelector('footer p a').textContent = data.contact;
            document.querySelector('footer p a').href = `mailto:${data.contact}`;
        });

    document.getElementById('downloadCV').addEventListener('click', function() {
        window.location.href = 'documents/kovacs_patrik_cv.pdf';
    });

    document.getElementById('downloadMotivation').addEventListener('click', function() {
        window.location.href = 'documents/motivation_letter.pdf';
    });
});

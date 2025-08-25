// web/static/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FIX: Check if homepage panels exist before animating ---
    // This prevents errors on other pages like 'experience.html'
    const homepagePanels = document.querySelectorAll('.hidden');
    if (homepagePanels.length > 0) {
        // Animate in the panels on the homepage
        anime({
            targets: '.hidden',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(200, {start: 500}), 
            duration: 800,
            easing: 'easeOutExpo',
            complete: (anim) => {
                anim.animatables.forEach((a) => {
                    a.target.classList.remove('hidden');
                });
            }
        });
    }

    // Calculate and display duration for each experience item
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        const startDateStr = item.dataset.startDate;
        const endDateStr = item.dataset.endDate;

        if (!startDateStr || !endDateStr) {
            return;
        }
        
        // --- ROBUST DATE PARSING ---
        // Manually parse "YYYY-MM-DD" to avoid browser inconsistencies.
        const startParts = startDateStr.split('-').map(Number);
        const endParts = endDateStr.split('-').map(Number);
        // Note: The month is 0-indexed in JavaScript's Date constructor (0=Jan, 11=Dec)
        const startDate = new Date(startParts[0], startParts[1] - 1, startParts[2]);
        const endDate = (endDateStr.toLowerCase() === 'present') 
            ? new Date() 
            : new Date(endParts[0], endParts[1] - 1, endParts[2]);

        // Calculate the difference in months
        let monthDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        monthDiff -= startDate.getMonth();
        monthDiff += endDate.getMonth();
        // Add 1 to make the duration inclusive (e.g., Sept to Feb is 6 months)
        const totalMonths = monthDiff + 1;

        // Convert total months to years and months
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        // Build the duration string (e.g., "1 yr 6 mos")
        let durationText = '';
        if (years > 0) {
            durationText += `${years} yr${years > 1 ? 's' : ''} `;
        }
        if (months > 0) {
            // Use "Months" for clarity
            durationText += `${months} Month${months > 1 ? 's' : ''}`;
        }

        // Find the .duration span and set its text content
        const durationElement = item.querySelector('.duration');
        if (durationElement) {
            durationElement.textContent = `(${durationText.trim()})`;
        }
    });
});

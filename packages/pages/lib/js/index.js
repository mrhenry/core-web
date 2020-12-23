
let init = function() {
    const milestones = document.querySelectorAll('[milestone-observer]');

    if (!milestones || milestones.length < 1) {
        return;
    }

    init = () => {}; // noop

    var intersectionObserver = new IntersectionObserver((entries) => {
        if (!entries || entries.length < 1) {
            return;
        }

        entries.forEach(entry => {
            if (
                entry.isIntersecting &&
                entry.target &&
                !entry.target.hasAttribute('milestone-visible')
            ) {
                entry.target.setAttribute('milestone-visible', 'true');
            }
        });
    });

    milestones.forEach((el) => {
        intersectionObserver.observe(el);
    });
};

requestAnimationFrame(init);
document.addEventListener("DOMContentLoaded", init);

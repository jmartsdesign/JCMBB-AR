/* Código JavaScript para controlar o audio dos paineis*/

document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('[mindar-image-target]');

    targets.forEach((target, index) => {
        const sound = document.querySelector(`#SoundP${index + 1}`);

        target.addEventListener('targetFound', () => {
            if (sound) {
                sound.volume = 1;
                sound.play();
            }
        });

        target.addEventListener('targetLost', () => {
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
            }
        });
    });
});
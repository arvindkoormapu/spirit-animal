import React from 'react';
import swirlBg from '../assets/backgrounds/swirl-bg.png';
import greenLeft from '../assets/backgrounds/green5.png';
import logoRight from '../assets/backgrounds/logo-right.png';

export default function FinalReveal({ animal, userName }) {
  if (!animal) return null;

  return (
    <div
      className="min-h-screen w-full h-dvh overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${swirlBg})` }}
    >
      <img
        src={greenLeft}
        alt="decorative plant left"
        className="absolute bottom-[0px] left-[20px] w-[200px] z-10"
      />
      <img
        src={logoRight}
        alt="logo top right"
        className="absolute top-[0px] right-[20px] w-[300px] z-10"
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="bg-white/100 flex flex-col items-center justify-start px-10 py-12 mx-auto w-[90%] max-w-[1200px] rounded-[20px] max-h-[90vh] overflow-y-auto relative">
          <div className="w-full">
            {/* Animal Image Centered */}
            <div className="w-full flex justify-center mb-6">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-[300px] mx-auto"
              />
            </div>

            <div className="w-full px-2 md:px-4">
              <p className="font-avenir text-[22px] font-bold text-secondary">
                Spirit Animal: <span className="italic font-normal">{capitalize(animal.name)}</span>{' '}
                <span>({animal.traits.join(', ')})</span>
              </p>

              <p className="font-avenir text-[22px] font-bold mt-4 text-secondary">
                Adaptation: <span className="italic font-normal">Arabic</span>
              </p>

              <p className="mt-4 font-avenir text-[22px] text-secondary">Your story:</p>

              <h2 className="font-flapstick italic text-[30px] text-primary mb-6 text-center">
                Sara and the Mountain of Mirrors
              </h2>

              <p className="font-avenir text-[22px] text-secondary mb-4">
                In a warm land of golden sands and tall palm trees, a girl named Sara stood with her friend the Hare at the bottom of Jabal al-Hikmah—the Mountain of Wisdom. "Let’s race to the top!" shouted Hare, and off they went, laughing and running. But the mountain was steep, and the sun was hot. Soon, Hare darted ahead, playful and impulsive, jumping from rock to rock. Sara followed carefully, climbing step by step. Halfway up, Hare grew tired and stopped, panting heavily beneath the scorching sun. Sara caught up, gently offered Hare water, and said softly, "We must pace ourselves and respect the mountain’s path." Hare nodded, realizing his haste had cost him dearly. Together, they continued upward steadily, sharing strength and laughter. At the summit, the view filled them with wonder. Hare smiled at Sara, whispering wisely, "Slow and steady does indeed win the race."
              </p>

              <p className="font-avenir font-extrabold italic text-[22px] text-secondary">
                Moral: Quick feet are good—but wise minds go farther.
              </p>
            </div>
          </div>

          {/* Sticky Buttons */}
          <div className="sticky bottom-[-50px] left-0 right-0 bg-white/100 w-full mt-10 pt-6 pb-4 px-4 flex flex-col md:flex-row justify-center gap-6">
            <button className="font-avenir bg-primary hover:bg-secondary transition text-white font-bold text-[18px] px-10 py-4 rounded-full w-full md:w-[350px]">
              Print my story
            </button>
            <button className="font-avenir bg-primary hover:bg-secondary transition text-white font-bold text-[18px] px-10 py-4 rounded-full w-full md:w-[350px]">
              Receive by email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

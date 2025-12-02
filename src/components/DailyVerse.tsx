import { useState, useEffect } from 'react';

interface Verse {
  text: string;
  reference: string;
}

const DailyVerse = () => {
  const verses: Verse[] = [
    { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
    { text: "Trust in the LORD with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1" },
    { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.", reference: "Joshua 1:9" },
    { text: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
    { text: "The LORD is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
    { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
    { text: "But those who hope in the LORD will renew their strength.", reference: "Isaiah 40:31" },
    { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", reference: "1 Corinthians 13:4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const today = new Date().getDate();
    const verseIndex = today % verses.length;
    setCurrentIndex(verseIndex);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % verses.length);
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, verses.length]);

  const nextVerse = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % verses.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevVerse = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + verses.length) % verses.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToVerse = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div 
      className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 right-0 text-[200px] opacity-10 leading-none">
        <i className="fa fa-quote-left"></i>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <i className="fa fa-book text-2xl"></i>
            <h3 className="text-xl font-semibold">Daily Verses</h3>
            <div className="ml-3 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-300' : 'bg-green-300'} animate-pulse`}></div>
              <span className="text-xs text-white/80">{isPaused ? 'Paused' : 'Auto'}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevVerse}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Previous verse"
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
              <i className={`fa ${isPaused ? 'fa-play' : 'fa-pause'}`}></i>
            </button>
            <button
              onClick={nextVerse}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Next verse"
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6 min-h-[120px] md:min-h-[100px]">
            "{verses[currentIndex].text}"
          </p>
          <p className="text-orange-100 text-lg font-semibold">- {verses[currentIndex].reference}</p>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {verses.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVerse(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-white'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to verse ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyVerse;

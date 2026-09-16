import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "console.log('Welcome');";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete && onComplete();
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs animate-matrix-fall"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Array(30).fill(0).map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Central glowing circle */}
      <div className="absolute w-96 h-96 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 space-y-12">
        {/* Glowing bracket animation */}
        <div className="relative">
          <div className="absolute -left-8 top-0 text-6xl text-cyan-400 animate-pulse-glow">&lt;</div>
          <div className="absolute -right-8 top-0 text-6xl text-cyan-400 animate-pulse-glow">/&gt;</div>
          
          {/* Main text */}
          <div className="text-5xl md:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
              {text}
            </span>
            <span className="inline-block w-1 h-12 md:h-16 bg-cyan-400 ml-2 animate-cursor-blink"></span>
          </div>
        </div>

        {/* Circular progress indicator */}
        <div className="relative w-40 h-40 mx-auto">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 70}`}
              strokeDashoffset={`${2 * Math.PI * 70 * (1 - progress / 100)}`}
              className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-cyan-400">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 20px rgba(34, 211, 238, 1);
          }
        }

        @keyframes cursor-blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s step-end infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
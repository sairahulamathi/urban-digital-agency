export default function Particles() {

  return (

    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {[...Array(30)].map((_, index) => (

        <div
          key={index}
          className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />

      ))}

    </div>

  );
}
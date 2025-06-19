export default function StatsSection() {
  return (
    <section className="mb-8">
      <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-yellow-400 rounded-2xl p-6 text-center">
        <div className="mb-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-black text-xl">📊</span>
          </div>
          <p className="text-lg font-semibold text-white">+10,000 personas ya usan Capital</p>
          <p className="text-lg font-semibold text-white">Infinity en Latinoamérica.</p>
        </div>
      </div>
    </section>
  );
};
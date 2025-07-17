export default function SectionHeading({ title }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent mb-6 px-4">
      {title}
    </h2>
  );
} 
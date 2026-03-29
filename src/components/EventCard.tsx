interface EventCardProps {
  title: string;
  date?: string;
  description?: string;
  amount?: string;
  image?: string;
}

export default function EventCard({ title, date, description, amount, image }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border-l-4 border-red-900 overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-3">{title}</h3>
        {date && <p className="text-sm text-blue-900 font-semibold mb-3">{date}</p>}
        {description && (
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        )}
        {amount && (
          <p className="text-lg font-bold text-green-700">Raised: {amount}</p>
        )}
      </div>
    </div>
  );
}

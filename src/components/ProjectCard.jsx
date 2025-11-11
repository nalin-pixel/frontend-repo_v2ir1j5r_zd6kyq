export default function ProjectCard({ title, description, tags = [], link, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:shadow-lg">
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img src={image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

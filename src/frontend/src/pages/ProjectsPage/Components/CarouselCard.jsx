function CarouselCard({ image, date, title }) {
return <div className="flex-none w-[calc(33.33%-16px)] bg-white dark:bg-[#3C3D37] rounded-xl p-4 shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
    <span
        className="inline-block px-4 py-1 mt-3 mb-2 text-sm text-gray-600 dark:text-gray-400 bg-custom-gray dark:bg-[#536066] rounded-full">
        {date}
    </span>
    <h2 className="text-lg text-gray-800 dark:text-gray-100 font-medium">
        {title}
    </h2>
</div>
}

export default CarouselCard;
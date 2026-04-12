function ImageFrame({
  src,
  alt,
  className = '',
  imageClassName = '',
  objectPosition = 'center',
  aspectRatio = '4 / 5',
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-cream/52 p-2.5 sm:rounded-[2.25rem] sm:p-3 ${className}`}
    >
      <div
        className="overflow-hidden rounded-[1.6rem] bg-beige/42 sm:rounded-[1.8rem]"
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt}
          className={`block h-full w-full object-cover ${imageClassName}`}
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

export default ImageFrame
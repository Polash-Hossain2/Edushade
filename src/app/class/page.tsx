export default function TestimonialsGrid() {
  const images = [
    "/Card Container a.png",
   "/Card Container b.png",
   "/Card Container c.png",
   "/Card Container d.png",
    "/Card Container a.png",
    "/Card Container c.png",
    "/Card Container d.png",
  ]

  return (
    <section className="max-w-6xl mx-auto p-4">
      {/* 3 columns: (2) (3) (2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Col 1 -> 2 images */}
        <div className="grid gap-6">
          <img className="w-full rounded-2xl object-cover" src={images[0]} alt="" />
          <img className="w-full rounded-2xl object-cover" src={images[1]} alt="" />
        </div>

        {/* Col 2 -> 3 images */}
        <div className="grid gap-6">
          <img className="w-full rounded-2xl object-cover" src={images[2]} alt="" />
          <img className="w-full rounded-2xl object-cover" src={images[3]} alt="" />
          <img className="w-full rounded-2xl object-cover" src={images[4]} alt="" />
        </div>

        {/* Col 3 -> 2 images */}
        <div className="grid gap-6">
          <img className="w-full rounded-2xl object-cover" src={images[5]} alt="" />
          <img className="w-full rounded-2xl object-cover" src={images[6]} alt="" />
        </div>
      </div>
    </section>
  )
}
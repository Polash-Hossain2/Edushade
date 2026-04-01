<div className="mx-auto max-w-7xl p-4 lg:ml-10 bg-gray-50 rounded-lg">

  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 p-3 items-start gap-6 lg:gap-10 bg-gray-50 rounded-lg">
    
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-800">
      Everything you need for <br />
      your platform
    </h2>

    <p className="text-base sm:text-lg text-gray-700">
      We replaced the messy tech stack with a clean, all-in-one
      engine. Create, market, and sell your courses without the
      3 a.m. tech panic.
    </p>

  </div>

  {/* Slider */}
  <div className="mx-auto overflow-hidden w-full py-10">
    
    <div
      className={`flex ${
        transition ? "transition-transform duration-700 ease-in-out" : ""
      }`}
      style={{ transform: `translateX(-${index * 100}%)` }}
    >

      {cards1.map((card, i) => (
        <div
          key={i}
          className="
            w-full
            sm:w-1/2
            lg:w-1/4
            flex-shrink-0
            px-2
          "
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 text-center">

            <h2 className="text-lg font-semibold flex items-center justify-between">
              {card.title}
              <span className="bg-gray-100 px-2 py-2 rounded-sm text-sm cursor-pointer">
                <FaPlus />
              </span>
            </h2>

            <p className="text-sm text-gray-500 text-start mt-3">
              {card.desc}
            </p>

            <Image
              src={card.img}
              alt={card.title}
              height={200}
              width={300}
              className="w-full object-cover rounded-xl mt-4"
            />

          </div>
        </div>
      ))}
    </div>

  </div>
</div>